'use client'

import Link from 'next/link'
import { SectionLabel } from '@/components/ui/Primitives'
import { bridalPackages, type BridalPackage } from '@/data/bridal'
import { useScrollReveal, useHeadingReveal } from '@/hooks/useScrollReveal'
import styles from './BridalPackagesSection.module.css'

function BridalTierRow({ pkg, delay }: { pkg: BridalPackage; delay: number }) {
  const rowRef = useScrollReveal<HTMLDivElement>({ delay, y: 25 })

  return (
    <div ref={rowRef} className={styles.tierRow}>
      {/* LEFT: 30% - Tier number & Tier name */}
      <div className={styles.leftCol}>
        <span className={styles.tierNumber}>{pkg.number}</span>
        <h3 className={styles.tierName}>{pkg.name}</h3>
      </div>

      {/* MIDDLE: 50% - Inclusions with plain em dash prefix */}
      <div className={styles.middleCol}>
        <ul className={styles.inclusionsList}>
          {pkg.includes.slice(0, 4).map((item, idx) => (
            <li key={idx} className={styles.inclusionItem}>
              <span className={styles.dash} aria-hidden="true">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT: 20% - Price & Book Link */}
      <div className={styles.rightCol}>
        <span className={styles.tierPrice}>{pkg.price}</span>
        <Link
          href={`/contact?service=bridal&package=${pkg.id}`}
          className={styles.bookLink}
        >
          Book &rarr;
        </Link>
      </div>
    </div>
  )
}

export default function BridalPackagesSection() {
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const subtitleRef = useScrollReveal<HTMLParagraphElement>({ y: 30, delay: 0.1 })
  const noteRef = useScrollReveal<HTMLParagraphElement>({ y: 20, delay: 0.25 })

  return (
    <section id="packages" className={styles.packagesSection} aria-labelledby="bridal-packages-heading">
      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <SectionLabel>CURATED EXPERIENCES</SectionLabel>
          <div className="overflow-hidden">
            <h2 id="bridal-packages-heading" ref={headingRef} className={`${styles.title} section-heading`}>
              Bridal Collections &amp; Suites.
            </h2>
          </div>
          <p ref={subtitleRef} className={styles.subtitle}>
            Thoughtfully structured packages designed to take care of you on your wedding day. Every package can be customized to your timeline and preferences.
          </p>
        </div>

        {/* Three Horizontal Tiers */}
        <div className={styles.tiersContainer}>
          {bridalPackages.map((pkg, idx) => (
            <BridalTierRow
              key={pkg.id}
              pkg={pkg}
              delay={idx * 0.12}
            />
          ))}
        </div>

        {/* Personalized Pricing Note */}
        <p ref={noteRef} className={styles.personalizedNote}>
          Pricing is personalized. Final quote shared after your consultation based on date, location, and services.
        </p>
      </div>
    </section>
  )
}
