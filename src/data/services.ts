/**
 * GLAMOROUS — Services Data
 * Single source of truth for all service categories and individual offerings.
 * Visual, scannable, luxury table format with real studio pricing.
 */

export interface ServiceItem {
  id: string
  name: string
  shortDescription: string
  duration: string
  price: string
  tagline?: string
  description?: string
  highlights?: string[]
  priceRange?: string | null
  pricingNote?: string
  isSignature?: boolean
  imageUrl?: string
  imageAlt?: string
  categoryNumber: string
  categorySlug: string
}

export interface ServiceCategory {
  id: string
  number: string
  name: string
  navLabel: string
  slug: string
  tagline: string
  description: string
  icon?: string
  heroImage?: string
  services: ServiceItem[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'makeup',
    number: '01',
    name: 'Makeup Artistry',
    navLabel: 'MAKEUP',
    slug: 'makeup',
    tagline: 'Glowing, elegant makeup for your special occasions',
    description:
      'Flawless makeup crafted to suit your facial features, skin tone, and personal style.',
    icon: 'sparkles',
    heroImage: '/images/services/makeup.jpg',
    services: [
      {
        id: 'party-makeup',
        categoryNumber: '01',
        categorySlug: 'makeup',
        name: 'Party & Occasion Makeup',
        shortDescription: 'High-definition party makeup that looks fresh and lasts all celebration long.',
        duration: '60–75 min',
        price: 'From ₹1,500',
        tagline: 'High-definition makeup designed to make you stand out at every celebration.',
        description: 'High-definition makeup designed to make you look and feel stunning at any celebration.',
        isSignature: true,
        imageUrl: '/images/services/makeup.jpg',
        imageAlt: 'High-definition party and celebration makeup by Glamorous studio',
      },
      {
        id: 'natural-glam',
        categoryNumber: '01',
        categorySlug: 'makeup',
        name: 'Soft Glamour & Daytime Elegance',
        shortDescription: 'Soft, natural makeup celebrating your natural beauty with a clean, dewy finish.',
        duration: '45–60 min',
        price: 'From ₹1,200',
        tagline: 'Soft, natural makeup that enhances your authentic beauty.',
        description: 'Soft, natural makeup celebrating your natural beauty with a clean, dewy finish.',
        isSignature: false,
        imageUrl: '/images/gallery/makeup/makeup-01.jpg',
        imageAlt: 'Soft natural daytime beauty look crafted with precision',
      },
      {
        id: 'engagement-makeup',
        categoryNumber: '01',
        categorySlug: 'makeup',
        name: 'Engagement & Sagan Look',
        shortDescription: 'Camera-ready makeup that stays flawless from daytime rituals to evening banquet.',
        duration: '75–90 min',
        price: 'From ₹2,000',
        tagline: 'Flawless, camera-ready look from ring ceremony to evening reception.',
        description: 'Camera-ready makeup that stays flawless from daytime rituals to evening banquet.',
        isSignature: false,
        imageUrl: '/images/gallery/makeup/makeup-02.jpg',
        imageAlt: 'Captivating engagement makeup designed for photographic brilliance',
      },
    ],
  },
  {
    id: 'bridal',
    number: '02',
    name: 'Bridal Artistry',
    navLabel: 'BRIDAL',
    slug: 'bridal',
    tagline: 'Complete bridal transformations crafted with patience, precision, and care',
    description:
      'Complete bridal transformations crafted with patience, precision, and care for your wedding day.',
    icon: 'diamond',
    heroImage: '/images/services/bridal.jpg',
    services: [
      {
        id: 'signature-bridal',
        categoryNumber: '02',
        categorySlug: 'bridal',
        name: 'Signature Bridal Makeup',
        shortDescription: 'Long-lasting bridal base, waterproof formulas, eye design tailored to your features, and colors chosen to complement your lehenga.',
        duration: '150–180 min',
        price: 'From ₹4,000',
        tagline: 'Personalized wedding day makeup crafted to make you look unforgettable.',
        description: 'Complete bridal transformation with long-lasting bridal base, waterproof formulas, eye design tailored to your features, and colors chosen to complement your lehenga.',
        isSignature: true,
        imageUrl: '/images/services/bridal.jpg',
        imageAlt: 'Timeless luxury Indian bridal makeup and jewellery styling',
      },
      {
        id: 'bridal-trial',
        categoryNumber: '02',
        categorySlug: 'bridal',
        name: 'Bridal Consultation Trial',
        shortDescription: 'Full makeup and hair preview to test and perfect your bridal look before the wedding.',
        duration: '90 min',
        price: '₹500 (adjusted on booking)',
        tagline: 'A full trial session to test and perfect every detail ahead of your big day.',
        description: 'Full makeup and hair preview to test and perfect your bridal look before the wedding.',
        isSignature: false,
        imageUrl: '/images/bridal/bridal-portrait.jpg',
        imageAlt: 'Bridal consultation and personalized look preview session',
      },
      {
        id: 'pre-bridal-rituals',
        categoryNumber: '02',
        categorySlug: 'bridal',
        name: 'Pre-Bridal Radiance Series',
        shortDescription: 'Multi-session facials, skin prep, and body polishing in the weeks before marriage.',
        duration: 'Multi-session',
        price: 'From ₹3,000',
        tagline: 'Skin care and polishing sessions to get your skin glowing before your wedding.',
        description: 'Multi-session facials, skin prep, and body polishing in the weeks before marriage.',
        isSignature: false,
        imageUrl: '/images/hero/editorial-moment.jpg',
        imageAlt: 'Pre-bridal skin radiance and rejuvenation therapy',
      },
    ],
  },
  {
    id: 'hair',
    number: '03',
    name: 'Hair Styling & Draping',
    navLabel: 'HAIR',
    slug: 'hair',
    tagline: 'Party hairstyles, traditional updos, and neat saree and dupatta draping',
    description:
      'Beautiful hairstyles, secure bridal updos, and neatly pinned dupattas and sarees.',
    icon: 'scissors',
    heroImage: '/images/services/hair.jpg',
    services: [
      {
        id: 'party-hair',
        categoryNumber: '03',
        categorySlug: 'hair',
        name: 'Hair Styling (Party)',
        shortDescription: 'Blow-dry and wave styling, soft curls, and modern party upstyles.',
        duration: '45–60 min',
        price: 'From ₹800',
        tagline: 'Blow-dry and wave styling, soft curls, and party hairstyles.',
        description: 'Blow-dry and wave styling, soft curls, and modern party upstyles.',
        isSignature: false,
        imageUrl: '/images/gallery/hair/hair-01.jpg',
        imageAlt: 'Romantic flowing textured waves and elegant festive hair styling',
      },
      {
        id: 'bridal-hair',
        categoryNumber: '03',
        categorySlug: 'hair',
        name: 'Bridal Hair Styling',
        shortDescription: 'Traditional bridal buns and updos built securely for heavy matha patti and dupatta pinning.',
        duration: '90–120 min',
        price: 'From ₹2,000',
        tagline: 'Secure bridal buns and updos designed to hold heavy jewellery and dupattas comfortably.',
        description: 'Traditional bridal buns and updos built securely for heavy matha patti and dupatta pinning.',
        isSignature: true,
        imageUrl: '/images/services/hair.jpg',
        imageAlt: 'Intricate traditional bridal hairstyle with floral and jewellery accents',
      },
      {
        id: 'saree-draping',
        categoryNumber: '03',
        categorySlug: 'hair',
        name: 'Saree & Dupatta Draping',
        shortDescription: 'Clean pleating and secure pinning for sarees, lehengas, and bridal dupattas.',
        duration: '30 min',
        price: 'From ₹400',
        tagline: 'Clean, elegant pleats and secure pinning for sarees and dupattas.',
        description: 'Clean pleating and secure pinning for sarees, lehengas, and bridal dupattas.',
        isSignature: false,
        imageUrl: '/images/services/hair.jpg',
        imageAlt: 'Immaculate pleating and draping for sarees and bridal dupattas',
      },
    ],
  },
  {
    id: 'festive',
    number: '04',
    name: 'Festive & Occasion Beauty',
    navLabel: 'FESTIVE',
    slug: 'festive',
    tagline: 'Vibrant, long-lasting looks for mehendi, sangeet, and festive celebrations',
    description:
      'Vibrant, sweat-proof looks designed to stay fresh through lively dancing and celebrations.',
    icon: 'star',
    heroImage: '/images/services/event.jpg',
    services: [
      {
        id: 'mehendi-sangeet-look',
        categoryNumber: '04',
        categorySlug: 'festive',
        name: 'Mehendi & Sangeet Festive Look',
        shortDescription: 'Vibrant, sweat-proof makeup designed for dance stages and lively celebrations.',
        duration: '60–75 min',
        price: 'From ₹1,500',
        tagline: 'Sweat-proof, festive makeup made for singing, dancing, and celebrating.',
        description: 'Vibrant, sweat-proof makeup designed for dance stages and lively celebrations.',
        isSignature: true,
        imageUrl: '/images/services/event.jpg',
        imageAlt: 'Vibrant celebratory Mehendi and Sangeet festive makeup',
      },
      {
        id: 'reception-editorial',
        categoryNumber: '04',
        categorySlug: 'festive',
        name: 'Grand Reception & Evening Glamour',
        shortDescription: 'Defined smoky eyes, polished skin, and bold lips designed for evening lights.',
        duration: '75–90 min',
        price: 'From ₹2,000',
        tagline: 'Bold, elegant evening look with defined eyes and radiant finish.',
        description: 'Defined smoky eyes, polished skin, and bold lips designed for evening lights.',
        isSignature: false,
        imageUrl: '/images/gallery/makeup/makeup-03.jpg',
        imageAlt: 'Dramatic evening reception beauty look with sculpted features',
      },
    ],
  },
  {
    id: 'skin',
    number: '05',
    name: 'Skin Care & Rituals',
    navLabel: 'SKIN',
    slug: 'skin',
    tagline: 'Nourishing facials and clean-ups for healthy, glowing skin',
    description:
      'Rejuvenating treatments that deeply hydrate, cleanse pores, and leave your skin glowing.',
    icon: 'leaf',
    heroImage: '/images/services/skin.jpg',
    services: [
      {
        id: 'radiance-facial',
        categoryNumber: '05',
        categorySlug: 'skin',
        name: 'Facial / Skin Treatment',
        shortDescription: 'Deep hydration, gentle exfoliation, and gentle cooling treatment for glowing skin.',
        duration: '60 min',
        price: 'From ₹500',
        tagline: 'Deep facial hydration that restores freshness and skin glow.',
        description: 'Deep hydration, gentle exfoliation, and gentle cooling treatment for glowing skin.',
        isSignature: true,
        imageUrl: '/images/services/skin.jpg',
        imageAlt: 'Restorative skin care facial treatment and relaxation ritual',
      },
      {
        id: 'precision-threading',
        categoryNumber: '05',
        categorySlug: 'skin',
        name: 'Threading & Cleanup',
        shortDescription: 'Precise eyebrow shaping with cotton thread and gentle facial cleanup.',
        duration: '15–30 min',
        price: 'From ₹150',
        tagline: 'Precise brow shaping that frames your eyes cleanly.',
        description: 'Precise eyebrow shaping with cotton thread and gentle facial cleanup.',
        isSignature: false,
        imageUrl: '/images/gallery/beauty/beauty-02.jpg',
        imageAlt: 'Precision eyebrow threading and facial definition care',
      },
      {
        id: 'deep-skin-polish',
        categoryNumber: '05',
        categorySlug: 'skin',
        name: 'Deep Cleanup & Skin Polishing',
        shortDescription: 'Deep facial cleansing, gentle pore extraction, and a soothing mask for smooth skin.',
        duration: '40 min',
        price: 'From ₹300',
        tagline: 'Deep facial cleansing and gentle exfoliation to refresh your skin tone.',
        description: 'Deep facial cleansing, gentle pore extraction, and a soothing mask for smooth skin.',
        isSignature: false,
        imageUrl: '/images/services/skin.jpg',
        imageAlt: 'Deep skin cleanup and gentle polishing treatment',
      },
    ],
  },
  {
    id: 'nails',
    number: '06',
    name: 'Manicure & Nail Artistry',
    navLabel: 'NAILS',
    slug: 'nails',
    tagline: 'Neat manicures and custom nail art to complete your look',
    description:
      'Beautiful nail designs, durable gel polish, and relaxing hand care.',
    icon: 'hand',
    heroImage: '/images/services/nails.jpg',
    services: [
      {
        id: 'bridal-nail-art',
        categoryNumber: '06',
        categorySlug: 'nails',
        name: 'Nail Art / Manicure',
        shortDescription: 'Hand-painted designs, subtle gold foil, and long-lasting gel polish.',
        duration: '60–75 min',
        price: 'From ₹300',
        tagline: 'Hand-painted designs, gold accents, and long-lasting gel shine.',
        description: 'Hand-painted designs, subtle gold foil, and long-lasting gel polish.',
        isSignature: true,
        imageUrl: '/images/services/nails.jpg',
        imageAlt: 'Custom bridal nail art with delicate foiling and high-gloss polish',
      },
      {
        id: 'classic-manicure',
        categoryNumber: '06',
        categorySlug: 'nails',
        name: 'Studio Spa Manicure',
        shortDescription: 'Warm hand soak, cuticle care, gentle scrub, and clean nail polish.',
        duration: '45 min',
        price: 'From ₹300',
        tagline: 'A relaxing hand treatment leaving your skin soft and nails clean.',
        description: 'Warm hand soak, cuticle care, gentle scrub, and clean nail polish.',
        isSignature: false,
        imageUrl: '/images/gallery/details/details-02.jpg',
        imageAlt: 'Studio spa manicure with hand care treatment',
      },
    ],
  },
]

/** Backward compatibility alias */
export type Service = ServiceItem

/** Convenience helper: signature services */
export const signatureServices: ServiceItem[] = serviceCategories
  .flatMap((cat) => cat.services.filter((s) => s.isSignature))
