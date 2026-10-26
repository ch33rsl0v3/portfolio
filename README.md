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
- **EN / RU / ES** via a ~50-line language store ([`src/lib/i18n.ts`](src/lib/i18n.ts),
  no i18n library) — the translations themselves live in `src/content/`

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
│  └─ lib/                  # language store, tc/rich, asset, useLang, cn
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

The language list is declared **once** — `LANGS` in
[`content/types.ts`](src/content/types.ts). Add a language there and
TypeScript flags every `Localized` object that is missing it.

```ts
type Localized = Record<Lang, string>   // { en, ru, es } — translated text
type Text = string | Localized          // plain string = same in every language
```

Use a plain string for anything that reads the same everywhere (brand names,
numbers, "Git", artwork titles) — don't copy it three times. UI chrome that
isn't a content entry (buttons, aria-labels, menu, "view ↗", director's note
label, marquee) lives in [`content/ui.ts`](src/content/ui.ts) — components
hold no user-facing strings of their own.

Helpers in [`src/lib/`](src/lib/):

- **`tc(field)`** — returns the string for the active language (plain strings
  pass through; `Localized` falls back to `en`).
- **`rich(field)`** — like `tc`, but returns React nodes and renders light markup:
  `**bold**` → `<strong>`, `\n` → `<br>`. Use it for the hero role, contract
  dates, the contact heading, etc.
- **`asset(name)`** — resolves a bare media **filename** to a URL under the base
  path: video extensions → `/videos/`, everything else → `/images/`. Store media
  as just `"prj01.jpg"` / `"vid01.mp4"` in content.
- **`useLang()`** — `{ lang, setLang, langs }`. `App` calls it **once**: a
  language change re-renders App and every section with it, so components
  don't subscribe themselves. Only `LangSwitch` uses it directly.

`@/lib/i18n` detects the language (`localStorage` key `ch33rsl0v3.lang` →
browser languages → `en`), keeps `<html lang>` in sync and saves the choice.
`public/404.html` reads the same key, so the 404 page follows the site language.

### Adding content

- **A personal project** → append a `Project` to [`content/projects.ts`](src/content/projects.ts):
  give it `title`, localized `role`/`desc`, optional `cover`/`video` (filenames),
  `tag`, `dice`, and `actions: [{ label, href }]`. An action without `href`
  isn't rendered — use that for a build/doc that isn't public yet.
- **An artwork** → append an `Artwork` to [`content/artworks.ts`](src/content/artworks.ts)
  (`kind: 'image'`, `image` filename, `href`, localized `title`/`caption`).
- **An achievement** → append an `Achievement` to [`content/achievements.ts`](src/content/achievements.ts)
  (`image` filename, literal `title`/`tag`, localized `desc`).
- **A job / contract** → append a `Contract` to [`content/contracts.ts`](src/content/contracts.ts)
  (role, parties, `effective` dates with `**bold**`, `terms[]`, `metrics[]`, and
  nested `projects[]` for the slider).

Drop the referenced image/video into [`public/images/`](public/images/) or
[`public/videos/`](public/videos/) — the slider/overflow logic is automatic.
Keep card videos small: they are 1280×720 muted loops, so re-encode without
audio, e.g. `ffmpeg -i in.mp4 -an -c:v libx264 -preset slow -crf 28 -movflags +faststart out.mp4`
(~1–3 MB instead of 10–20 MB).

## Deploy (GitHub Pages)

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds and publishes `dist/` via the official Pages action
(`actions/deploy-pages`).

**One-time setup:** in the repo, go to **Settings → Pages → Build and
deployment → Source** and select **GitHub Actions**.

`vite.config.ts` sets `base: '/portfolio/'` to match the Pages subpath and
injects the commit hash shown in the footer (`build a1b2c3d`).

## TODO — custom interactives to port (one at a time)

These eva/CRT easter-eggs and micro-interactions from the legacy site are
**intentionally not ported yet**. The scaffold comes first; these will move over
individually (most into `useEffect`/refs):

- [ ] **Boot screen** — NERV-OS typing intro on first load (click/key to skip)
- [ ] **Konami code** → toggles "director's commentary" mode (CSS + note text
      already wired via `.commentary` / `body.commentary-on`; just needs the key listener)
- [x] **Hero name glitch** — red CSM glitch on hover over the name (`GlitchName`)
- [ ] **Console** — `~` opens a fake terminal with commands (help, ls, whoami,
      magi, contract, brand, secret, …). When it lands, render the
      `ui.contact.console` hint in Contact again (removed so it doesn't promise
      a console that doesn't open).
- [ ] **Custom dice cursor + trail** — SVG die that rolls through faces on hover,
      purple particle trail on canvas (hidden on touch / reduced-motion)
- [x] **Magnetic buttons** — `Btn` pulls toward the cursor (`useMagnetic`)
- [ ] **HUD bar** — bottom strip with live clock + build hash (`__BUILD__`) + current section
- [ ] **"3303" tooltip** — binary easter-egg on clicking the footer year
- [ ] **Scroll-spy** — active nav link highlight tied to the section in view
- [ ] **Artworks keyboard nav** — ← / → scroll the gallery when in view
- [x] **Offscreen video pause** — card videos play only on screen + tab visible
      (`useInViewVideo`)
