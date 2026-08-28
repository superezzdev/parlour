'use client'

import { SectionLabel } from '@/components/ui/Primitives'
import { useScrollReveal, useHeadingReveal, useImageClipReveal } from '@/hooks/useScrollReveal'
import styles from './AboutArtistry.module.css'

export default function AboutArtistry() {
  const visualRef = useImageClipReveal<HTMLDivElement>()
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const bodyTextRef = useScrollReveal<HTMLParagraphElement>({ y: 30, delay: 0.15 })
  const craftRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.25 })
  const artistRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.35 })

  return (
    <section className={styles.artistry} aria-labelledby="artistry-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* Dual Visual Showcase */}
          <div ref={visualRef} className={styles.dualVisualGrid}>
            <div className={styles.primaryCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gallery/makeup/makeup-02.jpg"
                alt="Precision eye artistry and editorial makeup definition"
                className={styles.image}
                loading="lazy"
              />
            </div>
            <div className={styles.secondaryCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/gallery/details/details-01.jpg"
                alt="Intricate bridal jewellery and traditional adornment craftsmanship"
                className={styles.image}
                loading="lazy"
              />
            </div>
            <div className={styles.captionBadge}>
              CLOSE-UP ARTISTRY
            </div>
          </div>

          {/* Text & Craft Overview */}
          <div className={styles.textContent}>
            <SectionLabel>02 / THE ARTISTRY</SectionLabel>

            <div className="overflow-hidden">
              <h2 id="artistry-heading" ref={headingRef} className={`${styles.heading} section-heading`}>
                Mastery in every stroke.
                <em>Crafted with intention.</em>
              </h2>
            </div>

            <p ref={bodyTextRef} className={styles.bodyText}>
              Our techniques are meticulously tailored for Indian ceremonies, festive lighting, high-definition
              cameras, and long-wear endurance. From seamless color transitions to delicate dupatta draping,
              every element is balanced to perfection.
            </p>

            <div ref={craftRef} className={styles.craftList}>
              <div className={styles.craftItem}>
                <svg className={styles.craftIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
                <div className={styles.craftText}>
                  <strong className={styles.craftTitle}>HD Base &amp; Undertone Precision</strong>
                  <span className={styles.craftDesc}>Skin-matched micro-pigments formulated for camera-ready clarity without heaviness.</span>
                </div>
              </div>

              <div className={styles.craftItem}>
                <svg className={styles.craftIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
                <div className={styles.craftText}>
                  <strong className={styles.craftTitle}>Light Sculpting &amp; Dimension</strong>
                  <span className={styles.craftDesc}>Architectural highlighting and contouring that catches warm ceremony lights effortlessly.</span>
                </div>
              </div>

              <div className={styles.craftItem}>
                <svg className={styles.craftIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                </svg>
                <div className={styles.craftText}>
                  <strong className={styles.craftTitle}>Couture Hair &amp; Adornment Framing</strong>
                  <span className={styles.craftDesc}>Structural updos, floral settings, matha patti pinning, and veil weight distribution.</span>
                </div>
              </div>
            </div>

            {/* Respectful Lead Artist Profile Box */}
            <div ref={artistRef} className={styles.artistPlaceholderCard}>
              <span className={styles.artistTag}>LEAD ARTISTRY DIRECTIVE</span>
              <p className={styles.artistQuote}>
                &ldquo;Our vision is rooted in giving every bride and client a sense of royal poise, grounded in comfort and authenticity.&rdquo;
              </p>
              <span className={styles.artistName}>Sabreen Siddiqui · Founder &amp; Lead Artist</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
