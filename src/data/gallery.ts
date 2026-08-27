/**
 * GLAMOROUS — Gallery Image Manifest
 * Art-directed exhibition catalog of studio artistry and bridal work in Sarai Meer.
 */

export type GalleryCategory = 'all' | 'bridal' | 'makeup' | 'hair' | 'beauty' | 'details'

export interface GalleryImage {
  id: string
  src: string
  alt: string
  title: string
  category: 'bridal' | 'makeup' | 'hair' | 'beauty' | 'details'
  aspectRatio: string
  isFeature?: boolean
  description?: string
}

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'bridal', label: 'Bridal' },
  { id: 'makeup', label: 'Makeup' },
  { id: 'hair', label: 'Hair' },
  { id: 'beauty', label: 'Beauty' },
  { id: 'details', label: 'Details' },
]

export const galleryImages: GalleryImage[] = [
  // ── Bridal ────────────────────────────────────────────────────
  {
    id: 'g-bridal-01',
    src: '/images/bridal/bridal-hero.jpg',
    alt: 'Regal crimson bridal makeup look with intricate kundan jewelry and gold embroidery',
    title: 'Heritage Crimson Bride',
    category: 'bridal',
    aspectRatio: '3/4',
    isFeature: true,
    description: 'High-definition bridal complexion with traditional red lip and ornate gold jewellery setting.',
  },
  {
    id: 'g-bridal-02',
    src: '/images/gallery/bridal/bridal-02.jpg',
    alt: 'Close-up of radiant bridal makeup and intricate eye liner art with jewelry details',
    title: 'Gilded Gaze & Maang Tikka',
    category: 'bridal',
    aspectRatio: '4/5',
    description: 'Delicate gold shadow gradation paired with micro-winged liner and pearl jewellery accents.',
  },
  {
    id: 'g-bridal-03',
    src: '/images/gallery/bridal/bridal-03.jpg',
    alt: 'Full bridal editorial look with delicate champagne dupatta and soft contour',
    title: 'Champagne Veil Editorial',
    category: 'bridal',
    aspectRatio: '16/9',
    isFeature: true,
    description: 'Contemporary pastel bridal glamour styled with a sheer embroidered veil.',
  },
  {
    id: 'g-bridal-04',
    src: '/images/bridal/bridal-portrait.jpg',
    alt: 'Luminous bridal portrait with glowing skin and regal accessories in Sarai Meer',
    title: 'Radiant Royal Portrait',
    category: 'bridal',
    aspectRatio: '3/4',
    description: 'Flawless camera-ready bridal base capturing radiant natural warmth.',
  },
  {
    id: 'g-bridal-05',
    src: '/images/gallery/bridal/bridal-01.jpg',
    alt: 'Classic Indian bride in deep maroon lehenga with sculpted features and matha patti',
    title: 'Maroon Elegance',
    category: 'bridal',
    aspectRatio: '2/3',
    description: 'Timeless traditional bridal glamour with bespoke dupatta draping.',
  },

  // ── Makeup ────────────────────────────────────────────────────
  {
    id: 'g-makeup-01',
    src: '/images/gallery/makeup/makeup-01.jpg',
    alt: 'Soft glam evening makeup with bronze undertones and glossy nude lip',
    title: 'Luminous Bronze Glam',
    category: 'makeup',
    aspectRatio: '16/9',
    isFeature: true,
    description: 'Warm golden hues with seamless blending and velvet satin finish.',
  },
  {
    id: 'g-makeup-02',
    src: '/images/gallery/makeup/makeup-02.jpg',
    alt: 'High-fashion editorial makeup featuring bold feline liner and sculpted cheekbones',
    title: 'Editorial Smoke & Sculpt',
    category: 'makeup',
    aspectRatio: '1/1',
    description: 'Dimensional smokey eye makeup designed for red-carpet and reception lighting.',
  },
  {
    id: 'g-makeup-03',
    src: '/images/gallery/makeup/makeup-03.jpg',
    alt: 'Celebration festive makeup with radiant coral blush and shimmer lid',
    title: 'Festive Coral Radiance',
    category: 'makeup',
    aspectRatio: '3/4',
    description: 'Fresh, breathable event makeup celebrating natural facial architecture.',
  },

  // ── Hair ──────────────────────────────────────────────────────
  {
    id: 'g-hair-01',
    src: '/images/gallery/hair/hair-01.jpg',
    alt: 'Romantic bridal updo styled with delicate baby\'s breath floral arrangement',
    title: 'Floral Romance Chignon',
    category: 'hair',
    aspectRatio: '4/5',
    isFeature: true,
    description: 'Textured bridal bun structured for effortless elegance and veil weight balance.',
  },
  {
    id: 'g-hair-02',
    src: '/images/services/hair.jpg',
    alt: 'Glossy Hollywood waves and voluminous layered styling',
    title: 'Satin Hollywood Waves',
    category: 'hair',
    aspectRatio: '3/4',
    description: 'High-shine, heat-protected bouncy waves with long-lasting hold.',
  },

  // ── Beauty & Skin ─────────────────────────────────────────────
  {
    id: 'g-beauty-01',
    src: '/images/gallery/beauty/beauty-01.jpg',
    alt: 'Luminous post-facial skin glow treatment and minimalist brow grooming',
    title: 'Glass Skin Rejuvenation',
    category: 'beauty',
    aspectRatio: '1/1',
    description: 'Deeply hydrated, revitalized complexion following our signature skincare ritual.',
  },
  {
    id: 'g-beauty-02',
    src: '/images/gallery/beauty/beauty-02.jpg',
    alt: 'Feathered brow lamination and clean natural skin contour',
    title: 'Sculpted Brow & Complexion',
    category: 'beauty',
    aspectRatio: '3/4',
    description: 'Precision brow shaping paired with clean, lightweight skin nourishment.',
  },
  {
    id: 'g-beauty-03',
    src: '/images/services/skin.jpg',
    alt: 'Holistic skin detox and nourishing facial therapy at Glamorous Studio',
    title: 'Botanical Skin Therapy',
    category: 'beauty',
    aspectRatio: '4/5',
    description: 'Restorative skincare treatment infusing organic botanical serums for long-term health.',
  },

  // ── Details & Ornamentation ───────────────────────────────────
  {
    id: 'g-details-01',
    src: '/images/gallery/details/details-01.jpg',
    alt: 'Macro photography of intricate bridal mehendi patterns and traditional bangles',
    title: 'Mehendi & Heritage Bangles',
    category: 'details',
    aspectRatio: '1/1',
    isFeature: true,
    description: 'Delicate henna geometry and traditional bridal adornments.',
  },
  {
    id: 'g-details-02',
    src: '/images/gallery/details/details-02.jpg',
    alt: 'Luxury bridal nail art with soft rose quartz base and micro gold foil accents',
    title: 'Rose Quartz & Gold Leaf Nails',
    category: 'details',
    aspectRatio: '1/1',
    description: 'Hand-crafted gel manicure complementing traditional and contemporary bridal palettes.',
  },
]
