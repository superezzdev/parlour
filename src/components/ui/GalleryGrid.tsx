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
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>(initialCategory)
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null)

  const filteredImages = useMemo(() => {
    if (selectedCategory === 'all') return images
    return images.filter((img) => img.category === selectedCategory)
  }, [images, selectedCategory])

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
    <div className={`${styles.galleryRoot} ${className}`}>
      {/* Category filter pills */}
      {showFilters && (
        <div className={styles.filterContainer} data-reveal="fade">
          <div
            className={styles.filterList}
            role="tablist"
            aria-label="Gallery category filters"
          >
            {galleryCategories.map((cat) => {
              const isActive = selectedCategory === cat.id
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.filterBtn} ${isActive ? styles.filterBtnActive : ''}`}
                  onClick={() => {
                    setSelectedCategory(cat.id)
                    setActiveImageIndex(null)
                  }}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Asymmetric Masonry gallery grid */}
      <div className="container">
        {filteredImages.length > 0 ? (
          <div className={styles.masonryGrid} data-stagger>
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={styles.gridItem}
                onClick={() => setActiveImageIndex(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setActiveImageIndex(index)
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View full resolution: ${image.title || image.alt}`}
              >
                <div className={styles.imageWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className={styles.image}
                    style={{ aspectRatio: image.aspectRatio || '4/5' }}
                  />

                  {/* Hover Overlay Metadata */}
                  <div className={styles.overlay}>
                    <span className={styles.categoryTag}>{image.category}</span>
                    <h3 className={styles.itemTitle}>{image.title || image.alt}</h3>
                    {image.description && (
                      <p className={styles.itemDesc}>{image.description}</p>
                    )}

                    <div className={styles.expandIcon} aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 3 21 3 21 9" />
                        <polyline points="9 21 3 21 3 15" />
                        <line x1="21" y1="3" x2="14" y2="10" />
                        <line x1="3" y1="21" x2="10" y2="14" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p className={styles.emptyText}>No artworks found in this category.</p>
          </div>
        )}
      </div>

      {/* Lightbox modal with counter and arrow keys */}
      <GalleryModal
        image={activeImage}
        isOpen={activeImageIndex !== null}
        currentIndex={activeImageIndex !== null ? activeImageIndex + 1 : undefined}
        totalCount={filteredImages.length}
        onClose={() => setActiveImageIndex(null)}
        onNext={filteredImages.length > 1 ? handleNext : undefined}
        onPrev={filteredImages.length > 1 ? handlePrev : undefined}
      />
    </div>
  )
}
