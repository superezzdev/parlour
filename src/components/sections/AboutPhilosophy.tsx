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
      description: 'Precision over haste. Every tone, stroke, and highlight is placed with deliberate intent.',
    },
    {
      number: '02',
      title: 'Skin-First Rituals',
      description: 'Luminous, deeply prepared skin that feels breathable, weightless, and alive in all lighting.',
    },
    {
      number: '03',
      title: 'Timeless Grace',
      description: 'Transcending fleeting trends to craft elegance that endures across years and cherished photographs.',
    },
  ]

  return (
    <section className={styles.philosophy} aria-labelledby="philosophy-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* Text Content */}
          <div className={styles.textContent}>
            <SectionLabel>01 / THE PHILOSOPHY</SectionLabel>

            <div className="overflow-hidden">
              <h2 id="philosophy-heading" ref={headingRef} className={`${styles.heading} section-heading`}>
                Beauty is not applied.
                <em>It is revealed.</em>
              </h2>
            </div>

            <p ref={leadRef} className={styles.leadText}>
              We approach every face with patience, deep observation, and reverence. True beauty is never
              about masking features; it is an intimate collaboration that honors individual facial
              architecture, skin vitality, and personal confidence.
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
                &ldquo;Every face is an unwritten canvas of grace.&rdquo;
              </p>
              <span className={styles.quoteAuthor}>Studio Creed · Sarai Meer</span>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
