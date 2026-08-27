import { SectionLabel } from '@/components/ui/Primitives'
import styles from './AboutExperience.module.css'

export default function AboutExperience() {
  const steps = [
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
        <div className={styles.headerBlock} data-reveal>
          <SectionLabel>03 / THE EXPERIENCE</SectionLabel>
          <h2 id="experience-heading" className={styles.heading}>
            Unhurried, serene, bespoke.
            <em>From first greeting to final reveal.</em>
          </h2>
          <p className={styles.subText}>
            We believe your beauty session should feel like a calming retreat from the busy world outside.
            Every appointment is paced with luxury patience so you never feel rushed.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className={styles.stepsGrid}>
          {steps.map((step, idx) => (
            <div key={idx} className={styles.stepCard} data-reveal>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>

        {/* Concierge Note */}
        <div className={styles.conciergeNote} data-reveal>
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
