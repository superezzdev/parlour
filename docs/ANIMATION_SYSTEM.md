# GLAMOROUS — ANIMATION SYSTEM

> **Version:** 1.0 | **Date:** 2026-08-27  
> Defines the complete motion language: principles, timing, CSS animations, JavaScript orchestration, and accessibility handling.

---

## 1. MOTION PHILOSOPHY

> "Animation should be felt, not noticed."

Motion at Glamorous serves one purpose: to make the experience feel alive, premium, and considered. Every animation must pass this filter:

- **Does it serve the narrative?** (reveal, transition, emphasis)
- **Does it feel expensive?** (smooth, confident, unhurried)
- **Is it degradable?** (works without JS, respects `prefers-reduced-motion`)

**Forbidden motion patterns:**
- Bouncing / elastic overshoot
- Floating elements (unless intentionally very slow)
- Random or unmotivated movement
- Spinning loaders on content
- Animation on every element simultaneously
- 3D transforms for decorative purposes

---

## 2. TIMING & EASING TOKENS

```css
:root {
  /* ─── Duration ─── */
  --duration-instant:  100ms;
  --duration-fast:     200ms;
  --duration-base:     350ms;
  --duration-slow:     550ms;
  --duration-slower:   800ms;
  --duration-reveal:   1100ms;

  /* ─── Easing ─── */
  --ease-standard:   cubic-bezier(0.25, 0.46, 0.45, 0.94);   /* Smooth, general */
  --ease-in:         cubic-bezier(0.55, 0.055, 0.675, 0.19); /* Exits */
  --ease-out:        cubic-bezier(0.215, 0.61, 0.355, 1);    /* Entrances */
  --ease-inout:      cubic-bezier(0.645, 0.045, 0.355, 1);   /* Transitions */
  --ease-editorial:  cubic-bezier(0.16, 1, 0.3, 1);          /* Luxury, overshoot-free */
  --ease-reveal:     cubic-bezier(0.77, 0, 0.175, 1);        /* Mask reveals */

  /* ─── Stagger Delay ─── */
  --stagger-base:    60ms;
  --stagger-lg:      100ms;
  --stagger-xl:      150ms;
}
```

---

## 3. CORE ANIMATION CLASSES

### 3.1 Scroll Reveal (IntersectionObserver trigger)

```css
/* Initial state — elements start hidden */
[data-reveal] {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity var(--duration-slow) var(--ease-out),
    transform var(--duration-slow) var(--ease-out);
}

/* Active state — triggered by IntersectionObserver */
[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Variants */
[data-reveal="fade"] {
  transform: none;
}

[data-reveal="left"] {
  transform: translateX(-32px);
}

[data-reveal="right"] {
  transform: translateX(32px);
}

[data-reveal="scale"] {
  transform: scale(0.96);
}
```

### 3.2 Stagger Children

```css
[data-stagger] > * {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity var(--duration-slow) var(--ease-out),
    transform var(--duration-slow) var(--ease-out);
}

[data-stagger].is-visible > * {
  opacity: 1;
  transform: translateY(0);
}

/* Delay each child */
[data-stagger].is-visible > *:nth-child(1)  { transition-delay: 0ms; }
[data-stagger].is-visible > *:nth-child(2)  { transition-delay: var(--stagger-base); }
[data-stagger].is-visible > *:nth-child(3)  { transition-delay: calc(var(--stagger-base) * 2); }
[data-stagger].is-visible > *:nth-child(4)  { transition-delay: calc(var(--stagger-base) * 3); }
[data-stagger].is-visible > *:nth-child(5)  { transition-delay: calc(var(--stagger-base) * 4); }
[data-stagger].is-visible > *:nth-child(6)  { transition-delay: calc(var(--stagger-base) * 5); }
```

### 3.3 Image Clip Reveal (Mask Wipe)

```css
.image-reveal-wrapper {
  overflow: hidden;
  clip-path: inset(0 100% 0 0);
  transition: clip-path var(--duration-reveal) var(--ease-reveal);
}

.image-reveal-wrapper.is-visible {
  clip-path: inset(0 0% 0 0);
}

.image-reveal-wrapper img {
  transform: scale(1.08);
  transition: transform var(--duration-reveal) var(--ease-standard);
}

.image-reveal-wrapper.is-visible img {
  transform: scale(1);
}
```

### 3.4 Typography Split Reveal (Headline Line by Line)

```css
.text-reveal-line {
  overflow: hidden;
  display: block;
}

.text-reveal-line > span {
  display: block;
  transform: translateY(105%);
  transition:
    transform var(--duration-slow) var(--ease-editorial);
}

.text-reveal-line.is-visible > span {
  transform: translateY(0);
}

/* Stagger lines */
.text-reveal-line:nth-child(1) > span { transition-delay: 0ms; }
.text-reveal-line:nth-child(2) > span { transition-delay: 80ms; }
.text-reveal-line:nth-child(3) > span { transition-delay: 160ms; }
```

