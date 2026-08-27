# GLAMOROUS — MASTER PRODUCT & DESIGN DOCUMENTATION

> **Version:** 1.0 | **Status:** Pre-Implementation | **Date:** 2026-08-27  
> **Author Role:** Lead Product Designer / UX Strategist / Creative Director / Senior Frontend Architect

---

## 1. BRAND IDENTITY

| Field | Value |
|---|---|
| Brand Name | Glamorous |
| Category | Makeup & Beauty / Bridal Beauty |
| Address | 1st Floor, Mumtaz Bangle Store, Sabji Mandi Rd, Sarai Meer, Uttar Pradesh 276305, India |
| Phone | +91 70078 75415 |
| WhatsApp | +91 70078 75415 |
| Instagram | @makeup_by_sabreen_786 |
| Instagram | @glamorouse_makeup_beauty |
| Google Maps | https://maps.app.goo.gl/LEeeeG6BkDa33Xdc6 |

### 1.1 Brand Personality
- **Elegant** — graceful, refined, never overdone
- **Feminine** — soft, warm, sensitively crafted
- **Confident** — decisive visual choices, strong point of view
- **Artistic** — treats every face as a canvas
- **Warm** — personal, human, approachable
- **Modern** — contemporary aesthetics, not retro clichés
- **Premium** — quality-first without being unapproachably corporate
- **Personal** — boutique energy, not chain-salon energy

### 1.2 Brand Voice
- First-person warm narrative ("We believe every look tells a story.")
- Editorial-grade copy — precise, unhurried, never filler
- No superlatives without evidence
- Avoid: "best", "award-winning", "luxury" as blanket claims
- Use: "curated", "considered", "crafted", "bespoke", "signature"

---

## 2. INFORMATION ARCHITECTURE

### 2.1 Primary Routes

| Route | Page | Priority |
|---|---|---|
| `/` | Home | P0 |
| `/services` | Services | P0 |
| `/bridal` | Bridal | P0 |
| `/gallery` | Gallery | P0 |
| `/about` | About | P1 |
| `/contact` | Contact / Book Appointment | P0 |
| `/thank-you` | Appointment Confirmation | P1 |

### 2.2 Sitemap

```
glamorous.in (domain TBD)
│
├── / (Home)
│   ├── Hero — Brand Statement
│   ├── Brand Introduction
│   ├── Signature Services (3–4 cards)
│   ├── Editorial Imagery Block
│   ├── Bridal Teaser
│   ├── Selected Work Strip
│   ├── Social Proof (verified only)
│   ├── Location + Hours
│   └── Appointment CTA
│
├── /services
│   ├── Services Hero
│   ├── Category Navigation (Makeup, Bridal, Hair, Skin, Nails, Event)
│   ├── Service Cards per Category
│   └── Booking CTA
│
├── /bridal
│   ├── Bridal Hero (emotional)
│   ├── The Bridal Moment (story)
│   ├── Our Process (4–5 steps)
│   ├── Bridal Gallery
│   ├── Package Placeholders
│   ├── FAQ
│   └── Booking CTA
│
├── /gallery
│   ├── Gallery Hero
│   ├── Category Filter Bar
│   ├── Masonry Grid
│   └── Lightbox
│
├── /about
│   ├── About Hero
│   ├── Our Story (placeholder)
│   ├── Philosophy & Approach
│   ├── Studio Atmosphere
│   └── Social Feed / CTA
│
├── /contact
│   ├── Contact Hero
│   ├── Booking Form
│   ├── Contact Details
│   ├── Map Embed
│   └── WhatsApp / Call CTAs
│
└── /thank-you
    └── Confirmation Message + Next Steps
```

---

## 3. CONTENT MODEL

### 3.1 Global Content Entities

