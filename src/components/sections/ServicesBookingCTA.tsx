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
            Whether reserving wedding dates, preparing for family celebrations, or booking a skin care session &mdash; our team in Sarai Meer is ready to help you look your best.
          </p>

          <div ref={actionsRef} className={styles.actions}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              aria-label="Inquire via WhatsApp"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>WhatsApp Us</span>
            </a>

            <Link
              href="/contact"
              className="btn btn-secondary btn-lg"
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
