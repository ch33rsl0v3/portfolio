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
    resume: { en: "Resume", ru: "Резюме", es: "CV" },
    soon: { en: "soon", ru: "скоро", es: "pronto" },
  },

  // mobile nav toggle (button text) + accessible names for icon-only controls
  menu: {
    open: { en: "Menu", ru: "Меню", es: "Menú" },
    close: { en: "Close", ru: "Закрыть", es: "Cerrar" },
  },
  aria: {
    language: { en: "Language", ru: "Язык", es: "Idioma" },
    prev: { en: "Previous", ru: "Назад", es: "Anterior" },
    next: { en: "Next", ru: "Вперёд", es: "Siguiente" },
    prevProjects: { en: "Previous projects", ru: "Предыдущие проекты", es: "Proyectos anteriores" },
    nextProjects: { en: "Next projects", ru: "Следующие проекты", es: "Proyectos siguientes" },
  },

  artworkView: { en: "view ↗", ru: "смотреть ↗", es: "ver ↗" },

  directorsNote: { en: "Director's note", ru: "Заметка режиссёра", es: "Nota del director" },

  achievements: {
    en: "100% achievements",
    ru: "100% достижений",
    es: "100% de logros",
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
      en: "Open to Producer, Senior Producer and Lead Game Designer roles — live-service and F2P, remote or relocation.",
      ru: "Открыт к позициям Producer, Senior Producer и Lead Game Designer — live-service и F2P, удалённо или с релокацией.",
      es: "Abierto a puestos de Producer, Senior Producer y Lead Game Designer — live-service y F2P, en remoto o con reubicación.",
    },
      // Not rendered until the ~ console interactive exists (README TODO) —
    // the hint must not promise a console that doesn't open.
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
    subtitle: { en: "Shipped, run live, measured.", ru: "Выпущено, в live ops, в цифрах.", es: "Lanzado, en vivo, medido." },
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
      en: "Beyond the numbers.",
      ru: "Помимо цифр.",
      es: "Más allá de los números.",
    },
  },
} satisfies Record<string, SectionHeading>

// Section-divider ticker. Slogans, deliberately English in every language.
export const marquee: string[] = ["RIP AND TEAR", "ch33rsl0v3", "UNTIL IT'S DONE"]

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
