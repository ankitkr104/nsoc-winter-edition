import Link from "next/link"
import { Code, Camera, Briefcase, MonitorPlay, MessageCircle, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig, NAV_LINKS } from "@/config/site"

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-background/50 backdrop-blur-md px-4 sm:px-8 md:px-12 py-10 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 lg:gap-16 mb-10 lg:mb-16">
          
          {/* Brand & Description */}
          <div className="flex flex-col max-w-sm lg:max-w-md xl:max-w-xl shrink-0">
            <div className="flex items-center gap-2.5 lg:gap-4 mb-3 lg:mb-5">
              <span className="font-display text-[18px] lg:text-2xl xl:text-3xl font-bold text-foreground tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="font-sans text-[14px] lg:text-lg xl:text-xl text-muted-foreground leading-relaxed mb-6 lg:mb-10">
              {siteConfig.description}
            </p>
            
            {/* Socials */}
            <div className="flex items-center gap-2 lg:gap-4 flex-wrap">
              <Button variant="outline" size="icon" className="rounded-full glass" asChild>
                <Link href={siteConfig.links.discord} target="_blank" rel="noopener noreferrer" aria-label="Discord">
                  <MessageSquare className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full glass" asChild>
                <Link href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Camera className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full glass" asChild>
                <Link href={siteConfig.links.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <MessageCircle className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full glass" asChild>
                <Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Briefcase className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full glass" asChild>
                <Link href={siteConfig.links.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <MonitorPlay className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full glass" asChild>
                <Link href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Code className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-10 md:gap-14 lg:gap-32 flex-wrap">
            <div>
              <p className="font-mono text-[9px] lg:text-sm xl:text-base text-primary/70 tracking-[1.2px] uppercase mb-3 lg:mb-6">
                Navigation
              </p>
              <ul className="flex flex-col gap-2 lg:gap-4 xl:gap-5">
                {NAV_LINKS.slice(0, 3).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-display text-[14px] lg:text-lg text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[9px] lg:text-sm xl:text-base text-primary/70 tracking-[1.2px] uppercase mb-3 lg:mb-6">
                Organization
              </p>
              <ul className="flex flex-col gap-2 lg:gap-4 xl:gap-5">
                {NAV_LINKS.slice(3).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-display text-[14px] lg:text-lg text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 lg:pt-10 border-t border-border/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="font-mono text-[10px] lg:text-sm text-muted-foreground tracking-wide">
            © 2026 NSoC. All rights reserved.
          </p>
          <p className="font-mono text-[10px] lg:text-sm text-muted-foreground tracking-wide">
            Built with ♥ by the Nexus team
          </p>
        </div>
      </div>
    </footer>
  )
}
