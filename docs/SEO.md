# GLAMOROUS — SEO STRATEGY

> **Version:** 1.0 | **Date:** 2026-08-27  
> Complete on-page, technical, local, and structured data SEO strategy.

---

## 1. KEYWORD STRATEGY

### 1.1 Primary Keywords (Highest Priority)

| Keyword | Intent | Page Target |
|---|---|---|
| Glamorous makeup Sarai Meer | Brand | Home |
| Bridal makeup Sarai Meer | Transactional | Bridal |
| Makeup artist Sarai Meer | Transactional | Home, Services |
| Beauty parlour Sarai Meer | Informational | Home, Services |
| Beauty salon Sarai Meer | Informational | Home |

### 1.2 Secondary Keywords

| Keyword | Intent | Page Target |
|---|---|---|
| Bridal makeup near Azamgarh | Geo-modified | Bridal |
| Wedding makeup Sarai Meer | Transactional | Bridal |
| Party makeup Sarai Meer | Transactional | Services |
| Makeup studio Uttar Pradesh | Informational | About |
| Best makeup artist near me | Transactional | Home |

### 1.3 Long-tail Keywords

| Keyword | Page Target |
|---|---|
| Bridal makeup trial Sarai Meer | Bridal |
| HD makeup for wedding Azamgarh | Services |
| Indian bridal makeup artist Sarai Meer | Bridal |
| Engagement makeup artist near Azamgarh | Services |
| Party makeup booking Sarai Meer | Contact |

---

## 2. PAGE-BY-PAGE SEO PLAN

### 2.1 Home Page (`/`)

```html
<title>Glamorous — Makeup & Beauty Studio | Sarai Meer, Uttar Pradesh</title>
<meta name="description" content="Premium makeup and beauty studio in Sarai Meer. Specialising in bridal makeup, party looks, and beauty transformations. Book an appointment today — +91 88377 79719.">
<link rel="canonical" href="https://glamorous.in/">

<!-- Open Graph -->
<meta property="og:title" content="Glamorous — Makeup & Beauty Studio | Sarai Meer">
<meta property="og:description" content="Premium makeup and beauty studio in Sarai Meer. Bridal, party, and everyday beauty artistry.">
<meta property="og:image" content="https://glamorous.in/og-home.jpg">
<meta property="og:url" content="https://glamorous.in/">
<meta property="og:type" content="website">
<meta property="og:locale" content="en_IN">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Glamorous — Makeup & Beauty Studio | Sarai Meer">
<meta name="twitter:description" content="Premium makeup and beauty studio. Bridal specialists.">
<meta name="twitter:image" content="https://glamorous.in/og-home.jpg">
```

**H1:** "Beauty Crafted for Your Most Memorable Moments" *(keyword-adjacent, not stuffed)*

---

### 2.2 Services Page (`/services`)

```html
<title>Our Services — Makeup, Bridal, Hair & Beauty | Glamorous, Sarai Meer</title>
<meta name="description" content="Explore Glamorous's curated services: bridal makeup, party looks, hair styling, and beauty treatments in Sarai Meer, Uttar Pradesh. Book online or call +91 88377 79719.">
<link rel="canonical" href="https://glamorous.in/services">
```

**H1:** "Curated Services for Every Beautiful Occasion"

---

### 2.3 Bridal Page (`/bridal`)

```html
<title>Bridal Makeup in Sarai Meer — Glamorous Bridal Beauty Studio</title>
<meta name="description" content="Bespoke bridal makeup in Sarai Meer by Glamorous Beauty. Every bride deserves to feel extraordinary. Book your bridal consultation today.">
<link rel="canonical" href="https://glamorous.in/bridal">
```

**H1:** "Your Bridal Look, Crafted with Love"

---

### 2.4 Gallery Page (`/gallery`)

```html
<title>Beauty Gallery — Bridal, Makeup & Hair Looks | Glamorous, Sarai Meer</title>
<meta name="description" content="Browse Glamorous's portfolio of bridal, makeup, and hair looks. Each look is a work of artistry, crafted in our Sarai Meer beauty studio.">
<link rel="canonical" href="https://glamorous.in/gallery">
```

**H1:** "A Portfolio of Artistry"

---

### 2.5 About Page (`/about`)

```html
<title>About Glamorous — Our Story & Beauty Philosophy | Sarai Meer</title>
<meta name="description" content="Meet the team behind Glamorous, Sarai Meer's premium makeup and beauty studio. Discover our philosophy, our passion, and our approach to beauty artistry.">
<link rel="canonical" href="https://glamorous.in/about">
```

**H1:** "The Story Behind the Studio"

---

### 2.6 Contact Page (`/contact`)

