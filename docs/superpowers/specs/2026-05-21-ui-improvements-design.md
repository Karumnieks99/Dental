# UI Improvements — Smile Studio Rīga
**Date:** 2026-05-21  
**Status:** Approved

## Scope

Six targeted improvements to make the site client-ready and more visually compelling. No new sections, no backend wiring (demo only).

---

## 1. Hero — Full-bleed with left text overlay

**Current:** Text block on top, image band below as a separate element.  
**New:** Full-viewport-height section. The Unsplash image covers 100% of the hero area (`object-fit: cover`). A `linear-gradient(to right, rgba(26,39,68,0.92) 45%, rgba(26,39,68,0.05))` overlay runs left-to-right. All existing copy (eyebrow, h1, subheading, two CTAs) is absolutely positioned over the left side. Bottom fade from `#FAFAF8` removed — no longer needed. The section height is `100vh` (min `600px`).

**CTAs:** "Pierakstīties" styled with `bg-gold text-navy` (was `bg-navy text-cream`). "Pakalpojumi" gets `border-cream/30 text-cream` outlined style. Both sit in the same flex row as before.

---

## 2. Language Switcher — Navbar

**Placement:** Desktop — between nav links and the "Pierakstīties" button. Mobile — below the nav links inside the existing slide-down menu, above the CTA button.

**Behaviour:** Two states: `LV` (default) and `EN`. Clicking toggles a `lang` state in the Navbar component. Active language: `text-navy`, underlined with a 1.5px gold bottom border. Inactive: `text-navy/40`, no underline, clickable. No actual content translation needed (demo).

**Markup:** `<button>LV</button> <span>/</span> <button>EN</button>` — slim, no border, no background.

---

## 3. Social Links — Footer

**Layout change (two rows):**
- **Row 1:** Logo + "Smile Studio Rīga" on the left. Facebook, Instagram, TikTok SVG icons on the right. Icons at `cream/45` opacity, hover to `cream`, transition 200ms.
- **Row 2:** `border-t border-cream/10` separator. Copyright text left. "Privātuma politika" + "Kontakti" right.

**Icons:** Inline SVG (no external icon library dependency). Each wrapped in an `<a href="#">` with `aria-label`. TikTok icon uses the standard path SVG.

---

## 4. Floating Desktop CTA

**Trigger:** Appears after the user scrolls more than 300px. Hidden below that threshold and hidden entirely on mobile (`md:flex`, hidden on small screens — WhatsApp button covers mobile).

**Style:** Fixed position, `bottom-8 right-6`. Navy background, cream text, `text-xs font-semibold tracking-widest uppercase`. On hover: gold background, navy text. Smooth `opacity` + `translateY` transition on show/hide (not just display toggle). Links to `#contact`.

**Component:** New `FloatingCTA.jsx`, imported in `App.jsx` alongside `WhatsAppButton`.

---

## 5. Testimonials — One 4-star review

Change Elīna Freimane's rating from `5` to `4`. No other copy changes. The aggregate "4.9 / 5" summary line stays as-is.

---

## 6. BeforeAfter — All three cards interactive

Apply `split: true` to all three result entries in the `results` array. All three cards use `SplitCard` with the CSS-filter yellowing trick for "before". No new images needed — the existing Unsplash images work for all three.

---

## Files Changed

| File | Change |
|------|--------|
| `src/components/Hero.jsx` | Full rewrite — full-bleed layout |
| `src/components/Navbar.jsx` | Add lang switcher state + render |
| `src/components/Footer.jsx` | Two-row layout + social icons |
| `src/components/FloatingCTA.jsx` | New component |
| `src/components/Testimonials.jsx` | Change one rating to 4 |
| `src/components/BeforeAfter.jsx` | Set `split: true` on all results |
| `src/App.jsx` | Import + render `FloatingCTA` |

---

## Out of Scope

- Actual i18n / content translation
- Contact form backend (demo only — success state already implemented)
- New sections (FAQ, stats strip explicitly rejected)
- Any changes to Services, About, WhyUs, Contact, WhatsAppButton, or hooks
