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
  name: string
  subtitle: string
  description: string
  includes: string[]
  idealFor: string
  priceLabel: string
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
    title: 'Consultation & Discovery',
    subtitle: 'Understanding your unique silhouette',
    description:
      'We begin with an unhurried consultation to understand your aesthetic aspirations, wedding attire, jewelry palette, and skin profile.',
  },
  {
    id: 'story-look',
    title: 'Desired Look Architecture',
    subtitle: 'Harmonising tradition and modern grace',
    description:
      'Whether you envision timeless royal crimson, soft ethereal champagne glow, or bold modern glamour, your look is mapped down to every nuance.',
  },
  {
    id: 'story-artistry',
    title: 'Precision Makeup Artistry',
    subtitle: 'Skin-first, camera-ready luminosity',
    description:
      'Using premium, long-wear formulations tailored for Indian lighting and marathon wedding rituals, we create a flawless second-skin finish that photographs impeccably.',
  },
  {
    id: 'story-hair',
    title: 'Couture Hair Sculpting',
    subtitle: 'Intricate updos & veil draping',
    description:
      'From classic floral chignons to contemporary textured cascades, paired with secure, weight-balanced dupatta and maang tikka placement.',
  },
  {
    id: 'story-finishing',
    title: 'Finishing Details & Touch-Ups',
    subtitle: 'Every jewel and lash aligned',
    description:
      'Patience in the final moments — setting jewelry, perfecting the lip line, and providing you with a day-of touch-up routine for complete peace of mind.',
  },
  {
    id: 'story-confidence',
    title: 'Radiant Poise & Confidence',
    subtitle: 'The feeling when you see yourself',
    description:
      'Beyond makeup, our studio environment offers a calm, celebratory sanctuary where you can pause, breathe, and step forward into your defining chapter with supreme poise.',
  },
]

/** The 4-step bridal process */
export const bridalProcessSteps: BridalStep[] = [
  {
    number: '01',
    title: 'CONSULT',
    subtitle: 'Aesthetic Discovery & Palette Mapping',
    description:
      'An in-depth dialogue about your bridal lehenga or saree, jewelry tones, lighting conditions, and skin preferences. We build your personalized bridal moodboard.',
    timeline: '4–8 weeks before',
  },
  {
    number: '02',
    title: 'PREPARE',
    subtitle: 'Skin Conditioning & Trial Session',
    description:
      'A dedicated trial run to calibrate undertones, test textures, and refine hair geometry. We also recommend targeted skin preparation rituals for a luminous wedding day base.',
    timeline: '2–4 weeks before',
  },
  {
    number: '03',
    title: 'CREATE',
    subtitle: 'Patience, Artistry & Wedding Day Focus',
    description:
      'On the day of your celebration, we create your look in a serene, unhurried atmosphere with high-definition application, contouring, and couture hair architecture.',
    timeline: 'Day of celebration',
  },
  {
    number: '04',
    title: 'REVEAL',
    subtitle: 'The Defining Moment of Poise',
    description:
      'Final veil anchoring, matha patti securing, delicate highlighting, and the quiet reveal where you experience the full transformation with effortless radiance.',
    timeline: 'Final moments before entrance',
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
    alt: 'Luminous bridal beauty close-up featuring sculpted features and bridal maang tikka',
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
    title: 'Sculpted Floral Chignon',
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

/** Optional bridal packages (editable structure without hardcoded pricing) */
export const bridalPackages: BridalPackage[] = [
  {
    id: 'pkg-essential',
    name: 'BRIDAL ESSENTIAL',
    subtitle: 'Classic Wedding Day Artistry',
    description:
      'A refined, comprehensive day-of bridal experience designed for brides seeking timeless elegance and seamless execution.',
    idealFor: 'Single-event celebrations and traditional wedding ceremonies',
    priceLabel: 'Pricing upon consultation',
    includes: [
      'Comprehensive pre-event consultation',
      'High-Definition long-wear bridal makeup',
      'Skin preparation and radiance priming',
      'Couture bridal hair styling',
      'Dupatta, veil & jewellery setting',
      'Premium lash application & brow shaping',
    ],
  },
  {
    id: 'pkg-signature',
    name: 'BRIDAL SIGNATURE',
    subtitle: 'The Complete Trial & Ceremony Experience',
    description:
      'Our most requested bridal journey, combining a dedicated trial session with full wedding day luxury and personalized artist attention.',
    idealFor: 'Brides wanting complete peace of mind with prior look refinement',
    priceLabel: 'Pricing upon consultation',
    isSignature: true,
    includes: [
      'In-depth aesthetic consultation & moodboarding',
      'Dedicated full bridal trial session',
      'Luxury bridal makeup with personalized contouring',
      'Advanced skin hydration prep & glow ritual',
      'Intricate bridal hair architecture with floral styling',
      'Double dupatta draping & bridal jewellery anchoring',
      'Complimentary bridal touch-up kit',
    ],
  },
  {
    id: 'pkg-editorial',
    name: 'BRIDAL EDITORIAL',
    subtitle: 'Multi-Event Celebration Suite',
    description:
      'An all-inclusive, multi-day beauty accompaniment tailored for grand wedding celebrations spanning multiple functions.',
    idealFor: 'Multi-day nuptials: Engagement, Mehendi, Sangeet, Wedding & Reception',
    priceLabel: 'Pricing upon consultation',
    includes: [
      'Customized multi-look consultation & timeline planning',
      'Full bridal trial session with camera-lighting testing',
      'Pre-bridal skin conditioning ritual prior to wedding week',
      'Artistry for main wedding ceremony and reception/sangeet',
      'Bespoke hair design variations for each function',
      'Dedicated on-location assistance & mid-event touch-up support',
      'Family member beauty coordination (on request)',
    ],
  },
]

/** Bridal FAQ items */
export const bridalFAQs: BridalFAQ[] = [
  {
    id: 'faq-early',
    question: 'How early should I book?',
    answer:
      'We recommend securing your date 2 to 6 months in advance, especially during the auspicious autumn and winter wedding seasons (October through March). Because we only accept a limited number of brides per day to ensure undivided attention, dates fill very quickly.',
  },
  {
    id: 'faq-trials',
    question: 'Do you offer trials?',
    answer:
      'Yes, we strongly encourage bridal trial sessions. During the trial, we test base formulations against your skin tone, experiment with eyeshadow textures and lip shades, and construct sample hairstyles alongside your jewelry reference images so you feel 100% assured on your big day.',
  },
  {
    id: 'faq-bring',
    question: 'What should I bring to my consultation?',
    answer:
      'Please bring high-resolution photos of your bridal outfit(s), your jewelry sets (or reference photos), swatches of fabrics if available, and a few visual references of makeup styles you love. If you have specific skin sensitivities or allergies, sharing those helps us prepare custom products.',
  },
  {
    id: 'faq-custom',
    question: 'Can I discuss a custom look?',
    answer:
      'Absolutely. Every bride has a distinctive aesthetic, facial structure, and personal comfort level. Whether you prefer minimalist glass-skin elegance, high-contrast smokey eyes, or heritage royal glam, we tailor every single element to your individual preferences.',
  },
  {
    id: 'faq-combine',
    question: 'What services can be combined?',
    answer:
      'You can seamlessly combine your bridal makeup with pre-bridal skin therapy, hydrating facials, body polishing, hair conditioning rituals, manicures, and nail extensions. We also offer curated packages for bridesmaids and immediate family members upon prior arrangement.',
  },
]
