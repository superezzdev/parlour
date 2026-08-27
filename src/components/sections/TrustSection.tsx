import { SectionLabel, EditorialHeading } from '@/components/ui/Primitives'
import { testimonials } from '@/data/testimonials'
import { salon } from '@/data/salon'
import styles from './TrustSection.module.css'

export default function TrustSection() {
  return (
    <section className={`${styles.trustSection} section`} aria-labelledby="trust-heading">
      <div className="container">
        {/* Section Header */}
        <div className={styles.header} data-reveal>
          <SectionLabel>CLIENT APPRECIATION</SectionLabel>
          <EditorialHeading as="h2" size="lg" id="trust-heading" className={styles.headline}>
            Words from brides,<br />
            <em>shared with gratitude.</em>
          </EditorialHeading>
        </div>

        {/* Testimonials Editorial Grid */}
        <div className={styles.grid} data-stagger>
          {testimonials.map((item) => (
            <blockquote key={item.id} className={styles.card}>
              <div className={styles.cardStars} aria-label={`${item.rating} out of 5 stars`}>
                {Array.from({ length: item.rating }).map((_, i) => (
                  <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 20 20"
                    fill="var(--color-rose)"
                    aria-hidden="true"
                  >
                    <path d="M10 1l2.6 6.3 6.8.6-5.1 4.5 1.5 6.6-5.8-3.5-5.8 3.5 1.5-6.6-5.1-4.5 6.8-.6z" />
                  </svg>
                ))}
              </div>

              <p className={styles.quoteText}>
                &ldquo;{item.text}&rdquo;
              </p>

              <footer className={styles.cardFooter}>
                <div className={styles.avatarCircle} aria-hidden="true">
                  {item.authorInitials}
                </div>
                <div className={styles.authorMeta}>
                  <cite className={styles.authorName}>{item.authorName}</cite>
                  <p className={styles.authorLocation}>
                    {item.service && <span>{item.service} &middot; </span>}
                    {item.location}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Instagram Trust Bar */}
        <div className={styles.instagramBar} data-reveal>
          <div className={styles.instagramLeft}>
            <span className={styles.instagramTag}>INSTAGRAM SANCTUARY</span>
            <p className={styles.instagramHeading}>
              Follow daily transformations &amp; ceremony reels
            </p>
          </div>

          <div className={styles.instagramActions}>
            {salon.instagram.map((ig) => (
              <a
                key={ig.handle}
                href={ig.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-primary ${styles.igButton}`}
                aria-label={`Follow ${ig.handle} on Instagram`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>{ig.handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
