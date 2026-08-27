import Link from 'next/link'
import type { Service } from '@/data/services'

interface ServiceCardProps {
  service: Service
  className?: string
}

export default function ServiceCard({ service, className = '' }: ServiceCardProps) {
  return (
    <div
      className={`service-card card ${className}`}
      style={{
        padding: 'var(--space-8)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        minHeight: '260px',
        backgroundColor: 'var(--color-bone)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
      }}
    >
      <div>
        {service.isSignature && (
          <span
            className="label"
            style={{ marginBottom: 'var(--space-4)', fontSize: '0.625rem' }}
          >
            Signature
          </span>
        )}
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-display-sm)',
            fontWeight: 300,
            color: 'var(--color-espresso)',
            marginBottom: 'var(--space-3)',
            lineHeight: 1.2,
          }}
        >
          {service.name}
        </h3>
        <p
          className="body-text"
          style={{ fontSize: 'var(--text-sm)', color: 'var(--color-coffee)' }}
        >
          {service.description}
        </p>
      </div>

      <div
        style={{
          marginTop: 'var(--space-6)',
          paddingTop: 'var(--space-4)',
          borderTop: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span className="caption" style={{ color: 'var(--color-taupe)' }}>
          {service.duration || 'Consultation'}
        </span>
        <Link
          href="/contact"
          className="btn btn-ghost"
          style={{ fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.06em' }}
        >
          Enquire →
        </Link>
      </div>
    </div>
  )
}
