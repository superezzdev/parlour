/**
 * GLAMOROUS — Bridal Page Data
 * Editable content model for the Bridal Experience flagship page.
 *
 * ⚠️ PLACEHOLDER NOTICE:
 * Package pricing and specific policies are editable drafts and will be confirmed with the owner.
 */

export interface BridalStoryPoint {
  id: string
  title: string
  subtitle: string
  description: string
}

export interface BridalStep {
  number: string
  title: string
  subtitle: string
  description: string
  timeline?: string
}

export interface BridalGalleryItem {
  id: string
  src: string
  alt: string
  title: string
  category: 'portraits' | 'eyes' | 'hair' | 'jewellery' | 'looks'
  aspectRatio: string
  spanCol?: string
}

export interface BridalPackage {
  id: string
  number: string
  name: string
  subtitle?: string
  description?: string
  includes: string[]
  idealFor?: string
  price: string
  priceLabel?: string
  isSignature?: boolean
}

export interface BridalFAQ {
  id: string
  question: string
  answer: string
}

/** Story section focus points */
export const bridalStoryPoints: BridalStoryPoint[] = [
  {
    id: 'story-consult',
    title: 'Consultation & Planning',
    subtitle: 'Understanding what you want',
    description:
      'We sit down for an unhurried chat about your wedding outfits, jewelry, skin type, and the look you want to achieve.',
  },
  {
    id: 'story-look',
    title: 'Desired Look & Style',
    subtitle: 'Matching tradition with your personal taste',
    description:
      'Whether you want a classic royal red bride look, soft champagne glow, or modern glam, we plan every detail to match your outfits.',
  },
  {
    id: 'story-artistry',
    title: 'Precision Makeup Artistry',
    subtitle: 'Skin-first, camera-ready finish',
    description:
      'Using long-lasting, waterproof products suited for Indian wedding lights and ceremonies, we give you a lightweight base that looks flawless in person and in photos.',
  },
  {
    id: 'story-hair',
    title: 'Hair Styling & Draping',
    subtitle: 'Bridal buns, curls & secure dupatta draping',
    description:
      'From traditional floral buns to soft open waves, paired with secure, balanced dupatta and maang tikka pinning that stays comfortable all day.',
  },
  {
    id: 'story-finishing',
    title: 'Finishing Details & Touch-Ups',
    subtitle: 'Every jewel and lash in place',
    description:
      'We take our time in the final moments — setting jewelry, perfecting lipstick, and giving you quick touch-up tips for the day.',
  },
  {
    id: 'story-confidence',
    title: 'Calm & Confidence',
    subtitle: 'The moment you look in the mirror',
    description:
      'More than makeup, our studio offers a calm, friendly space where you can relax, take a breath, and feel completely ready for your big day.',
  },
]

/** The 4-step bridal process */
export const bridalProcessSteps: BridalStep[] = [
  {
    number: '01',
    title: 'CONSULT',
    subtitle: 'Outfit & Style Consultation',
    description:
      'We discuss your bridal lehenga or saree, jewelry colors, event lighting, and skin preferences to plan your personalized bridal look.',
    timeline: '4–8 weeks before',
  },
  {
    number: '02',
    title: 'PREPARE',
    subtitle: 'Skin Prep & Trial Session',
    description:
      'A dedicated trial to test foundation shades, eye makeup, and hairstyles. We also suggest simple skin prep steps so your skin is glowing on your wedding day.',
    timeline: '2–4 weeks before',
  },
  {
    number: '03',
    title: 'CREATE',
    subtitle: 'Your Wedding Day Look',
    description:
      'On your wedding day, we take our time creating your look with a long-lasting bridal base, waterproof formulas, eye design tailored to your features, and colors chosen to complement your lehenga.',
    timeline: 'Day of celebration',
  },
  {
    number: '04',
    title: 'REVEAL',
    subtitle: 'Final Dupatta Pinning & Reveal',
    description:
      'Final dupatta and matha patti pinning, delicate finishing touches, and that special moment when you see your complete look in the mirror.',
    timeline: 'Final Reveal & Entry',
  },
]

/** Alias for backward compatibility */
export const bridalProcess = bridalProcessSteps

