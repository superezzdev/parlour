'use client'

import { useState, useRef, useCallback } from 'react'
import { useScrollReveal, useImageClipReveal } from '@/hooks/useScrollReveal'
import styles from './EditorialMoment.module.css'

interface GalleryStripItem {
  id: string
  src: string
  alt: string
  title: string
  subtitle: string
}

const STRIP_IMAGES: GalleryStripItem[] = [
  {
    id: 'strip-1',
    src: '/images/gallery/hair/hair-01.jpg',
    alt: 'Floral romance chignon and bridal updo styling',
    title: 'Sculpted Grace',
    subtitle: 'Floral Romance Chignon Coiffure',
  },
  {
    id: 'strip-2',
    src: '/images/gallery/bridal/bridal-02.jpg',
    alt: 'Radiant red bridal makeup and eye artistry with kundan tikka',
    title: 'Radiant Expression',
    subtitle: 'Kundan Tikka & Eye Artistry',
  },
  {
    id: 'strip-3',
    src: '/images/gallery/bridal/bridal-01.jpg',
    alt: 'Classic Indian bride in deep crimson lehenga',
    title: 'Timeless Heritage',
    subtitle: 'Classic Crimson Bridal Drape',
  },
  {
    id: 'strip-4',
    src: '/images/gallery/details/details-01.jpg',
    alt: 'Intricate bridal mehendi and heritage bangles detail',
    title: 'Sacred Details',
    subtitle: 'Heritage Bangles & Intricate Mehendi',
  },
  {
    id: 'strip-5',
    src: '/images/hero/editorial-moment.jpg',
    alt: 'Champagne gold bridal portrait — Glamorous studio artistry',
    title: 'Art of Refinement',
    subtitle: 'Champagne Gold Bridal Artistry',
  },
  {
    id: 'strip-6',
    src: '/images/bridal/bridal-portrait.jpg',
    alt: 'Royal glowing bridal beauty portrait',
    title: 'Royal Presence',
    subtitle: 'Luminous Bridal Grandeur',
  },
]

interface EditorialMomentProps {
  imageSrc?: string
  imageAlt?: string
  tag?: string
  headline?: string
}

