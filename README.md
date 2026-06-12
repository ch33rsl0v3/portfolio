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
- **i18next** + **react-i18next** + **language-detector** used purely as the
  reactive **language engine** (EN / RU / ES) — the actual translations live in
  `src/content/` as objects, not in i18next resource bundles

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
│  ├─ content/              # ★ ALL site content lives here (text + structure)
│  │  ├─ types.ts           # Localized = {en,ru,es} + entity interfaces
│  │  ├─ hero.ts            # name, a.k.a., tag, role, 4 stats
│  │  ├─ contracts.ts       # experience + per-contract projects + metrics
│  │  ├─ projects.ts        # personal projects
│  │  ├─ artworks.ts
│  │  ├─ achievements.ts
│  │  ├─ about.ts           # bio, skills, languages, fav games
│  │  ├─ socials.ts         # nav socials + contact rows
│  │  ├─ ui.ts              # nav, buttons, statuses, section heads, footer, boot
│  │  └─ index.ts           # barrel re-export
│  ├─ components/           # Nav, LangSwitch, ContractCard, ProjectCard,
│  │                        # ArtworkItem, AchievementCard, SectionHead,
│  │                        # Slider, Btn, Icons, Reveal, Wrap
│  ├─ sections/             # Hero, Experience, Projects, Artworks,
│  │                        # About, Contact, Footer
│  └─ lib/                  # i18n engine, tc/rich, asset, useLang, cn
└─ .github/workflows/deploy.yml
```

All sections render from `src/content/` via `.map()`. Section anchors
(`#experience`, `#projects`, `#artworks`, `#about`, `#contact`) and smooth
anchor scrolling are preserved. The **Experience** section is the reference
implementation, including the auto-paginating project slider inside each
contract (overflow detection, arrows, autoplay, hover/focus/hidden-tab pause,
`prefers-reduced-motion` aware).

## Content & i18n

**All content lives in [`src/content/`](src/content/)** — text *and* structure
together, so each entry is edited in one place with all three languages side by
side. There are no translation JSON files.

A translatable string is a `Localized` object:

```ts
type Localized = { en: string; ru: string; es: string }
```

Helpers in [`src/lib/`](src/lib/):

- **`tc(field)`** — returns the string for the active language (falls back to `en`).
- **`rich(field)`** — like `tc`, but returns React nodes and renders light markup:
  `**bold**` → `<strong>`, `\n` → `<br>`. Use it for the hero role, contract
  dates, the contact heading, etc.
- **`asset(name)`** — resolves a bare media **filename** to a URL under the base
  path: video extensions → `/videos/`, everything else → `/images/`. Store media
  as just `"prj01.jpg"` / `"vid01.mp4"` in content.
- **`useLang()`** — `{ lang, setLang, langs }` over i18next. Any component that
  renders content calls it so it **re-renders on language change** (that's what
  makes `tc`/`rich` reactive). The EN/RU/ES switcher uses it too.

`@/lib/i18n` initialises i18next as an **engine only** (detector order:
`localStorage` key `ch33rsl0v3.lang` → `navigator`; default `en`; no resources).

### Adding content

- **A personal project** → append a `Project` to [`content/projects.ts`](src/content/projects.ts):
  give it `title`, localized `role`/`desc`, optional `cover`/`video` (filenames),
  `tag`, `dice`, and `actions: [{ label, href }]`.
- **An artwork** → append an `Artwork` to [`content/artworks.ts`](src/content/artworks.ts)
  (`kind: 'image'`, `image` filename, `href`, localized `title`/`caption`).
- **An achievement** → append an `Achievement` to [`content/achievements.ts`](src/content/achievements.ts)
  (`image` filename, literal `title`/`tag`, localized `desc`).
- **A job / contract** → append a `Contract` to [`content/contracts.ts`](src/content/contracts.ts)
  (role, parties, `effective` dates with `**bold**`, `terms[]`, `metrics[]`, and
  nested `projects[]` for the slider).

Drop the referenced image/video into [`public/images/`](public/images/) or
[`public/videos/`](public/videos/) — the slider/overflow logic is automatic.

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
