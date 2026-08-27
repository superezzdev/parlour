import { SectionLabel } from '@/components/ui/Primitives'
import styles from './GalleryHero.module.css'

export default function GalleryHero() {
  return (
    <header className={styles.galleryHero} aria-label="Gallery Introduction">
      <div className="container">
        <div className={styles.inner} data-reveal="fade">
          <div className={styles.labelWrapper}>
            <SectionLabel>SELECTED WORK</SectionLabel>
          </div>
          <h1 className={styles.displayTitle}>GLAMOROUS</h1>
          <p className={styles.curatorialNote}>
            An art-directed exhibition of bridal transformations, editorial makeup, couture hairstyling, and finishing craft in Sarai Meer.
          </p>
        </div>
      </div>
    </header>
  )
}
