import Link from 'next/link'
import { SectionLabel } from '@/components/ui/Primitives'
import { bridalPackages } from '@/data/bridal'
import styles from './BridalPackagesSection.module.css'

export default function BridalPackagesSection() {
  return (
    <section id="packages" className={styles.packagesSection} aria-labelledby="bridal-packages-heading">
      <div className="container">
        {/* Section Header */}
        <div className={styles.header} data-reveal="fade">
          <SectionLabel>CURATED EXPERIENCES</SectionLabel>
          <h2 id="bridal-packages-heading" className={styles.title}>
            Bridal Collections &amp; Suites.
          </h2>
          <p className={styles.subtitle}>
            Thoughtfully structured tiers designed to accompany you through every step of your celebration. Every package is completely customizable to your individual timeline and aesthetic.
          </p>
        </div>

        {/* 3 Package Tiers */}
        <div className={styles.grid} data-stagger>
          {bridalPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`${styles.card} ${pkg.isSignature ? styles.cardFeatured : ''}`}
            >
              {pkg.isSignature && (
                <span className={styles.popularBadge}>MOST REQUESTED</span>
              )}

              <div className={styles.cardHeader}>
                <h3 className={styles.packageName}>{pkg.name}</h3>
                <span className={styles.packageSubtitle}>{pkg.subtitle}</span>
                <p className={styles.packageDesc}>{pkg.description}</p>
              </div>

              <div className={styles.idealBox}>
                <span className={styles.idealLabel}>RECOMMENDED FOR</span>
                <p className={styles.idealText}>{pkg.idealFor}</p>
              </div>

              <span className={styles.inclusionsTitle}>EXPERIENCE INCLUDES</span>
              <ul className={styles.inclusionsList}>
                {pkg.includes.map((item, idx) => (
                  <li key={idx} className={styles.inclusionItem}>
                    <svg
                      className={styles.checkIcon}
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="4 10 8 14 16 6" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.cardFooter}>
                <span className={styles.priceTag}>{pkg.priceLabel}</span>
                <Link
                  href={`/contact?service=bridal&package=${pkg.id}`}
                  className={`btn ${pkg.isSignature ? 'btn-filled' : 'btn-primary'} ${styles.packageBtn}`}
                >
                  ENQUIRE FOR AVAILABILITY
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer / Transparency Footnote */}
        <div className={styles.disclaimer} data-reveal="fade">
          <p className={styles.disclaimerText}>
            <em>Note on Inclusions &amp; Pricing:</em> All bridal experiences at Glamorous are bespoke. Final investment varies based on event dates, travel requirements (in-studio or on-location), and custom add-ons such as family makeup or multi-day festivities. Inclusions and quotes are finalized transparently during your consultation.
          </p>
        </div>
      </div>
    </section>
  )
}
