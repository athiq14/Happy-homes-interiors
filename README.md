# Happy Homes Interiors — Full Multi-Page Website

A production-ready, fully responsive **multi-page website** built for **Happy Homes Interiors**, Coimbatore, Tamil Nadu.

Existing website reference: [https://happyhomesinteriors.com/](https://happyhomesinteriors.com/)

---

## 🏛️ Website Architecture & Confirmed Routes

Every page in this architecture has its own dedicated URL, unique page layout, customized copy, verified imagery, canonical URL, and SEO metadata.

### Core Pages
- `/` — **Home**: Hero video/imagery, brand legacy, featured services, real projects, design workflow, client testimonials, and consultation booking.
- `/about/` — **About Us**: Verified background since 2014, design philosophy, workshop standards, turnkey capability, and studio invitation.
- `/services/` — **All Services Overview**: Comprehensive breakdown of all 12 confirmed disciplines, materials comparison table, and consultation triggers.
- `/projects/` — **Portfolio**: Filterable gallery (Kitchens, Wardrobes, Living, Pooja, Turnkey, Kids) with direct links to case studies.
- `/contact/` — **Contact & Consultation**: Verified Coimbatore studio address, click-to-call, WhatsApp direct button, hours, interactive Google Map, and full consultation booking form.
- `/faq/` — **Frequently Asked Questions**: Accessible categorized accordion covering process, materials, timelines, warranties, and pricing.
- `/privacy-policy/` — **Privacy Policy**: Transparent terms detailing consultation data collection and zero third-party disclosure.
- `/404.html` — **404 Not Found**: Branded recovery page directing users back to Home, Services, and Portfolio.

### Confirmed Individual Service Pages (`/services/[slug]`)
1. `/services/modular-kitchens/` — L-shaped, U-shaped, Island, BWP 710 Marine Ply, Blum & Hafele hardware, Acrylic & PU shutters.
2. `/services/wardrobes/` — Floor-to-ceiling sliding systems, classic armadio hinged wardrobes, tinted fluted glass, velvet jewelry trays.
3. `/services/living-room-interiors/` — Fluted charcoal wall louvers, statuario marble backdrops, ambient cove lighting, architectural room dividers.
4. `/services/bedroom-interiors/` — Master bedroom sanctuaries, padded acoustic headboards, floating beds, dimmable bedside lighting.
5. `/services/pooja-units/` — Consecrated teak wood mandirs, backlit Corian CNC jaali screens, brass hanging bells, Vastu alignment.
6. `/services/false-ceilings/` — Indirect perimeter gypsum coves, magnetic track lights, natural timber rafter drops, thermal insulation.
7. `/services/tv-units/` — Floating media consoles, concealed wire chases, fluted acoustic paneling, curio display niches.
8. `/services/custom-furniture/` — Artisanal dining tables, executive study desks, tailored bouclé sofas, Italian PU clear finishes.
9. `/services/complete-home-interiors/` — End-to-end turnkey transformation for apartments and luxury duplexes across Coimbatore.
10. `/services/kitchen-cabinets/` — Heavy-duty tandem pot drawers, blind corner LeMans trays, bi-fold overhead lift-ups, moisture seals.
11. `/services/kids-room-interiors/` — Rounded child-safe joinery, grow-with-me study desks, staircase toy drawers, certified zero-VOC paints.
12. `/services/bathroom-interiors/` — 100% waterproof WPC floating vanities, anti-fog backlit smart mirrors, recessed illuminated niches.

### Confirmed Project Case Studies (`/projects/[slug]`)
1. `/projects/luxury-modular-kitchen-rs-puram/` — Acrylic & Quartz Modular Kitchen, RS Puram.
2. `/projects/contemporary-bedroom-wardrobes-peelamedu/` — Floor-to-Ceiling Wardrobe Suite, Peelamedu.
3. `/projects/minimalist-living-tv-unit-race-course/` — Fluted Media Wall & Living Lounge, Race Course.
4. `/projects/traditional-teak-pooja-unit-ramanathapuram/` — Teak Wood Backlit Mandir Shrine, Ramanathapuram.
5. `/projects/complete-duplex-interior-avainashi-road/` — Turnkey 4BHK Duplex Residence, Avinashi Road.
6. `/projects/designer-kids-bedroom-saibaba-colony/` — Playful Study & Storage Suite, Saibaba Colony.

---

## 🎨 Luxury Design System Tokens

- **Warm Ivory:** `#F4EFE6` (Surface background and clean contrast)
- **Walnut Brown:** `#30271F` (Primary headings, dark luxury accents, typography)
- **Muted Brass:** `#B49A78` (Accent borders, tracking eyebrow labels, icons, button hovers)
- **Soft White:** `#FFFFFF` (Cards, panels, modal containers)
- **Headlines:** `Cormorant Garamond` (Sophisticated editorial serif)
- **Body:** `Plus Jakarta Sans` (Refined, legible modern sans-serif)

---

## 📞 Verified Business Information

- **Studio Address:** 63/53, Maruthakutti Gounder Thottam, 6th Street Extension, Kuppakonam Pudur Post, Coimbatore, Tamil Nadu – 641038
- **Primary Phone:** +91 999 431 1447
- **Secondary Phone:** +91 944 399 5447
- **Primary Email:** happyhomesinteriorscbe@gmail.com
- **Hours:** Monday – Saturday: 8:00 AM – 10:00 PM (Sunday by appointment)
- **Service Areas:** Coimbatore, Tirupur, RS Puram, Peelamedu, Race Course, Ramanathapuram, Saibaba Colony, Sulur, and across Tamil Nadu

---

## 🚀 Development & Production Build

```bash
# Install dependencies
npm install

# Generate all 22 static pages
npm run generate

# Start development server on port 5180
npm run dev

# Build production distribution into dist/
npm run build

# Preview production build on port 4180
npm run preview
```
