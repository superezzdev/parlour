import Link from 'next/link'
import { salon } from '@/data/salon'
import { ctaLink } from '@/data/navigation'

interface BookingCTAProps {
  title?: string
  subtitle?: string
  variant?: 'banner' | 'compact' | 'sticky'
  className?: string
}

export default function BookingCTA({
  title = 'Ready to elevate your beauty?',
  subtitle = 'Appointments available by advance booking and consultation.',
  variant = 'banner',
  className = '',
}: BookingCTAProps) {
  if (variant === 'compact') {
    return (
      <div
        className={`booking-cta-compact ${className}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'var(--space-6)',
          background: 'var(--color-bone)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
        }}
      >
        <div>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: 'var(--color-espresso)', margin: 0 }}>
            {title}
          </p>
          <p className="caption" style={{ margin: 0 }}>{subtitle}</p>
        </div>
        <Link href={ctaLink.href} className="btn btn-primary btn-sm">
          {ctaLink.label}
        </Link>
      </div>
    )
  }

  if (variant === 'sticky') {
    return (
      <aside
        className={`booking-cta-sticky ${className}`}
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 30,
          padding: 'var(--space-3) var(--space-6)',
          backgroundColor: 'var(--color-surface)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        aria-label="Quick booking"
      >
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', color: 'var(--color-espresso)' }}>
          {salon.name} Studio
        </span>
        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
          <a href={`tel:${salon.phone}`} className="btn btn-ghost btn-sm">
            Call
          </a>
          <Link href={ctaLink.href} className="btn btn-primary btn-sm">
            Book
          </Link>
        </div>
      </aside>
    )
  }

  return (
    <div
      className={`booking-cta-banner ${className}`}
      style={{
        padding: 'clamp(3rem, 6vw, 5rem) var(--space-8)',
        background: 'var(--color-bone)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-xl)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-4)',
      }}
    >
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-sm)', fontWeight: 300, color: 'var(--color-espresso)', margin: 0 }}>
        {title}
      </h3>
      <p className="lead" style={{ maxWidth: '50ch', margin: 0 }}>
        {subtitle}
      </p>
      <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-4)', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link href={ctaLink.href} className="btn btn-filled">
          {ctaLink.label}
        </Link>
        <a
          href={salon.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          WhatsApp Booking
        </a>
      </div>
    </div>
  )
}
