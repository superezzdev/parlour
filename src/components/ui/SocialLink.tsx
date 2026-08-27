interface SocialLinkProps {
  platform: 'instagram' | 'whatsapp' | 'maps' | 'phone'
  href: string
  label?: string
  handle?: string
  className?: string
}

export default function SocialLink({
  platform,
  href,
  label,
  handle,
  className = '',
}: SocialLinkProps) {
  const isPhone = platform === 'phone'
  const isExternal = !isPhone

  return (
    <a
      href={href}
      className={`social-link ${className}`}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-sm)',
        color: 'var(--color-coffee)',
        transition: 'color var(--duration-fast) var(--ease-out)',
        textDecoration: 'none',
      }}
    >
      <span>{label || handle || href}</span>
      <span style={{ fontSize: '0.85em', opacity: 0.7 }} aria-hidden="true">
        {isExternal ? '↗' : '→'}
      </span>
    </a>
  )
}
