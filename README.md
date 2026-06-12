# ch33rsl0v3 / portfolio

Personal portfolio of **Mark Redfield (ch33rsl0v3)** — Game Producer & Game Designer.
eva-01 / Chainsaw Man / hacker-CRT aesthetic. Live at
**https://ch33rsl0v3.github.io/portfolio/**

This is the **v2 rebuild**. The original single-file site is preserved as a
reference at [`legacy/index.html`](legacy/index.html) — it remains the source of
truth for content, palette, and copy.

## Stack

- **Vite** + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first — theme tokens live in [`src/index.css`](src/index.css) via `@theme`)
- **shadcn/ui** (new-york style, Tailwind v4) with the `@/...` alias, so
  [21st.dev](https://21st.dev) components drop in without edits
- **react-i18next** + **i18next** + **language-detector** (EN / RU / ES)

## Develop

```bash
npm install
npm run dev       # dev server at http://localhost:5173/portfolio/
npm run build     # type-check (tsc -b) + production build to dist/
npm run preview   # preview the production build
```

## Project structure

```
portfolio/
├─ index.html               # Vite entry (OG tags, fonts, #root)
├─ legacy/index.html        # original v1 single-file site (reference)
├─ public/                  # images/, videos/, favicon.ico, 404.html
├─ src/
│  ├─ main.tsx              # bootstrap (+ injects --bg-image base path)
│  ├─ App.tsx               # section layout
│  ├─ index.css             # @theme tokens, shadcn base, CRT + bg-pattern
│  ├─ i18n/
│  │  ├─ index.ts           # i18next config (flat dotted keys, detector)
│  │  └─ locales/{en,ru,es}.json
│  ├─ data/                 # typed content (source of truth for the UI)
│  │  ├─ contracts.ts       # experience + per-contract projects + metrics
│  │  ├─ projects.ts        # personal projects
│  │  ├─ artworks.ts
│  │  ├─ achievements.ts
│  │  ├─ socials.ts         # nav socials + contact rows
│  │  └─ about.ts           # skills, languages, fav games, hero stats
│  ├─ components/           # Nav, LangSwitch, ContractCard, ProjectCard,
│  │                        # ArtworkItem, AchievementCard, SectionHead,
│  │                        # Slider, Btn, Icons, Reveal, Wrap
│  ├─ sections/             # Hero, Experience, Projects, Artworks,
│  │                        # About, Contact, Footer
│  └─ lib/                  # cn(), asset() base-path helper
└─ .github/workflows/deploy.yml
```

All sections render from `src/data/` via `.map()`. Section anchors
(`#experience`, `#projects`, `#artworks`, `#about`, `#contact`) and smooth
anchor scrolling are preserved. The **Experience** section is the reference
implementation, including the auto-paginating project slider inside each
contract (overflow detection, arrows, autoplay, hover/focus/hidden-tab pause,
`prefers-reduced-motion` aware).

## Deploy (GitHub Pages)

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds and publishes `dist/` via the official Pages action
(`actions/deploy-pages`).

**One-time setup:** in the repo, go to **Settings → Pages → Build and
deployment → Source** and select **GitHub Actions**.

`vite.config.ts` sets `base: '/portfolio/'` to match the Pages subpath.

## TODO — custom interactives to port (one at a time)

These eva/CRT easter-eggs and micro-interactions from the legacy site are
**intentionally not ported yet**. The scaffold comes first; these will move over
individually (most into `useEffect`/refs):

- [ ] **Boot screen** — NERV-OS typing intro on first load (click/key to skip)
- [ ] **Konami code** → toggles "director's commentary" mode (CSS + note text
      already wired via `.commentary` / `body.commentary-on`; just needs the key listener)
- [ ] **Hero name glitch** — red CSM glitch on hover over the name
- [ ] **Console** — `~` opens a fake terminal with commands (help, ls, whoami,
      magi, contract, brand, secret, …)
- [ ] **Custom dice cursor + trail** — SVG die that rolls through faces on hover,
      purple particle trail on canvas (hidden on touch / reduced-motion)
- [ ] **Magnetic buttons** — `.btn` / social icons pull toward the cursor
- [ ] **HUD bar** — bottom strip with live clock + random build hash + current section
- [ ] **"3303" tooltip** — binary easter-egg on clicking the footer year
- [ ] **Scroll-spy** — active nav link highlight tied to the section in view
- [ ] **Artworks keyboard nav** — ← / → scroll the gallery when in view
- [ ] **Offscreen video pause** — pause `.cover-video` when off-screen / tab hidden
      (battery/CPU optimization; basic muted autoplay already works)
