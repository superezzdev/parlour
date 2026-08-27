import Link from 'next/link'
import { SectionLabel } from '@/components/ui/Primitives'
import styles from './HeroSection.module.css'

interface HeroSectionProps {
  label?: string
  headline: React.ReactNode
  subheadline?: React.ReactNode
  ctaLabel?: string
  ctaHref?: string
  /** Background image URL — null shows gradient placeholder */
  imageSrc?: string | null
  imageAlt?: string
  /** Whether this is the home page hero (full-viewport) */
  fullBleed?: boolean
}

export default function HeroSection({
  label,
  headline,
  subheadline,
  ctaLabel = 'Book an Appointment',
  ctaHref = '/contact',
  imageSrc = null,
  imageAlt = 'Glamorous beauty studio — bridal makeup artistry in Sarai Meer',
  fullBleed = true,
}: HeroSectionProps) {
  return (
    <section
      className={fullBleed ? styles.heroFull : styles.heroPage}
      aria-label="Hero section"
    >
      {/* Background Image / Placeholder */}
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

      {/* Content */}
      <div className={`container ${styles.content}`}>
        {label && (
          <div className="hero-label">
            <SectionLabel>{label}</SectionLabel>
          </div>
        )}

        <h1 className={styles.headline}>
          {Array.isArray(headline)
            ? headline.map((line, i) => (
                <span key={i} className={`text-reveal-line hero-line-${i + 1}`}>
                  <span>{line}</span>
                </span>
              ))
            : <span className="text-reveal-line hero-line-1"><span>{headline}</span></span>
          }
        </h1>

        {subheadline && (
          <p className={`${styles.subheadline} hero-body`}>{subheadline}</p>
        )}

        {ctaLabel && (
          <div className="hero-cta">
            <Link href={ctaHref} className={`btn btn-primary btn-lg ${styles.heroCta}`}>
              {ctaLabel}
            </Link>
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
