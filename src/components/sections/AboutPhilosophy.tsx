import { SectionLabel } from '@/components/ui/Primitives'
import styles from './AboutPhilosophy.module.css'

export default function AboutPhilosophy() {
  return (
    <section className={styles.philosophy} aria-labelledby="philosophy-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* Text Content */}
          <div className={styles.textContent} data-reveal>
            <SectionLabel>01 / THE PHILOSOPHY</SectionLabel>

            <h2 id="philosophy-heading" className={styles.heading}>
              Beauty is not applied.
              <em>It is revealed.</em>
            </h2>

            <p className={styles.leadText}>
              We approach every face with patience, deep observation, and reverence. True beauty is never
              about masking features; it is an intimate collaboration that honors individual facial
              architecture, skin vitality, and personal confidence.
            </p>

            <div className={styles.pillarsGrid}>
              <div className={styles.pillarCard}>
                <span className={styles.pillarNumber}>01</span>
                <h3 className={styles.pillarTitle}>Mindful Artistry</h3>
                <p className={styles.pillarDescription}>
                  Precision over haste. Every tone, stroke, and highlight is placed with deliberate intent.
                </p>
              </div>

              <div className={styles.pillarCard}>
                <span className={styles.pillarNumber}>02</span>
                <h3 className={styles.pillarTitle}>Skin-First Rituals</h3>
                <p className={styles.pillarDescription}>
                  Luminous, deeply prepared skin that feels breathable, weightless, and alive in all lighting.
                </p>
              </div>

              <div className={styles.pillarCard}>
                <span className={styles.pillarNumber}>03</span>
                <h3 className={styles.pillarTitle}>Timeless Grace</h3>
                <p className={styles.pillarDescription}>
                  Transcending fleeting trends to craft elegance that endures across years and cherished photographs.
                </p>
              </div>
            </div>
          </div>

          {/* Visual Frame */}
          <div className={styles.visualFrame} data-reveal>
            <div className={styles.imageWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/about/about-artistry.jpg"
                alt="Close-up detail of mindful makeup artistry and precision brushwork"
                className={styles.image}
                loading="lazy"
              />
            </div>
            <aside className={styles.quotePill}>
              <p className={styles.quoteText}>
                &ldquo;Every face is an unwritten canvas of grace.&rdquo;
              </p>
              <span className={styles.quoteAuthor}>Studio Creed · Sarai Meer</span>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
