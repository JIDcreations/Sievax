# Sievax Academy — landing page

Static landing page for the Sievax Academy Data &amp; AI Strategy cohort.
No build step, no framework — plain HTML, CSS and a little vanilla JavaScript.

## Two visual themes

The same page ships in two looks, sharing markup structure and behaviour:

| Page                 | Theme          | Character                                                        |
| -------------------- | -------------- | --------------------------------------------------------------- |
| `index.html`         | **Flat**       | Production. Mirrors sievax.be — Poppins, flat surfaces, no shadows. |
| `illustrative.html`  | Illustrative   | Preview only. Hand-drawn accents, offset shadows, marker underlines. |

A floating "Preview" switcher in the corner toggles between the two. It is
marked **remove before production** in both files.

## Structure

```
.
├── index.html            # Flat theme (production)
├── illustrative.html     # Illustrative theme (preview)
├── css/
│   ├── flat.css          # Styles for index.html
│   └── illustrative.css  # Styles for illustrative.html
├── js/
│   └── main.js           # Shared: mobile nav toggle + lead-form submit
├── assets/
│   ├── images/           # Page illustrations
│   └── logos/            # Sievax brand logo kit (SVG / PNG / JPG / PDF)
├── docs/                 # Briefing, brand guide, reference example (not deployed)
└── netlify.toml          # Build → dist/
```

Each stylesheet is self-contained and follows the same section order (see the
table of contents at the top of the file), so the two themes are easy to diff.

## Going live — before launch

- **Lead form** — in both pages, replace `REPLACE_WITH_FORM_ID` in the form
  `action` with a real [Formspree](https://formspree.io) (or Basin/Tally)
  endpoint that delivers to `jan@sievax.be`. Until then the form runs in
  "demo mode": it confirms without sending.
- **Preview switcher** — delete the `.vswitch` link at the bottom of each page.
- **Cohort details** — fill in the `<!-- ... -->` placeholders (price, start
  date) and swap the testimonial placeholders for real names/photos.
- **Social image** — point `og:image` / `twitter:image` at a dedicated
  1200×630 image.

## Local preview

Any static server works, e.g.:

```sh
python3 -m http.server
# then open http://localhost:8000
```

## Deploy

Netlify runs the command in `netlify.toml`, copying the two pages, `css/`,
`js/` and `assets/` into `dist/`. `docs/` stays in the repo but off the
public site.