```typescript
// Business Information
BusinessInfo {
  name: string
  tagline: string
  description: string
  address: Address
  phone: string
  whatsapp: string
  instagram: string[]
  googleMapsUrl: string
  googleMapsEmbedUrl: string
  hours: OpeningHours[]
}

Address {
  line1: string
  line2?: string
  city: string
  state: string
  pincode: string
  country: string
}

OpeningHours {
  day: string | string[]
  hours: string
  closed?: boolean
}

ServiceCategory {
  id: string
  name: string
  slug: string
  description: string
  icon?: string
  services: Service[]
}

Service {
  id: string
  name: string
  description: string
  duration?: string       // PLACEHOLDER — verify with business
  priceRange?: string     // PLACEHOLDER — verify with business
  isSignature?: boolean
  imageUrl?: string
}

GalleryImage {
  id: string
  src: string
  alt: string
  category: 'bridal' | 'makeup' | 'hair' | 'beauty' | 'details'
  aspectRatio?: string
  isFeature?: boolean
}

BridalPackage {
  id: string
  name: string
  description: string
  includes: string[]
  priceRange?: string     // PLACEHOLDER
  isPopular?: boolean
}

BridalFAQ {
  question: string
  answer: string
}

Testimonial {
  id: string
  authorName: string
  authorInitials: string
  rating: number
  text: string
  date: string
  platform: 'google' | 'instagram' | 'direct'
  verified: true          // Must always be true — no fake reviews
}

AppointmentRequest {
  name: string
  phone: string
  serviceCategory?: string
  preferredDate?: string
  preferredTime?: string
  message?: string
}
```

---

## 4. HOME PAGE NARRATIVE FLOW

| # | Section | Emotional Goal |
|---|---|---|
| 1 | **Hero** | Arrest attention. Communicate brand in 3 seconds. |
| 2 | **Brand Introduction** | Build trust. Humanize. Spark curiosity. |
| 3 | **Signature Services** | Show competence. Define expertise range. |
| 4 | **Editorial Imagery** | Create desire. Let the work speak. |
| 5 | **Bridal Teaser** | Target primary audience. Trigger emotion. |
| 6 | **Selected Work** | Social proof through visual evidence. |
| 7 | **Social Proof / Reviews** | Verified trust signals only. |
| 8 | **Location** | Reduce friction. Make it findable. |
| 9 | **Final CTA** | Convert. Capture intent. |

---

## 5. BRIDAL PAGE NARRATIVE

The bridal page is the **emotional centerpiece** of the site.

| # | Section | Copy Direction |
|---|---|---|
| 1 | **Hero** | Cinematic. Aspirational. "Your day. Your face. Your story." |
| 2 | **The Bridal Moment** | Intimate story about bridal preparation |
| 3 | **Our Approach** | Philosophy — artistry, patience, precision |
| 4 | **The Process** | Consultation → Trial → Day-of → Final Look |
| 5 | **Bridal Gallery** | Full-width editorial imagery |
| 6 | **Packages** | Placeholder cards with "Enquire" CTAs |
| 7 | **FAQ** | Common bridal concerns answered with warmth |
| 8 | **Booking CTA** | Low-friction, high-warmth |

---

## 6. SERVICES ARCHITECTURE

### 6.1 Service Categories

| Category | Slug | Icon |
|---|---|---|
| Makeup | makeup | sparkles |
| Bridal | bridal | diamond |
| Hair | hair | scissors |
| Skin & Beauty | skin | leaf |
| Nails | nails | hand |
| Event / Party | event | star |

> **PLACEHOLDER NOTICE**: Actual services, durations, and pricing MUST be confirmed with
> the business owner before launch. All service content uses editable placeholders.

---

## 7. GALLERY STRATEGY

### 7.1 Layout
- **Desktop:** Responsive masonry grid (3–4 columns, variable height)
- **Tablet:** 2-column masonry
- **Mobile:** 1–2 column scroll

### 7.2 Category Filters
- All | Bridal | Makeup | Hair | Beauty | Details
- Transitions: FLIP animation (no layout shift)
- Active state: Rose accent underline / pill

### 7.3 Lightbox
- Full-screen dark overlay
- Keyboard navigation (Arrow keys, Escape)
- Swipe gesture on mobile
- Smooth fade-scale entrance

### 7.4 Image Handling
- Format: WebP primary, JPEG fallback
- Naming: `bridal-editorial-01.webp`
- Alt text: human-descriptive, not keyword-stuffed
- Loading: lazy-load below fold
- Responsive: `srcset` + `sizes`

