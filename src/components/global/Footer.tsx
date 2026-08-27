import Link from 'next/link'
import { salon } from '@/data/salon'
import { footerLinks, ctaLink } from '@/data/navigation'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        {/* ── Top ─────────────────────────────────────────────── */}
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <p className={styles.wordmark}>{salon.name}</p>
            <p className={styles.tagline}>Makeup &amp; Beauty</p>
            <p className={styles.description}>
              A boutique beauty studio in Sarai Meer, Uttar Pradesh.
              Crafting considered looks for brides and beauty seekers.
            </p>
          </div>

          {/* Navigation */}
          <nav className={styles.nav} aria-label="Footer navigation">
            <p className={`${styles.navHeading} label`}>Navigate</p>
            <ul className={styles.navLinks} role="list">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className={styles.contact}>
            <p className={`${styles.navHeading} label`}>Find Us</p>

            <address className={styles.address}>
              <p>{salon.address.line1}</p>
              <p>{salon.address.line2}</p>
              <p>{salon.address.city}, {salon.address.state}</p>
              <p>{salon.address.pincode}</p>
            </address>

            <div className={styles.links}>
              <a
                href={`tel:${salon.phone}`}
                className={styles.contactLink}
                aria-label={`Call us at ${salon.phoneDisplay}`}
              >
                {salon.phoneDisplay}
              </a>

              {salon.instagram.map((ig) => (
                <a
                  key={ig.handle}
                  href={ig.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                  aria-label={`Follow ${ig.handle} on Instagram`}
                >
                  {ig.handle}
                </a>
              ))}

              <a
                href={salon.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
                aria-label="View on Google Maps"
              >
                View on Google Maps ↗
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className={styles.cta}>
            <p className={styles.ctaHeadline}>Ready to begin?</p>
            <Link href={ctaLink.href} className={`btn btn-primary ${styles.footerPrimaryBtn}`}>
              Book an Appointment
            </Link>
          </div>
        </div>

        {/* ── Bottom ──────────────────────────────────────────── */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {year} {salon.name}. All rights reserved.
          </p>
          <p className={styles.location}>
            {salon.address.city}, {salon.address.state}, India
          </p>
        </div>
      </div>
    </footer>
  )
}
