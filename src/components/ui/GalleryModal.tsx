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
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  // Keyboard navigation & body scroll locking
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus()
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault()
          onClose()
        } else if (e.key === 'ArrowRight' && onNext) {
          e.preventDefault()
          onNext()
        } else if (e.key === 'ArrowLeft' && onPrev) {
          e.preventDefault()
          onPrev()
        }
      }

      window.addEventListener('keydown', handleKeyDown)
      return () => {
        document.body.style.overflow = originalOverflow
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [isOpen, onClose, onNext, onPrev])

  // Touch handlers for mobile swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchEndX.current = null
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return
    const diffX = touchStartX.current - touchEndX.current
    const minSwipeDistance = 45 // 45px threshold for deliberate swipe

    if (diffX > minSwipeDistance && onNext) {
      onNext() // Swiped left -> next image
    } else if (diffX < -minSwipeDistance && onPrev) {
      onPrev() // Swiped right -> prev image
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  if (!isOpen || !image) return null

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label={`Lightbox view: ${image.title || image.alt}`}
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Header Bar with Count and Close Button */}
      <div className={styles.topBar}>
        <div className={styles.counter}>
          {currentIndex && totalCount ? (
            <span>
              {currentIndex.toString().padStart(2, '0')} / {totalCount.toString().padStart(2, '0')}
            </span>
          ) : (
            <span>ARCHIVE VIEW</span>
          )}
        </div>

        {/* Close Button: (×, DM Sans, 1.5rem, hover: gold) */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close image lightbox"
          className={styles.closeButton}
        >
          &times;
        </button>
      </div>

      {/* Left / Previous Arrow */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          aria-label="Previous image"
          className={`${styles.navBtn} ${styles.prevBtn}`}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}

      {/* Center Image Container */}
      <div
        className={styles.imageContainer}
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image.src}
          alt={image.alt}
          className={styles.mainImage}
        />

        {/* Bottom Bar: Title (Cormorant 400 1.25rem ivory) + Category Badge */}
        <div className={styles.bottomBar}>
          <span className={styles.categoryBadge}>{image.category}</span>
          <h2 className={styles.imageTitle}>{image.title || image.alt}</h2>
          {image.description && (
            <p className={styles.imageDescription}>{image.description}</p>
          )}
        </div>
      </div>

      {/* Right / Next Arrow */}
      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          aria-label="Next image"
          className={`${styles.navBtn} ${styles.nextBtn}`}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}
    </div>
  )
}
