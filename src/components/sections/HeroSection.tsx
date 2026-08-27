import Link from 'next/link'
import { SectionLabel } from '@/components/ui/Primitives'
import styles from './HeroSection.module.css'

interface HeroSectionProps {
  label?: string
  headline: string | string[]
  subheadline?: React.ReactNode
  ctaLabel?: string
  ctaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  locationTag?: string
  /** Background image URL — null shows gradient placeholder */
  imageSrc?: string | null
  imageAlt?: string
  /** Whether this is the home page hero (full-viewport) */
  fullBleed?: boolean
}

export default function HeroSection({
  label = 'GLAMOROUS / MAKEUP & BEAUTY',
  headline = ['BEAUTY,', 'MADE', 'PERSONAL.'],
  subheadline,
  ctaLabel = 'BOOK AN APPOINTMENT',
  ctaHref = '/contact',
  secondaryCtaLabel = 'EXPLORE BRIDAL',
  secondaryCtaHref = '/bridal',
  locationTag = 'SARAI MEER · UTTAR PRADESH',
  imageSrc = '/images/hero/hero-editorial.jpg',
  imageAlt = 'Glamorous beauty studio — editorial bridal and luxury makeup artistry in Sarai Meer',
  fullBleed = true,
}: HeroSectionProps) {
  return (
    <section
      className={fullBleed ? styles.heroFull : styles.heroPage}
      aria-label="Hero section"
    >
      {/* Background Image with subtle movement and overlay */}
      <div className={`${styles.media} hero-image-reveal`} aria-hidden="true">
        {imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt={imageAlt}
            className={styles.image}
            loading="eager"
            fetchPriority="high"
          />
        ) : (
          <div className={styles.imagePlaceholder} role="presentation" />
        )}
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      {/* Hero Meta Pinned Top-Right on Desktop */}
      {locationTag && (
        <div className={styles.metaTopRight} aria-hidden="true">
          <span className={styles.locationBadge}>{locationTag}</span>
        </div>
      )}

      {/* Main Content Container */}
      <div className={`container ${styles.content}`}>
        {label && (
          <div className="hero-label">
            <SectionLabel>{label}</SectionLabel>
          </div>
        )}

        <h1 className={styles.headline}>
          {Array.isArray(headline)
            ? headline.map((line, i) => (
                <span key={i} className={`${styles.headlineRow} hero-line-${i + 1}`}>
                  {line}
                </span>
              ))
            : <span className={`${styles.headlineRow} hero-line-1`}>{headline}</span>
          }
        </h1>

        {subheadline && (
          <p className={`${styles.subheadline} hero-body`}>{subheadline}</p>
        )}

        {/* Action Group: Primary CTA + Secondary CTA */}
        <div className={`${styles.actionGroup} hero-cta`}>
          {ctaLabel && (
            <Link href={ctaHref} className={`btn btn-primary btn-lg ${styles.heroPrimaryCta}`}>
              {ctaLabel}
            </Link>
          )}

          {secondaryCtaLabel && (
            <Link href={secondaryCtaHref} className={`btn ${styles.heroSecondaryCta}`}>
              <span>{secondaryCtaLabel}</span>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="4" y1="10" x2="16" y2="10" />
                <polyline points="11,5 16,10 11,15" />
              </svg>
            </Link>
          )}
        </div>

        {/* Location footnote for mobile */}
        {locationTag && (
          <div className={styles.locationMobile} aria-hidden="true">
            <span className={styles.locationDot} />
            <span>{locationTag}</span>
          </div>
        )}

        {/* Scroll indicator */}
        <div className={`${styles.scroll} hero-scroll`} aria-hidden="true">
          <div className={styles.scrollLine} />
          <span className={styles.scrollText}>Scroll</span>
        </div>
      </div>
    </section>
  )
}
