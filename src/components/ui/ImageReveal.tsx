interface ImageRevealProps {
  src?: string | null
  alt: string
  aspectRatio?: string
  className?: string
  parallaxSpeed?: number
  loading?: 'lazy' | 'eager'
}

export default function ImageReveal({
  src,
  alt,
  aspectRatio = '4/5',
  className = '',
  parallaxSpeed,
  loading = 'lazy',
}: ImageRevealProps) {
  return (
    <div
      className={`image-reveal-wrapper ${className}`}
      style={{ aspectRatio }}
      {...(parallaxSpeed ? { 'data-parallax': String(parallaxSpeed) } : {})}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading={loading}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(135deg, var(--color-champagne) 0%, var(--color-bone) 50%, var(--color-parchment) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-taupe)',
            fontSize: 'var(--text-xs)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-label)',
          }}
          role="presentation"
        >
          <span>{alt || 'Editorial visual'}</span>
        </div>
      )}
    </div>
  )
}
