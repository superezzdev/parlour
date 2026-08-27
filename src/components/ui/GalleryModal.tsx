'use client'

import { useEffect, useRef } from 'react'
import type { GalleryImage } from '@/data/gallery'
import styles from './GalleryModal.module.css'

interface GalleryModalProps {
  image: GalleryImage | null
  isOpen: boolean
  currentIndex?: number
  totalCount?: number
  onClose: () => void
  onNext?: () => void
  onPrev?: () => void
}

export default function GalleryModal({
  image,
  isOpen,
  currentIndex,
  totalCount,
  onClose,
  onNext,
  onPrev,
}: GalleryModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus()
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight' && onNext) onNext()
      if (e.key === 'ArrowLeft' && onPrev) onPrev()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose, onNext, onPrev])

  if (!isOpen || !image) return null

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      onClick={onClose}
    >
      {/* Top Header Bar with Count and Close */}
      <div className={styles.topBar}>
        <div className={styles.counter}>
          {currentIndex && totalCount ? (
            <span>
              {currentIndex.toString().padStart(2, '0')} / {totalCount.toString().padStart(2, '0')}
            </span>
          ) : (
            <span>EXHIBITION VIEW</span>
          )}
        </div>

        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close image viewer"
          className={styles.closeButton}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Previous Button */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          aria-label="Previous artwork"
          className={`${styles.navBtn} ${styles.prevBtn}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </button>
      )}

      {/* Image and Metadata Display */}
      <div
        className={styles.imageContainer}
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt={image.alt}
          className={styles.activeImage}
        />

        <div className={styles.captionBlock}>
          <span className={styles.categoryTag}>{image.category}</span>
          <h2 className={styles.imageTitle}>{image.title || image.alt}</h2>
          {image.description && (
            <p className={styles.imageDesc}>{image.description}</p>
          )}
        </div>
      </div>

      {/* Next Button */}
      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          aria-label="Next artwork"
          className={`${styles.navBtn} ${styles.nextBtn}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      )}
    </div>
  )
}
