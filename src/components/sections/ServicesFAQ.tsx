'use client'

import { useState } from 'react'
import { SectionLabel, EditorialHeading } from '@/components/ui/Primitives'
import { useScrollReveal, useHeadingReveal } from '@/hooks/useScrollReveal'
import styles from './ServicesFAQ.module.css'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'How do I book an appointment or consultation?',
    answer:
      'You can book directly by clicking "Reserve" on any service above, filling our short booking form on the Contact page, or messaging us on WhatsApp (+91 88377 79719). We confirm your date and time slot promptly.',
  },
  {
    question: 'Do you offer trial sessions before weddings or major events?',
    answer:
      'Yes! We offer a full bridal consultation & trial session (₹500, which is adjusted toward your final bridal booking). We test base shades, eye looks, and hairstyle options so you have total peace of mind on your wedding day.',
  },
  {
    question: 'What cosmetics and skin care brands do you use in the studio?',
    answer:
      'We strictly use authentic, premium international and professional brands including MAC, Huda Beauty, Kryolan, PAC, and hypoallergenic skin care products suited for sensitive Indian skin types.',
  },
  {
    question: 'Can you cater to group bookings for bride, bridesmaids, and family?',
    answer:
      'Yes. For weddings and major celebrations, we coordinate customized group packages for the bride, sisters, and mother. Please reach out in advance with your guest count to ensure exclusive studio slots.',
  },
  {
    question: 'Where is Glamorous studio located in Sarai Meer?',
    answer:
      'Our studio is situated in Sarai Meer, Uttar Pradesh. We offer a private, clean, comfortable boutique environment dedicated exclusively to client appointments.',
  },
]

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const listRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.15 })

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className={styles.faqSection} aria-labelledby="services-faq-heading">
      <div className={`container ${styles.faqContainer}`}>
        <div className={styles.faqHeader}>
          <div className={styles.labelWrapper}>
            <SectionLabel>SERVICE QUESTIONS &amp; ADVICE</SectionLabel>
          </div>
          <div className="overflow-hidden">
            <EditorialHeading
              ref={headingRef}
              as="h2"
              size="lg"
              id="services-faq-heading"
              className={`${styles.faqHeading} section-heading`}
            >
              Frequently Asked Questions
            </EditorialHeading>
          </div>
          <p className={styles.faqSubhead}>
            Everything you need to know about our appointments, consultations, and studio standards.
          </p>
        </div>

        <div ref={listRef} className={styles.faqList}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div key={idx} className={styles.faqItem} data-open={isOpen}>
                <button
                  type="button"
                  className={styles.faqButton}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span>{faq.question}</span>
                  <svg
                    className={styles.faqIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
                {isOpen && (
                  <div id={`faq-answer-${idx}`} className={styles.faqAnswer}>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
