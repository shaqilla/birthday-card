# A Little World for Alita

A personal, scrapbook-style birthday website built as a digital gift. It is a
single scrolling page with an animated envelope intro, a polaroid scrapbook, five
flip-note cards, a surprise box, an interactive cake, a sealed letter, and a
finale.

Built with React, Vite, and plain CSS. No backend, no database, no paid APIs.

## Quick start

Requirements: Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`).

Other commands:

```bash
npm run build     # production build in dist/
npm run preview   # preview the production build locally
```

## Replace the photos

The site currently uses five clearly marked pastel placeholder images. Replace
them with Alita's real photos before sharing the site. Do not use AI-generated
versions of her; use the original photos.

1. Put the five photos in `public/images/`.
2. Keep the filenames `alita-1.jpg` through `alita-5.jpg`, or update the `src`
   values in `src/data/birthdayContent.js`.
3. Portrait images work best (4:5, for example 1000 x 1250 px). The layout uses
   `object-fit: cover`, so other ratios are cropped rather than stretched.
4. Update each photo's `alt` text, `caption`, `tape` colour, and `tilt` in the
   `photos` array. Available tape colours: `pink`, `lavender`, `blue`, `peach`.

```js
// src/data/birthdayContent.js
export const photos = [
  {
    src: '/images/alita-1.jpg',
    alt: 'Alita laughing during a day out',
    caption: 'that laugh of yours',
    tape: 'pink',
    tilt: -3.2,
  },
  // ...
]
```

The `src` field also accepts a full URL if the photos are hosted elsewhere.

## Change the words

Everything personal lives in `src/data/birthdayContent.js`.

- `siteConfig.name`: the name used in the opening, hero, header, gallery
  heading, wish message, letter cover, and footer. Photo captions, alt text, the
  letter body, and the browser title are separate free text.
- `siteConfig.opening`: opening heading, subtitle, button, envelope seal/note.
- `siteConfig.hero`: hero eyebrow, title, subtitle, note, and button.
- `siteConfig.gallery` / `messages` / `surprise` / `cake`: section headings and
  button labels.
- `siteConfig.cake.wish`: the message revealed after making a wish.
- `siteConfig.letter`: the sealed-cover text plus the letter itself.
- `siteConfig.finale`: the last section and replay button.
- `messageCards`: the five flip cards. Keep five cards for the intended layout;
  any number still renders correctly. Icons can be `heart`, `sparkles`, `gift`,
  `star`, or `sun`. Tints can be `pink`, `lavender`, `blue`, `peach`, or `blush`.
- `surpriseMessages`: the random messages in the gift box. Add or remove as many
  as you like. Consecutive repeats are avoided automatically.

Letter details: blank lines in `letter.body` split it into paragraphs. The first
paragraph is styled as the handwritten greeting. `closing` and `signature`
appear at the bottom, and `ps` is optional.

To change the browser tab title or description, edit `index.html`.

## Music

The site never autoplays audio. The music button in the header starts a quiet,
synthesised music-box loop using the Web Audio API, so no audio file is required.

To use a custom track instead:

1. Add an audio file to `public/music/` (for example `our-song.mp3`).
2. Set the path in the config:

```js
music: {
  src: '/music/our-song.mp3',
  volume: 0.45,
},
```

The track still only starts when the visitor presses the music button.

## Deploy to Cloudflare Pages

### Option A: connect a Git repository (recommended)

1. Push this project to GitHub or GitLab.
2. In the Cloudflare dashboard, go to **Workers & Pages -> Create -> Pages ->
   Connect to Git** and select the repository.
3. Use these build settings:
   - Framework preset: **Vite**
   - Build command: **`npm run build`**
   - Build output directory: **`dist`**
   - Root directory: leave as the repository root
4. Save and deploy. Cloudflare installs dependencies and serves `dist/`.

No environment variables, server functions, or database are needed. This site is
one page with in-page anchors, so no SPA rewrite rule is required.

### Option B: direct upload

```bash
npm run build
```

Then in the Cloudflare dashboard open **Workers & Pages -> Create -> Pages ->
Upload assets**, and upload the contents of the generated `dist` folder.

### Option C: Wrangler CLI

```bash
npm run build
npx wrangler pages deploy dist --project-name a-little-world-for-alita
```

You can attach a custom domain afterwards under the Pages project's
**Custom domains** settings.

## Project structure

```text
public/
  images/alita-1.jpg ... alita-5.jpg   photos (replace these)
  music/                               optional custom audio
  favicon.svg
src/
  components/         one component per section plus shared pieces
  data/birthdayContent.js   all text, photos, and personal settings
  hooks/useScrollReveal.js
  lib/confetti.js     canvas confetti
  lib/musicBox.js     synthesised music-box loop
  App.jsx
  index.css           design system, layout, animation, responsive rules
  main.jsx
index.html
vite.config.js
```

## Accessibility and behaviour notes

- All interactive elements are real buttons or links with accessible names.
- The photo viewer traps focus, supports Escape and arrow keys, restores focus on
  close, and supports swiping on touch devices.
- The page respects `prefers-reduced-motion`: reveal animations, confetti, flame
  flicker, and smooth scrolling are disabled or reduced.
- The scrapbook includes a graceful in-page fallback if a photo fails to load.
- The layout is tested from small phones through wide desktops, with no
  horizontal scrolling at the supported widths.
