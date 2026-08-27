import { SectionLabel, EditorialHeading } from '@/components/ui/Primitives'
import { salon } from '@/data/salon'
import styles from './LocationBlock.module.css'

export default function LocationBlock() {
  return (
    <section className={`${styles.location} section`} aria-labelledby="location-heading">
      <div className="container">
        <div className={`${styles.inner} editorial-split editorial-split--60-40`}>
          {/* Map side */}
          <div className={`${styles.map} image-reveal-wrapper`} aria-label="Map embed area">
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
              />
            ) : (
              /* Placeholder map UI until embed URL is provided */
              <a
                href={salon.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapPlaceholder}
                aria-label="View Glamorous on Google Maps"
              >
                <div className={styles.mapBg} aria-hidden="true" />
                <div className={styles.mapPin} aria-hidden="true">
                  <svg width="32" height="40" viewBox="0 0 32 40" fill="none" aria-hidden="true">
                    <path d="M16 0C7.163 0 0 7.163 0 16c0 10 16 24 16 24s16-14 16-24C32 7.163 24.837 0 16 0z" fill="var(--color-rose)" />
                    <circle cx="16" cy="16" r="6" fill="white" />
                  </svg>
                </div>
                <div className={styles.mapLabel}>
                  <span>View on Google Maps ↗</span>
                </div>
              </a>
            )}
          </div>

          {/* Details side */}
          <div className={styles.details} data-reveal>
            <SectionLabel>Find Us</SectionLabel>

            <EditorialHeading as="h2" size="md" id="location-heading" className={styles.heading}>
              Come and see us
            </EditorialHeading>

            {/* Address */}
            <address className={styles.address}>
              <p>{salon.address.line1}</p>
              <p>{salon.address.line2}</p>
              <p>{salon.address.city}</p>
              <p>{salon.address.state} &mdash; {salon.address.pincode}</p>
            </address>

            {/* Hours */}
            <div aria-label="Opening hours">
              <p className={`${styles.sectionLabel} label`}>Hours</p>
              <dl className={styles.hoursList}>
                {salon.hours.map((h, i) => (
                  <div key={i} className={styles.hoursRow}>
                    <dt className="caption">{h.day}</dt>
                    <dd className="caption">{h.hours}</dd>
                  </div>
                ))}
              </dl>
              <p className={`caption ${styles.hoursNote}`}>
                Hours to be confirmed with business owner.
              </p>
            </div>

            {/* CTAs */}
            <div className={styles.actions}>
              <a
                href={`tel:${salon.phone}`}
                className="btn btn-primary"
                aria-label={`Call us at ${salon.phoneDisplay}`}
              >
                Call {salon.phoneDisplay}
              </a>
              <a
                href={salon.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                aria-label="Chat on WhatsApp"
              >
                WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
