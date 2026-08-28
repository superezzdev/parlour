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
                  className="btn btn-sm btn-whatsapp"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>CHAT ON WHATSAPP</span>
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