/** Bridal gallery showcase items */
export const bridalGalleryShowcase: BridalGalleryItem[] = [
  {
    id: 'bg-01',
    src: '/images/bridal/bridal-hero.jpg',
    alt: 'Regal bridal portrait with ornate gold embroidery and flawless complexion',
    title: 'Regal Crimson & Kundan',
    category: 'portraits',
    aspectRatio: '4/5',
  },
  {
    id: 'bg-02',
    src: '/images/bridal/bridal-portrait.jpg',
    alt: 'Glowing bridal beauty close-up featuring sculpted features and bridal maang tikka',
    title: 'Radiant Bride in Heritage Gold',
    category: 'portraits',
    aspectRatio: '3/4',
  },
  {
    id: 'bg-03',
    src: '/images/gallery/bridal/bridal-02.jpg',
    alt: 'Detailed eye makeup with soft gold shimmer and precision winged liner',
    title: 'Golden Shimmer Eye Artistry',
    category: 'eyes',
    aspectRatio: '1/1',
  },
  {
    id: 'bg-04',
    src: '/images/gallery/hair/hair-01.jpg',
    alt: 'Intricate bridal hair updo adorned with fresh floral baby\'s breath',
    title: 'Floral Romance Chignon',
    category: 'hair',
    aspectRatio: '4/5',
  },
  {
    id: 'bg-05',
    src: '/images/gallery/details/details-01.jpg',
    alt: 'Close-up of bridal mehendi details, floral accessories, and kundan bangles',
    title: 'Mehendi & Ornamentation',
    category: 'jewellery',
    aspectRatio: '1/1',
  },
  {
    id: 'bg-06',
    src: '/images/gallery/bridal/bridal-03.jpg',
    alt: 'Complete bridal editorial look with softly draped veil and glowing finish',
    title: 'Champagne Veil Full Editorial',
    category: 'looks',
    aspectRatio: '16/9',
  },
]

/** Bridal package tiers */
export const bridalPackages: BridalPackage[] = [
  {
    id: 'pkg-essential',
    number: '01',
    name: 'Essential Bridal',
    subtitle: 'Solo ceremony makeup + basic hair',
    price: 'From ₹4,000',
    includes: [
      'Solo ceremony makeup & lightweight skin prep',
      'Basic bridal hair styling & setting',
      'Lash application & eyebrow definition',
      'Essential dupatta pinning',
    ],
  },
  {
    id: 'pkg-full-bridal',
    number: '02',
    name: 'Full Bridal',
    subtitle: 'Makeup + hair + dupatta draping',
    price: 'From ₹6,500',
    isSignature: true,
    includes: [
      'HD waterproof bridal makeup with contour & highlight',
      'Elaborate bridal hair styling with floral placement',
      'Traditional dupatta draping & veil styling',
      'Complete jewelry & accessory pinning',
    ],
  },
  {
    id: 'pkg-complete-journey',
    number: '03',
    name: 'Complete Bridal Journey',
    subtitle: 'Pre-bridal + trial + ceremony + reception',
    price: 'From ₹12,000',
    includes: [
      'Pre-bridal skin consultation & custom prep plan',
      'Full bridal trial session for makeup and hair',
      'Main ceremony & reception makeup artistry',
      'Multi-event hair styling & complete draping',
    ],
  },
]

/** Bridal FAQ items */
export const bridalFAQs: BridalFAQ[] = [
  {
    id: 'faq-early',
    question: 'How early should I book?',
    answer:
      'We recommend booking 2 to 6 months in advance, especially during the peak wedding season (October through March). Because we only take a limited number of brides each day to give you our undivided attention, dates fill up quickly.',
  },
  {
    id: 'faq-trials',
    question: 'Do you offer trials?',
    answer:
      'Yes, we highly recommend bridal trial sessions. During the trial, we test foundation shades against your skin tone, try eye makeup styles and lip colors, and create sample hairstyles with your jewelry reference photos so you feel 100% confident on your wedding day.',
  },
  {
    id: 'faq-bring',
    question: 'What should I bring to my consultation?',
    answer:
      'Please bring photos of your bridal outfits, jewelry sets (or reference pictures), fabric swatches if you have them, and a few pictures of makeup styles you like. If you have sensitive skin or allergies, let us know so we can prepare suitable products.',
  },
  {
    id: 'faq-custom',
    question: 'Can I discuss a custom look?',
    answer:
      'Of course! Every bride has her own style, facial features, and comfort level. Whether you prefer a soft dewy glow, defined smokey eyes, or a traditional royal look, we tailor every detail to what suits you best.',
  },
  {
    id: 'faq-combine',
    question: 'What services can be combined?',
    answer:
      'You can combine your bridal makeup with pre-bridal skin care, hydrating facials, body polishing, hair treatments, manicures, and nail art. We also take bookings for family members and bridesmaids upon advance notice.',
  },
]
