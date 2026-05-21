# UI Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply six targeted improvements to make the Smile Studio Rīga site client-ready: hero redesign, language switcher, footer social links, floating desktop CTA, one realistic testimonial rating, and consistent before/after cards.

**Architecture:** All changes are isolated to individual React components with no shared state between them. `FloatingCTA` is the only new file; everything else modifies existing components. No backend, no new dependencies.

**Tech Stack:** React 18, Vite, Tailwind CSS (custom tokens: `navy`, `gold`, `cream`, `warm-gray`), Lucide React. Dev server: `npm run dev` → `http://localhost:5173`.

> **Note on testing:** No test framework is configured in this project. Each task uses visual verification via the dev server instead of automated tests.

---

### Task 1: Hero — full-bleed with left text overlay

**Files:**
- Modify: `src/components/Hero.jsx` (full rewrite)

- [ ] **Step 1: Start the dev server and note the current hero**

```bash
npm run dev
```

Open `http://localhost:5173`. Note the current layout: text block on top, image band below as two separate stacked elements.

- [ ] **Step 2: Rewrite `src/components/Hero.jsx`**

Replace the entire file content with:

```jsx
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      <img
        src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=2000&q=90&fit=crop"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(11,26,46,0.93) 42%, rgba(11,26,46,0.08) 78%)' }}
      />
      <div className="relative max-w-7xl mx-auto px-8 md:px-16 lg:px-24 w-full pt-24 pb-16">
        <p className="font-sans text-[11px] font-medium tracking-[0.28em] uppercase text-white/35 mb-12">
          Smile Studio · Rīga
        </p>
        <h1
          className="font-display font-light text-white mb-8 leading-[1.05]"
          style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}
        >
          Jūsu smaids —<br />
          <span className="italic">mūsu māksla.</span>
        </h1>
        <p className="font-sans text-white/50 text-base font-light tracking-wide mb-14 max-w-sm leading-relaxed">
          Estētiskā zobārstniecība Rīgā.<br />
          Pierakstieties konsultācijai.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center w-full sm:w-auto min-h-[44px] px-7 py-3.5 bg-gold text-navy font-sans text-[13px] font-medium tracking-widest uppercase hover:bg-gold/85 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
          >
            Pierakstīties
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center w-full sm:w-auto min-h-[44px] px-7 py-3.5 border border-white/30 text-white font-sans text-[13px] font-medium tracking-widest uppercase hover:border-white/55 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white"
          >
            Pakalpojumi
          </a>
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Verify visually**

Reload `http://localhost:5173`. Check:
- Hero fills the full viewport height
- Dental clinic image covers the entire background
- Dark gradient fades left-to-right (dark navy on text side, photo visible on right)
- Headline text is white, readable over the overlay
- "Pierakstīties" button is gold background with navy text
- "Pakalpojumi" button is outlined in white
- No stacked image band below the text block

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.jsx
git commit -m "feat: hero full-bleed layout with left text overlay"
```

---

### Task 2: Language switcher in Navbar

**Files:**
- Modify: `src/components/Navbar.jsx`

- [ ] **Step 1: Add `lang` state and switcher to the desktop nav**

Open `src/components/Navbar.jsx`. Make these three changes:

**a) Add `lang` state** (line 11, after the existing `open` state):

```jsx
const [lang, setLang] = useState('LV')
```

**b) Replace the desktop nav block** (the `<nav aria-label="Galvenā navigācija">` element) with:

```jsx
<nav aria-label="Galvenā navigācija" className="hidden md:flex items-center gap-8">
  {links.map((l) => (
    <a
      key={l.href}
      href={l.href}
      className="font-sans text-sm font-medium text-navy/70 hover:text-navy transition-colors duration-200 tracking-wide focus:outline-none focus:ring-2 focus:ring-navy rounded-sm"
    >
      {l.label}
    </a>
  ))}
  <div className="flex items-center gap-1 font-sans text-xs font-semibold tracking-[0.12em]">
    <button
      onClick={() => setLang('LV')}
      className={`px-0.5 focus:outline-none focus:ring-2 focus:ring-navy rounded-sm transition-colors duration-200 ${
        lang === 'LV'
          ? 'text-navy border-b border-gold pb-px'
          : 'text-navy/40 hover:text-navy/70'
      }`}
    >
      LV
    </button>
    <span className="text-navy/20">/</span>
    <button
      onClick={() => setLang('EN')}
      className={`px-0.5 focus:outline-none focus:ring-2 focus:ring-navy rounded-sm transition-colors duration-200 ${
        lang === 'EN'
          ? 'text-navy border-b border-gold pb-px'
          : 'text-navy/40 hover:text-navy/70'
      }`}
    >
      EN
    </button>
  </div>
  <a
    href="#contact"
    className="ml-2 px-5 py-2.5 bg-navy text-cream font-sans text-sm font-medium tracking-wide hover:bg-navy/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy"
  >
    Pierakstīties
  </a>
