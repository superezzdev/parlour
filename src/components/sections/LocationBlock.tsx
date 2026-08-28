'use client'

import { SectionLabel, EditorialHeading } from '@/components/ui/Primitives'
import { salon } from '@/data/salon'
import { useScrollReveal, useHeadingReveal } from '@/hooks/useScrollReveal'
import styles from './LocationBlock.module.css'

export default function LocationBlock() {
  const mapRef = useScrollReveal<HTMLDivElement>({ y: 40, delay: 0 })
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const addressRef = useScrollReveal<HTMLElement>({ y: 30, delay: 0.15 })
  const hoursRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.25 })
  const actionsRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.35 })

  return (
    <section className={`${styles.location} section`} aria-labelledby="location-heading">
      <div className="container">
        <div className={`${styles.inner} editorial-split editorial-split--60-40`}>
          {/* Map Side / Visual Location Frame */}
          <div ref={mapRef} className={`${styles.mapContainer} image-reveal-wrapper`} aria-label="Studio location preview">
            {salon.googleMapsEmbedUrl ? (
              <iframe
                src={salon.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map showing ${salon.name} location`}
                className={styles.mapIframe}
              />
            ) : (
              <a
                href={salon.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapPlaceholder}
                aria-label="Get directions to Glamorous on Google Maps"
              >
                <div className={styles.mapBg} aria-hidden="true" />
                <div className={styles.mapPinWrapper} aria-hidden="true">
                  <div className={styles.mapPinPulse} />
                  <div className={styles.mapPin}>
                    <svg width="28" height="36" viewBox="0 0 32 40" fill="none" aria-hidden="true">
                      <path d="M16 0C7.163 0 0 7.163 0 16c0 10 16 24 16 24s16-14 16-24C32 7.163 24.837 0 16 0z" fill="var(--color-rose)" />
                      <circle cx="16" cy="16" r="6" fill="white" />
                    </svg>
                  </div>
                </div>
                <div className={styles.mapBadge}>
                  <span className={styles.mapBadgeTitle}>Glamorous Makeup &amp; Beauty</span>
                  <span className={styles.mapBadgeSub}>Sabji Mandi Rd, Sarai Meer</span>
                  <span className={styles.mapBadgeAction}>Tap for live GPS navigation &rarr;</span>
                </div>
              </a>
            )}
          </div>

          {/* Details Side */}
          <div className={styles.details}>
            <SectionLabel>VISIT OUR SANCTUARY</SectionLabel>

            <div className="overflow-hidden">
              <EditorialHeading
                ref={headingRef}
                as="h2"
                size="md"
                id="location-heading"
                className={`${styles.heading} section-heading`}
              >
                Glamorous<br />
                <em>(makeup &amp; beauty)</em>
              </EditorialHeading>
            </div>

            {/* Address */}
            <address ref={addressRef} className={styles.address}>
              <p className={styles.addressLinePrimary}>1st Floor, Mumtaz Bangle Store</p>
              <p>Sabji Mandi Rd, Sarai Meer</p>
              <p>Uttar Pradesh 276305</p>
            </address>

            {/* Phone & Direct Contact */}
            <div className={styles.phoneBlock}>
              <span className={styles.subLabel}>DIRECT TELEPHONE</span>
              <a
                href={`tel:${salon.phone}`}
                className={styles.phoneNumber}
                aria-label={`Call ${salon.phoneDisplay}`}
              >
                {salon.phoneDisplay}
              </a>
            </div>

            {/* Hours */}
            <div ref={hoursRef} className={styles.hoursBlock} aria-label="Studio opening hours">
              <span className={styles.subLabel}>STUDIO HOURS</span>
              <dl className={styles.hoursList}>
                {salon.hours.map((h, i) => (
                  <div key={i} className={styles.hoursRow}>
                    <dt className={styles.hoursDay}>{h.day}</dt>
                    <dd className={styles.hoursTime}>{h.hours}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* CTAs */}
            <div ref={actionsRef} className={styles.actions}>
              <a
                href={salon.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-primary btn-lg ${styles.directionsBtn}`}
                aria-label="Get directions to Glamorous in Google Maps"
              >
                <span>GET DIRECTIONS</span>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="4" y1="10" x2="16" y2="10" />
                  <polyline points="11,5 16,10 11,15" />
                </svg>
              </a>

              <a
                href={salon.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                aria-label="Chat on WhatsApp"
              >
                WhatsApp Inquiry &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
