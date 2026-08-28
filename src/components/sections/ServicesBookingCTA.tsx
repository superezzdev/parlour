'use client'

import Link from 'next/link'
import { SectionLabel } from '@/components/ui/Primitives'
import { salon } from '@/data/salon'
import { useScrollReveal, useHeadingReveal } from '@/hooks/useScrollReveal'
import styles from './ServicesBookingCTA.module.css'

export default function ServicesBookingCTA() {
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const subtextRef = useScrollReveal<HTMLParagraphElement>({ y: 30, delay: 0.15 })
  const actionsRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.25 })
  const hotlineRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.35 })

  const whatsappMessage = encodeURIComponent(
    'Hi Glamorous! I would like to book a consultation to find the perfect service for my occasion.'
  )
  const whatsappUrl = `https://wa.me/${salon.phone.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`

  return (
    <section className={styles.ctaSection} aria-labelledby="services-cta-heading">
      <div className={styles.ambientGlow} aria-hidden="true" />
      <div className={styles.ghostBorderTop} aria-hidden="true" />

      <div className="container">
        <div className={styles.innerWrapper}>
          <div className={styles.labelWrap}>
            <SectionLabel>RESERVATIONS &amp; CONSULTATIONS</SectionLabel>
          </div>

          <div className="overflow-hidden">
            <h2 id="services-cta-heading" ref={headingRef} className={`${styles.heading} section-heading`}>
              Book a consultation and we&apos;ll suggest the perfect service for your occasion.
            </h2>
          </div>

          <p ref={subtextRef} className={styles.subtext}>
            Whether reserving auspicious wedding dates, preparing for grand festive celebrations, or scheduling restorative skin rituals — our artists in Sarai Meer are ready to craft your defining look.
          </p>

          <div ref={actionsRef} className={styles.actions}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn-primary btn-lg ${styles.whatsappBtn}`}
              aria-label="Inquire via WhatsApp"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>

            <Link
              href="/contact"
              className={`btn btn-ghost btn-lg ${styles.contactBtn}`}
            >
              <span>Contact Form</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="4" y1="10" x2="16" y2="10" />
                <polyline points="11,5 16,10 11,15" />
              </svg>
            </Link>
          </div>

          <div ref={hotlineRef} className={styles.hotlineBlock}>
            <span className={styles.hotlinePrefix}>Direct Studio Hotline:</span>
            <a
              href={`tel:${salon.phone}`}
              className={styles.hotlineLink}
              aria-label={`Call studio at ${salon.phoneDisplay}`}
            >
              {salon.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
