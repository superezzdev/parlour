'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from './StatsSection.module.css'

interface StatItemData {
  value: string
  suffix?: string
  label: string
}

const statsData: StatItemData[] = [
  { value: '500', suffix: '+', label: 'Happy Brides' },
  { value: '6', suffix: '', label: 'Years of Craft' },
  { value: '98', suffix: '%', label: 'Satisfaction Rate' },
  { value: '12', suffix: '+', label: 'Services Offered' },
]

function StatCard({ item, index }: { item: StatItemData; index: number }) {
  const cardRef = useScrollReveal<HTMLDivElement>({
    y: 20,
    delay: 0.08 * index,
    duration: 0.7,
  })

  return (
    <div ref={cardRef} className={styles.statCard}>
      <div className={styles.numberWrapper}>
        <span className={styles.number}>{item.value}</span>
        {item.suffix && <span className={styles.suffix}>{item.suffix}</span>}
      </div>
      <div className={styles.divider} aria-hidden="true" />
      <p className={styles.label}>{item.label}</p>
    </div>
  )
}

export default function StatsSection() {
  const eyebrowRef = useScrollReveal<HTMLDivElement>({ y: 15, delay: 0 })
  const quoteRef = useScrollReveal<HTMLDivElement>({ y: 20, delay: 0.25 })

  return (
    <section className={styles.statsSection} aria-label="Glamorous by the numbers">
      <div className={styles.topDivider} aria-hidden="true" />

      <div className="container">
        {/* Eyebrow */}
        <div ref={eyebrowRef} className={styles.eyebrowWrapper}>
          <p className={styles.eyebrow}>BY THE NUMBERS</p>
        </div>

        {/* 4 Stats Grid */}
        <div className={styles.grid}>
          {statsData.map((item, idx) => (
            <StatCard key={idx} item={item} index={idx} />
          ))}
        </div>

        {/* Centered Italic Quote */}
        <div ref={quoteRef} className={styles.quoteBlock}>
          <blockquote className={styles.quote}>
            &ldquo;I want every woman who sits in my chair to feel completely at ease, confident, and beautiful.&rdquo;
          </blockquote>
          <cite className={styles.quoteAuthor}>
            &mdash; Sabreen, Glamorous Studio
          </cite>
        </div>
      </div>
    </section>
  )
}

export { StatsSection }
