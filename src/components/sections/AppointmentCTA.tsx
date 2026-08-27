import Link from 'next/link'
import { SectionLabel, EditorialHeading } from '@/components/ui/Primitives'
import { salon } from '@/data/salon'
import styles from './AppointmentCTA.module.css'

export default function AppointmentCTA() {
  return (
    <section className={styles.appointmentCta} aria-labelledby="cta-heading">
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.ambientGlow} />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.inner} data-reveal>
          <SectionLabel>RESERVATIONS &amp; CONSULTATIONS</SectionLabel>

          <EditorialHeading
            as="h2"
            size="xl"
            id="cta-heading"
            className={styles.headline}
          >
            READY<br />
            FOR YOUR<br />
            MOMENT?
          </EditorialHeading>

          <p className={`${styles.body} lead`}>
            Whether reserving your auspicious bridal dates, preparing for a grand celebration,
            or scheduling a personal beauty treatment &mdash; our team is dedicated to your transformation.
          </p>

          <div className={styles.actions}>
            <Link href="/contact" className={`btn btn-filled btn-lg ${styles.primaryBtn}`}>
              <span>BOOK AN APPOINTMENT</span>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="4" y1="10" x2="16" y2="10" />
                <polyline points="11,5 16,10 11,15" />
              </svg>
            </Link>

            <a
              href={salon.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-primary btn-lg ${styles.whatsapp}`}
              aria-label="Inquire via WhatsApp"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className={styles.callBlock}>
            <span className={styles.callPrefix}>Direct Studio Hotline:</span>
            <a
              href={`tel:${salon.phone}`}
              className={styles.callLink}
              aria-label={`Call ${salon.phoneDisplay}`}
            >
              {salon.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
