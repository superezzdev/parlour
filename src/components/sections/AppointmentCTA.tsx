import Link from 'next/link'
import { EditorialHeading } from '@/components/ui/Primitives'
import { salon } from '@/data/salon'
import styles from './AppointmentCTA.module.css'

export default function AppointmentCTA() {
  return (
    <section className={styles.appointmentCta} aria-labelledby="cta-heading">
      <div className={styles.bg} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={styles.inner} data-reveal>
          <EditorialHeading
            as="h2"
            size="lg"
            italic
            id="cta-heading"
            className={styles.headline}
          >
            Ready to begin<br />
            your transformation?
          </EditorialHeading>

          <p className={`${styles.body} lead`}>
            Whether it&apos;s your wedding day, a special occasion, or simply a moment
            to feel your most beautiful — we are here for it.
          </p>

          <div className={styles.actions}>
            <Link href="/contact" className="btn btn-filled btn-lg">
              Book an Appointment
            </Link>
            <a
              href={salon.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-primary btn-lg ${styles.whatsapp}`}
              aria-label="Book via WhatsApp"
            >
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${salon.phone}`}
              className={`btn btn-ghost ${styles.call}`}
              aria-label={`Call ${salon.phoneDisplay}`}
            >
              or call {salon.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