```html
<title>Book an Appointment — Glamorous Beauty Studio, Sarai Meer</title>
<meta name="description" content="Book your beauty appointment at Glamorous, Sarai Meer. Call +91 88377 79719, WhatsApp us, or fill in our booking form. Located in Sarai Meer, UP 276305.">
<link rel="canonical" href="https://glamorous.in/contact">
```

**H1:** "Let's Create Your Look"

---

## 3. STRUCTURED DATA (JSON-LD)

### 3.1 LocalBusiness / BeautySalon Schema (every page)

```json
{
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Glamorous",
  "description": "Premium makeup and beauty studio in Sarai Meer, Uttar Pradesh, specialising in bridal artistry.",
  "url": "https://glamorous.superezz.dev",
  "telephone": "+918837779719",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Main Market Road",
    "addressLocality": "Sarai Meer",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "276305",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "PLACEHOLDER_LAT",
    "longitude": "PLACEHOLDER_LNG"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "10:00",
      "closes": "20:00",
      "PLACEHOLDER": "Verify actual hours — B01"
    }
  ],
  "sameAs": [
    "https://superezz.dev"
  ],
  "image": "https://glamorous.in/og-home.jpg",
  "priceRange": "PLACEHOLDER — verify with owner"
}
```

### 3.2 BreadcrumbList Schema (inner pages)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://glamorous.in/" },
    { "@type": "ListItem", "position": 2, "name": "Bridal", "item": "https://glamorous.in/bridal" }
  ]
}
```

### 3.3 FAQPage Schema (Bridal page)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How far in advance should I book my bridal makeup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PLACEHOLDER BR04 — verify recommendation with owner"
      }
    }
  ]
}
```

### 3.4 Service Schema

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Bridal Makeup",
  "provider": { "@type": "BeautySalon", "name": "Glamorous" },
  "areaServed": {
    "@type": "Place",
    "name": "Sarai Meer, Uttar Pradesh, India"
  },
  "serviceType": "Bridal Makeup"
}
```

---

## 4. TECHNICAL SEO REQUIREMENTS

### 4.1 robots.txt

```
User-agent: *
Allow: /

Sitemap: https://glamorous.in/sitemap.xml
```

### 4.2 sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://glamorous.in/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://glamorous.in/services</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://glamorous.in/bridal</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://glamorous.in/gallery</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://glamorous.in/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://glamorous.in/contact</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### 4.3 Web Manifest (PWA-ready)

```json
{
  "name": "Glamorous Beauty Studio",
  "short_name": "Glamorous",
  "description": "Makeup & beauty studio in Sarai Meer",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#FAF7F2",
  "theme_color": "#1E1208",
  "icons": [
    { "src": "/favicon.svg", "sizes": "any", "type": "image/svg+xml" },
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

---

## 5. IMAGE SEO

### 5.1 Alt Text Guidelines

| Image Type | Alt Text Pattern | Example |
|---|---|---|
| Hero | Brand + emotional context | "Glamorous beauty studio — bridal makeup artistry in Sarai Meer" |
| Gallery / Bridal | Look description + context | "Bridal makeup look with traditional red and gold eye detail" |
| Gallery / Makeup | Look description | "Soft glam makeup with warm bronze tones" |
| Service card | Service name | "Makeup services at Glamorous, Sarai Meer" |
| About/Studio | Context | "Glamorous beauty studio interior, Sarai Meer" |
| Decorative | Empty | alt="" |

### 5.2 Image File Naming
```
/images/gallery/bridal/bridal-makeup-01.webp
/images/gallery/makeup/soft-glam-makeup-01.webp
/images/hero/glamorous-beauty-studio-hero.webp
/images/services/bridal-service-sarai-meer.webp
```

---

## 6. LOCAL SEO ACTIONS (Post-Launch)

| Action | Priority | Notes |
|---|---|---|
| Verify Google Business Profile | 🔴 Critical | Ensure profile matches website |
| Add business photos to GBP | 🔴 Critical | Upload real studio/work photos |
| Respond to all Google reviews | 🟡 Important | Builds trust and SEO signals |
| Keep hours updated on GBP | 🔴 Critical | Inconsistency hurts local SEO |
| Add Google Search Console | 🟡 Important | Monitor indexation |
| Submit sitemap to GSC | 🟡 Important | After launch |
| Request backlinks from local directories | 🟢 Nice | Justdial, Sulekha, etc. |
| Add Instagram link in bio to website | 🟡 Important | Signal to Google |

---

## 7. CONTENT SEO GUIDELINES

- **No keyword stuffing** — write naturally for humans first
- **Each page has exactly one `<h1>`**
- **Section headings** are descriptive, not decorative
- **Internal linking**: every page links to at least one related page
- **Contact page** must include full address text (not just map embed) — for indexation
- **Footer**: include condensed address text on every page

---

*End of SEO.md — v1.0*
