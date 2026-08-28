'use client'

import Link from 'next/link'
import { SectionLabel } from '@/components/ui/Primitives'
import Accordion from '@/components/ui/Accordion'
import { bridalFAQs } from '@/data/bridal'
import { salon } from '@/data/salon'
import { useScrollReveal, useHeadingReveal } from '@/hooks/useScrollReveal'
import styles from './BridalFAQSection.module.css'

export default function BridalFAQSection() {
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const subtitleRef = useScrollReveal<HTMLParagraphElement>({ y: 30, delay: 0.1 })
  const contactCardRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.2 })
  const accordionRef = useScrollReveal<HTMLDivElement>({ y: 35, delay: 0.25 })

  return (
    <section className={styles.faqSection} aria-labelledby="bridal-faq-heading">
      <div className="container">
        <div className={styles.grid}>
          {/* Left Column: Heading & Contact Assistance Prompt */}
          <div className={styles.leftColumn}>
            <SectionLabel>QUESTIONS &amp; ADVICE</SectionLabel>
            <div className="overflow-hidden">
              <h2 id="bridal-faq-heading" ref={headingRef} className={`${styles.title} section-heading`}>
                Everything You Need to Know About Your Bridal Journey.
              </h2>
            </div>
            <p ref={subtitleRef} className={styles.subtitle}>
              Clear, transparent guidance to help you plan your timeline, prepare your skin, and prepare for an unforgettable bridal experience.
            </p>

            <div ref={contactCardRef} className={styles.contactCard}>
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
          <div ref={accordionRef} className={styles.rightColumn}>
            <Accordion items={bridalFAQs} />
          </div>
        </div>
      </div>
    </section>
  )
}
