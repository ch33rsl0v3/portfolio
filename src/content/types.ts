// ============================================================================
// Content model. Every translatable string is a `Localized` object so all three
// languages for one entry live side by side and are edited in one place.
// Rich strings use **bold** and \n (newline) markup — rendered via rich().
// Media is stored as a bare FILENAME (e.g. "prj01.jpg", "vid01.mp4"); the
// asset() helper resolves it to /images/... or /videos/... under the base path.
// ============================================================================

export type Lang = "en" | "ru" | "es"

export type Localized = Record<Lang, string>

// ---- Icons -----------------------------------------------------------------
export type IconName =
  | "twitter"
  | "telegram"
  | "github"
  | "artstation"
  | "linkedin"
  | "steam"
  | "mail"
  | "arrow"

// ---- Hero ------------------------------------------------------------------
export interface Stat {
  label: Localized
  value: Localized
  sup?: string // small superscript like "+"
  sub: Localized
}

export interface HeroContent {
  // name lines, rendered with <br> between them
  name: string[]
  aka: Localized
  handle: string
  tag: Localized
  role: Localized // rich
  stats: Stat[]
}

// ---- Contracts (experience) ------------------------------------------------
export interface ContractProject {
  title: string // literal, e.g. "[ Baddie Jumping ]"
  tag: string // literal, e.g. "Roblox · 2026"
  desc: Localized
  url?: string // external "Play" link
  video?: string // optional cover video filename
  cover?: string // optional cover image filename
}

export interface ContractMetric {
  label: Localized
  value: string // literal, e.g. "+14%"
}

export interface ContractAction {
  label: Localized
  href: string
  primary?: boolean
}

export interface Contract {
  id: string // "001"
  status: "active" | "fulfilled"
  role: Localized
  party: string // "M. Redfield"
  company: string // "VEL-Games"
  companyHref?: string
  effective: Localized // rich (contains **bold** dates)
  terms: Localized[]
  metrics: ContractMetric[]
  projects: ContractProject[]
  // Director's-note commentary (Konami easter egg). English-only in legacy.
  commentary?: string
  actions: ContractAction[]
  seal: Localized
}

// ---- Personal projects -----------------------------------------------------
export interface ProjectAction {
  label: Localized
  href: string
}

export interface Project {
  id: string
  title: string // literal
  role: Localized
  desc: Localized
  cover?: string // image filename
  video?: string // video filename
  ascii?: string // ASCII art shown behind the video
  tag?: Localized // chip
  dice?: boolean // spinning-die easter egg
  actions: ProjectAction[]
}

// ---- Artworks --------------------------------------------------------------
export interface Artwork {
  id: string
  kind: "image" | "archive"
  href: string
  title: Localized // literal titles are replicated across languages
  caption: Localized
  image?: string
  placeholder?: Localized // archive card block (rich, with \n)
}

// ---- Achievements ----------------------------------------------------------
export interface Achievement {
  id: string
  image: string
  title: string // literal
  tag: string // literal year/type
  desc: Localized
}

// ---- About -----------------------------------------------------------------
export interface SkillRow {
  name: string // literal
  level: string // literal
}

export interface LanguageRow {
  name: Localized
  level: string
}

export interface AboutContent {
  bio: Localized // rich (long text)
  resumeHref: string
  headings: {
    skills: Localized
    languages: Localized
    favorites: Localized
  }
  skills: SkillRow[]
  languages: LanguageRow[]
  favorites: SkillRow[]
}

// ---- Socials / contact -----------------------------------------------------
export interface Social {
  label: string
  href: string
  icon: IconName
}

export interface ContactRow {
  icon: IconName | "dot"
  label: Localized
  value: string
  href?: string
  valueLocalized?: Localized // used by the Location row
}

// ---- UI chrome -------------------------------------------------------------
export interface SectionHeading {
  title: Localized
  subtitle?: Localized
}
