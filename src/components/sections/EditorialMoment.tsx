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
  return (
    <section className={styles.momentSection} aria-label="Editorial beauty showcase">
      {/* Full-bleed media container */}
      <div className={`${styles.mediaContainer} image-reveal-wrapper`} data-reveal>
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
        <div className={styles.minimalBadge} data-reveal="fade">
          <span className={styles.tag}>{tag}</span>
          <p className={styles.headline}>&ldquo;{headline}&rdquo;</p>
        </div>
      </div>
    </section>
  )
}
