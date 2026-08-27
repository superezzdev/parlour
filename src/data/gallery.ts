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
    src: null,
    alt: 'Bridal makeup look with traditional red and gold eye detail',
    category: 'bridal',
    aspectRatio: '2/3',
    isFeature: true,
    placeholder: true,
  },
  {
    id: 'g-bridal-02',
    src: null,
    alt: 'Close-up of bridal eye makeup with intricate liner and jewelled accent',
    category: 'bridal',
    aspectRatio: '1/1',
    placeholder: true,
  },
  {
    id: 'g-bridal-03',
    src: null,
    alt: 'Full bridal look — warm tones, nude lips, defined brows',
    category: 'bridal',
    aspectRatio: '4/5',
    placeholder: true,
  },
  {
    id: 'g-bridal-04',
    src: null,
    alt: 'Bridal portrait, soft light, glowing skin',
    category: 'bridal',
    aspectRatio: '2/3',
    placeholder: true,
  },

  // ── Makeup ────────────────────────────────────────────────────
  {
    id: 'g-makeup-01',
    src: null,
    alt: 'Soft glam makeup with warm bronze tones',
    category: 'makeup',
    aspectRatio: '2/3',
    isFeature: true,
    placeholder: true,
  },
  {
    id: 'g-makeup-02',
    src: null,
    alt: 'Party makeup look — bold lashes and defined contouring',
    category: 'makeup',
    aspectRatio: '1/1',
    placeholder: true,
  },
  {
    id: 'g-makeup-03',
    src: null,
    alt: 'Natural day makeup with fresh skin and subtle colour',
    category: 'makeup',
    aspectRatio: '3/4',
    placeholder: true,
  },

  // ── Hair ──────────────────────────────────────────────────────
  {
    id: 'g-hair-01',
    src: null,
    alt: 'Bridal hair updo with floral pins and soft curls',
    category: 'hair',
    aspectRatio: '2/3',
    isFeature: true,
    placeholder: true,
  },
  {
    id: 'g-hair-02',
    src: null,
    alt: 'Elegant side braid for a sangeet ceremony',
    category: 'hair',
    aspectRatio: '3/4',
    placeholder: true,
  },

  // ── Beauty ────────────────────────────────────────────────────
  {
    id: 'g-beauty-01',
    src: null,
    alt: 'Skincare glow treatment — luminous after-effect',
    category: 'beauty',
    aspectRatio: '1/1',
    placeholder: true,
  },
  {
    id: 'g-beauty-02',
    src: null,
    alt: 'Close-up of brow shaping and grooming',
    category: 'beauty',
    aspectRatio: '3/4',
    placeholder: true,
  },

  // ── Details ───────────────────────────────────────────────────
  {
    id: 'g-details-01',
    src: null,
    alt: 'Close-up of bridal maang tikka and jewellery detail',
    category: 'details',
    aspectRatio: '1/1',
    isFeature: true,
    placeholder: true,
  },
  {
    id: 'g-details-02',
    src: null,
    alt: 'Henna patterns on bridal hands',
    category: 'details',
    aspectRatio: '1/1',
    placeholder: true,
  },
  {
    id: 'g-details-03',
    src: null,
    alt: 'Red bridal lips — close-up detail',
    category: 'details',
    aspectRatio: '3/2',
    placeholder: true,
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
