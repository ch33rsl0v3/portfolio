import type { Localized, SectionHeading } from "./types"

// ============================================================================
// UI CHROME — everything that isn't a content entry: nav, buttons, statuses,
// section headings, captions, footer, and the boot-screen lines.
// ============================================================================

export const nav = {
  experience: { en: "Experience", ru: "Опыт", es: "Experiencia" },
  projects: { en: "Projects", ru: "Проекты", es: "Proyectos" },
  artworks: { en: "Artworks", ru: "Работы", es: "Arte" },
  about: { en: "About", ru: "Обо мне", es: "Sobre mí" },
  letter: { en: "Letter", ru: "Письмо", es: "Carta" },
} satisfies Record<string, Localized>

export const navLinks: { hash: string; label: Localized }[] = [
  { hash: "#experience", label: nav.experience },
  { hash: "#projects", label: nav.projects },
  { hash: "#artworks", label: nav.artworks },
  { hash: "#about", label: nav.about },
  { hash: "#contact", label: nav.letter },
]

export const ui = {
  online: { en: "Online", ru: "В сети", es: "En línea" },

  status: {
    active: { en: "Active", ru: "Активен", es: "Activo" },
    fulfilled: { en: "Fulfilled", ru: "Завершён", es: "Cumplido" },
  },

  contract: { en: "Contract", ru: "Контракт", es: "Contrato" },
  shipped: {
    en: "Shipped under this contract",
    ru: "Сделано в рамках контракта",
    es: "Lanzado bajo este contrato",
  },

  buttons: {
    play: { en: "Play", ru: "Играть", es: "Jugar" },
    gdd: { en: "GDD", ru: "GDD", es: "GDD" },
    resume: { en: "Resume", ru: "Резюме", es: "CV" },
    not: { en: "NOT", ru: "NOT", es: "NOT" },
    yet: { en: "YET", ru: "YET", es: "YET" },
  },

  achievements: {
    en: "Personal achievements",
    ru: "Личные достижения",
    es: "Logros personales",
  },

  hud: {
    console: { en: "console", ru: "консоль", es: "consola" },
    commentary: { en: "commentary", ru: "комментарии", es: "comentarios" },
  },

  footer: {
    solo: {
      en: "designed & coded solo",
      ru: "дизайн и код в одиночку",
      es: "diseñado y programado en solitario",
    },
  },

  contact: {
    // rich (contains \n)
    title: { en: "Write me\na letter.", ru: "Напиши мне\nписьмо.", es: "Escríbeme\nuna carta." },
    body: {
      en: "Open to junior and middle roles. I also consider any interesting offers.",
      ru: "Открыт к джуниор- и миддл-позициям. Также рассматриваю любые офферы.",
      es: "Abierto a roles junior y middle. También considero otras ofertas.",
    },
    // the "~" inside is highlighted by the Contact component
    console: {
      en: "Press ~ to talk to the console.",
      ru: "Нажми ~, чтобы открыть консоль.",
      es: "Pulsa ~ para abrir la consola.",
    },
  },
} as const

// Section headers (title + optional subtitle).
export const sectionHeads = {
  experience: {
    title: { en: "Experience · Contracts", ru: "Опыт · Контракты", es: "Experiencia · Contratos" },
    subtitle: { en: "Signed in blood.", ru: "Подписано кровью.", es: "Firmado con sangre." },
  },
  projects: {
    title: { en: "Personal projects", ru: "Личные проекты", es: "Proyectos personales" },
    subtitle: { en: "solo · team · jam", ru: "соло · команда · джем", es: "solo · equipo · jam" },
  },
  artworks: {
    title: { en: "Artworks", ru: "Работы", es: "Arte" },
    subtitle: { en: "scroll → →", ru: "листай → →", es: "desliza → →" },
  },
  about: {
    title: { en: "About", ru: "Обо мне", es: "Sobre mí" },
    subtitle: {
      en: "Ch33rs's me, bro. Let me be me",
      ru: "Ch33rs это я, бро. Дайте мне быть собой",
      es: "Soy yo, Cody, bro. Déjenme ser yo mismo",
    },
  },
} satisfies Record<string, SectionHeading>

// Boot-screen lines (NERV-OS intro). English-only, literal — for the deferred
// boot-screen interactive (see README TODO).
export const bootLines: string[] = [
  "NERV-OS v3.303 (build 000000)",
  "Magi system synchronization ........ OK",
  "",
  "> POST: memory check ............. OK",
  "> POST: all safety devices disengaged ........... CHECK",
  "> POST: internal power supply .......... CHECK",
  "> POST: umbilical cable connected .......... CHECK",
  "> Loading portfolio.dat ..........",
  "> Mounting eva unit ............",
  "> Begin the synchronization process, UNIT-02.",
  "",
]
