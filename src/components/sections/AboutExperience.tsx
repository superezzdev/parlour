'use client'

import { SectionLabel } from '@/components/ui/Primitives'
import { useScrollReveal, useHeadingReveal } from '@/hooks/useScrollReveal'
import styles from './AboutExperience.module.css'

interface ExperienceStep {
  number: string
  title: string
  description: string
}

function ExperienceStepCard({ step, delay }: { step: ExperienceStep; delay: number }) {
  const cardRef = useScrollReveal<HTMLDivElement>({ delay, y: 35 })

  return (
    <div ref={cardRef} className={styles.stepCard}>
      <span className={styles.stepNumber}>{step.number}</span>
      <h3 className={styles.stepTitle}>{step.title}</h3>
      <p className={styles.stepDescription}>{step.description}</p>
    </div>
  )
}

export default function AboutExperience() {
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const subTextRef = useScrollReveal<HTMLParagraphElement>({ y: 30, delay: 0.1 })
  const noteRef = useScrollReveal<HTMLDivElement>({ y: 30, delay: 0.2 })

  const steps: ExperienceStep[] = [
    {
      number: '01',
      title: 'Listening & Planning',
      description:
        'We begin by understanding your style, event details, lighting, outfit colors, and what you feel most comfortable with.',
    },
    {
      number: '02',
      title: 'Skin Preparation',
      description:
        'Targeted hydration, gentle skin prep, and gentle cooling treatment that leave your skin fresh, hydrated, and ready for makeup.',
    },
    {
      number: '03',
      title: 'Detailed Artistry',
      description:
        'Careful, layered application so your makeup feels lightweight on your skin and looks flawless in person and on camera.',
    },
    {
      number: '04',
      title: 'The Final Reveal',
      description:
        'Final styling, jewelry placement, setting mist, and that exciting moment when you see your complete look in the mirror.',
    },
  ]

  return (
    <section className={styles.experience} aria-labelledby="experience-heading">
      <div className="container">
        {/* Header Block */}
        <div className={styles.headerBlock}>
          <SectionLabel>03 / THE EXPERIENCE</SectionLabel>
          <div className="overflow-hidden">
            <h2 id="experience-heading" ref={headingRef} className={`${styles.heading} section-heading`}>
              Unhurried, serene, personalized.
              <em>From first greeting to final reveal.</em>
            </h2>
          </div>
          <p ref={subTextRef} className={styles.subText}>
            We believe your beauty session should feel relaxing and comfortable.
            Every appointment is given the time it needs so you never feel rushed.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className={styles.stepsGrid}>
          {steps.map((step, idx) => (
            <ExperienceStepCard
              key={idx}
              step={step}
              delay={idx * 0.1}
            />
          ))}
        </div>

        {/* Concierge Note */}
        <div ref={noteRef} className={styles.conciergeNote}>
          <div>
            <strong className={styles.noteTitle}>Our Booking Promise</strong>
            <p className={styles.noteDesc}>
              We do not double-book bridal or major event appointments. Your time slot is reserved entirely for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
