# Truebridge Empowerment Echo Foundation — Website

## Run locally
```
npm install
npm run dev
```

## Build for production
```
npm run build
```
Output goes to `dist/` — upload that folder to Netlify/Vercel/any static host.

## Pages
- `/` Home (built from small section components — see below)
- `/about` About us + directors + partners
- `/programs` "Our Work" — health camps, blood donation, recognition, civic programs
- `/events` Chronological event record
- `/gallery` Photo grid (drop real photos into src/assets/images/gallery)
- `/contact` Contact form + details

## Home page architecture
`src/pages/Home.jsx` only composes section components — no giant single file:

```
components/
  layout/     Navbar.jsx, Footer.jsx
  home/       HeroSection, ImpactStats, FocusAreas, FocusAreaCard,
              ChangeSection, LatestEvents, EventCard, ImpactQuote,
              VideoSection, VideoCard, VideoModal, GetInvolved, FinalCTA
  common/     Container, SectionHeading, PrimaryButton, ImageWithFallback
data/
  events.js, videos.js, initiatives.js
```

## Brand tokens
| Role                  | Hex       |
|------------------------|-----------|
| Primary Navy (headings)| `#063B5C` |
| Deep Navy (dark/CTA bg)| `#032D46` |
| Teal (healthcare/links)| `#0F8B8D` |
| Coral (CTA only)       | `#FF6B4A` |
| Soft Cream (bg)        | `#FFF9F3` |
| Light Teal (section bg)| `#EAF8F7` |
| Soft Coral (section bg)| `#FFF0EC` |
| Dark Text              | `#17324D` |
| Muted Text             | `#64748B` |

Fonts: Poppins (headings), Inter (body), Caveat (small decorative phrases only).

## Images
Every photo is loaded through `ImageWithFallback` — if the file at the given
path doesn't exist yet, it shows a soft on-brand placeholder instead of a
broken-image icon. See `src/assets/images/README.md` for the exact list of
paths to fill in with real event photographs, and `src/data/*.js` to edit
copy/dates without touching component code.

## To customise
- Replace `youtubeId` placeholders in `src/data/videos.js` with real YouTube video IDs.
- Replace placeholder phone/email/address in `Footer.jsx` and `Contact.jsx`.
