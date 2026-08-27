interface ParallaxImageProps {
  src?: string | null
  alt: string
  speed?: number
  aspectRatio?: string
  className?: string
}

export default function ParallaxImage({
  src,
  alt,
  speed = 0.25,
  aspectRatio = '16/9',
  className = '',
}: ParallaxImageProps) {
  return (
    <div
      className={`parallax-container ${className}`}
      style={{ overflow: 'hidden', position: 'relative', aspectRatio }}
    >
      <div
        data-parallax={String(speed)}
        style={{
          width: '100%',
          height: '120%',
          position: 'absolute',
          top: '-10%',
          left: 0,
        }}
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
    </div>
  )
}
