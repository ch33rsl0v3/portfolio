// EXPERIENCE — the "contracts ledger". One entry per job.
// Translatable strings are i18n keys (resolved with useTranslation at render);
// literal data (company names, project titles, urls, dates as displayed) stays here.

export interface ContractLink {
  // i18n key for the link label (e.g. "btn.play"), or a literal label
  labelKey?: string
  label?: string
  href: string
}

export interface ContractProject {
  title: string // literal, e.g. "[ Baddie Jumping ]"
  tag: string // literal, e.g. "Roblox · 2026"
  descKey: string // i18n key, e.g. "proj.vel.1"
  links: ContractLink[]
}

export interface ContractMetric {
  labelKey: string // i18n key
  value: string // literal, e.g. "+14%"
}

export interface ContractAction {
  labelKey: string
  href: string
  primary?: boolean
}

export interface Contract {
  id: string // "001"
  status: "active" | "fulfilled"
  roleKey: string // i18n key for the role title
  party: string // "M. Redfield"
  company: string // "VEL-Games"
  companyHref?: string
  effectiveKey: string // i18n key (contains <b> markup -> render with Trans)
  termKeys: string[] // i18n keys, one per bullet
  metrics: ContractMetric[]
  projects: ContractProject[]
  // Director's-note commentary (Konami easter egg). Not translated in legacy.
  commentary?: string
  actions: ContractAction[]
  sealKey: string // i18n key, e.g. "seal.signed"
}

export const contracts: Contract[] = [
  {
    id: "001",
    status: "active",
    roleKey: "exp.role.vel",
    party: "M. Redfield",
    company: "VEL-Games",
    companyHref: "https://www.velgames.com/",
    effectiveKey: "exp.effective.vel",
    termKeys: [
      "exp.term.vel.1",
      "exp.term.vel.2",
      "exp.term.vel.3",
      "exp.term.vel.4",
      "exp.term.vel.5",
    ],
    metrics: [
      { labelKey: "metric.d1", value: "+14%" },
      { labelKey: "metric.dau", value: "+20%" },
      { labelKey: "metric.cycle", value: "3w → 1w" },
      { labelKey: "metric.team", value: "9" },
    ],
    projects: [
      {
        title: "[ Baddie Jumping ]",
        tag: "Roblox · 2026",
        descKey: "proj.vel.1",
        links: [{ labelKey: "btn.play", href: "https://www.roblox.com/games/70654235200182/Baddie-Jumping" }],
      },
      {
        title: "[ +1 Speed Wings Escape ]",
        tag: "Roblox · 2026",
        descKey: "proj.vel.2",
        links: [{ labelKey: "btn.play", href: "https://www.roblox.com/games/115394135656997/1-Speed-Wings-Escape" }],
      },
      {
        title: "[ +1 Wings for Brainrots ]",
        tag: "Roblox · 2026",
        descKey: "proj.vel.3",
        links: [{ labelKey: "btn.play", href: "https://www.roblox.com/games/84332574190497/1-Wings-for-Brainrots" }],
      },
      {
        title: "[ Drive it! ]",
        tag: "Roblox · 2026",
        descKey: "proj.vel.4",
        links: [{ labelKey: "btn.play", href: "https://www.roblox.com/games/100831517378953/Drive-it" }],
      },
      {
        title: "[ Impossible Squid Game Glass Bridge 2 ]",
        tag: "Roblox · 2026",
        descKey: "proj.vel.5",
        links: [{ labelKey: "btn.play", href: "https://www.roblox.com/games/16993432698/Impossible-Squid-Game-Glass-Bridge-2" }],
      },
    ],
    commentary:
      "Numbers are public. Studio name placeholder until I get the green light — swap it before going live.",
    actions: [
      { labelKey: "btn.studio", href: "https://www.velgames.com/", primary: true },
      { labelKey: "btn.process", href: "#" },
    ],
    sealKey: "seal.signed",
  },
]
