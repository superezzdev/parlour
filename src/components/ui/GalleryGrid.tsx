'use client'

import { useState, useMemo } from 'react'
import type { GalleryImage, GalleryCategory } from '@/data/gallery'
import { galleryCategories } from '@/data/gallery'
import GalleryModal from './GalleryModal'
import styles from './GalleryGrid.module.css'

interface GalleryGridProps {
  images: GalleryImage[]
  initialCategory?: GalleryCategory
  showFilters?: boolean
  className?: string
}

export default function GalleryGrid({
  images,
  initialCategory = 'all',
  showFilters = true,
  className = '',
}: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>(initialCategory)
  const [displayedCategory, setDisplayedCategory] = useState<GalleryCategory>(initialCategory)
  const [isFading, setIsFading] = useState<boolean>(false)
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  const handleCategoryChange = (category: GalleryCategory) => {
    if (category === activeCategory) return
    setActiveCategory(category)
    setIsFading(true)
    setTimeout(() => {
      setDisplayedCategory(category)
      setActiveImageIndex(null)
      setIsFading(false)
    }, 180)
  }

  const filteredImages = useMemo(() => {
    if (displayedCategory === 'all') return images
    return images.filter((img) => img.category === displayedCategory)
  }, [images, displayedCategory])

  const activeImage = activeImageIndex !== null ? filteredImages[activeImageIndex] : null

  const handleNext = () => {
    if (activeImageIndex === null) return
    setActiveImageIndex((activeImageIndex + 1) % filteredImages.length)
  }

  const handlePrev = () => {
    if (activeImageIndex === null) return
    setActiveImageIndex((activeImageIndex - 1 + filteredImages.length) % filteredImages.length)
  }

  return (
    <section className={`${styles.gallerySection} ${className}`} aria-label="Gallery Portfolio">
      {/* 1. FILTER BAR (sticky top-[navbar height], bg-surface/90, backdrop-blur-md, border-b border-ghost, py-4) */}
      {showFilters && (
        <div className={styles.stickyFilterBar}>
          <div className={styles.filterScrollWrapper}>
            <div
              className={styles.filterList}
              role="tablist"
              aria-label="Gallery category filters"
            >
              {galleryCategories.map((cat) => {
                const isActive = activeCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    role="tab"
                    id={`gallery-filter-${cat.id}`}
                    aria-selected={isActive}
                    aria-controls="gallery-masonry-grid"
                    className={`${styles.filterBtn} ${isActive ? styles.filterBtnActive : ''}`}
                    onClick={() => handleCategoryChange(cat.id)}
                  >
                    <span>{cat.label}</span>
                    <span className={styles.filterBtnUnderline} aria-hidden="true" />
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* 2. MASONRY GRID & 3. HOVER EFFECT */}
      <div className={`container ${styles.gridContainer}`}>
        {filteredImages.length > 0 ? (
          <div
            id="gallery-masonry-grid"
            className={`${styles.masonryGrid} ${isFading ? styles.fading : ''}`}
            role="region"
            aria-live="polite"
          >
            {filteredImages.map((image, index) => {
              // Alternate image heights:
              // index % 3 === 0 -> h-80 (320px)
              // index % 3 === 1 -> h-64 (256px)
              // index % 3 === 2 -> h-96 (384px)
              const heightClass =
                index % 3 === 0
                  ? styles.height80
                  : index % 3 === 1
                  ? styles.height64
                  : styles.height96

              return (
                <div
                  key={image.id}
                  className={`${styles.masonryItem} ${heightClass}`}
                  onClick={() => setActiveImageIndex(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActiveImageIndex(index)
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Open photo lightbox: ${image.title || image.alt}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={index < 4 ? 'eager' : 'lazy'}
                    className={styles.image}
                  />

                  {/* 3. HOVER EFFECT ON EACH GALLERY ITEM */}
                  <div className={styles.overlay} aria-hidden="true">
                    <div className={styles.overlayTop}>
                      <span className={styles.viewText}>
                        View &rarr;
                      </span>
                    </div>

                    <div className={styles.overlayBottom}>
                      <span className={styles.categoryBadge}>{image.category}</span>
                      <h3 className={styles.itemTitle}>{image.title || image.alt}</h3>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p className={styles.emptyText}>No artworks found in this category.</p>
          </div>
        )}
      </div>

      {/* 5. LIGHTBOX MODAL */}
      <GalleryModal
        image={activeImage}
        isOpen={activeImageIndex !== null}
        currentIndex={activeImageIndex !== null ? activeImageIndex + 1 : undefined}
        totalCount={filteredImages.length}
        onClose={() => setActiveImageIndex(null)}
        onNext={filteredImages.length > 1 ? handleNext : undefined}
        onPrev={filteredImages.length > 1 ? handlePrev : undefined}
      />
    </section>
  )
}
