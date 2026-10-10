"use client"

import { motion, type Variants } from "motion/react"
import { SectionHeading } from "@/components/ui/section-heading"
import { siteContent } from "@/config/content"
import { CheckCircle2 } from "lucide-react"

export function Roles() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  }

  return (
    <section id="roles" className="py-16 md:py-24 border-t border-border/50 bg-background/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading subheading="Participate">
            Choose Your Path
          </SectionHeading>
        </motion.div>

        <div className="mt-16 space-y-16">
          {siteContent.roles.map((role, idx) => {
            const Icon = role.icon
            const isEven = idx % 2 === 0

            return (
              <motion.div 
                key={role.title}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col gap-8 md:flex-row md:items-center md:gap-16 ${isEven ? "" : "md:flex-row-reverse"}`}
              >
                <div className="flex-1">
                  <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary glow-border">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-foreground">
                        {role.title}
                      </h3>
                      <p className="text-primary font-medium">
                        {role.subtitle}
                      </p>
                    </div>
                  </motion.div>
                  
                  <ul className="mt-6 space-y-4">
                    {role.points.map((point, i) => (
                      <motion.li key={i} variants={itemVariants} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary/70 shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.div 
                  variants={itemVariants}
                  className="flex-1 relative aspect-[4/3] rounded-2xl overflow-hidden glass border border-border/50 p-6 flex items-center justify-center bg-gradient-to-br from-background/80 to-muted/20"
                >
                  <div className="absolute inset-0 bg-snow-pattern opacity-20" />
                  <Icon className="h-32 w-32 text-muted/20 drop-shadow-[0_0_30px_rgba(0,229,255,0.1)]" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
