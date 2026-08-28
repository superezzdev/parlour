'use client'

import Link from 'next/link'
import { SectionLabel, EditorialHeading } from '@/components/ui/Primitives'
import { useScrollReveal, useHeadingReveal, useImageClipReveal } from '@/hooks/useScrollReveal'
import styles from './SelectedWork.module.css'

export default function SelectedWork() {
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const descRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.1 })
  const img1Ref = useImageClipReveal<HTMLDivElement>({ delay: 0 * 0.08 })
  const img2Ref = useImageClipReveal<HTMLDivElement>({ delay: 1 * 0.08 })
  const img3Ref = useImageClipReveal<HTMLDivElement>({ delay: 2 * 0.08 })
  const img4Ref = useImageClipReveal<HTMLDivElement>({ delay: 3 * 0.08 })
  const footerRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 4 * 0.08 })

  return (
    <section className={`${styles.selectedWork} section`} aria-labelledby="selected-work-heading">
      <div className="container">
        {/* Editorial Section Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <SectionLabel>PORTFOLIO HIGHLIGHTS</SectionLabel>
            <div className="overflow-hidden">
              <EditorialHeading
                ref={headingRef}
                as="h2"
                size="lg"
                id="selected-work-heading"
                className={`${styles.headline} section-heading`}
              >
                Selected works,<br />
                <em>curated from our studio</em>
              </EditorialHeading>
            </div>
          </div>
          <div ref={descRef} className={styles.headerRight}>
            <p className={styles.headerDesc}>
              A glimpse into real bridal transformations, soft-glam party artistry,
              and intricate styling crafted for clients across Sarai Meer and Eastern UP.
            </p>
            <Link href="/gallery" className="btn btn-ghost">
              <span>View full archive (12+ works)</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className={styles.editorialGrid}>
          {/* Item 1: Large Featured Portrait with Overlapping Typography */}
          <div ref={img1Ref} className={`${styles.featureCol} hover-zoom`}>
            <div className={styles.imageCardLarge}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gallery/bridal/bridal-01.jpg"
                alt="Bridal makeup artistry featuring traditional crimson red drape and gold jewelry"
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.overlayGradient} aria-hidden="true" />
              
              {/* Overlapping Typography Badge */}
              <div className={styles.overlapBadge}>
                <span className={styles.lookNumber}>LOOK 01</span>
                <h3 className={styles.lookTitle}>Traditional Bridal Radiance</h3>
                <p className={styles.lookCategory}>Bridal Couture &middot; Sarai Meer</p>
              </div>
            </div>
          </div>

          {/* Item 2 & 3: Staggered Secondary Editorial Column */}
          <div className={styles.secondaryCol}>
            {/* Top: Landscape / Soft Glam Showcase */}
            <div ref={img2Ref} className={`${styles.cardLandscape} hover-zoom`}>
              <div className={styles.imageCardMedium}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/gallery/makeup/makeup-01.jpg"
                  alt="Soft glam party makeup with warm bronze tones and glowing skin"
                  className={styles.image}
                  loading="lazy"
                />
                <div className={styles.overlayGradient} aria-hidden="true" />
                <div className={styles.cardCaption}>
                  <span className={styles.lookNumber}>LOOK 02</span>
                  <h3 className={styles.lookTitleSmall}>Soft Bronzed Glam</h3>
                  <p className={styles.lookCategory}>Occasion Artistry</p>
                </div>
              </div>
            </div>

            {/* Bottom: Dual Detail Row */}
            <div className={styles.detailRow}>
              {/* Left Detail: Mehendi & Bangles */}
              <div ref={img3Ref} className={`${styles.cardDetail} hover-zoom`}>
                <div className={styles.imageCardDetail}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/gallery/details/details-01.jpg"
                    alt="Intricate bridal mehendi patterns and heritage gold bangles"
                    className={styles.image}
                    loading="lazy"
                  />
                  <div className={styles.detailOverlay}>
                    <span className={styles.detailTag}>DETAILS 03</span>
                    <p className={styles.detailTitle}>Mehendi &amp; Bangles</p>
                  </div>
                </div>
              </div>

              {/* Right Detail: Bridal Hair Updo */}
              <div ref={img4Ref} className={`${styles.cardDetail} hover-zoom`}>
                <div className={styles.imageCardDetail}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/gallery/hair/hair-01.jpg"
                    alt="Bridal floral hair updo with romantic curls and baby's breath"
                    className={styles.image}
                    loading="lazy"
                  />
                  <div className={styles.detailOverlay}>
                    <span className={styles.detailTag}>HAIR 04</span>
                    <p className={styles.detailTitle}>Textured Chignon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Gallery CTA */}
        <div ref={footerRef} className={styles.footerAction}>
          <Link href="/gallery" className="btn btn-primary btn-lg">
            <span>View All Work</span>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="4" y1="10" x2="16" y2="10" />
              <polyline points="11,5 16,10 11,15" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export { SelectedWork as GalleryTeaser }
