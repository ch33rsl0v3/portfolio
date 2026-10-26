import type { Social, ContactRow } from "./types"

// Top-nav social links (icon-only).
export const socials: Social[] = [
  { label: "Twitter", href: "https://twitter.com/ch33rsl0v3", icon: "twitter" },
  { label: "Telegram", href: "https://t.me/ch33rsl0v3", icon: "telegram" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ch33rsl0v3/", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/Ch33rsL0v3", icon: "github" },
  { label: "ArtStation", href: "https://www.artstation.com/ch33rsl0v3", icon: "artstation" },
  { label: "Steam", href: "https://steamcommunity.com/id/ch33rsl0v3/", icon: "steam" },
]

// Contact section (#contact) rows. Brand labels are plain strings (same in
// every language); "Location" and the country are localized.
export const contactRows: ContactRow[] = [
  {
    icon: "mail",
    label: "Email",
    value: "notch33rsl0ve@gmail.com",
    href: "mailto:notch33rsl0ve@gmail.com",
  },
  { icon: "telegram", label: "Telegram", value: "@ch33rsl0v3", href: "https://t.me/ch33rsl0v3" },
  { icon: "twitter", label: "Twitter", value: "@ch33rsl0v3", href: "https://twitter.com/ch33rsl0v3" },
  { icon: "github", label: "GitHub", value: "Ch33rsL0v3", href: "https://github.com/Ch33rsL0v3" },
  { icon: "artstation", label: "ArtStation", value: "/ch33rsl0v3", href: "https://www.artstation.com/ch33rsl0v3" },
  { icon: "linkedin", label: "LinkedIn", value: "Ch33rsL0v3", href: "https://www.linkedin.com/in/ch33rsl0v3/" },
  { icon: "steam", label: "Steam", value: "/ch33rsl0v3", href: "https://steamcommunity.com/id/ch33rsl0v3/" },
  {
    icon: "dot",
    label: { en: "Location", ru: "Локация", es: "Ubicación" },
    value: { en: "Remote · open to relocation", ru: "Удалённо · открыт к релокации", es: "Remoto · abierto a reubicación" },
  },
]
