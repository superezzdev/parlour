import { salon } from '@/data/salon'
import BookingForm from './BookingForm'
import styles from './ContactDetailsSection.module.css'

export default function ContactDetailsSection() {
  return (
    <section className={styles.contactSection} aria-label="Contact and booking section">
      <div className="container">
        {/* Quick Action Buttons (Bar) */}
        <div className={styles.actionBar} data-reveal>
          {/* 1. CALL NOW */}
          <a
            href={`tel:${salon.phone}`}
            className={styles.actionCard}
            aria-label={`Call Glamorous Studio at ${salon.phoneDisplay}`}
          >
            <div className={styles.actionIconBox} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <span className={styles.actionLabel}>CALL DIRECTLY</span>
              <strong className={styles.actionValue}>{salon.phoneDisplay}</strong>
            </div>
          </a>

          {/* 2. WHATSAPP */}
          <a
            href={salon.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionCard}
            aria-label="Chat with Glamorous Studio on WhatsApp"
          >
            <div className={styles.actionIconBox} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <div>
              <span className={styles.actionLabel}>WHATSAPP CHAT</span>
              <strong className={styles.actionValue}>Instant Concierge</strong>
            </div>
          </a>

          {/* 3. GET DIRECTIONS */}
          <a
            href={salon.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.actionCard}
            aria-label="Get directions to Glamorous Studio on Google Maps"
          >
            <div className={styles.actionIconBox} aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
            </div>
            <div>
              <span className={styles.actionLabel}>LIVE NAVIGATION</span>
              <strong className={styles.actionValue}>Get Directions</strong>
            </div>
          </a>
        </div>

        {/* Main Grid: Form + Studio Details */}
        <div className={styles.mainGrid}>
          {/* Left Column: The Concierge Booking Form */}
          <div data-reveal>
            <BookingForm />
          </div>

          {/* Right Column: Studio Information, Map, and Concierge Notes */}
          <div className={styles.sideColumn} data-reveal>
            {/* Details Card */}
            <div className={styles.detailsCard}>
              <h2 className={styles.cardTitle}>Glamorous (makeup &amp; beauty)</h2>

              {/* Exact Address */}
              <address className={styles.addressBlock}>
                <p className={styles.addressHighlight}>1st Floor, Mumtaz Bangle Store</p>
                <p>Sabji Mandi Rd</p>
                <p>Sarai Meer</p>
                <p>Uttar Pradesh 276305</p>
              </address>

              {/* Hours */}
              <div className={styles.hoursBlock}>
                <span className={styles.blockLabel}>STUDIO HOURS</span>
                {salon.hours.map((h, i) => (
                  <div key={i} className={styles.hoursRow}>
                    <span>{h.day}</span>
                    <span>{h.hours}</span>
                  </div>
                ))}
              </div>

              {/* Social / Instagram */}
              <div className={styles.instagramBlock}>
                <span className={styles.blockLabel}>INSTAGRAM ATELIERS</span>
                {salon.instagram.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.instagramLink}
                    aria-label={`Visit ${item.name || item.label} on Instagram`}
                  >
                    <svg className={styles.instaIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    <div className={styles.instaInfo}>
                      <span className={styles.instaName}>{item.name || item.label}</span>
                      <span className={styles.instaHandle}>{item.handle}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Map Frame Card */}
            <div className={styles.mapCard}>
              <a
                href={salon.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapFrame}
                aria-label="Open Glamorous Studio location in Google Maps"
              >
                <div className={styles.mapBg} aria-hidden="true" />
                <div className={styles.mapPinCenter} aria-hidden="true">
                  <svg className={styles.pinIcon} width="36" height="44" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
              </a>
              <div className={styles.mapFooter}>
                <span className={styles.mapFooterText}>Sabji Mandi Rd · Sarai Meer</span>
                <span className={styles.mapFooterAction}>OPEN LIVE MAP &rarr;</span>
              </div>
            </div>

            {/* Luxury Preparation Concierge Note */}
            <div className={styles.prepNote}>
              <h3 className={styles.prepTitle}>Before Your Visit</h3>
              <p className={styles.prepText}>
                To ensure a flawless experience, please arrive with clean, moisturized skin.
                For bridal and reception trials, bringing your outfit color swatches and jewelry
                references allows our artists to coordinate your look seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
