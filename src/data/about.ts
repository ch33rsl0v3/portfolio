// ABOUT side panel + hero stats. Skill/game names are literal; language names
// and section labels are i18n keys.

export interface SkillRow {
  name: string // literal
  level: string // literal (stars or rating)
}

export const hardSkills: SkillRow[] = [
  { name: "Unity", level: "★★★★" },
  { name: "Unreal Engine", level: "★★★" },
  { name: "C#", level: "★★" },
  { name: "CSS // HTML", level: "★★★" },
  { name: "Python", level: "★★★" },
  { name: "Lua", level: "★★" },
  { name: "Blender", level: "★★★★" },
  { name: "ZBrush", level: "★★★" },
  { name: "Substance Painter", level: "★★★" },
]

export interface LanguageRow {
  nameKey: string // i18n key (e.g. "lang.ru")
  level: string // literal CEFR level
}

export const languages: LanguageRow[] = [
  { nameKey: "lang.ru", level: "C2" },
  { nameKey: "lang.en", level: "C1" },
  { nameKey: "lang.es", level: "A2" },
  { nameKey: "lang.pt", level: "A2" },
]

export const favoriteGames: SkillRow[] = [
  { name: "Baldur’s Gate 3", level: "AA" },
  { name: "The Binding of Isaac", level: "300+ h" },
  { name: "Sekiro: Shadow Die Twice", level: "AA" },
  { name: "Resident Evil Series", level: "110+ h" },
  { name: "Metal Gear Solid Series", level: "150+ h" },
]

// Hero resume link.
export const resumeHref =
  "https://docs.google.com/document/d/1-vEw6lXgDuWsLMdj-pzI27ahcbYDUmqzJdAtNpdpwYc/edit?usp=sharing"

// HERO — the four stat tiles. value/sup are literal; label/sub are i18n keys.
export interface Stat {
  labelKey: string
  value: string
  sup?: string // small superscript like "+"
  valueKey?: string // i18n key when the value itself is translated (doom tile)
  subKey: string
}

export const stats: Stat[] = [
  { labelKey: "stat.years.label", value: "2", sup: "+", subKey: "stat.years.sub" },
  { labelKey: "stat.games.label", value: "15", sup: "+", subKey: "stat.games.sub" },
  { labelKey: "stat.team.label", value: "9", subKey: "stat.team.sub" },
  { labelKey: "stat.doom.label", value: "yes", valueKey: "stat.doom.value", subKey: "stat.doom.sub" },
]
