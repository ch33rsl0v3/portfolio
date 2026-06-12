import type { Contract } from "./types"

// EXPERIENCE — the "contracts ledger". One entry per job, all three languages
// side by side. To add a job: copy a Contract object into the array.
export const contracts: Contract[] = [
  {
    id: "001",
    status: "active",
    role: {
      en: "Game Producer & Game Designer",
      ru: "Геймпродюсер и геймдизайнер",
      es: "Productor y diseñador de videojuegos",
    },
    party: "M. Redfield",
    company: "VEL-Games",
    companyHref: "https://www.velgames.com/",
    effective: {
      en: "Effective **Jun 2024** — **May 2026**",
      ru: "Действителен с **июня 2024** — по настоящее время",
      es: "Vigente desde **jun 2024** — actualidad · en curso",
    },
    terms: [
      {
        en: "Led end-to-end production of games from concept and pre-production through launch, updates and post-release support.",
        ru: "Веду продакшн от концепта и пре-продакшна до релиза, обновлений и пострелизной поддержки.",
        es: "Lidero la producción completa desde concepto y pre-producción hasta lanzamiento, actualizaciones y soporte post-lanzamiento.",
      },
      {
        en: "Wrote GDDs, concept documents, and economy specs; designed core loops, onboarding funnels, and live ops calendars.",
        ru: "Строю и выполняю роадмапы; управляю скоупом, сроками и ресурсами команды.",
        es: "Construyo y ejecuto roadmaps; gestiono alcance, plazos y recursos del equipo.",
      },
      {
        en: "Built and executed project roadmaps, managed scope, timeline, and team resources on flagship cycles.",
        ru: "Анализирую данные и фидбэк игроков, чтобы повышать ретеншн и вовлечённость.",
        es: "Analizo datos y feedback de jugadores para mejorar retención y engagement.",
      },
      {
        en: "Analyzed player data and funnel metrics to drive retention and engagement improvements.",
        ru: "Приоритизирую фичи, выпускаю регулярные live ops обновления и события.",
        es: "Prioritizo funciones y entrego actualizaciones de live ops y eventos de forma regular.",
      },
      {
        // legacy ru/es fell back to en for this 5th bullet — preserved verbatim
        en: "Prioritized features and shipped regular live ops content updates, events, and reward systems.",
        ru: "Prioritized features and shipped regular live ops content updates, events, and reward systems.",
        es: "Prioritized features and shipped regular live ops content updates, events, and reward systems.",
      },
    ],
    metrics: [
      { label: { en: "D1 retention", ru: "D1 ретеншн", es: "Retención D1" }, value: "+14%" },
      { label: { en: "DAU spike", ru: "Прирост DAU", es: "Pico de DAU" }, value: "+20%" },
      { label: { en: "Delivery cycle", ru: "Цикл выпуска", es: "Ciclo de entrega" }, value: "3w → 1w" },
      { label: { en: "Team led", ru: "Команда", es: "Equipo liderado" }, value: "9" },
    ],
    projects: [
      {
        title: "[ Baddie Jumping ]",
        tag: "Roblox · 2026",
        url: "https://www.roblox.com/games/70654235200182/Baddie-Jumping",
        desc: {
          en: "Created concept and shipped end-to-end. Designed core loop, UI, progression events, new world expansion, daily and timed reward systems, balanced economy and ran live ops.",
          ru: "Спроектировал базовый луп, запустил live ops события.",
          es: "Diseñé el loop principal y lancé eventos de live ops.",
        },
      },
      {
        title: "[ +1 Speed Wings Escape ]",
        tag: "Roblox · 2026",
        url: "https://www.roblox.com/games/115394135656997/1-Speed-Wings-Escape",
        desc: {
          en: "Created concept, led production through soft launch and ongoing live ops on a rebuilt codebase. 40K CCU in launch week and 66% D1 retention.",
          ru: "Дизайн live-события: +20% к DAU за время работы.",
          es: "Diseño de evento en vivo: +20% de DAU durante la campaña.",
        },
      },
      {
        title: "[ +1 Wings for Brainrots ]",
        tag: "Roblox · 2026",
        url: "https://www.roblox.com/games/84332574190497/1-Wings-for-Brainrots",
        desc: {
          en: "Owned end-to-end from concept through launch and live ops. DAU +20% during designed live ops event",
          ru: "Вёл продакшн от грейбокса до софт-лонча.",
          es: "Producción desde el greybox hasta el soft launch.",
        },
      },
      {
        title: "[ Drive it! ]",
        tag: "Roblox · 2026",
        url: "https://www.roblox.com/games/100831517378953/Drive-it",
        desc: {
          en: "Rebuilt onboarding funnel and reworked level design; redesigned death screen to extend median first-session length. D1 retention +14%.",
          ru: "Спроектировал онбординг-воронку: D1 ретеншн +14%.",
          es: "Diseñé el embudo de onboarding: retención D1 +14%.",
        },
      },
      {
        title: "[ Impossible Squid Game Glass Bridge 2 ]",
        tag: "Roblox · 2026",
        url: "https://www.roblox.com/games/16993432698/Impossible-Squid-Game-Glass-Bridge-2",
        desc: {
          en: "Time reward system: +12 min average session.",
          ru: "Система временных наград: +12 мин к средней сессии.",
          es: "Sistema de recompensas por tiempo: +12 min de sesión media.",
        },
      },
    ],
    commentary:
      "Numbers are public. Studio name placeholder until I get the green light — swap it before going live.",
    actions: [
      {
        label: { en: "Studio info", ru: "О студии", es: "Sobre el estudio" },
        href: "https://www.velgames.com/",
        primary: true,
      },
      {
        label: { en: "Process notes", ru: "Процесс", es: "Notas de proceso" },
        href: "#",
      },
    ],
    seal: { en: "// signed", ru: "// подписано", es: "// firmado" },
  },
]
