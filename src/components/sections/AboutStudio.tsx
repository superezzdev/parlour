import { SectionLabel } from '@/components/ui/Primitives'
import styles from './AboutStudio.module.css'

export default function AboutStudio() {
  return (
    <section className={styles.studio} aria-labelledby="studio-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* Text Information */}
          <div className={styles.textContent} data-reveal>
            <div className={styles.labelWrapper}>
              <SectionLabel>04 / THE STUDIO SANCTUARY</SectionLabel>
            </div>

            <h2 id="studio-heading" className={styles.heading}>
              A private haven
              <em>in Sarai Meer.</em>
            </h2>

            <p className={styles.leadText}>
              Perched above the town on the 1st Floor of Mumtaz Bangle Store, Glamorous was envisioned
              as an intimate beauty sanctuary. Bathed in balanced daylight-spectrum illumination with
              dedicated styling stations, it provides the tranquility required for flawless artistry.
            </p>

            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <strong className={styles.featureTitle}>Dedicated Bridal Suite</strong>
                <span className={styles.featureDesc}>Private dressing and makeup space designed for relaxed pre-wedding transformations.</span>
              </div>

              <div className={styles.featureItem}>
                <strong className={styles.featureTitle}>Colour-True Lighting</strong>
                <span className={styles.featureDesc}>Calibrated CRI 95+ vanity illumination ensuring your look appears flawless under any light.</span>
              </div>

              <div className={styles.featureItem}>
                <strong className={styles.featureTitle}>Strict Hygiene Protocol</strong>
                <span className={styles.featureDesc}>Sterilized brushes, single-use disposables, and premium sanitized skincare tools.</span>
              </div>

              <div className={styles.featureItem}>
                <strong className={styles.featureTitle}>Central Accessible Location</strong>
                <span className={styles.featureDesc}>Conveniently situated on Sabji Mandi Rd with easy access for brides and families across the region.</span>
              </div>
            </div>
          </div>

          {/* Visual Frame */}
          <div className={styles.visualFrame} data-reveal>
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
                1st Floor, Mumtaz Bangle Store · Sabji Mandi Rd, Sarai Meer, UP 276305
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
