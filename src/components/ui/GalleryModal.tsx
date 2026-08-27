'use client'

import { useEffect, useRef } from 'react'
import type { GalleryImage } from '@/data/gallery'

interface GalleryModalProps {
  image: GalleryImage | null
  isOpen: boolean
  onClose: () => void
  onNext?: () => void
  onPrev?: () => void
}

export default function GalleryModal({
  image,
  isOpen,
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
      className={`lightbox-overlay ${isOpen ? 'is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
      onClick={onClose}
    >
      <button
        ref={closeButtonRef}
        onClick={onClose}
        aria-label="Close image viewer"
        style={{
          position: 'absolute',
          top: 'var(--space-6)',
          right: 'var(--space-6)',
          background: 'none',
          border: 'none',
          color: 'var(--color-ivory)',
          cursor: 'pointer',
          padding: 'var(--space-2)',
          zIndex: 10,
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          aria-label="Previous image"
          style={{
            position: 'absolute',
            left: 'var(--space-6)',
            background: 'rgba(30, 18, 8, 0.5)',
            border: '1px solid rgba(250, 247, 242, 0.2)',
            color: 'var(--color-ivory)',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
          }}
        >
          ←
        </button>
      )}

      <div
        className="lightbox-image-inner"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '90vw',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-4)',
        }}
      >
        {image.src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image.src}
            alt={image.alt}
            style={{
              maxHeight: '75vh',
              maxWidth: '85vw',
              objectFit: 'contain',
              borderRadius: 'var(--radius-sm)',
            }}
          />
        ) : (
          <div
            style={{
              width: '600px',
              maxWidth: '85vw',
              height: '400px',
              background: 'linear-gradient(135deg, var(--color-espresso), var(--color-coffee))',
              border: '1px solid rgba(250, 247, 242, 0.2)',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-ivory)',
              padding: 'var(--space-8)',
              textAlign: 'center',
            }}
          >
            <div>
              <p className="label" style={{ justifyContent: 'center', color: 'var(--color-blush)' }}>
                {image.category}
              </p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', marginTop: 'var(--space-4)' }}>
                {image.alt}
              </p>
            </div>
          </div>
        )}

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-sm)',
            color: 'rgba(250, 247, 242, 0.8)',
            textAlign: 'center',
            margin: 0,
          }}
        >
          {image.alt}
        </p>
      </div>

      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          aria-label="Next image"
          style={{
            position: 'absolute',
            right: 'var(--space-6)',
            background: 'rgba(30, 18, 8, 0.5)',
            border: '1px solid rgba(250, 247, 242, 0.2)',
            color: 'var(--color-ivory)',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
          }}
        >
          →
        </button>
      )}
    </div>
  )
}
