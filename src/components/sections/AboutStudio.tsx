'use client'

import { SectionLabel } from '@/components/ui/Primitives'
import { useScrollReveal, useHeadingReveal, useImageClipReveal } from '@/hooks/useScrollReveal'
import styles from './AboutStudio.module.css'

export default function AboutStudio() {
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const leadRef = useScrollReveal<HTMLParagraphElement>({ y: 30, delay: 0.1 })
  const featuresRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.2 })
  const visualRef = useImageClipReveal<HTMLDivElement>()

  return (
    <section className={styles.studio} aria-labelledby="studio-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* Text Information */}
          <div className={styles.textContent}>
            <div className={styles.labelWrapper}>
              <SectionLabel>04 / OUR STUDIO</SectionLabel>
            </div>

            <div className="overflow-hidden">
              <h2 id="studio-heading" ref={headingRef} className={`${styles.heading} section-heading`}>
                A comfortable space
                <em>in Sarai Meer.</em>
              </h2>
            </div>

            <p ref={leadRef} className={styles.leadText}>
              Located in the heart of Sarai Meer, Glamorous is
              a calm, welcoming studio. With dedicated stations and proper lighting, we make sure
              you feel completely comfortable throughout your appointment.
            </p>

            <div ref={featuresRef} className={styles.featuresList}>
              <div className={styles.featureItem}>
                <strong className={styles.featureTitle}>Private Bridal Area</strong>
                <span className={styles.featureDesc}>A comfortable, private space for brides to get ready without rush or distraction.</span>
              </div>

              <div className={styles.featureItem}>
                <strong className={styles.featureTitle}>Proper Lighting</strong>
                <span className={styles.featureDesc}>Proper lighting at every station ensures your makeup looks flawless in daylight, evening lights, and photos.</span>
              </div>

              <div className={styles.featureItem}>
                <strong className={styles.featureTitle}>Clean &amp; Hygienic Tools</strong>
                <span className={styles.featureDesc}>Clean brushes, sanitized makeup kits, and fresh disposables for every client.</span>
              </div>

              <div className={styles.featureItem}>
                <strong className={styles.featureTitle}>Easy to Find Location</strong>
                <span className={styles.featureDesc}>Centrally located, easily accessible from across Sarai Meer and nearby areas.</span>
              </div>
            </div>
          </div>

          {/* Visual Frame */}
          <div ref={visualRef} className={styles.visualFrame}>
            <div className={styles.imageWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about/about-studio.jpg"
                alt="Atmospheric view of Glamorous makeup vanity and studio interior in Sarai Meer"
                className={styles.image}
                loading="lazy"
              />
            </div>
            <div className={styles.locationCard}>
              <div className={styles.locationTitle}>Glamorous (makeup &amp; beauty)</div>
              <p className={styles.locationAddress}>
                Main Market Road · Sarai Meer, UP 276305
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
