import { SectionLabel } from '@/components/ui/Primitives'
import { bridalStoryPoints } from '@/data/bridal'
import styles from './BridalStorySection.module.css'

export default function BridalStorySection() {
  return (
    <section className={styles.storySection} aria-labelledby="bridal-story-heading">
      <div className="container">
        <div className={styles.grid}>
          {/* Left Column: Visual Moment with Editorial Card */}
          <div className={styles.visualWrapper} data-reveal="scale">
            <div className={styles.portraitCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/bridal/bridal-portrait.jpg"
                alt="Glamorous Studio bespoke bridal makeup artistry with luminous skin in Sarai Meer"
                className={styles.portraitImage}
                loading="lazy"
              />
              <div className={styles.visualBadge}>
                <span className={styles.badgeTag}>PHILOSOPHY OF BRIDAL ARTISTRY</span>
                <p className={styles.badgeText}>
                  &ldquo;A bride should never look disguised — only the most elevated, luminous version of herself.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Pillars */}
          <div className={styles.contentColumn} data-reveal="right">
            <div className={styles.headerBlock}>
              <SectionLabel>THE BRIDAL APPROACH</SectionLabel>
              <h2 id="bridal-story-heading" className={styles.heading}>
                Patience, Artistry &amp; <br />
                <em>Considered Detail.</em>
              </h2>
              <p className={styles.lead}>
                A wedding day is an emotional crescendo. Our bridal atelier in Sarai Meer is founded on the principle that true luxury is patience: listening closely to your desires, honouring your cultural traditions, and crafting an unhurried look that holds seamlessly from ceremony to celebration.
              </p>
            </div>

            {/* Structured Pillars Grid */}
            <div className={styles.pointsGrid} data-stagger>
              {bridalStoryPoints.map((point, index) => (
                <div key={point.id} className={styles.pointItem}>
                  <span className={styles.pointNumber}>0{index + 1}</span>
                  <h3 className={styles.pointTitle}>{point.title}</h3>
                  <span className={styles.pointSubtitle}>{point.subtitle}</span>
                  <p className={styles.pointDesc}>{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
