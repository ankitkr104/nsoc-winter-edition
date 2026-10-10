"use client"

import { motion, type Variants } from "motion/react"
import { SectionHeading } from "@/components/ui/section-heading"
import { siteContent } from "@/config/content"
import { CardContent } from "@/components/ui/card"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function Sponsors() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  }

  return (
    <section id="sponsors" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Sponsors */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <div className="flex flex-col items-start text-left">
              <div className="inline-flex items-center rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-sm font-medium text-sky-500 mb-4">
                Track Record & Backing
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
                Past Sponsors.
              </h2>
              <p className="text-muted-foreground max-w-2xl mt-4 text-left">
                A look back at the incredible organizations and platforms that powered our previous cohorts with funding, developer tools, and infrastructure.
              </p>
            </div>
            <Button variant="outline" className="glass" asChild>
              <a href="mailto:connect.nsoc@gmail.com">Sponsor This Season</a>
            </Button>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-3 gap-6"
          >
            {siteContent.sponsors.map((sponsor) => (
              <motion.div key={sponsor.name} variants={itemVariants} className="flex flex-col h-full">
                <SpotlightCard className="h-full flex flex-col flex-1">
                  <div className="relative z-10 flex-1 flex flex-col">
                    <CardContent className="p-6 flex-1 flex flex-col h-full">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-sky-500 font-bold mb-2">
                        {sponsor.tier}
                      </span>
                      <h3 className="font-display text-xl font-bold text-foreground mb-3">
                        {sponsor.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                        {sponsor.description}
                      </p>
                      <Button variant="link" className="p-0 h-auto justify-start text-sky-500 hover:text-sky-400 mt-auto" asChild>
                        <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                          Visit Website <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                      </Button>
                    </CardContent>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Partners */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
          >
            <div className="flex flex-col items-start text-left">
              <div className="inline-flex items-center rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-sm font-medium text-sky-500 mb-4">
                Ecosystem & Grassroots Network
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
                Community Partners.
              </h2>
              <p className="text-muted-foreground max-w-2xl mt-4 text-left">
                The active colleges, student clubs, developer hubs, and communities driving enthusiastic participation and innovation across the nation.
              </p>
            </div>
            <Button variant="outline" className="glass" asChild>
              <a href="mailto:connect.nsoc@gmail.com">Partner With Us</a>
            </Button>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap gap-3"
          >
            {siteContent.partners.map((partner, i) => (
              <motion.a 
                key={i} 
                variants={itemVariants}
                href={partner.url}
                target={partner.url !== "#" ? "_blank" : undefined}
                rel={partner.url !== "#" ? "noopener noreferrer" : undefined}
                className="px-4 py-2 rounded-full border border-border/50 bg-muted/20 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-primary/10 hover:border-primary/30 transition-colors"
              >
                {partner.name}
              </motion.a>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
