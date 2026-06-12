// Social links + contact rows. Icon names map to <Icon name> (see components/Icons).
export type IconName =
  | "twitter"
  | "telegram"
  | "github"
  | "artstation"
  | "linkedin"
  | "steam"
  | "mail"
  | "arrow"

export interface Social {
  label: string
  href: string
  icon: IconName
}

// Shown in the top nav (icon-only).
export const socials: Social[] = [
  { label: "Twitter", href: "https://twitter.com/ch33rsl0v3", icon: "twitter" },
  { label: "Telegram", href: "https://t.me/ch33rsl0v3", icon: "telegram" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ch33rsl0v3/", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/Ch33rsL0v3", icon: "github" },
  { label: "ArtStation", href: "https://www.artstation.com/ch33rsl0v3", icon: "artstation" },
  { label: "Steam", href: "https://steamcommunity.com/id/ch33rsl0v3/", icon: "steam" },
]

export interface ContactRow {
  icon: IconName | "dot"
  // i18n key for the label column, or a literal string
  keyLabel?: string
  label?: string
  value: string
  href?: string
  // i18n key for the value (used for the Location row)
  valueKey?: string
}

export const contactRows: ContactRow[] = [
  { icon: "mail", keyLabel: "contact.email", value: "notch33rsl0ve@gmail.com", href: "mailto:notch33rsl0ve@gmail.com" },
  { icon: "telegram", label: "Telegram", value: "@ch33rsl0v3", href: "https://t.me/ch33rsl0v3" },
  { icon: "twitter", label: "Twitter", value: "@ch33rsl0v3", href: "https://twitter.com/ch33rsl0v3" },
  { icon: "github", label: "GitHub", value: "Ch33rsL0v3", href: "https://github.com/Ch33rsL0v3" },
  { icon: "artstation", label: "ArtStation", value: "/ch33rsl0v3", href: "https://www.artstation.com/ch33rsl0v3" },
  { icon: "linkedin", label: "LinkedIn", value: "Ch33rsL0v3", href: "https://www.linkedin.com/in/ch33rsl0v3/" },
  { icon: "steam", label: "Steam", value: "/ch33rsl0v3", href: "https://steamcommunity.com/id/ch33rsl0v3/" },
  { icon: "dot", keyLabel: "contact.location", value: "Russia", valueKey: "contact.country" },
]
