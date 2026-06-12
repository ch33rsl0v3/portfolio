// PERSONAL PROJECTS — solo / team / jam work shown in the #projects section.

export interface ProjectAction {
  labelKey: string
  href: string
}

export interface Project {
  id: string
  title: string // literal
  roleKey: string // i18n key
  descKey: string // i18n key
  cover: {
    // Optional looping gameplay video (fades out on hover in the legacy design).
    video?: string
    // Optional cover image (used by the MSA card).
    image?: string
    // Optional ASCII art shown behind the video.
    ascii?: string
    // Optional tag chip (i18n key), e.g. "proj.roll.tag".
    tagKey?: string
    // Spinning die glyph easter egg on the "Roll the Luck" card.
    dice?: boolean
  }
  actions: ProjectAction[]
}

export const projects: Project[] = [
  {
    id: "msa",
    title: "MUSIC. STRINGS. ACTION!",
    roleKey: "proj.msa.role",
    descKey: "proj.msa.desc",
    cover: { image: "images/prj01.jpg" },
    actions: [
      { labelKey: "btn.not", href: "#" },
      { labelKey: "btn.yet", href: "#" },
    ],
  },
  {
    id: "roll",
    title: "Roll the Luck Next Time",
    roleKey: "proj.roll.role",
    descKey: "proj.roll.desc",
    cover: { video: "videos/vid01.mp4", tagKey: "proj.roll.tag", dice: true },
    actions: [
      {
        labelKey: "btn.gdd",
        href: "https://docs.google.com/document/d/17oyeH3imldELEgknJGIvGNp7SO51-JLQJsSaMBTylEA/edit?usp=sharing",
      },
      { labelKey: "btn.play", href: "https://ch33rs.itch.io/roll-the-luck-next-time" },
    ],
  },
  {
    id: "twt",
    title: "TwT",
    roleKey: "proj.twt.role",
    descKey: "proj.twt.desc",
    cover: {
      video: "videos/vid02.mp4",
      tagKey: "proj.twt.tag",
      ascii: `  ┌─────────┐
  │  ╱╲ ╱╲  │
  │ ╱  ╳  ╲ │
  │ ╲  ╳  ╱ │
  │  ╲╱ ╲╱  │
  └─────────┘
   T · w · T`,
    },
    actions: [
      {
        labelKey: "btn.gdd",
        href: "https://docs.google.com/document/d/147rXtd2zQIqs6l-NS7G5kbPCuRCZ8fQ0jnLNrcHyWiE/edit?usp=sharing",
      },
      { labelKey: "btn.play", href: "https://ch33rs.itch.io/twt" },
    ],
  },
]
