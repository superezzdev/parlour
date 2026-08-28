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
    tagline: 'Luminous, sculpted elegance for your defining moments',
    description:
      'Luminous, sculpted elegance tailored to harmonise with your individual facial architecture and skin tone.',
    icon: 'sparkles',
    heroImage: '/images/services/makeup.jpg',
    services: [
      {
        id: 'party-makeup',
        categoryNumber: '01',
        categorySlug: 'makeup',
        name: 'Party & Occasion Makeup',
        shortDescription: 'High-definition glamour designed to illuminate every celebration.',
        duration: '60–75 min',
        price: 'From ₹1,500',
        tagline: 'High-definition glamour designed to illuminate every celebration.',
        description: 'High-definition glamour tailored to illuminate your special celebration.',
        isSignature: true,
        imageUrl: '/images/services/makeup.jpg',
        imageAlt: 'High-definition party and celebration makeup by Glamorous studio',
      },
      {
        id: 'natural-glam',
        categoryNumber: '01',
        categorySlug: 'makeup',
        name: 'Soft Glamour & Daytime Elegance',
        shortDescription: 'Understated radiance celebrating your authentic beauty with dewy refinement.',
        duration: '45–60 min',
        price: 'From ₹1,200',
        tagline: 'Understated radiance celebrating your authentic beauty.',
        description: 'Understated radiance celebrating your authentic beauty with dewy refinement.',
        isSignature: false,
        imageUrl: '/images/gallery/makeup/makeup-01.jpg',
        imageAlt: 'Soft natural daytime beauty look crafted with precision',
      },
      {
        id: 'engagement-makeup',
        categoryNumber: '01',
        categorySlug: 'makeup',
        name: 'Engagement & Sagan Look',
        shortDescription: 'Captivating, camera-ready presence transitioning seamlessly from daylight to banquet.',
        duration: '75–90 min',
        price: 'From ₹2,000',
        tagline: 'Captivating, camera-ready presence from ring ceremony to banquet.',
        description: 'Captivating, camera-ready presence transitioning seamlessly from daylight to banquet.',
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
    tagline: 'The pinnacle of ceremony-ready precision, patience, and grace',
    description:
      'The pinnacle of ceremony-ready precision, patience, and grace for your defining wedding day.',
    icon: 'diamond',
    heroImage: '/images/services/bridal.jpg',
    services: [
      {
        id: 'signature-bridal',
        categoryNumber: '02',
        categorySlug: 'bridal',
        name: 'Signature Bridal Makeup',
        shortDescription: 'Bespoke wedding day artistry with couture base and jewelry setting.',
        duration: '150–180 min',
        price: 'From ₹4,000',
        tagline: 'Bespoke, timeless wedding day artistry crafted for the spotlight.',
        description: 'Complete bespoke bridal transformation with waterproof base and couture jewelry setting.',
        isSignature: true,
        imageUrl: '/images/services/bridal.jpg',
        imageAlt: 'Timeless luxury Indian bridal makeup and jewellery styling',
      },
      {
        id: 'bridal-trial',
        categoryNumber: '02',
        categorySlug: 'bridal',
        name: 'Bridal Consultation Trial',
        shortDescription: 'In-depth diagnostics and trial look preview ahead of your wedding.',
        duration: '90 min',
        price: '₹500 (adjusted on booking)',
        tagline: 'An exploratory preview to perfect every nuance ahead of your wedding.',
        description: 'In-depth diagnostics and trial look preview ahead of your wedding.',
        isSignature: false,
        imageUrl: '/images/bridal/bridal-portrait.jpg',
        imageAlt: 'Bridal consultation and personalized look preview session',
      },
      {
        id: 'pre-bridal-rituals',
        categoryNumber: '02',
        categorySlug: 'bridal',
        name: 'Pre-Bridal Radiance Series',
        shortDescription: 'Nourishing multi-session facial and body polish therapies before marriage.',
        duration: 'Multi-session',
        price: 'From ₹3,000',
        tagline: 'Curated wellness and skin polishing in the weeks leading to the aisle.',
        description: 'Nourishing multi-session facial and body polish therapies before marriage.',
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
    tagline: 'Architectural crowns, flowing textures, and immaculate draping',
    description:
      'Architectural crowns, flowing textures, and masterfully pinned dupattas and sarees.',
    icon: 'scissors',
    heroImage: '/images/services/hair.jpg',
    services: [
      {
        id: 'party-hair',
        categoryNumber: '03',
        categorySlug: 'hair',
        name: 'Hair Styling (Party)',
        shortDescription: 'Romantic textured waves, Hollywood curls, and effortless contemporary upstyles.',
        duration: '45–60 min',
        price: 'From ₹800',
        tagline: 'Romantic textured curls, Hollywood waves, and effortless twists.',
        description: 'Romantic textured waves, Hollywood curls, and effortless contemporary upstyles.',
        isSignature: false,
        imageUrl: '/images/gallery/hair/hair-01.jpg',
        imageAlt: 'Romantic flowing textured waves and elegant festive hair styling',
      },
      {
        id: 'bridal-hair',
        categoryNumber: '03',
        categorySlug: 'hair',
        name: 'Bridal Hair Architecture',
        shortDescription: 'Intricate traditional updos structured for heavy headpieces and veil pinning.',
        duration: '90–120 min',
        price: 'From ₹2,000',
        tagline: 'Intricate updos and structured buns built to hold heavy headpieces.',
        description: 'Intricate traditional updos structured for heavy headpieces and veil pinning.',
        isSignature: true,
        imageUrl: '/images/services/hair.jpg',
        imageAlt: 'Intricate traditional bridal hairstyle with floral and jewellery accents',
      },
      {
        id: 'saree-draping',
        categoryNumber: '03',
        categorySlug: 'hair',
        name: 'Saree & Dupatta Draping',
        shortDescription: 'Immaculate pleating and secure anchoring for sarees and bridal dupattas.',
        duration: '30 min',
        price: 'From ₹400',
        tagline: 'Immaculate pleating and secure draping for all traditional attires.',
        description: 'Immaculate pleating and secure anchoring for sarees and bridal dupattas.',
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
    tagline: 'Radiant, celebratory aesthetics tailored for cultural festivities',
    description:
      'Vibrant, celebratory aesthetics engineered for lively dancing and cultural festivities.',
    icon: 'star',
    heroImage: '/images/services/event.jpg',
    services: [
      {
        id: 'mehendi-sangeet-look',
        categoryNumber: '04',
        categorySlug: 'festive',
        name: 'Mehendi & Sangeet Festive Look',
        shortDescription: 'Vibrant, sweat-proof glamour engineered for dance stages and joy.',
        duration: '60–75 min',
        price: 'From ₹1,500',
        tagline: 'Vibrant, sweat-proof glamour engineered for lively dancing and joy.',
        description: 'Vibrant, sweat-proof glamour engineered for lively dancing and joy.',
        isSignature: true,
        imageUrl: '/images/services/event.jpg',
        imageAlt: 'Vibrant celebratory Mehendi and Sangeet festive makeup',
      },
      {
        id: 'reception-editorial',
        categoryNumber: '04',
        categorySlug: 'festive',
        name: 'Grand Reception & Evening Glamour',
        shortDescription: 'Sculpted drama, smoky eyes, and velvet lips under chandelier lighting.',
        duration: '75–90 min',
        price: 'From ₹2,000',
        tagline: 'Sculpted, high-contrast drama under evening chandelier lighting.',
        description: 'Sculpted drama, smoky eyes, and velvet lips under chandelier lighting.',
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
    tagline: 'Nourishing therapies awakening natural luminosity from within',
    description:
      'Restorative therapies awakening natural hydration, clarity, and lit-from-within glow.',
    icon: 'leaf',
    heroImage: '/images/services/skin.jpg',
    services: [
      {
        id: 'radiance-facial',
        categoryNumber: '05',
        categorySlug: 'skin',
        name: 'Facial / Skin Ritual',
        shortDescription: 'Deep hydration, enzyme exfoliation, and lymphatic massage for radiant skin.',
        duration: '60 min',
        price: 'From ₹500',
        tagline: 'Deep cellular hydration restoring clarity, tone, and vitality.',
        description: 'Deep hydration, enzyme exfoliation, and lymphatic massage for radiant skin.',
        isSignature: true,
        imageUrl: '/images/services/skin.jpg',
        imageAlt: 'Restorative skin care facial treatment and relaxation ritual',
      },
      {
        id: 'precision-threading',
        categoryNumber: '05',
        categorySlug: 'skin',
        name: 'Threading & Cleanup',
        shortDescription: 'Meticulous cotton thread shaping and gentle peach fuzz removal.',
        duration: '15–30 min',
        price: 'From ₹150',
        tagline: 'Meticulous brow shaping that frames your eyes with clean perfection.',
        description: 'Meticulous cotton thread shaping and gentle peach fuzz removal.',
        isSignature: false,
        imageUrl: '/images/gallery/beauty/beauty-02.jpg',
        imageAlt: 'Precision eyebrow threading and facial definition care',
      },
      {
        id: 'deep-skin-polish',
        categoryNumber: '05',
        categorySlug: 'skin',
        name: 'Deep Cleanup & Skin Polishing',
        shortDescription: 'Ultrasonic pore cleansing and soothing mask restoring smooth skin texture.',
        duration: '40 min',
        price: 'From ₹300',
        tagline: 'Targeted pore clarification and gentle exfoliation restoring skin tone balance.',
        description: 'Ultrasonic pore cleansing and soothing mask restoring smooth skin texture.',
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
    tagline: 'Impeccably finished details completing your head-to-toe styling',
    description:
      'Impeccably finished details and nourishing care completing your head-to-toe styling.',
    icon: 'hand',
    heroImage: '/images/services/nails.jpg',
    services: [
      {
        id: 'bridal-nail-art',
        categoryNumber: '06',
        categorySlug: 'nails',
        name: 'Nail Art / Manicure',
        shortDescription: 'Hand-painted motifs, delicate gold foiling, and long-wear gel shine.',
        duration: '60–75 min',
        price: 'From ₹300',
        tagline: 'Hand-painted motifs, gold foil accents, and durable gel finishes.',
        description: 'Hand-painted motifs, delicate gold foiling, and long-wear gel shine.',
        isSignature: true,
        imageUrl: '/images/services/nails.jpg',
        imageAlt: 'Custom bridal nail art with delicate foiling and high-gloss polish',
      },
      {
        id: 'classic-manicure',
        categoryNumber: '06',
        categorySlug: 'nails',
        name: 'Studio Spa Manicure',
        shortDescription: 'Aromatherapy soak, cuticle restoration, gentle exfoliation, and premium lacquer.',
        duration: '45 min',
        price: 'From ₹300',
        tagline: 'A revitalizing care treatment for velvety soft hands and clean nails.',
        description: 'Aromatherapy soak, cuticle restoration, gentle exfoliation, and premium lacquer.',
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
