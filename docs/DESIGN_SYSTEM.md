# GLAMOROUS — DESIGN SYSTEM

> **Version:** 1.0 | **Date:** 2026-08-27  
> Single source of truth for all design decisions: color, typography, spacing, elevation, motion, and component patterns.

---

## 1. DESIGN PRINCIPLES

1. **Restraint over decoration** — every visual element must earn its place
2. **Typography-first hierarchy** — size, weight, and spacing do the heavy lifting
3. **Warmth in detail** — small moments of warmth distinguish premium from generic
4. **Breathing space** — generous whitespace is itself a luxury signal
5. **Photography is queen** — the design exists to frame the work, not compete with it

---

## 2. COLOR SYSTEM

### 2.1 Palette Definition

```css
:root {
  /* ─── Core Palette ─── */
  --color-ivory:       #FAF7F2;   /* Primary background */
  --color-bone:        #F2EDE6;   /* Warm white, card backgrounds */
  --color-champagne:   #EDE0CC;   /* Soft champagne — section dividers, light cards */
  --color-parchment:   #E8DECE;   /* Warm mid-tone */

  /* ─── Text Colors ─── */
  --color-espresso:    #1E1208;   /* Primary text — deep, warm dark */
  --color-coffee:      #3D2B1A;   /* Secondary text */
  --color-mocha:       #6B4C36;   /* Muted text, captions */
  --color-taupe:       #9A8070;   /* Placeholder text, hints */

  /* ─── Accent ─── */
  --color-rose:        #C4897A;   /* Primary accent — muted rose */
  --color-blush:       #D9A89B;   /* Hover states, lighter accent */
  --color-petal:       #EDD6CF;   /* Very light blush — backgrounds, borders */
  --color-burgundy:    #6B1A2A;   /* Sparingly — special emphasis only */

  /* ─── UI Functional ─── */
  --color-border:      rgba(30, 18, 8, 0.12);
  --color-border-rose: rgba(196, 137, 122, 0.30);
  --color-overlay:     rgba(30, 18, 8, 0.72);
  --color-surface:     rgba(250, 247, 242, 0.80);  /* Frosted nav */
  --color-success:     #4A7C5F;
  --color-error:       #B54242;

  /* ─── Shadows ─── */
  --shadow-xs:  0 1px 2px rgba(30, 18, 8, 0.06);
  --shadow-sm:  0 2px 8px rgba(30, 18, 8, 0.08);
  --shadow-md:  0 4px 16px rgba(30, 18, 8, 0.10);
  --shadow-lg:  0 8px 32px rgba(30, 18, 8, 0.12);
  --shadow-xl:  0 16px 56px rgba(30, 18, 8, 0.16);
}
```

### 2.2 Usage Rules

| Color | Use For | Never Use For |
|---|---|---|
| `--color-ivory` | Page backgrounds, sections | Text |
| `--color-bone` | Cards, panels, input backgrounds | Body text |
| `--color-espresso` | Primary headings, body text | Backgrounds |
| `--color-rose` | Accent CTA, hover, links, icons | Large background fills |
| `--color-burgundy` | Single emphasis word in headline | Buttons, body, nav |
| `--color-champagne` | Dividers, subtle section tones | — |

### 2.3 Accessible Contrast Pairs

| Text | Background | Contrast Ratio |
|---|---|---|
| `--color-espresso` on `--color-ivory` | ≥ 14:1 ✅ | |
| `--color-espresso` on `--color-bone` | ≥ 12:1 ✅ | |
| `--color-coffee` on `--color-ivory` | ≥ 8:1 ✅ | |
| `--color-rose` on `--color-ivory` | ~3.2:1 — use only large text/UI | |
| White on `--color-espresso` | ≥ 14:1 ✅ | |

---

## 3. TYPOGRAPHY SYSTEM

### 3.1 Font Stack

```css
:root {
  /* Display / Editorial */
  --font-display: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;

  /* UI / Body */
  --font-body:    'DM Sans', 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif;

  /* Accent / Label */
  --font-label:   'DM Sans', sans-serif;   /* Uppercase tracking */
}
```

