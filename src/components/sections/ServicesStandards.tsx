'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import styles from './ServicesStandards.module.css'

const standards = [
  {
    number: '01',
    title: '100% Genuine Brands',
    description: 'Exclusively authentic luxury products including MAC, Huda Beauty, Kryolan, and PAC.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Hygiene & Sanitized Tools',
    description: 'Every brush, sponge, and tool is thoroughly sterilized before every appointment.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Personalized Artistry',
    description: 'Custom shade blending and tailored styling respecting your skin tone and features.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Dedicated 1:1 Care',
    description: 'Unhurried time slots with zero rushed overlaps, giving you full undivided attention.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

export default function ServicesStandards() {
  const containerRef = useScrollReveal<HTMLDivElement>({ y: 25, delay: 0.1 })

  return (
    <section className={styles.standardsSection} aria-label="Studio Standards & Promises">
      <div className="container">
        <div ref={containerRef} className={styles.standardsGrid}>
          {standards.map((item) => (
            <div key={item.number} className={styles.standardCard}>
              <div className={styles.cardHeader}>
                <span className={styles.cardNumber}>{item.number}</span>
                <span className={styles.cardIcon}>{item.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
