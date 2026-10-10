import { CalendarDays, Flag, Rocket, Trophy, LucideIcon } from "lucide-react"

export interface NavLink {
  name: string
  href: string
}

export interface TimelineEvent {
  date: string
  title: string
  description: string
  icon: LucideIcon
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  links: {
    discord: string
    instagram: string
    whatsapp: string
    linkedin: string
    youtube: string
    github: string
  }
}

export const siteConfig: SiteConfig = {
  name: "NSoC Winter Edition",
  description: "A 45-day open source program where project admins bring real codebases and contributors close issues that ship to production.",
  url: "https://nsoc.in",
  links: {
    discord: "https://discord.gg/bZ47fac2jn",
    instagram: "https://www.instagram.com/nsoc.in",
    whatsapp: "https://chat.whatsapp.com/Cs6bcCYUD5zLXmElzX9HOq",
    linkedin: "https://www.linkedin.com/company/nso-code",
    youtube: "https://www.youtube.com/@nsoc-in",
    github: "https://github.com/deepanshu-prajapati01",
  },
}

export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Leaderboard", href: "/leaderboard" },
  { name: "Projects", href: "/projects" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Team", href: "/team" },
]

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    date: "March 23, 2026",
    title: "Registrations Start",
    description: "Open for both beginners and experienced developers to join as Contributors or Project Kernel members.",
    icon: CalendarDays,
  },
  {
    date: "April 28, 2026",
    title: "Projects Announced",
    description: "Discover the real-world codebases you'll be contributing to.",
    icon: Flag,
  },
  {
    date: "May 1 – June 30, 2026",
    title: "Contribution Period",
    description: "The 45-day sprint to collaborate, open pull requests, and close issues.",
    icon: Rocket,
  },
  {
    date: "July 10, 2026",
    title: "Results Announcement",
    description: "Top contributors are recognized with certificates and letters of recommendation.",
    icon: Trophy,
  },
]
