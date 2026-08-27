'use client'

import { useState, useMemo } from 'react'
import type { GalleryImage } from '@/data/gallery'
import { galleryCategories } from '@/data/gallery'
import GalleryModal from './GalleryModal'

interface GalleryGridProps {
  images: GalleryImage[]
  initialCategory?: string
  showFilters?: boolean
  className?: string
}

export default function GalleryGrid({
  images,
  initialCategory = 'all',
  showFilters = true,
  className = '',
}: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory)
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
    <div className={`gallery-root ${className}`}>
      {/* Category filter pills */}
      {showFilters && (
        <div
          className="filter-pills"
          style={{ justifyContent: 'center', marginBottom: 'clamp(2rem, 4vw, 3.5rem)' }}
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
                className={`filter-pill ${isActive ? 'is-active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            )
          })}
        </div>
      )}

      {/* Masonry gallery grid */}
      <div className="gallery-masonry" data-stagger>
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className="gallery-item hover-zoom"
            onClick={() => setActiveImageIndex(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setActiveImageIndex(index)
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`View image: ${image.alt}`}
            style={{
              borderRadius: 'var(--radius-md)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {image.src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  aspectRatio: image.aspectRatio || '4/5',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            ) : (
              <div
                style={{
                  width: '100%',
                  aspectRatio: image.aspectRatio || '4/5',
                  background:
                    'linear-gradient(135deg, var(--color-champagne) 0%, var(--color-bone) 50%, var(--color-parchment) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 'var(--space-6)',
                  textAlign: 'center',
                }}
              >
                <span className="label" style={{ fontSize: '0.625rem', marginBottom: 'var(--space-2)' }}>
                  {image.category}
                </span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-sm)', color: 'var(--color-espresso)' }}>
                  {image.alt}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox modal */}
      <GalleryModal
        image={activeImage}
        isOpen={activeImageIndex !== null}
        onClose={() => setActiveImageIndex(null)}
        onNext={filteredImages.length > 1 ? handleNext : undefined}
        onPrev={filteredImages.length > 1 ? handlePrev : undefined}
      />
    </div>
  )
}
