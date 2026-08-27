import { SectionLabel } from '@/components/ui/Primitives'
import { bridalProcessSteps } from '@/data/bridal'
import styles from './BridalProcessSection.module.css'

export default function BridalProcessSection() {
  return (
    <section className={styles.processSection} aria-labelledby="bridal-process-heading">
      <div className="container">
        {/* Editorial Section Header */}
        <div className={styles.header} data-reveal="fade">
          <SectionLabel>STEP-BY-STEP METHODOLOGY</SectionLabel>
          <h2 id="bridal-process-heading" className={styles.title}>
            The Four Chapters of Your Bridal Transformation.
          </h2>
          <p className={styles.subtitle}>
            A considered, structured progression crafted to eliminate wedding-day stress, align every creative detail in advance, and deliver enduring radiance.
          </p>
        </div>

        {/* 4 Process Columns with Strong Typography */}
        <div className={styles.stepsGrid} data-stagger>
          {bridalProcessSteps.map((step) => (
            <article key={step.number} className={styles.stepCard}>
              <div className={styles.numberRow}>
                <span className={styles.stepNumber}>{step.number}</span>
                {step.timeline && <span className={styles.timelineTag}>{step.timeline}</span>}
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <span className={styles.stepSubtitle}>{step.subtitle}</span>
              <p className={styles.stepDescription}>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
