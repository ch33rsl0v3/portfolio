import type { Contract } from "./types"

// EXPERIENCE — the "contracts ledger". One entry per job, all three languages
// side by side. To add a job: copy a Contract object into the array.
export const contracts: Contract[] = [
  {
    id: "002",
    status: "active",
    role: {
      en: "Lead Game Producer",
      ru: "Ведущий геймпродюсер",
      es: "Productor de videojuegos principal",
    },
    party: "M. Redfield",
    company: "Fazliddin Games",
    companyHref: "https://fazliddingames.com/",
    effective: {
      en: "Effective **May 2026** — **Present**",
      ru: "Действителен с **мая 2026** — по **настоящее время**",
      es: "Vigente desde **may 2026** — **actualidad**",
    },
    terms: [
      {
        en: "Lead production across several concurrent titles, owning end-to-end delivery from concept and pre-production through launch and live ops while coordinating multiple teams in parallel. Set production standards, roadmaps, and resourcing across the portfolio, and grow studio capacity by sourcing, interviewing, and onboarding new hires. Drive each title's go-to-market - positioning, launch, and promotion - to maximize reach and retention at release.",
        ru: "Веду продакшн нескольких тайтлов параллельно, отвечая за полный цикл — от концепта и пре-продакшна до релиза и live ops — и координируя сразу несколько команд. Задаю производственные стандарты, роадмапы и распределение ресурсов по всему портфелю, наращиваю мощность студии: ищу, собеседую и онбордю новых сотрудников. Веду go-to-market каждого тайтла — позиционирование, запуск и продвижение — чтобы максимизировать охват и удержание на релизе.",
        es: "Lidero la producción de varios títulos en paralelo, responsable de la entrega completa — desde concepto y pre-producción hasta lanzamiento y live ops — coordinando varios equipos a la vez. Defino estándares de producción, roadmaps y asignación de recursos en todo el portafolio, y amplío la capacidad del estudio buscando, entrevistando e incorporando nuevas contrataciones. Dirijo el go-to-market de cada título — posicionamiento, lanzamiento y promoción — para maximizar alcance y retención en el lanzamiento.",
      },
    ],
    metrics: [],
    projects: [
      {
        title: "[ Logo for Soccer Cards ]",
        tag: "Roblox · 2026",
        url: "https://www.roblox.com/games/127164344248086/Logo-for-Soccer-Cards",
        desc: {
          en: "Led production from concept through soft launch and live ops on a rebuilt codebase.",
          ru: "Вёл продакшн от концепта до софт-лонча и live ops на перестроенной кодовой базе.",
          es: "Lideré la producción desde el concepto hasta el soft launch y live ops sobre una base de código reconstruida.",
        },
      },
    ],
    actions: [
      {
        label: { en: "Studio info", ru: "О студии", es: "Sobre el estudio" },
        href: "https://fazliddingames.com/",
        primary: true,
      },
    ],
    seal: { en: "// signed", ru: "// подписано", es: "// firmado" },
  },
  {
    id: "001",
    status: "fulfilled",
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
      ru: "Действителен с **июня 2024** — по **май 2026**",
      es: "Vigente desde **jun 2024** — **may 2026**",
    },
    terms: [
      {
        en: "Led end-to-end production of live-service titles from concept and pre-production through launch and ongoing operation. Wrote GDDs, concept documents, and economy specs, and designed core loops, onboarding funnels, and live-ops calendars. Owned roadmaps, scope, and team resourcing across flagship cycles, using player-funnel and retention data to prioritize features and ship a steady cadence of live-ops content, events, and reward systems.",
        ru: "Вёл продакшн live-service тайтлов полного цикла — от концепта и пре-продакшна до релиза и текущей эксплуатации. Писал GDD, концепт-документы и спеки экономики, проектировал основные лупы, онбординг-воронки и live-ops календари. Отвечал за роадмапы, скоуп и ресурсы команды на флагманских циклах, опираясь на данные по воронке игроков и ретеншну, чтобы приоритизировать фичи и стабильно выпускать live-ops контент, события и системы наград.",
        es: "Lideré la producción completa de títulos live-service desde concepto y pre-producción hasta el lanzamiento y la operación continua. Redacté GDDs, documentos de concepto y especificaciones de economía, y diseñé loops principales, embudos de onboarding y calendarios de live ops. Gestioné roadmaps, alcance y recursos del equipo en ciclos insignia, usando datos de embudo de jugadores y retención para priorizar funciones y entregar una cadencia constante de contenido de live ops, eventos y sistemas de recompensas.",
      },
    ],
    metrics: [
      { label: { en: "Players", ru: "Игроков", es: "Jugadores" }, value: "600k+" },
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
          en: "Shipped end-to-end as concept owner: core loop, UI, progression events, world expansion, reward systems, and a balanced economy, then ran live ops.",
          ru: "Выпустил полностью как автор концепта: основной луп, UI, события прогрессии, расширение мира, системы наград и сбалансированная экономика — затем вёл live ops.",
          es: "Lo entregué de principio a fin como autor del concepto: loop principal, UI, eventos de progresión, expansión del mundo, sistemas de recompensas y una economía equilibrada, y luego llevé los live ops.",
        },
      },
      {
        title: "[ +1 Speed Wings Escape ]",
        tag: "Roblox · 2026",
        url: "https://www.roblox.com/games/115394135656997/1-Speed-Wings-Escape",
        desc: {
          en: "Owned end-to-end from concept to launch; a designed live-ops event lifted DAU +20% and drove the title's highest-grossing week.",
          ru: "Вёл полностью от концепта до релиза; спроектированное live-ops событие подняло DAU на +20% и принесло самую кассовую неделю тайтла.",
          es: "Lo dirigí de principio a fin desde el concepto hasta el lanzamiento; un evento de live ops diseñado elevó el DAU +20% e impulsó la semana de mayores ingresos del título.",
        },
      },
      {
        title: "[ +1 Wings for Brainrots ]",
        tag: "Roblox · 2026",
        url: "https://www.roblox.com/games/84332574190497/1-Wings-for-Brainrots",
        desc: {
          en: "Led production from concept through soft launch and live ops on a rebuilt codebase; 40K peak CCU and 66% D1 retention in launch week.",
          ru: "Вёл продакшн от концепта до софт-лонча и live ops на перестроенной кодовой базе; пик 40K CCU и 66% D1-ретеншн на неделе запуска.",
          es: "Lideré la producción desde el concepto hasta el soft launch y live ops sobre una base de código reconstruida; pico de 40K CCU y 66% de retención D1 en la semana de lanzamiento.",
        },
      },
      {
        title: "[ Drive it! ]",
        tag: "Roblox · 2026",
        url: "https://www.roblox.com/games/100831517378953/Drive-it",
        desc: {
          en: "Rebuilt the onboarding funnel and reworked level and death-screen design; D1 retention +14%.",
          ru: "Перестроил онбординг-воронку и переработал дизайн уровней и экрана смерти; D1-ретеншн +14%.",
          es: "Reconstruí el embudo de onboarding y rediseñé los niveles y la pantalla de muerte; retención D1 +14%.",
        },
      },
      {
        title: "[ Impossible Squid Game Glass Bridge 2, Fashion Factory... ]",
        tag: "Roblox · 2026",
        desc: {
          en: "...and 15+ further live-ops releases (events, balance passes, feature design).",
          ru: "...и ещё 15+ live-ops релизов (события, баланс-патчи, дизайн фич).",
          es: "...y más de 15 lanzamientos de live ops adicionales (eventos, ajustes de balance, diseño de funciones).",
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
    ],
    seal: { en: "// signed", ru: "// подписано", es: "// firmado" },
  },
]