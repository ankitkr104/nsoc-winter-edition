"use client"

import * as React from "react"
import { motion, type Variants, useMotionValue, useMotionTemplate } from "motion/react"
import { SectionHeading } from "@/components/ui/section-heading"
import { siteContent } from "@/config/content"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

function PrizeCard({ rank, itemVariants }: { rank: any, itemVariants: Variants }) {
  const Icon = rank.icon

  return (
    <motion.div variants={itemVariants}>
      <SpotlightCard className={`h-full ${
        rank.tag ? 'border-sky-400/30 shadow-[0_0_30px_rgba(56,189,248,0.1)]' : ''
      }`}>
        {rank.tag && (
          <div className="absolute top-0 right-0 bg-sky-500 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-bl-lg shadow-sm z-10">
            {rank.tag}
          </div>
        )}
        <div className="relative z-10">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-2">
              <Icon className="h-6 w-6 text-sky-500" />
              <CardTitle className="text-xl">{rank.rank}</CardTitle>
            </div>
            <Badge variant="outline" className="w-fit">{rank.rewards}</Badge>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {rank.items.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-sky-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </div>
      </SpotlightCard>
    </motion.div>
  )
}

export function Prizes() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  }

  return (
    <section className="py-16 md:py-24 bg-background/50 border-y border-border/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading subheading="Prizes & Recognition">
            Rewards that feel earned.
          </SectionHeading>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Climb the leaderboard and unlock swag, certificates and recognition. Pick a role to see what each rank takes home.
        </motion.p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {siteContent.prizes.ranks.map((rank) => (
            <PrizeCard key={rank.rank} rank={rank} itemVariants={itemVariants} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl glass p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              Every participant takes home these.
            </h3>
            <p className="text-sm text-muted-foreground">
              Regardless of your rank, completing the program earns you verifiable credentials.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            {siteContent.prizes.all.map((item, i) => (
              <Badge key={i} variant="winter" className="px-4 py-2 text-sm">
                {item}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
