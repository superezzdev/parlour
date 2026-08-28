'use client'

import { SectionLabel } from '@/components/ui/Primitives'
import { bridalProcessSteps } from '@/data/bridal'
import { useScrollReveal, useHeadingReveal } from '@/hooks/useScrollReveal'
import styles from './BridalProcessSection.module.css'

function BridalProcessCard({ step, delay }: { step: (typeof bridalProcessSteps)[0]; delay: number }) {
  const cardRef = useScrollReveal<HTMLElement>({ delay, y: 35 })

  return (
    <article ref={cardRef} className={styles.stepCard}>
      <div className={styles.numberRow}>
        <span className={styles.stepNumber}>{step.number}</span>
        {step.timeline && <span className={styles.timelineTag}>{step.timeline}</span>}
      </div>
      <h3 className={styles.stepTitle}>{step.title}</h3>
      <span className={styles.stepSubtitle}>{step.subtitle}</span>
      <p className={styles.stepDescription}>{step.description}</p>
    </article>
  )
}

export default function BridalProcessSection() {
  const headingRef = useHeadingReveal<HTMLHeadingElement>()
  const subtitleRef = useScrollReveal<HTMLParagraphElement>({ y: 30, delay: 0.1 })

  return (
    <section className={styles.processSection} aria-labelledby="bridal-process-heading">
      <div className="container">
        {/* Editorial Section Header */}
        <div className={styles.header}>
          <SectionLabel>STEP-BY-STEP METHODOLOGY</SectionLabel>
          <div className="overflow-hidden">
            <h2 id="bridal-process-heading" ref={headingRef} className={`${styles.title} section-heading`}>
              The Four Chapters of Your Bridal Transformation.
            </h2>
          </div>
          <p ref={subtitleRef} className={styles.subtitle}>
            A considered, structured progression crafted to eliminate wedding-day stress, align every creative detail in advance, and deliver enduring radiance.
          </p>
        </div>

        {/* 4 Process Columns with Strong Typography */}
        <div className={styles.stepsGrid}>
          {bridalProcessSteps.map((step, idx) => (
            <BridalProcessCard
              key={step.number}
              step={step}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
