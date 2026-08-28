import Link from 'next/link'
import { salon } from '@/data/salon'

export default function OfflinePage() {
  return (
    <div
      style={{
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
        textAlign: 'center',
        background: 'var(--color-noir, #080808)',
        color: 'var(--color-ivory, #FAF7F2)',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'var(--color-gold, #C9A86A)',
          marginBottom: '1rem',
        }}
      >
        Offline Mode
      </div>

      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 6vw, 4rem)',
          fontWeight: 300,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
          marginBottom: '1.25rem',
        }}
      >
        You&apos;re Currently <br />
        <span style={{ color: 'var(--color-gold, #C9A86A)', fontStyle: 'italic' }}>
          Offline
        </span>
      </h1>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '1rem',
          color: 'rgba(250, 247, 242, 0.75)',
          maxWidth: '440px',
          lineHeight: 1.6,
          marginBottom: '2.5rem',
        }}
      >
        It looks like you’ve lost connection. You can still reach out to us directly by phone or visit our studio in Sarai Meer.
      </p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          width: '100%',
          maxWidth: '320px',
          marginBottom: '3rem',
        }}
      >
        <a
          href={`tel:${salon.phone}`}
          className="btn btn-primary btn-lg"
          style={{ width: '100%', textAlign: 'center' }}
        >
          Call {salon.phoneDisplay}
        </a>

        <Link
          href="/"
          className="btn btn-secondary btn-lg"
          style={{ width: '100%', textAlign: 'center' }}
        >
          Try Reloading
        </Link>
      </div>

      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8125rem',
          color: 'rgba(250, 247, 242, 0.45)',
          borderTop: '1px solid rgba(250, 247, 242, 0.08)',
          paddingTop: '1.5rem',
        }}
      >
        {salon.name} · {salon.address.formatted}
      </div>
    </div>
  )
}