**Google Fonts import:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
```

### 3.2 Type Scale

```css
:root {
  /* ─── Display Scale ─── (Cormorant Garamond) */
  --text-display-2xl: clamp(4.5rem, 9vw, 9rem);     /* Hero mega headline */
  --text-display-xl:  clamp(3.5rem, 7vw, 7rem);     /* Section hero */
  --text-display-lg:  clamp(2.8rem, 5vw, 5.5rem);   /* Page title */
  --text-display-md:  clamp(2.2rem, 4vw, 4rem);     /* Sub-hero */
  --text-display-sm:  clamp(1.8rem, 3vw, 2.75rem);  /* Card headline */

  /* ─── Body Scale ─── (DM Sans) */
  --text-xl:    1.25rem;   /* 20px — Lead paragraph */
  --text-lg:    1.125rem;  /* 18px — Large body */
  --text-base:  1rem;      /* 16px — Default body */
  --text-sm:    0.875rem;  /* 14px — Small text, captions */
  --text-xs:    0.75rem;   /* 12px — Labels, legal */

  /* ─── Label Style ─── */
  --text-label: 0.6875rem; /* 11px — Uppercase section labels */
  --label-tracking: 0.18em;
  --label-weight: 500;
}
```

### 3.3 Type Hierarchy Examples

```
SECTION LABEL        ← DM Sans, 11px, uppercase, 0.18em tracking, --color-rose
Headline             ← Cormorant Garamond, display-lg, weight 300–400
Supporting headline  ← Cormorant Garamond, display-sm, italic, weight 300
Lead paragraph       ← DM Sans, text-xl, weight 300, --color-coffee
Body text            ← DM Sans, text-base, weight 400, --color-coffee
Caption / note       ← DM Sans, text-sm, weight 400, --color-mocha
```

### 3.4 Typography Rules
- Do NOT use bold (`font-weight: 700+`) in display typography
- Italic Cormorant Garamond is elegant for emphasis in headlines
- Line height: display = 1.05–1.15, body = 1.65–1.75
- Heading color is always `--color-espresso`
- Never center-align body paragraphs beyond 2 lines
- Max line length: 65–75 characters for body text

---

## 4. SPACING SYSTEM

```css
:root {
  /* ─── Base Unit: 4px ─── */
  --space-1:   0.25rem;   /*  4px */
  --space-2:   0.5rem;    /*  8px */
  --space-3:   0.75rem;   /* 12px */
  --space-4:   1rem;      /* 16px */
  --space-5:   1.25rem;   /* 20px */
  --space-6:   1.5rem;    /* 24px */
  --space-8:   2rem;      /* 32px */
  --space-10:  2.5rem;    /* 40px */
  --space-12:  3rem;      /* 48px */
  --space-16:  4rem;      /* 64px */
  --space-20:  5rem;      /* 80px */
  --space-24:  6rem;      /* 96px */
  --space-32:  8rem;      /* 128px */
  --space-40: 10rem;      /* 160px */
  --space-48: 12rem;      /* 192px */

  /* ─── Section Padding ─── */
  --section-padding-y: clamp(5rem, 8vw, 10rem);
  --section-padding-x: clamp(1.5rem, 5vw, 5rem);

  /* ─── Container ─── */
  --container-max: 1280px;
  --container-pad: clamp(1.5rem, 5vw, 5rem);

  /* ─── Component Radii ─── */
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   16px;
  --radius-xl:   24px;
  --radius-pill: 9999px;
}
```

---

## 5. GRID SYSTEM

```css
:root {
  --grid-cols: 12;
  --grid-gap:  clamp(1rem, 2vw, 1.5rem);
}

.container {
  width: 100%;
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--container-pad);
}

.grid {
  display: grid;
  grid-template-columns: repeat(var(--grid-cols), 1fr);
  gap: var(--grid-gap);
}
```

---

## 6. BUTTON SYSTEM

### 6.1 Variants

```css
/* Primary — Rose outline pill */
.btn-primary {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.875rem 2rem;
  border: 1.5px solid var(--color-rose);
  border-radius: var(--radius-pill);
  color: var(--color-espresso);
  background: transparent;
  transition: background 0.3s ease, color 0.3s ease;
}
.btn-primary:hover {
  background: var(--color-rose);
  color: var(--color-ivory);
}

