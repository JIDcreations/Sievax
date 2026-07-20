# Sievax Academy — landing page

Static landing page for the Sievax Academy Data &amp; AI Strategy cohort.
No build step, no framework — plain HTML, CSS and a little vanilla JavaScript.

The page mirrors the live sievax.be look: Poppins, flat surfaces, no shadows,
pill buttons, generous radii.

## Structure

```
.
├── index.html            # The page
├── css/
│   └── flat.css          # Styles for index.html
├── js/
│   └── main.js           # Mobile nav toggle + lead-form submit + video facade
├── assets/
│   ├── images/           # Page illustrations
│   └── logos/            # Sievax brand logo kit (SVG / PNG / JPG / PDF)
├── docs/                 # Briefing, brand guide, reference example (not deployed)
└── netlify.toml          # Build → dist/
```

The stylesheet follows a fixed section order — see the table of contents at the
top of the file.

## Going live — before launch

- **Lead form** — replace `REPLACE_WITH_FORM_ID` in the form `action` with a
  real [Formspree](https://formspree.io) (or Basin/Tally) endpoint that
  delivers to `jan@sievax.be`. Until then the form runs in "demo mode": it
  confirms without sending.
- **Explainer video** — replace `REPLACE_WITH_YOUTUBE_ID` in the
  `data-video-id` attribute on `#videoEmbed`. Until then the play button
  does nothing.
- **Testimonials** — the three quotes are placeholders attributed to
  `[ Name ]` / `[ Organisation ]`. Swap in real names and photos, or remove
  the section. Do not publish as-is.
- **Cohort details** — fill in the `<!-- ... -->` placeholders (price, start
  date, seat count).
- **Social image** — point `og:image` / `twitter:image` at a dedicated
  1200×630 image.

## Local preview

Any static server works, e.g.:

```sh
python3 -m http.server
# then open http://localhost:8000
```

## Deploy

Netlify runs the command in `netlify.toml`, copying `index.html`, `css/`,
`js/` and `assets/` into `dist/`. `docs/` stays in the repo but off the
public site.
