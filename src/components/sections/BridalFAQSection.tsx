import Link from 'next/link'
import { SectionLabel } from '@/components/ui/Primitives'
import Accordion from '@/components/ui/Accordion'
import { bridalFAQs } from '@/data/bridal'
import { salon } from '@/data/salon'
import styles from './BridalFAQSection.module.css'

export default function BridalFAQSection() {
  return (
    <section className={styles.faqSection} aria-labelledby="bridal-faq-heading">
      <div className="container">
        <div className={styles.grid}>
          {/* Left Column: Heading & Contact Assistance Prompt */}
          <div className={styles.leftColumn} data-reveal="fade">
            <SectionLabel>QUESTIONS &amp; ADVICE</SectionLabel>
            <h2 id="bridal-faq-heading" className={styles.title}>
              Everything You Need to Know About Your Bridal Journey.
            </h2>
            <p className={styles.subtitle}>
              Clear, transparent guidance to help you plan your timeline, prepare your skin, and prepare for an unforgettable bridal experience.
            </p>

            <div className={styles.contactCard}>
              <h3 className={styles.contactCardTitle}>Have a unique question?</h3>
              <p className={styles.contactCardText}>
                Our bridal specialists in Sarai Meer are always happy to discuss custom timings, multi-event schedules, or venue arrangements.
              </p>
              <div className={styles.contactLinks}>
                <a
                  href={`https://wa.me/${salon.phone.replace(/[^0-9]/g, '')}?text=Hi%20Glamorous,%20I%20have%20a%20question%20regarding%20bridal%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary"
                >
                  CHAT ON WHATSAPP
                </a>
                <Link href="/contact" className="btn btn-sm btn-ghost">
                  SEND AN INQUIRY
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className={styles.rightColumn} data-reveal="fade">
            <Accordion items={bridalFAQs} />
          </div>
        </div>
      </div>
    </section>
  )
}