</nav>
```

**c) Add lang switcher to the mobile menu** — inside the `{open && ...}` block, after the last nav link `<a>` and before the CTA `<a>`:

```jsx
<div className="flex items-center gap-2 font-sans text-sm font-semibold tracking-[0.12em] pt-1">
  <button
    onClick={() => setLang('LV')}
    className={`px-0.5 focus:outline-none focus:ring-2 focus:ring-navy rounded-sm transition-colors duration-200 ${
      lang === 'LV'
        ? 'text-navy border-b border-gold pb-px'
        : 'text-navy/40 hover:text-navy/70'
    }`}
  >
    LV
  </button>
  <span className="text-navy/20">/</span>
  <button
    onClick={() => setLang('EN')}
    className={`px-0.5 focus:outline-none focus:ring-2 focus:ring-navy rounded-sm transition-colors duration-200 ${
      lang === 'EN'
        ? 'text-navy border-b border-gold pb-px'
        : 'text-navy/40 hover:text-navy/70'
    }`}
  >
    EN
  </button>
</div>
```

- [ ] **Step 2: Verify visually**

Reload `http://localhost:5173`. Check:
- Desktop: "LV / EN" appears between nav links and "Pierakstīties" button
- "LV" starts active (navy text, gold underline), "EN" is muted
- Clicking "EN" makes it active and "LV" muted — and vice versa
- Mobile: open hamburger menu → "LV / EN" toggle appears below nav links, above the CTA button

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar.jsx
git commit -m "feat: add LV/EN language switcher to navbar"
```

---

### Task 3: Footer — two-row layout with social icons

**Files:**
- Modify: `src/components/Footer.jsx` (full rewrite)

- [ ] **Step 1: Rewrite `src/components/Footer.jsx`**

Replace the entire file content with:

```jsx
const socials = [
  {
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true" focusable="false">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true" focusable="false">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true" focusable="false">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.05a8.16 8.16 0 0 0 4.77 1.52V7.14a4.85 4.85 0 0 1-1-.45z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-cream/10 py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col gap-4">
        {/* Row 1: Logo + Social icons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5" aria-label="Smile Studio Rīga">
            <span className="w-6 h-6 flex items-center justify-center">
              <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-hidden="true" focusable="false">
                <path d="M8 6C8 6 6 8.5 6 12.5C6 16.5 8.5 19 12 21C13.5 21.8 14 23 14 25C14 23 14.5 21.8 16 21C19.5 19 22 16.5 22 12.5C22 8.5 20 6 17 6C15.5 6 14.5 7 14 8C13.5 7 12.5 6 11 6H8Z" fill="#C4975A"/>
              </svg>
            </span>
            <span className="font-serif text-cream/80 font-medium">Smile Studio Rīga</span>
          </div>
          <div className="flex items-center gap-5">
            {socials.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-cream/45 hover:text-cream transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cream/50 rounded-sm"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        {/* Row 2: Copyright + Links */}
        <div className="border-t border-cream/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-cream/30 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Smile Studio Rīga. Visas tiesības aizsargātas.
          </p>
          <div className="flex items-center gap-6">
            <span className="font-sans text-xs text-cream/40">Privātuma politika</span>
            <a
              href="#contact"
              className="font-sans text-xs text-cream/40 hover:text-cream/70 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cream/50 rounded-sm"
            >
              Kontakti
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Verify visually**

Scroll to the bottom of `http://localhost:5173`. Check:
- Row 1: logo on the left, three icons (Facebook, Instagram, TikTok) on the right
- Icons are muted cream colour, brighten on hover
- Row 2 (below a hairline): copyright left, "Privātuma politika" + "Kontakti" right
- On mobile: rows stack cleanly, copyright centred

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.jsx
git commit -m "feat: two-row footer with Facebook, Instagram, TikTok icons"
```

---

### Task 4: Floating desktop CTA

**Files:**
- Create: `src/components/FloatingCTA.jsx`
- Modify: `src/App.jsx`

- [ ] **Step 1: Create `src/components/FloatingCTA.jsx`**

```jsx
import { useState, useEffect } from 'react'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#contact"
      aria-label="Pierakstīties konsultācijai"
      className={`hidden md:inline-flex fixed bottom-8 right-6 z-50 items-center gap-2 px-5 py-3 bg-navy text-cream font-sans text-xs font-semibold tracking-widest uppercase shadow-lg hover:bg-gold hover:text-navy transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      Pierakstīties →
    </a>
  )
}
```

- [ ] **Step 2: Import and render in `src/App.jsx`**

Add the import at the top of `src/App.jsx` alongside the other imports:

```jsx
import FloatingCTA from './components/FloatingCTA'
```

Add `<FloatingCTA />` inside the fragment, after `<WhatsAppButton />`:

```jsx
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Suspense fallback={null}>
          <WhyUs />
          <BeforeAfter />
          <Testimonials />
        </Suspense>
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <FloatingCTA />
    </>
  )
}
```

- [ ] **Step 3: Verify visually**

On desktop (`http://localhost:5173`, browser width > 768px):
- At page top: button is invisible
- Scroll down past the hero (~300px): navy pill "Pierakstīties →" fades in at bottom-right
- Hovering: background turns gold, text turns navy
- Clicking: scrolls to contact section
- On mobile (DevTools < 768px): button never appears (WhatsApp button covers mobile)

- [ ] **Step 4: Commit**

```bash
git add src/components/FloatingCTA.jsx src/App.jsx
git commit -m "feat: floating desktop CTA appears after scrolling past hero"
```

---

### Task 5: Testimonials — one 4-star review

**Files:**
- Modify: `src/components/Testimonials.jsx`

- [ ] **Step 1: Change Elīna Freimane's rating from 5 to 4**

In `src/components/Testimonials.jsx`, find the third review object (name: `'Elīna Freimane'`) and change `rating: 5` to `rating: 4`:

```jsx
{
  name: 'Elīna Freimane',
  date: 'Aprīlis 2024',
  treatment: 'ZOOM Balināšana',
  text: 'Pirmo reizi mūžā zobi patiešām izskatās tik balti! Balināšana aizņēma mazāk nekā divas stundas, un rezultāts ir iespaidīgs. Arī cena ir taisnīga salīdzinājumā ar citām klīnikām Rīgā.',
  rating: 4,
},
```

- [ ] **Step 2: Verify visually**

Scroll to the Testimonials section. Check:
- Third card (Elīna Freimane) shows 4 gold stars instead of 5
- First two cards still show 5 stars
- The aggregate "4.9 / 5 — balstīts uz 180+ atsauksmēm" line is unchanged

- [ ] **Step 3: Commit**

```bash
git add src/components/Testimonials.jsx
git commit -m "fix: change one testimonial to 4 stars for realism"
```

---

### Task 6: BeforeAfter — all three cards interactive

**Files:**
- Modify: `src/components/BeforeAfter.jsx`

- [ ] **Step 1: Add `split: true` to the second and third result entries**

In `src/components/BeforeAfter.jsx`, find the `results` array. The first entry already has `split: true`. Add `split: true` to the second and third entries:

```jsx
const results = [
  {
    treatment: 'Zobu balināšana',
    detail: 'ZOOM procedūra · 1 vizīte',
    outcome: '+8 toņi gaišāki',
    img: 'https://images.unsplash.com/photo-1677026010083-78ec7f1b84ed?w=800&q=90&fit=crop',
    split: true,
  },
  {
    treatment: 'Porcelāna venīri',
    detail: '8 venīri · 2 vizītes',
    outcome: 'Pilnīga smaida korekcija',
    img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=88&fit=crop&crop=faces',
    split: true,
  },
  {
    treatment: 'Implants + kronis',
    detail: 'Straumann implants · 3 mēneši',
    outcome: 'Pilnvērtīga zobu atjaunošana',
    img: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=88&fit=crop',
    split: true,
  },
]
```

- [ ] **Step 2: Verify visually**

Scroll to the Results section. Check:
- All three cards now have the drag-handle split slider
- Dragging left/right on each card reveals the before/after CSS filter effect
- "Pirms" label top-left, "Pēc" label top-right on all three
- Outcome badge visible at the bottom of each card

- [ ] **Step 3: Commit**

```bash
git add src/components/BeforeAfter.jsx
git commit -m "fix: apply split slider to all three before/after cards"
```

---

## Done

All six improvements applied. Final check: scroll through the full page at desktop and mobile widths and confirm nothing regressed in Services, About, WhyUs, or Contact sections.
