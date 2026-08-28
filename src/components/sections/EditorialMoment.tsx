'use client'

import { useScrollReveal, useImageClipReveal } from '@/hooks/useScrollReveal'
import styles from './EditorialMoment.module.css'

interface EditorialMomentProps {
  imageSrc?: string
  imageAlt?: string
  tag?: string
  headline?: string
}

export default function EditorialMoment({
  imageSrc = '/images/hero/editorial-moment.jpg',
  imageAlt = 'Glamorous editorial beauty moment — bridal beauty artistry in Sarai Meer',
  tag = 'THE ART OF REFINEMENT',
  headline = 'Every detail composed with quiet intention.',
}: EditorialMomentProps) {
  const mediaRef = useImageClipReveal<HTMLDivElement>()
  const badgeRef = useScrollReveal<HTMLDivElement>({ y: 40, delay: 0.15 })

  return (
    <section className={styles.momentSection} aria-label="Editorial beauty showcase">
      {/* Full-bleed media container */}
      <div ref={mediaRef} className={styles.mediaContainer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={imageAlt}
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      {/* Minimalistic Editorial Floating Badge */}
      <div className={`container ${styles.contentContainer}`}>
        <div ref={badgeRef} className={styles.minimalBadge}>
          <span className={styles.tag}>{tag}</span>
          <p className={styles.headline}>&ldquo;{headline}&rdquo;</p>
        </div>
      </div>
    </section>
  )
}
