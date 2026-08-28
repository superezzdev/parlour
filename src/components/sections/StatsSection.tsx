'use client'

import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './StatsSection.module.css'

interface StatItemData {
  value: number
  suffix: string
  label: string
}

const statsData: StatItemData[] = [
  { value: 500, suffix: '+', label: 'Happy Brides' },
  { value: 6, suffix: '', label: 'Years of Craft' },
  { value: 98, suffix: '%', label: 'Satisfaction Rate' },
  { value: 12, suffix: '+', label: 'Services Offered' },
]

function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, end, duration])

  return { ref, count }
}

function StatCard({ item }: { item: StatItemData }) {
  const { ref, count } = useCounter(item.value)

  return (
    <div ref={ref} className={styles.statCard}>
      <div className={styles.numberWrapper}>
        <span className={styles.number}>{count}</span>
        {item.suffix && <span className={styles.suffix}>{item.suffix}</span>}
      </div>
      <div className={styles.divider} aria-hidden="true" />
      <p className={styles.label}>{item.label}</p>
    </div>
  )
}

export default function StatsSection() {
  return (
    <section className={styles.statsSection} aria-label="Glamorous by the numbers">
      <div className={styles.topDivider} aria-hidden="true" />

      <div className="container">
        {/* Eyebrow */}
        <div className={styles.eyebrowWrapper}>
          <p className={styles.eyebrow}>BY THE NUMBERS</p>
        </div>

        {/* 4 Stats Grid */}
        <div className={styles.grid}>
          {statsData.map((item, idx) => (
            <StatCard key={idx} item={item} />
          ))}
        </div>

        {/* Centered Italic Quote */}
        <div className={styles.quoteBlock}>
          <blockquote className={styles.quote}>
            &ldquo;Every bride deserves to walk in with nerves and walk out with wings.&rdquo;
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
