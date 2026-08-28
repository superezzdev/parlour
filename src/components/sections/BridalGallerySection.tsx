'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui/Primitives'
import GalleryModal from '@/components/ui/GalleryModal'
import { bridalGalleryShowcase } from '@/data/bridal'
import type { GalleryImage } from '@/data/gallery'
import { useScrollReveal, useHeadingReveal } from '@/hooks/useScrollReveal'
import styles from './BridalGallerySection.module.css'

function BridalGalleryCard({
  item,
  index,
  spanClass,
  onSelect,
}: {
  item: (typeof bridalGalleryShowcase)[0]
  index: number
  spanClass: string
  onSelect: () => void
}) {
  const cardRef = useScrollReveal<HTMLDivElement>({ delay: index * 0.08, y: 35 })

  return (
    <div
      ref={cardRef}
      className={`${styles.imageCard} ${spanClass}`}
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect()
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`View bridal image: ${item.title}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.src}
        alt={item.alt}
        className={styles.imageElement}
        loading="lazy"
        style={{ aspectRatio: item.aspectRatio }}
      />

      <div className={styles.overlay}>
        <span className={styles.tag}>{item.category}</span>
        <h3 className={styles.itemTitle}>{item.title}</h3>
      </div>

      <div className={styles.expandHint} aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 3 21 3 21 9" />
          <polyline points="9 21 3 21 3 15" />
          <line x1="21" y1="3" x2="14" y2="10" />
          <line x1="3" y1="21" x2="10" y2="14" />
        </svg>
      </div>
    </div>
  )
}

export default function BridalGallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const subtitleRef = useScrollReveal<HTMLParagraphElement>({ y: 30, delay: 0.1 })

  // Map bridal items to GalleryImage format for modal compatibility
  const modalImages: GalleryImage[] = bridalGalleryShowcase.map((item) => ({
    id: item.id,
    src: item.src,
    alt: item.alt,
    title: item.title,
    category: 'bridal',
    aspectRatio: item.aspectRatio,
  }))

  const activeImage = activeIndex !== null ? modalImages[activeIndex] : null

  const handleNext = () => {
    if (activeIndex === null) return
    setActiveIndex((activeIndex + 1) % modalImages.length)
  }

  const handlePrev = () => {
    if (activeIndex === null) return
    setActiveIndex((activeIndex - 1 + modalImages.length) % modalImages.length)
  }

  // Determine span class based on index for asymmetric composition
  const getSpanClass = (index: number) => {
    if (index === 0) return styles.cardLarge
    if (index === 1) return styles.cardMedium
    if (index === 2 || index === 3 || index === 4) return styles.cardThird
    return styles.cardWide
  }

  return (
    <section className={styles.gallerySection} aria-labelledby="bridal-gallery-heading">
      <div className="container">
        {/* Header with Title and Link to Main Gallery */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <SectionLabel>PORTFOLIO &amp; DETAILS</SectionLabel>
            <div className="overflow-hidden">
              <h2 id="bridal-gallery-heading" ref={headingRef} className={`${styles.title} section-heading`}>
                Portraits, Textures &amp; Adornment.
              </h2>
            </div>
            <p ref={subtitleRef} className={styles.subtitle}>
              Explore our curated bridal archive — from regal crimson portraits and micro-shimmer eye work to couture chignons and heirloom jewellery placement.
            </p>
          </div>

          <Link href="/gallery" className="btn btn-primary">
            <span>VIEW FULL ARCHIVE</span>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="4" y1="10" x2="16" y2="10" />
              <polyline points="11,5 16,10 11,15" />
            </svg>
          </Link>
        </div>

        {/* Mosaic Grid */}
        <div className={styles.mosaicGrid}>
          {bridalGalleryShowcase.map((item, index) => (
            <BridalGalleryCard
              key={item.id}
              item={item}
              index={index}
              spanClass={getSpanClass(index)}
              onSelect={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Full-Screen Lightbox */}
      <GalleryModal
        image={activeImage}
        isOpen={activeIndex !== null}
        onClose={() => setActiveIndex(null)}
        onNext={modalImages.length > 1 ? handleNext : undefined}
        onPrev={modalImages.length > 1 ? handlePrev : undefined}
      />
    </section>
  )
}
