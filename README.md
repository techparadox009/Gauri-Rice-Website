# Gauri Rice — Website Redesign (Shrejal Impex Pvt. Ltd.)

A modern, animated redesign of shrejalimpex.com, built as a static site — no build step, no backend, ready for GitHub Pages.

## Structure
```
├── index.html            Home
├── about.html             About / history / timeline / testimonials
├── brands.html            All 6 brands + product ranges (anchors: #gauri #zara #saira #st #era #shahi)
├── vision.html             Vision & mission
├── infrastructure.html    Plant, process, machinery
├── contact.html            Enquiry form + corporate office info
├── css/style.css           Design tokens, typography, layout system
├── css/components.css      Hero, cards, forms, stat strip, etc.
├── js/main.js              Nav toggle, scroll reveal, animated counters, enquiry form
└── assets/svg/favicon.svg
```

## Deploy to GitHub Pages
1. Create a new repo (e.g. `gauri-rice-preview`) and push this folder's contents to the `main` branch.
2. In the repo: **Settings → Pages → Source → Deploy from branch → main → / (root)**.
3. Your site goes live at `https://<username>.github.io/<repo-name>/`.

No build tools, no `npm install` — it's plain HTML/CSS/JS, so it works as-is.

## Before sending this to Shrejal Impex
- The enquiry form currently opens the visitor's email app (`mailto:`) addressed to `enquiry@gauririce.com` — there's no backend, since this is a pitch preview. A real deployment should wire it to Formspree, Netlify Forms, or a proper backend instead.
- Every fact on the site (address, phone, plant size, capacity, brand names, product variants, testimonials) was pulled directly from the live shrejalimpex.com — verify nothing has changed on their end before you present this.
- The footer includes a small "Concept redesign — design preview" line. Keep that (or similar) visible until they've actually engaged you — the site uses their real name, logo mark, and contact details, so it shouldn't read as their official live site to a visitor who lands on it by accident.
- All product imagery is custom SVG (sack + monogram), not photos — swap in real product photography once you have access to it; it'll lift this further.

## Fonts used
Fraunces (display), Manrope (body), JetBrains Mono (data/labels) — loaded from Google Fonts via `css/style.css`. Swap to self-hosted fonts if you want zero external requests.
