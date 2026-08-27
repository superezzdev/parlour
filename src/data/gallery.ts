/**
 * GLAMOROUS — Gallery Image Manifest
 *
 * ⚠️ PLACEHOLDER NOTICE [G01]:
 * ALL gallery images must be actual Glamorous work — never stock photos.
 * Replace placeholder entries with real images before launch.
 * Images go in: public/images/gallery/{category}/
 */

export type GalleryCategory = 'bridal' | 'makeup' | 'hair' | 'beauty' | 'details'

export interface GalleryImage {
  id: string
  /** Path relative to /public, e.g. /images/gallery/bridal/bridal-look-01.webp */
  src: string | null
  alt: string
  category: GalleryCategory
  /** CSS aspect ratio string, e.g. '2/3' or '1/1' */
  aspectRatio?: string
  isFeature?: boolean
  placeholder?: boolean
}

// [PLACEHOLDER G01] — All entries below are structural placeholders.
// Replace src with actual image paths once provided by the business owner.
export const galleryImages: GalleryImage[] = [
  // ── Bridal ────────────────────────────────────────────────────
  {
    id: 'g-bridal-01',
    src: '/images/gallery/bridal/bridal-01.jpg',
    alt: 'Bridal makeup look with traditional crimson red and gold detailing',
    category: 'bridal',
    aspectRatio: '2/3',
    isFeature: true,
  },
  {
    id: 'g-bridal-02',
    src: '/images/gallery/bridal/bridal-02.jpg',
    alt: 'Close-up of bridal eye makeup with intricate liner and jewellery',
    category: 'bridal',
    aspectRatio: '3/4',
  },
  {
    id: 'g-bridal-03',
    src: '/images/gallery/bridal/bridal-03.jpg',
    alt: 'Full bridal editorial look with delicate champagne veil',
    category: 'bridal',
    aspectRatio: '16/9',
  },
  {
    id: 'g-bridal-04',
    src: '/images/bridal/bridal-portrait.jpg',
    alt: 'Bridal portrait with glowing radiant skin and kundan jewellery',
    category: 'bridal',
    aspectRatio: '3/4',
  },

  // ── Makeup ────────────────────────────────────────────────────
  {
    id: 'g-makeup-01',
    src: '/images/gallery/makeup/makeup-01.jpg',
    alt: 'Soft glam makeup with warm bronze tones and radiant complexion',
    category: 'makeup',
    aspectRatio: '16/9',
    isFeature: true,
  },
  {
    id: 'g-makeup-02',
    src: '/images/gallery/makeup/makeup-02.jpg',
    alt: 'Macro eye makeup detail with shimmering gold lid and winged liner',
    category: 'makeup',
    aspectRatio: '1/1',
  },
  {
    id: 'g-makeup-03',
    src: '/images/gallery/makeup/makeup-03.jpg',
    alt: 'Festive occasion makeup look with glowing skin and jewel tones',
    category: 'makeup',
    aspectRatio: '3/4',
  },

  // ── Hair ──────────────────────────────────────────────────────
  {
    id: 'g-hair-01',
    src: '/images/gallery/hair/hair-01.jpg',
    alt: 'Bridal hair updo with floral baby\'s breath and soft romantic curls',
    category: 'hair',
    aspectRatio: '3/4',
    isFeature: true,
  },
  {
    id: 'g-hair-02',
    src: '/images/gallery/hair/hair-01.jpg',
    alt: 'Intricate braided bridal chignon styling',
    category: 'hair',
    aspectRatio: '3/4',
  },

  // ── Beauty ────────────────────────────────────────────────────
  {
    id: 'g-beauty-01',
    src: '/images/gallery/beauty/beauty-01.jpg',
    alt: 'Skincare glow treatment — luminous fresh skin finish',
    category: 'beauty',
    aspectRatio: '1/1',
  },
  {
    id: 'g-beauty-02',
    src: '/images/gallery/beauty/beauty-02.jpg',
    alt: 'Sculpted brow grooming and natural eye contour',
    category: 'beauty',
    aspectRatio: '1/1',
  },

  // ── Details ───────────────────────────────────────────────────
  {
    id: 'g-details-01',
    src: '/images/gallery/details/details-01.jpg',
    alt: 'Close-up of bridal mehendi patterns and traditional gold bangles',
    category: 'details',
    aspectRatio: '1/1',
    isFeature: true,
  },
  {
    id: 'g-details-02',
    src: '/images/gallery/details/details-02.jpg',
    alt: 'Blush manicured nails with delicate gold leaf details',
    category: 'details',
    aspectRatio: '1/1',
  },
]

export const galleryCategories: { id: string; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'bridal', label: 'Bridal' },
  { id: 'makeup', label: 'Makeup' },
  { id: 'hair', label: 'Hair' },
  { id: 'beauty', label: 'Beauty' },
  { id: 'details', label: 'Details' },
]
