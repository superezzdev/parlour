'use client'

import Link from 'next/link'
import { SectionLabel, EditorialHeading } from '@/components/ui/Primitives'
import { useScrollReveal, useHeadingReveal, useImageClipReveal } from '@/hooks/useScrollReveal'
import styles from './BridalTeaser.module.css'

export default function BridalTeaser() {
  const imageRef = useImageClipReveal<HTMLDivElement>()
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const bodyRef = useScrollReveal<HTMLParagraphElement>({ y: 30, delay: 0.15 })
  const highlightsRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.25 })
  const ctaRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.35 })

  return (
    <section className={styles.bridalTeaser} aria-labelledby="bridal-teaser-heading">
      {/* Full-bleed background media with clip-path reveal */}
      <div ref={imageRef} className={styles.media} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/bridal/bridal-hero.jpg"
          alt="Glamorous bridal makeup and beauty artistry in Sarai Meer"
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.overlay} />
      </div>

      {/* Commercial Content Grid */}
      <div className={`container ${styles.content}`}>
        <div className={styles.inner}>
          <div className={styles.labelWrapper}>
            <SectionLabel>THE BRIDAL SUITE</SectionLabel>
          </div>

          <div className="overflow-hidden">
            <EditorialHeading
              ref={headingRef}
              as="h2"
              size="xl"
              id="bridal-teaser-heading"
              className={`${styles.headline} section-heading`}
            >
              YOUR DAY.<br />
              YOUR LOOK.<br />
              YOUR MOMENT.
            </EditorialHeading>
          </div>

          <p ref={bodyRef} className={`${styles.body} lead`}>
            Every bride deserves to look and feel her best. We create personalized bridal looks
            with patient precision, long-lasting formulas, and careful attention to your wedding
            outfits, jewelry, and personal style.
          </p>

          {/* Bridal Feature Highlights */}
          <div ref={highlightsRef} className={styles.highlights} aria-label="Bridal highlights">
            <div className={styles.highlightItem}>
              <span className={styles.highlightDot} />
              <span>Waterproof &amp; High-Definition Finish</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightDot} />
              <span>Pre-Bridal Trials &amp; Consultation</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightDot} />
              <span>Complete Dupatta &amp; Saree Draping</span>
            </div>
          </div>

          <div ref={ctaRef} className={styles.ctaWrapper}>
            <Link href="/bridal" className={`btn btn-primary btn-lg ${styles.cta}`}>
              <span>Explore Bridal Packages</span>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="4" y1="10" x2="16" y2="10" />
                <polyline points="11,5 16,10 11,15" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
