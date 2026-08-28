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
          background: 'var(--color-elevated)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(250, 247, 242, 0.08)',
        }}
      >
        <div>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', color: '#F0EAE0', margin: 0 }}>
            {title}
          </p>
          <p className="caption" style={{ margin: 0, color: '#7A7066' }}>{subtitle}</p>
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
          backgroundColor: 'rgba(8, 8, 8, 0.92)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(250, 247, 242, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        aria-label="Quick booking"
      >
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)', color: '#F0EAE0' }}>
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
        background: 'var(--color-elevated)',
        border: '1px solid rgba(250, 247, 242, 0.08)',
        borderRadius: 'var(--radius-xl)',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--space-4)',
      }}
    >
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-display-sm)', fontWeight: 300, color: '#F0EAE0', margin: 0 }}>
        {title}
      </h3>
      <p className="lead" style={{ maxWidth: '50ch', margin: 0, color: 'rgba(250, 247, 242, 0.7)' }}>
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
          className="btn btn-whatsapp"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span>WhatsApp Booking</span>
        </a>
      </div>
    </div>
  )
}