---

## 4. PAGE TRANSITION SYSTEM

### 4.1 Route Change Animation

```javascript
// src/utils/animations.js
export async function pageOut(container) {
  container.style.transition = `opacity 300ms ${getComputedStyle(document.documentElement).getPropertyValue('--ease-in')}, transform 300ms ${getComputedStyle(document.documentElement).getPropertyValue('--ease-in')}`;
  container.style.opacity = '0';
  container.style.transform = 'translateY(-12px)';
  await wait(300);
}

export async function pageIn(container) {
  container.style.opacity = '0';
  container.style.transform = 'translateY(12px)';
  // Force reflow
  void container.offsetHeight;
  container.style.transition = `opacity 450ms ${getComputedStyle(document.documentElement).getPropertyValue('--ease-out')}, transform 450ms ${getComputedStyle(document.documentElement).getPropertyValue('--ease-out')}`;
  container.style.opacity = '1';
  container.style.transform = 'translateY(0)';
}
```

---

## 5. HERO SECTION ENTRANCE SEQUENCE

The hero is the first impression — its entrance should feel like a curtain rising.

### Timing Sequence:
```
0ms    — Image starts clip reveal (bottom-to-top wipe)
200ms  — Section label fades in
350ms  — Headline line 1 slides up
430ms  — Headline line 2 slides up
510ms  — Headline line 3 slides up (if 3 lines)
650ms  — Subheadline / body text fades in
850ms  — CTA button fades + slides up
1100ms — Scroll indicator appears
```

### CSS Keyframe for Initial Load:

```css
@keyframes heroImageReveal {
  from { clip-path: inset(0 0 100% 0); }
  to   { clip-path: inset(0 0 0% 0); }
}

.hero-image {
  animation: heroImageReveal var(--duration-reveal) var(--ease-reveal) forwards;
}
```

---

## 6. HOVER ANIMATIONS

### 6.1 Image Hover Zoom (Gallery, Service Cards)

```css
.hover-zoom {
  overflow: hidden;
}

.hover-zoom img {
  transition: transform 600ms var(--ease-standard);
  will-change: transform;
}

.hover-zoom:hover img {
  transform: scale(1.05);
}
```

### 6.2 Button Hover (CTA)

```css
.btn-primary {
  transition:
    background var(--duration-fast) var(--ease-out),
    color var(--duration-fast) var(--ease-out),
    transform var(--duration-fast) var(--ease-out);
}

.btn-primary:hover {
  transform: translateY(-2px);
}

.btn-primary:active {
  transform: translateY(0px);
}
```

### 6.3 Nav Link Hover

```css
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-rose);
  transition: width var(--duration-base) var(--ease-editorial);
}

.nav-link:hover::after,
.nav-link.is-active::after {
  width: 100%;
}
```

### 6.4 Card Hover

```css
.service-card {
  transition:
    transform var(--duration-base) var(--ease-out),
    box-shadow var(--duration-base) var(--ease-out);
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}
```

---

## 7. NAVBAR SCROLL BEHAVIOUR

```css
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: transparent;
  backdrop-filter: none;
  transition:
    background var(--duration-base) var(--ease-standard),
    backdrop-filter var(--duration-base) var(--ease-standard),
    box-shadow var(--duration-base) var(--ease-standard);
}

.navbar.is-scrolled {
  background: var(--color-surface);
  backdrop-filter: blur(12px) saturate(150%);
  -webkit-backdrop-filter: blur(12px) saturate(150%);
  box-shadow: var(--shadow-sm);
}
```

```javascript
// Trigger on scroll
const navbar = document.querySelector('.navbar');
const scrollThreshold = 60;

window.addEventListener('scroll', () => {
  navbar.classList.toggle('is-scrolled', window.scrollY > scrollThreshold);
}, { passive: true });
```

---

## 8. MOBILE MENU ANIMATION

```css
/* Overlay entrance */
.mobile-menu-overlay {
  position: fixed;
  inset: 0;
  background: var(--color-ivory);
  z-index: 200;
  transform: translateX(100%);
  transition: transform var(--duration-slow) var(--ease-editorial);
}

.mobile-menu-overlay.is-open {
  transform: translateX(0);
}

/* Menu items stagger in */
.mobile-menu-overlay .nav-link {
  opacity: 0;
  transform: translateX(24px);
  transition:
    opacity var(--duration-base) var(--ease-out),
    transform var(--duration-base) var(--ease-out);
}

.mobile-menu-overlay.is-open .nav-link {
  opacity: 1;
  transform: translateX(0);
}

.mobile-menu-overlay.is-open .nav-link:nth-child(1) { transition-delay: 100ms; }
.mobile-menu-overlay.is-open .nav-link:nth-child(2) { transition-delay: 160ms; }
.mobile-menu-overlay.is-open .nav-link:nth-child(3) { transition-delay: 220ms; }
.mobile-menu-overlay.is-open .nav-link:nth-child(4) { transition-delay: 280ms; }
.mobile-menu-overlay.is-open .nav-link:nth-child(5) { transition-delay: 340ms; }
```