/* Primary Filled */
.btn-filled {
  background: var(--color-espresso);
  color: var(--color-ivory);
  border: 1.5px solid var(--color-espresso);
}
.btn-filled:hover {
  background: var(--color-coffee);
}

/* Ghost */
.btn-ghost {
  background: transparent;
  border: none;
  color: var(--color-espresso);
  padding-inline: 0;
  text-decoration-line: underline;
  text-underline-offset: 4px;
  text-decoration-thickness: 1px;
}
.btn-ghost:hover {
  color: var(--color-rose);
}
```

### 6.2 Button Sizes

```css
.btn-sm { padding: 0.625rem 1.25rem; font-size: var(--text-xs); }
.btn-md { padding: 0.875rem 2rem;    font-size: var(--text-sm); }
.btn-lg { padding: 1rem 2.5rem;      font-size: var(--text-base); }
```

---

## 7. FORM DESIGN TOKENS

```css
:root {
  --input-bg:           var(--color-bone);
  --input-border:       var(--color-border);
  --input-border-focus: var(--color-rose);
  --input-radius:       var(--radius-md);
  --input-padding:      0.875rem 1rem;
  --input-font:         var(--font-body);
  --input-font-size:    var(--text-base);
  --input-color:        var(--color-espresso);
  --input-placeholder:  var(--color-taupe);
  --input-shadow-focus: 0 0 0 3px rgba(196, 137, 122, 0.20);
}
```

---

## 8. IMAGERY ART DIRECTION

### 8.1 Hero Images
- Cinematic aspect ratios: 16:9, 21:9, or full-bleed
- Warm, editorial tones — not overly saturated
- Depth of field — subject sharp, background soft
- Avoid harsh flash, flat lighting
- Colour grade: warm ivory / champagne tones

### 8.2 Gallery Images
- Mix portrait (2:3) and square (1:1) and landscape (4:3)
- Natural light preferred
- Close-up detail shots valued (lips, eye, brow, jewellery)
- Consistent warm temperature across the gallery

### 8.3 Image Overlay Treatment
```css
.image-overlay {
  position: relative;
}
.image-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 40%,
    rgba(30, 18, 8, 0.5) 100%
  );
}
```

---

## 9. ELEVATION & DEPTH

```css
/* Cards appear to float above the page surface */
.card {
  background: var(--color-bone);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  border-radius: var(--radius-lg);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-3px);
}
```

---

## 10. ICONOGRAPHY

- **Source:** Feather Icons or Lucide Icons (lightweight, consistent stroke weight)
- **Size:** 20px standard, 24px for nav, 16px for small UI
- **Stroke width:** 1.5px (refined, not bold)
- **Color:** inherit from parent (currentColor)
- **No filled/solid icons** — stroke-only throughout

---

## 11. LOGO SYSTEM

### 11.1 Wordmark Structure
```
GLAMOROUS
```
- Font: Cormorant Garamond, weight 300, letter-spacing 0.25em
- All-caps or small-caps variant
- Optional: thin decorative rule above or below wordmark

### 11.2 Logo Variants

| Variant | Use Case |
|---|---|
| Dark on Ivory | Default — nav, footer, print |
| Ivory on Dark | Hero overlays, dark backgrounds |
| Rose on Ivory | Accent variant — special pages only |

### 11.3 Logo Clear Space
- Minimum clear space: = cap height of the wordmark on all sides
- Minimum size: 120px wide (web), never smaller

---

## 12. DECORATIVE ELEMENTS

- Thin horizontal rules (`1px solid var(--color-border)`)
- Italic serif pull-quotes in Cormorant Garamond
- Subtle dot or dash separators between nav items
- Rose accent line beneath section labels (2px solid rose, 24px wide)
- No gradients on text (except hero — maximum one instance)
- No drop shadows on text
- No heavy border-radius on images (images are either sharp-edged or fully circular)

---

*End of DESIGN_SYSTEM.md — v1.0*
