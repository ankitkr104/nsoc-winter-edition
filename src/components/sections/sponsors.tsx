"use client"

import { motion, type Variants } from "motion/react"
import { SectionHeading } from "@/components/ui/section-heading"
import { siteContent } from "@/config/content"
import { Card, CardContent } from "@/components/ui/card"
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
    <section className="py-16 md:py-24">
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
            <div>
              <SectionHeading subheading="Track Record & Backing" className="md:items-start text-left mb-0">
                Past Sponsors.
              </SectionHeading>
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
              <motion.div key={sponsor.name} variants={itemVariants}>
                <Card className="h-full bg-background/50 flex flex-col hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-semibold mb-2">
                      {sponsor.tier}
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">
                      {sponsor.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                      {sponsor.description}
                    </p>
                    <Button variant="link" className="p-0 h-auto justify-start text-primary" asChild>
                      <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                        Visit Website <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
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
            <div>
              <SectionHeading subheading="Ecosystem & Grassroots Network" className="md:items-start text-left mb-0">
                Community Partners.
              </SectionHeading>
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