---

## 9. GALLERY LIGHTBOX ANIMATION

```css
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(30, 18, 8, 0);
  z-index: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  transition: background var(--duration-base) var(--ease-standard);
}

.lightbox.is-open {
  background: rgba(30, 18, 8, 0.92);
  pointer-events: all;
}

.lightbox-image {
  transform: scale(0.92);
  opacity: 0;
  transition:
    transform var(--duration-slow) var(--ease-editorial),
    opacity var(--duration-slow) var(--ease-out);
}

.lightbox.is-open .lightbox-image {
  transform: scale(1);
  opacity: 1;
}
```

---

## 10. GALLERY FILTER ANIMATION

Use FLIP technique (First, Last, Invert, Play) for smooth masonry reflow:

```javascript
// src/utils/gallery-filter.js
function filterGallery(category) {
  const items = document.querySelectorAll('.gallery-item');

  // Record First positions
  const firsts = [...items].map(el => el.getBoundingClientRect());

  // Apply filter
  items.forEach(item => {
    item.style.display = category === 'all' || item.dataset.category === category
      ? '' : 'none';
  });

  // Record Last positions
  const lasts = [...items].filter(el => el.style.display !== 'none')
                           .map(el => el.getBoundingClientRect());

  // Invert + Play
  items.forEach((item, i) => {
    if (item.style.display === 'none') return;
    const dx = firsts[i].left - lasts[i].left;
    const dy = firsts[i].top - lasts[i].top;
    item.style.transform = `translate(${dx}px, ${dy}px)`;
    item.style.transition = 'none';
    requestAnimationFrame(() => {
      item.style.transition = `transform 400ms ${getComputedStyle(document.documentElement).getPropertyValue('--ease-editorial')}`;
      item.style.transform = '';
    });
  });
}
```

---

## 11. PARALLAX SYSTEM

Parallax is used sparingly — only on hero backgrounds and editorial image sections.

```javascript
// src/utils/animations.js
export function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  window.addEventListener('scroll', () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    parallaxElements.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.3;
      const rect = el.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
      el.style.transform = `translateY(${offset}px)`;
    });
  }, { passive: true });
}
```

Usage:
```html
<div data-parallax="0.2">
  <img src="..." alt="...">
</div>
```

---

## 12. INTERSECTION OBSERVER SETUP

```javascript
// src/utils/animations.js
export function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Unobserve after trigger (one-shot animation)
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,         // Trigger when 12% visible
      rootMargin: '0px 0px -40px 0px',  // Slight bottom offset
    }
  );

  document.querySelectorAll('[data-reveal], [data-stagger], .image-reveal-wrapper')
    .forEach(el => observer.observe(el));
}
```

---

## 13. REDUCED MOTION SUPPORT

```css
/* Disable ALL transitions and animations */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  /* Still show content — just without motion */
  [data-reveal],
  [data-stagger] > *,
  .text-reveal-line > span,
  .image-reveal-wrapper {
    opacity: 1 !important;
    transform: none !important;
    clip-path: none !important;
  }
}
```

```javascript
// Also check in JS before applying animations
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
```

---

## 14. ANIMATION USAGE MATRIX

| Component | Animation Type | Trigger | Reduced Motion |
|---|---|---|---|
| Hero image | Clip reveal (bottom wipe) | Page load | Skip |
| Hero headline | Text line slide up | Page load (+delay) | Skip |
| Hero CTA | Fade + slide | Page load (+delay) | Show immediately |
| Navbar scroll | Background transition | Scroll | Disable transition |
| Mobile menu | Slide from right | Click | Instant show |
| Section headings | Fade + slide up | Scroll (IO) | Show immediately |
| Service cards | Stagger fade | Scroll (IO) | Show immediately |
| Gallery images | Clip reveal | Scroll (IO) | Show immediately |
| Gallery filter | FLIP | Click | Instant reflow |
| Lightbox open | Scale + fade | Click | Instant open |
| Page transition | Fade + translateY | Route change | Instant switch |
| Hover: images | Scale 1.05 | Hover | No hover effect |
| Hover: buttons | TranslateY -2px | Hover | No hover effect |
| Hover: nav links | Underline grow | Hover | Instant underline |
| Parallax | TranslateY by scroll | Scroll | Disable entirely |
| FAQ accordion | Height transition | Click | Instant open |

---

*End of ANIMATION_SYSTEM.md — v1.0*