---

## 8. APPOINTMENT CONVERSION STRATEGY

### 8.1 Principles
- Zero friction: minimum required fields
- Multiple channels: Form + WhatsApp + Phone
- Emotional warmth in copy
- Persistent CTA in global nav
- Mobile: click-to-call, tap-to-WhatsApp

### 8.2 Form Fields

| Field | Type | Required |
|---|---|---|
| Name | text | Yes |
| Phone | tel | Yes |
| Service | select | Recommended |
| Preferred Date | date | Recommended |
| Preferred Time | select | Recommended |
| Message | textarea | Optional |

### 8.3 Submission Flow
1. Client-side validation
2. Optimistic UI: spinner → success
3. On success: redirect to `/thank-you`
4. Backend: `POST /api/appointments` (to be wired to real backend)
5. Fallback: WhatsApp deep-link

### 8.4 WhatsApp CTA URL
```
https://wa.me/917007875415?text=Hi%20Glamorous!%20I%27d%20like%20to%20book%20an%20appointment.
```

---

## 9. GLOBAL NAVIGATION DESIGN

### 9.1 Desktop
- Logo: Left-aligned SVG wordmark
- Nav links: Center/right — Home, Services, Bridal, Gallery, About
- CTA: "Book an Appointment" — outlined pill, Rose accent
- Behaviour: Transparent on hero, frosted on scroll
- Height: 72px

### 9.2 Mobile
- Logo: Left or centered
- Hamburger: Right, animated → X
- Full-screen menu overlay with staggered links
- Persistent bottom bar CTA

---

## 10. COMPONENT INVENTORY

### 10.1 Global
| Component | Variants |
|---|---|
| Navbar | Default, Scrolled, Mobile |
| Footer | Full |
| Button | Primary, Secondary, Ghost, Icon |
| Logo | Light, Dark |
| WhatsAppFAB | Mobile |

### 10.2 Section Components
| Component | Pages |
|---|---|
| HeroSection | Home, Bridal, Gallery, About, Contact |
| BrandIntro | Home |
| ServiceGrid | Home, Services |
| ServiceCard | Services |
| EditorialImageBlock | Home, Bridal |
| BridalTeaser | Home |
| GalleryGrid | Home (strip), Gallery |
| GalleryLightbox | Gallery |
| TestimonialStrip | Home |
| TestimonialCard | Home |
| LocationBlock | Home, Contact |
| AppointmentCTA | Home (bottom), all pages |
| BridalProcess | Bridal |
| BridalPackageCard | Bridal |
| FAQAccordion | Bridal, Services |
| ContactForm | Contact |
| MapEmbed | Contact |
| PageHero | Inner pages |
| SectionLabel | All pages |
| ThankYouConfirmation | /thank-you |

### 10.3 UI Primitives
| Primitive | Notes |
|---|---|
| Input | text, tel, date, select, textarea |
| Label | Form labels |
| Accordion | FAQ expand/collapse |
| FilterPill | Gallery category filter |
| ImageReveal | Clip-mask reveal animation wrapper |
| StaggerText | Stagger-in text animation wrapper |
| ParallaxLayer | Subtle parallax scroll wrapper |
| Divider | Decorative section divider |

---

## 11. RESPONSIVE BREAKPOINTS

| Name | Min Width | Target |
|---|---|---|
| xs | 320px | Small phones |
| sm | 480px | Large phones |
| md | 768px | Tablets portrait |
| lg | 1024px | Tablets landscape / Small laptop |
| xl | 1280px | Standard laptop |
| 2xl | 1536px | Large desktop |
| 3xl | 1920px | Wide desktop |

- Mobile-first CSS
- Fluid typography via `clamp()`
- Fluid spacing via CSS custom properties
- Container max-width: 1280px

---

## 12. LOCAL SEO STRATEGY

### Primary Keywords
- Glamorous makeup Sarai Meer
- Bridal makeup Sarai Meer
- Makeup artist Sarai Meer
- Beauty parlour Sarai Meer
- Beauty salon Sarai Meer

