'use client'

import { useState } from 'react'
import { useScrollReveal, useImageClipReveal } from '@/hooks/useScrollReveal'
import styles from './EditorialMoment.module.css'

interface GalleryStripItem {
  id: string
  src: string
  alt: string
}

const STRIP_IMAGES: GalleryStripItem[] = [
  {
    id: 'strip-1',
    src: '/images/hero/editorial-moment.jpg',
    alt: 'Champagne gold bridal portrait — Glamorous studio artistry',
  },
  {
    id: 'strip-2',
    src: '/images/gallery/bridal/bridal-02.jpg',
    alt: 'Radiant red bridal makeup and eye artistry with kundan tikka',
  },
  {
    id: 'strip-3',
    src: '/images/gallery/bridal/bridal-01.jpg',
    alt: 'Classic Indian bride in deep crimson lehenga',
  },
  {
    id: 'strip-4',
    src: '/images/gallery/details/details-01.jpg',
    alt: 'Intricate bridal mehendi and heritage bangles detail',
  },
  {
    id: 'strip-5',
    src: '/images/gallery/hair/hair-01.jpg',
    alt: 'Floral romance chignon and bridal updo styling',
  },
  {
    id: 'strip-6',
    src: '/images/bridal/bridal-portrait.jpg',
    alt: 'Royal glowing bridal beauty portrait',
  },
]

interface EditorialMomentProps {
  imageSrc?: string
  imageAlt?: string
  tag?: string
  headline?: string
}

export default function EditorialMoment({
  imageSrc = '/images/hero/editorial-moment.jpg',
  imageAlt = 'Glamorous editorial beauty moment — bridal beauty artistry in Sarai Meer',
  tag = 'THE ART OF REFINEMENT',
  headline = 'Every look composed with patient precision and quiet intention.',
}: EditorialMomentProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const mediaRef = useImageClipReveal<HTMLDivElement>()
  const badgeRef = useScrollReveal<HTMLDivElement>({ y: 40, delay: 0.15 })

  const getFlexValue = (index: number) => {
    if (hoveredIndex === null) {
      return index === 0 ? 3 : 1
    }
    return hoveredIndex === index ? 3.5 : 0.7
  }

  return (
    <section className={styles.momentSection} aria-label="Editorial beauty showcase">
      {/* Desktop Horizontal Accordion Gallery Container */}
      <div ref={mediaRef} className={styles.accordionContainer} onMouseLeave={() => setHoveredIndex(null)}>
        {STRIP_IMAGES.map((strip, index) => (
          <div
            key={strip.id}
            className={styles.strip}
            style={{ flex: getFlexValue(index) }}
            onMouseEnter={() => setHoveredIndex(index)}
            onFocus={() => setHoveredIndex(index)}
            onBlur={() => setHoveredIndex(null)}
            tabIndex={0}
            role="img"
            aria-label={strip.alt}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={strip.src}
              alt={strip.alt}
              className={styles.stripImage}
              loading="lazy"
            />
          </div>
        ))}

        {/* Dark overlay on entire strip container */}
        <div className={styles.stripOverlay} aria-hidden="true" />
      </div>

      {/* Mobile Fallback: Single Background Image (<768px) */}
      <div className={styles.mobileMediaContainer} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={imageAlt}
          className={styles.mobileImage}
          loading="lazy"
        />
        <div className={styles.mobileOverlay} />
      </div>

      {/* Editorial Floating Text Overlay */}
      <div className={styles.contentContainer}>
        <div ref={badgeRef} className={styles.minimalBadge}>
          <span className={styles.tag}>{tag}</span>
          <p className={styles.headline}>&ldquo;{headline}&rdquo;</p>
        </div>
      </div>
    </section>
  )
}
