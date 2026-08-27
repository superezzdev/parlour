interface EditorialImageProps {
  src?: string | null
  alt: string
  caption?: string
  aspectRatio?: string
  className?: string
  overlay?: boolean
}

export default function EditorialImage({
  src,
  alt,
  caption,
  aspectRatio = '3/4',
  className = '',
  overlay = false,
}: EditorialImageProps) {
  return (
    <figure
      className={`editorial-image-block ${className}`}
      style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}
    >
      <div
        className={`image-reveal-wrapper ${overlay ? 'image-overlay' : ''}`}
        style={{ aspectRatio }}
      >
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(135deg, var(--color-champagne) 0%, var(--color-bone) 50%, var(--color-parchment) 100%)',
            }}
          />
        )}
      </div>
      {caption && (
        <figcaption
          className="caption"
          style={{ fontStyle: 'italic', color: 'var(--color-mocha)' }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
