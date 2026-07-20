# Project context — Sievax Academy landing page (feedback round 2)

> **Stale doc.** This was the brief for feedback round 2, when the site shipped
> as two parallel design versions. The client rejected the illustrative version
> and it has been deleted — there is now ONE page. Kept for the contracts in
> "Contracts to PRESERVE"; ignore anything about a second version.

Static site, ONE page: `index.html` + `css/flat.css` — Poppins, no shadows, pill buttons, hairline borders, generous radii. Mirrors the live sievax.be look.

No build step. Preview = serve repo root with `python3 -m http.server`.
Shared JS: `js/main.js` (mobile nav toggle + lead-form submit) — DO NOT break its hooks (`#leadForm`, `#leadSuccess`, nav toggle).

## THE COPY SOURCE OF TRUTH
`docs/reference-example.html` holds the canonical copy + information architecture the client wants. **All visible text on the site must match the reference's wording** (headings, subheads, body, pills, FAQ, section labels, trainer bio, outcomes, CTAs). The reference is a standalone single-file mock with its OWN css/class names — DO NOT adopt its CSS or class names. Only mirror its TEXT and section structure into our existing class system + theme. Keep our two themes' visual identity intact; just make the words + section layout match the reference.

Where the reference uses placeholders (`[name]`, `[date]`, `€[X]`, `[N]`, `[timezone]`), keep the site's existing real values if it already has them (e.g. trainer is **Jan Meskens**; contact **jan@sievax.be**; Calendly link; "Announced soon" dates). Prefer reference wording for everything else.

## THE FIVE FEEDBACK ITEMS (apply ALL to your version)

1. **Outcomes section ("What you'll walk away with") feels weak/random — make it cleaner.**
   The reference nails it: a tidy **numbered list in a clean 2-column grid** (`.out-list` → six `.out-item`s, each a numbered disc `1..6` + one line). Rebuild our OUTCOMES section to that structure & copy (the 6 outcome lines in the reference, in order). Drop the current loose "out-intro / out-illo image + lead paragraph" arrangement in favor of the clean numbered grid. It should feel deliberate and on-brand, not random. Keep it themed (flat = hairline grid; illustrative = ink borders / marker).

2. **Trainer = a proper "Jan" section, with about-him copy AND a picture of him.**
   Our trainer section currently shows a VIDEO placeholder. Replace the media slot with a **photo of Jan**: a square, themed, framed photo slot. No photo asset exists yet, so make an easily-swappable placeholder — an `<img>` referencing `assets/images/jan.jpg` with a fallback (initials "JM" on a yellow field, like the reference `.tr-photo`) and an HTML comment explaining how to drop in the real photo. Keep the about-Jan copy (reference "Who's teaching" section wording, adapted: he's **Jan Meskens**, PhD in Human-Computer Interaction, guest lecturer, keynote speaker, 10+ years; founded Sievax; "independent guidance delivers real impact"). Keep proof pills. Layout should read like the reference `.tr-grid` (photo left, copy right; stacks on mobile).

3. **The 20% / 80% thesis bar isn't grabbing enough attention — make it MORE prominent.**
   The `.thesis` bar (`.thesis-bar` .b20/.b80 + `.thesis-legend`) is the spine of the whole pitch. Make it visually louder and command attention: e.g. taller bar, bigger/bolder in-bar labels, add the actual "20% — the tech" / "80% — everything else" labels prominently, stronger contrast/framing appropriate to the theme (flat: bold clean; illustrative: bump the sticker shadow / slight scale). Don't make it garish — make it the clear focal moment. One bold idea, executed well.

4. **Mobile: center the connector arrow under each program card (currently left-aligned).**
   In the `@media (max-width: 900px)` block, `.stop:not(:last-child)::before` (the down-arrow between stacked roadmap cards) uses `left: 22px` which pins it to the left edge. Change it to sit **centered under the card** (`left: 50%`, keep `transform: translateX(-50%)`). Verify on a narrow viewport that the arrow is centered between each stacked "Week" card.

5. **Whole-site copy = the reference.** (see COPY SOURCE OF TRUTH above) — sweep every section: nav, hero, the gap/problem, audience, outcomes, program, trainer, enroll/pricing, FAQ, final CTA, footer. Align wording to `docs/reference-example.html`.

## Contracts to PRESERVE
- Keep class names/IDs our JS + anchors rely on: `#leadForm`, `#leadSuccess`, `#apply`, `#program`, `#trainer`, `#gap`/`#problem` nav anchors, `.sticky-cta`, nav toggle. If you rename a section id, update the nav links in the SAME file.
- Keep the illustration frames we just fixed (`.gap-img`, `.out-illo` image frames) — if outcomes no longer uses `.out-illo`, that's fine, just don't regress the gap illustration.
- Don't touch global design tokens in a way that changes the whole theme; scope your CSS to the sections you're changing.
- Don't regress the illustration frames (`.gap-img`).

## Acceptance criteria
- All 5 items done, on YOUR version only.
- Copy matches `docs/reference-example.html` wording throughout.
- No horizontal overflow at 375px, 768px, 1280px. (Check `document.documentElement.scrollWidth === clientWidth` or just eyeball a narrow viewport.)
- Mobile program arrows centered under each card.
- Outcomes reads clean & numbered; trainer shows Jan + photo slot; 20/80 bar is a clear focal point.
- Make real edits; leave everything UNCOMMITTED (orchestrator owns git). Don't start a preview server.
- When done: list the sections you changed + confirm no other version's files touched + note the photo placeholder path.