### Secondary Keywords
- Bridal makeup near Azamgarh
- Wedding makeup Sarai Meer
- Party makeup Sarai Meer

### On-Page SEO
| Element | Implementation |
|---|---|
| Title Tags | Unique per page, 55–60 chars |
| Meta Descriptions | 155–160 chars, include CTA |
| H1 | One per page, keyword-natural |
| Alt Text | Descriptive, human-readable |
| Canonical | Self-referencing on every page |

### Structured Data (JSON-LD)
- LocalBusiness / BeautySalon on every page
- BreadcrumbList on inner pages
- FAQPage on Bridal / Services
- Service schema for key offerings
- Review schema (verified only)

---

## 13. ACCESSIBILITY STRATEGY

| Area | Implementation |
|---|---|
| Semantic HTML | header, nav, main, section, article, footer |
| ARIA | aria-label, aria-expanded, aria-hidden |
| Focus | Visible rings (2px Rose outline), logical tab order |
| Skip Links | "Skip to main content" visually hidden, focusable |
| Contrast | WCAG AA minimum — 4.5:1 text, 3:1 UI |
| Keyboard | All interactive elements keyboard-accessible |
| Reduced Motion | @media (prefers-reduced-motion: reduce) |
| Forms | Labels via for/id, errors via aria-describedby |
| Lightbox | Focus trap, Escape to close, state announced |

---

## 14. PERFORMANCE STRATEGY

| Metric | Target |
|---|---|
| LCP | < 2.5s |
| INP | < 100ms |
| CLS | < 0.1 |
| TTI | < 3.5s |
| Page Weight (Home) | < 600KB HTML+CSS+JS |

- Images: WebP/AVIF, lazy-load, srcset
- Fonts: Preconnect Google Fonts, font-display: swap
- CSS: Critical inlined, rest deferred
- JS: Minimal vanilla — no framework overhead for static sections
- No third-party analytics in demo

---

## 15. IMPLEMENTATION ROADMAP (DEPENDENCY ORDER)

### Phase 0 — Foundation
1. Initialize project (Vite + Vanilla JS or Next.js)
2. Create folder structure
3. CSS custom properties (design tokens)
4. Typography scale
5. `salonData.js` — single source of truth for business info
6. Routing setup

### Phase 1 — Global Shell
7. Navbar (desktop + mobile)
8. Footer
9. Animation system setup
10. Skip-to-content link
11. WhatsApp FAB

### Phase 2 — Home Page
12. HeroSection
13. BrandIntro
14. ServiceGrid (3 signature)
15. EditorialImageBlock
16. BridalTeaser
17. GalleryStrip
18. LocationBlock + Map
19. AppointmentCTA

### Phase 3 — Services Page
20. PageHero
21. Category Nav
22. ServiceCard grid
23. Booking CTA

### Phase 4 — Bridal Page
24. PageHero (cinematic)
25. BridalStory
26. BridalProcess
27. BridalGallery
28. PackageCards
29. FAQAccordion
30. Booking CTA

### Phase 5 — Gallery Page
31. PageHero
32. FilterPills
33. MasonryGrid
34. Lightbox

### Phase 6 — About Page
35. PageHero
36. Story block (placeholder)
37. Philosophy block
38. Atmosphere imagery

### Phase 7 — Contact & Booking
39. ContactHero
40. ContactForm
41. MapEmbed
42. Contact links
43. ThankYouPage

### Phase 8 — SEO & Meta
44. JSON-LD schemas
45. Open Graph meta
46. Twitter Card meta
47. Sitemap.xml
48. robots.txt
49. Alt text audit

### Phase 9 — Polish & QA
50. Animation fine-tuning
51. Mobile QA
52. Accessibility audit
53. Lighthouse performance audit
54. Cross-browser QA
55. Content placeholder review

### Phase 10 — Launch Readiness
56. Replace all placeholder content
57. Connect form to real backend
58. Domain + hosting setup
59. Google Search Console setup
60. Google Business Profile verification

---

*End of GLAMOROUS_MASTER.md — v1.0*
