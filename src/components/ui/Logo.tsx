import Link from 'next/link'
import { salon } from '@/data/salon'

interface LogoProps {
  variant?: 'dark' | 'light' | 'rose'
  size?: 'sm' | 'md' | 'lg'
  withTagline?: boolean
  className?: string
  href?: string
}

export default function Logo({
  variant = 'dark',
  size = 'md',
  withTagline = false,
  className = '',
  href = '/',
}: LogoProps) {
  const colorMap = {
    dark: 'var(--color-espresso)',
    light: 'var(--color-ivory)',
    rose: 'var(--color-rose)',
  }

  const fontSizeMap = {
    sm: '1.25rem',
    md: '1.75rem',
    lg: '2.5rem',
  }

  const content = (
    <div
      className={`logo-root ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textDecoration: 'none',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: fontSizeMap[size],
          fontWeight: 300,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: colorMap[variant],
          lineHeight: 1.1,
          transition: 'color var(--duration-fast) var(--ease-out)',
        }}
      >
        {salon.name}
      </span>
      {withTagline && (
        <span
          style={{
            fontFamily: 'var(--font-label)',
            fontSize: 'var(--text-label)',
            fontWeight: 500,
            letterSpacing: 'var(--label-tracking)',
            textTransform: 'uppercase',
            color: 'var(--color-rose)',
            marginTop: '0.25rem',
          }}
        >
          Makeup &amp; Beauty
        </span>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} aria-label={`${salon.name} — Home`}>
        {content}
      </Link>
    )
  }

  return content
}
