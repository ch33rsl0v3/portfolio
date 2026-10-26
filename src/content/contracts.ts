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
      {
        en: "Built the studio's launch analytics: an in-house market scanner and dashboard, plus launch rules backtested on 45 Roblox launches — kill/keep gates on D1 retention and Home impressions, when to stop paid ads, and same-day checks that an update did not hurt session length. Every launch runs a paid 16+ test and is judged on numbers, not gut feeling.",
        ru: "Построил аналитику запусков студии: собственный сканер рынка и дашборд, плюс правила запуска, проверенные на 45 запусках в Roblox — пороги «продолжать / закрывать» по D1 и показам на главной, когда выключать платную рекламу, проверка в день обновления, не просела ли длина сессии. Каждый запуск проходит платный 16+ тест и решается по цифрам, а не по ощущениям.",
        es: "Construí la analítica de lanzamientos del estudio: un escáner de mercado y dashboard propios, además de reglas de lanzamiento validadas con 45 lanzamientos en Roblox — umbrales de continuar o cerrar según retención D1 e impresiones en Home, cuándo detener los anuncios pagados y comprobaciones el mismo día de que una actualización no redujo la duración de sesión. Cada lanzamiento pasa una prueba pagada 16+ y se decide con datos, no por intuición.",
      },
    ],
    metrics: [
      { label: { en: "Peak DAU", ru: "Пик DAU", es: "Pico de DAU" }, value: "1.2M" },
      { label: { en: "Players", ru: "Игроков", es: "Jugadores" }, value: "30M+" },
      { label: { en: "Robux earned", ru: "Заработано R$", es: "Robux generados" }, value: "9.9M" },
      { label: { en: "Launches", ru: "Запусков", es: "Lanzamientos" }, value: "40+" },
      { label: { en: "Took off", ru: "Взлетели", es: "Despegaron" }, value: "7" },
    ],
    projects: [
      {
        title: "[ Logo for Soccer Cards ]",
        tag: "Roblox · 2026",
        desc: {
          en: "Timed to the FIFA World Cup 2026: Home recommendations exploded on the tournament's opening day. 1.2M peak DAU, 23M+ players, 7M Robux in 55 days, D1 ~20% at peak. Event title — closed after the final.",
          ru: "Запуск под чемпионат мира по футболу 2026: в день открытия турнира рекомендации на главной взорвались. Пик 1.2M DAU, 23M+ игроков, 7M Robux за 55 дней, D1 ~20% на пике. Ивентовый тайтл — закрыт после финала.",
          es: "Lanzado para el Mundial de la FIFA 2026: las recomendaciones en Home explotaron el día de la inauguración. Pico de 1.2M DAU, más de 23M jugadores, 7M Robux en 55 días, D1 ~20% en el pico. Título de evento — cerrado tras la final.",
        },
      },
      {
        title: "[ Logo for Soccer Card 2 ]",
        tag: "Roblox · 2026",
        url: "https://www.roblox.com/games/78544890108997",
        desc: {
          en: "Sequel built on the same formula: 123K peak DAU, 2.3M players, 1.2M Robux; still carried by Home recommendations.",
          ru: "Сиквел по той же формуле: пик 123K DAU, 2.3M игроков, 1.2M Robux; до сих пор держится на рекомендациях главной.",
          es: "Secuela con la misma fórmula: pico de 123K DAU, 2.3M jugadores, 1.2M Robux; sigue impulsada por las recomendaciones de Home.",
        },
      },
      {
        title: "[ Logo For Animals ]",
        tag: "Roblox · 2026",
        url: "https://www.roblox.com/games/117009372193021",
        desc: {
          en: "Paid test, then ads off at the right moment — Home took over and grew DAU ~80× in 10 days: 97K peak DAU, 1.2M players, 800K Robux.",
          ru: "Платный тест, затем реклама выключена в нужный момент — главная подхватила и за 10 дней подняла DAU примерно в 80 раз: пик 97K DAU, 1.2M игроков, 800K Robux.",
          es: "Prueba pagada y luego anuncios apagados en el momento justo — Home tomó el relevo y multiplicó el DAU ~80× en 10 días: pico de 97K DAU, 1.2M jugadores, 800K Robux.",
        },
      },
      {
        title: "[ Tap for Spidey!, Wings for Squishies, Logo For Anime Egg... ]",
        tag: "Roblox · 2026",
        desc: {
          en: "...and 40+ more launches through the same pipeline; 7 of them took off (20K+ Home impressions a day).",
          ru: "...и ещё 40+ запусков по тому же процессу; 7 из них взлетели (20K+ показов на главной в день).",
          es: "...y más de 40 lanzamientos con el mismo proceso; 7 despegaron (más de 20K impresiones diarias en Home).",
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
      { label: { en: "Peak DAU", ru: "Пик DAU", es: "Pico de DAU" }, value: "1.6M" },
      { label: { en: "Players", ru: "Игроков", es: "Jugadores" }, value: "130M+" },
      { label: { en: "Robux earned", ru: "Заработано R$", es: "Robux generados" }, value: "37M+" },
      { label: { en: "D1 retention", ru: "D1 ретеншн", es: "Retención D1" }, value: "+14%" },
      { label: { en: "Delivery cycle", ru: "Цикл выпуска", es: "Ciclo de entrega" }, value: "3w → 1w" },
      { label: { en: "Team led", ru: "Команда", es: "Equipo liderado" }, value: "9" },
    ],
    projects: [
      {
        title: "[ Baddie Jumping ]",
        tag: "Roblox · 2026",
        url: "https://www.roblox.com/games/70654235200182/Baddie-Jumping",
        desc: {
          en: "Shipped end-to-end as concept owner: core loop, UI, progression events, world expansion, reward systems, and a balanced economy, then ran live ops. 141K peak DAU, 4.8M Robux.",
          ru: "Выпустил полностью как автор концепта: основной луп, UI, события прогрессии, расширение мира, системы наград и сбалансированная экономика — затем вёл live ops. Пик 141K DAU, 4.8M Robux.",
          es: "Lo entregué de principio a fin como autor del concepto: loop principal, UI, eventos de progresión, expansión del mundo, sistemas de recompensas y una economía equilibrada, y luego llevé los live ops. Pico de 141K DAU, 4.8M Robux.",
        },
      },
      {
        title: "[ +1 Speed Wings Escape ]",
        tag: "Roblox · 2026",
        url: "https://www.roblox.com/games/115394135656997/1-Speed-Wings-Escape",
        desc: {
          en: "Owned end-to-end from concept to launch; a designed live-ops event lifted DAU +20% and drove the title's highest-grossing week. 1.08M peak DAU, 38M+ players, 15.7M Robux.",
          ru: "Вёл полностью от концепта до релиза; спроектированное live-ops событие подняло DAU на +20% и принесло самую кассовую неделю тайтла. Пик 1.08M DAU, 38M+ игроков, 15.7M Robux.",
          es: "Lo dirigí de principio a fin desde el concepto hasta el lanzamiento; un evento de live ops diseñado elevó el DAU +20% e impulsó la semana de mayores ingresos del título. Pico de 1.08M DAU, más de 38M jugadores, 15.7M Robux.",
        },
      },
      {
        title: "[ +1 Wings for Brainrots ]",
        tag: "Roblox · 2026",
        url: "https://www.roblox.com/games/84332574190497/1-Wings-for-Brainrots",
        desc: {
          en: "Led production from concept through soft launch and live ops on a rebuilt codebase. 1.6M peak DAU, 91M+ players, 16.8M Robux; D1 ~20% at peak — top-10% of live games.",
          ru: "Вёл продакшн от концепта до софт-лонча и live ops на перестроенной кодовой базе. Пик 1.6M DAU, 91M+ игроков, 16.8M Robux; D1 ~20% на пике — топ-10% живых игр.",
          es: "Lideré la producción desde el concepto hasta el soft launch y live ops sobre una base de código reconstruida. Pico de 1.6M DAU, más de 91M jugadores, 16.8M Robux; D1 ~20% en el pico — top 10% de los juegos en vivo.",
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