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
      title: 'The Intimate Listening',
      description:
        'We begin by understanding your personality, event ambiance, lighting conditions, outfit fabric, and comfort preferences.',
    },
    {
      number: '02',
      title: 'Skin Preparation & Ritual',
      description:
        'Targeted hydration, botanical primers, and lymphatic cooling that awaken skin vitality and create an enduring smooth canvas.',
    },
    {
      number: '03',
      title: 'Layered Artistry',
      description:
        'Meticulous application where color, depth, and contour are built in micro-layers for weightless wear and effortless camera clarity.',
    },
    {
      number: '04',
      title: 'The Mirror Reveal',
      description:
        'The final styling, jewelry placement, and setting mist — culminating in a quiet moment of transformative confidence.',
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
              Unhurried, serene, bespoke.
              <em>From first greeting to final reveal.</em>
            </h2>
          </div>
          <p ref={subTextRef} className={styles.subText}>
            We believe your beauty session should feel like a calming retreat from the busy world outside.
            Every appointment is paced with luxury patience so you never feel rushed.
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
            <strong className={styles.noteTitle}>Our Concierge Promise</strong>
            <p className={styles.noteDesc}>
              We do not double-book critical bridal and event slots. Your appointment time is entirely dedicated to you and your vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