export default function EditorialMoment({
  tag = 'THE ART OF REFINEMENT',
  headline = 'Every look composed with patient precision and quiet intention.',
}: EditorialMomentProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const touchStartXRef = useRef<number | null>(null)
  const touchStartYRef = useRef<number | null>(null)

  const mediaRef = useImageClipReveal<HTMLDivElement>()
  const badgeRef = useScrollReveal<HTMLDivElement>({ y: 40, delay: 0.15 })

  const total = STRIP_IMAGES.length

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total)
  }, [total])

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total)
  }, [total])

  // Touch swipe support with vertical scroll protection
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX
    touchStartYRef.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return

    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current
    const deltaY = e.changedTouches[0].clientY - touchStartYRef.current

    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
      if (deltaX < 0) {
        goToNext()
      } else {
        goToPrev()
      }
    }

    touchStartXRef.current = null
    touchStartYRef.current = null
  }

  const getFlexValue = (index: number) => {
    if (hoveredIndex === null) {
      return index === 0 ? 3 : 1
    }
    return hoveredIndex === index ? 3.5 : 0.7
  }

  const currentLook = STRIP_IMAGES[activeIndex]

  return (
    <section
      className={styles.momentSection}
      aria-label="Editorial beauty showcase"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ─── DESKTOP & TABLET: Horizontal Accordion Gallery (>= 768px) ─── */}
      <div
        ref={mediaRef}
        className={styles.accordionContainer}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {STRIP_IMAGES.map((strip, index) => (
          <div
            key={strip.id}
            className={`${styles.strip} ${hoveredIndex === index ? styles.stripHovered : ''}`}
            style={{ flex: getFlexValue(index) }}
            onMouseEnter={() => setHoveredIndex(index)}
            onFocus={() => setHoveredIndex(index)}
            onClick={() => {
              setHoveredIndex(index)
              setActiveIndex(index)
            }}
            onBlur={() => setHoveredIndex(null)}
            tabIndex={0}
            role="button"
            aria-label={`Look ${index + 1}: ${strip.title} — ${strip.alt}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={strip.src}
              alt={strip.alt}
              className={styles.stripImage}
              loading="lazy"
            />
            <div className={styles.individualStripOverlay} />
            <div className={styles.stripCaptionBadge}>
              <span className={styles.stripNumber}>0{index + 1}</span>
              <span className={styles.stripTitle}>{strip.title}</span>
            </div>
          </div>
        ))}

        {/* Global gradient overlay for desktop typography */}
        <div className={styles.stripOverlay} aria-hidden="true" />
      </div>

      {/* ─── MOBILE: Full-Bleed Interactive Gallery (< 768px) ─── */}
      <div className={styles.mobileMediaContainer}>
        {/* Mobile Slides Stack with Smooth Transitions */}
        <div className={styles.mobileSlideStack} aria-live="polite">
          {STRIP_IMAGES.map((strip, index) => (
            <div
              key={`mob-${strip.id}`}
              className={`${styles.mobileSlide} ${activeIndex === index ? styles.mobileSlideActive : ''}`}
              aria-hidden={activeIndex !== index}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={strip.src}
                alt={strip.alt}
                className={styles.mobileImage}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
          <div className={styles.mobileOverlay} aria-hidden="true" />
        </div>

        {/* Top Header Bar on Mobile */}
        <div className={styles.mobileTopBar}>
          <span className={styles.mobileTag}>{tag}</span>
          <span className={styles.mobileCounter}>
            {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>

        {/* Bottom Interactive Area */}
        <div className={styles.mobileBottomArea}>
          {/* Editorial Headline & Current Look Caption */}
          <div className={styles.mobileTextGroup}>
            <p className={styles.headline}>&ldquo;{headline}&rdquo;</p>
            <div className={styles.mobileCurrentMeta}>
              <span className={styles.mobileLookDot} aria-hidden="true" />
              <span className={styles.mobileLookSubtitle}>{currentLook.subtitle}</span>
            </div>
          </div>

          {/* Interactive Miniature Strip Selector (Desktop Accordion Echo) */}
          <div
            className={styles.mobileStripSelector}
            role="tablist"
            aria-label="Select look thumbnail"
          >
            {STRIP_IMAGES.map((strip, index) => {
              const isSelected = activeIndex === index
              return (
                <button
                  key={`thumb-${strip.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-label={`View look ${index + 1}: ${strip.title}`}
                  onClick={() => setActiveIndex(index)}
                  className={`${styles.mobileThumbBtn} ${isSelected ? styles.mobileThumbActive : ''}`}
                  style={{ flex: isSelected ? 2.5 : 1 }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={strip.src}
                    alt=""
                    className={styles.mobileThumbImg}
                    loading="lazy"
                  />
                  {isSelected && <span className={styles.thumbGoldIndicator} />}
                </button>
              )
            })}
          </div>

          {/* Navigation Controls Row */}
          <div className={styles.mobileNavRow}>
            <div className={styles.mobileNavPills}>
              {STRIP_IMAGES.map((_, idx) => (
                <button
                  key={`pill-${idx}`}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`${styles.navPill} ${activeIndex === idx ? styles.navPillActive : ''}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className={styles.mobileNavButtons}>
              <button
                type="button"
                className={styles.mobileArrowBtn}
                onClick={goToPrev}
                aria-label="Previous look"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                className={styles.mobileArrowBtn}
                onClick={goToNext}
                aria-label="Next look"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ─── DESKTOP FLOATING TEXT OVERLAY (>= 768px) ─── */}
      <div className={styles.desktopContentContainer}>
        <div ref={badgeRef} className={styles.minimalBadge}>
          <span className={styles.tag}>{tag}</span>
          <p className={styles.headline}>&ldquo;{headline}&rdquo;</p>
        </div>
      </div>
    </section>
  )
}

