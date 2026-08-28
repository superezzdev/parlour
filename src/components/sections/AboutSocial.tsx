'use client'

import { SectionLabel } from '@/components/ui/Primitives'
import { useScrollReveal, useHeadingReveal } from '@/hooks/useScrollReveal'
import styles from './AboutSocial.module.css'

export default function AboutSocial() {
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const subTextRef = useScrollReveal<HTMLParagraphElement>({ y: 30, delay: 0.1 })
  const accountsRef = useScrollReveal<HTMLDivElement>({ y: 35, delay: 0.2 })
  const feedRef = useScrollReveal<HTMLDivElement>({ y: 35, delay: 0.3 })
  const ctaRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.4 })

  const accounts = [
    {
      name: 'SABREEN SIDDIQUI',
      handle: '@glamorouse_makeup_beauty',
      url: 'https://www.instagram.com/glamorouse_makeup_beauty',
      bio: 'Lead Bridal Artist & Creative Director. Behind-the-scenes transformations, bridal preparation, and signature styling in Sarai Meer.',
      tag: 'OFFICIAL INSTAGRAM',
    },
    {
      name: 'GLAMOROUS MAKEUP & BEAUTI',
      handle: '@makeup_by_sabreen_786',
      url: 'https://www.instagram.com/makeup_by_sabreen_786',
      bio: 'Studio showcase featuring client portraits, occasion glamour, skincare rituals, and daily artistry updates.',
      tag: 'STUDIO PORTFOLIO',
    },
  ]

  const snapshots = [
    {
      src: '/images/gallery/bridal/bridal-02.jpg',
      alt: 'Gilded bridal makeup eye artistry and matha patti setting',
    },
    {
      src: '/images/gallery/makeup/makeup-01.jpg',
      alt: 'Luminous bronze evening occasion makeup',
    },
    {
      src: '/images/gallery/hair/hair-01.jpg',
      alt: 'Romantic bridal floral chignon updo',
    },
    {
      src: '/images/gallery/beauty/beauty-01.jpg',
      alt: 'Glass skin facial glow and minimalist brow styling',
    },
  ]

  return (
    <section className={styles.socialSection} aria-labelledby="social-heading">
      <div className="container">
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <SectionLabel>THE DIGITAL ATELIER</SectionLabel>
          <div className="overflow-hidden">
            <h2 id="social-heading" ref={headingRef} className={`${styles.heading} section-heading`}>
              The living portfolio.
              <em>Follow the journey on Instagram.</em>
            </h2>
          </div>
          <p ref={subTextRef} className={styles.subText}>
            Join our community to explore daily bridal transformations, client stories,
            and an unfiltered view into our creative process in Sarai Meer.
          </p>
        </div>

        {/* Dual Verified Instagram Cards */}
        <div ref={accountsRef} className={styles.accountsGrid}>
          {accounts.map((acc, index) => (
            <a
              key={index}
              href={acc.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.accountCard}
              aria-label={`Open Instagram profile for ${acc.name} (${acc.handle})`}
            >
              <div className={styles.cardHeader}>
                <div className={styles.instagramBadge} aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div className={styles.arrowIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>

              <div className={styles.accountDetails}>
                <h3 className={styles.accountName}>{acc.name}</h3>
                <span className={styles.accountHandle}>{acc.handle}</span>
                <p className={styles.accountBio}>{acc.bio}</p>
              </div>

              <div className={styles.cardFooter}>
                <span>{acc.tag}</span>
                <span>OPEN INSTAGRAM &rarr;</span>
              </div>
            </a>
          ))}
        </div>

        {/* Curated Editorial Snapshots */}
        <div ref={feedRef} className={styles.feedVisualGrid}>
          {snapshots.map((snap, idx) => (
            <div key={idx} className={styles.feedImageFrame}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={snap.src}
                alt={snap.alt}
                className={styles.feedImage}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className={styles.ctaWrapper}>
          <a
            href="https://www.instagram.com/glamorouse_makeup_beauty"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary btn-lg ${styles.journeyBtn}`}
          >
            <svg width="18" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span>FOLLOW THE JOURNEY</span>
          </a>
        </div>
      </div>
    </section>
  )
}
