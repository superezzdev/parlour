'use client'

import { SectionLabel } from '@/components/ui/Primitives'
import { useScrollReveal, useHeadingReveal, useImageClipReveal } from '@/hooks/useScrollReveal'
import styles from './AboutPhilosophy.module.css'

interface PillarItem {
  number: string
  title: string
  description: string
}

function PillarCard({ pillar, delay }: { pillar: PillarItem; delay: number }) {
  const cardRef = useScrollReveal<HTMLDivElement>({ delay, y: 35 })

  return (
    <div ref={cardRef} className={styles.pillarCard}>
      <span className={styles.pillarNumber}>{pillar.number}</span>
      <h3 className={styles.pillarTitle}>{pillar.title}</h3>
      <p className={styles.pillarDescription}>{pillar.description}</p>
    </div>
  )
}

export default function AboutPhilosophy() {
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const leadRef = useScrollReveal<HTMLParagraphElement>({ y: 30, delay: 0.1 })
  const visualRef = useImageClipReveal<HTMLDivElement>()

  const pillars: PillarItem[] = [
    {
      number: '01',
      title: 'Mindful Artistry',
      description: 'Precision over haste. Every brushstroke and color is chosen carefully for your look.',
    },
    {
      number: '02',
      title: 'Skin-First Prep',
      description: 'Well-prepped, hydrated skin so your makeup feels lightweight, breathable, and fresh all day.',
    },
    {
      number: '03',
      title: 'Timeless Beauty',
      description: 'Classic, flattering styles that look just as beautiful in your wedding albums years from now.',
    },
  ]

  return (
    <section className={styles.philosophy} aria-labelledby="philosophy-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* Text Content */}
          <div className={styles.textContent}>
            <SectionLabel>01 / OUR PHILOSOPHY</SectionLabel>

            <div className="overflow-hidden">
              <h2 id="philosophy-heading" ref={headingRef} className={`${styles.heading} section-heading`}>
                Beauty is not applied.
                <em>It is revealed.</em>
              </h2>
            </div>

            <p ref={leadRef} className={styles.leadText}>
              We take time with every client. Good makeup isn&apos;t about covering up who you are &mdash;
              it&apos;s about understanding your features, prepping your skin properly, and creating a look
              that makes you feel confident and beautiful.
            </p>

            <div className={styles.pillarsGrid}>
              {pillars.map((pillar, idx) => (
                <PillarCard
                  key={pillar.number}
                  pillar={pillar}
                  delay={0.15 + idx * 0.1}
                />
              ))}
            </div>
          </div>

          {/* Visual Frame */}
          <div ref={visualRef} className={styles.visualFrame}>
            <div className={styles.imageWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about/about-artistry.jpg"
                alt="Close-up detail of mindful makeup artistry and precision brushwork"
                className={styles.image}
                loading="lazy"
              />
            </div>
            <aside className={styles.quotePill}>
              <p className={styles.quoteText}>
                &ldquo;Good makeup enhances your natural beauty &mdash; it never hides it.&rdquo;
              </p>
              <span className={styles.quoteAuthor}>Studio Creed · Sarai Meer</span>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
