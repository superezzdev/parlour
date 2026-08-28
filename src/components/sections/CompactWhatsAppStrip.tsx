'use client'

import { salon } from '@/data/salon'
import styles from './CompactWhatsAppStrip.module.css'

export default function CompactWhatsAppStrip() {
  const whatsappMessage = encodeURIComponent(
    'Hi Glamorous! I have a question regarding your services and appointments.'
  )
  const whatsappUrl = `https://wa.me/${salon.phone.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`

  return (
    <section className={styles.strip} aria-label="WhatsApp quick inquiry">
      <div className="container">
        <div className={styles.inner}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label={`Questions? WhatsApp us: ${salon.phoneDisplay}`}
          >
            <span>Questions? WhatsApp us:</span>
            <span className={styles.phone}>{salon.phoneDisplay}</span>
            <span className={styles.arrow} aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}
