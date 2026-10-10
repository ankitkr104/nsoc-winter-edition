"use client"

import * as React from "react"
import { motion } from "motion/react"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card, CardContent } from "@/components/ui/card"

import { TIMELINE_EVENTS } from "@/config/site"

export function Timeline() {
  return (
    <section id="timeline" className="w-full py-16 md:py-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading subheading="Timeline">
          Program Schedule
        </SectionHeading>
      </motion.div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 mt-12">
        {/* Vertical Line */}
        <div className="absolute left-[39px] sm:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border/50 dark:bg-border/30" />
        
        <div className="space-y-12">
          {TIMELINE_EVENTS.map((event, index) => {
            const Icon = event.icon
            const isEven = index % 2 === 0
            
            return (
              <motion.div 
                key={event.title}
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                  isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Center Node */}
                <div className="absolute left-[39px] sm:left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background bg-primary/10 text-primary glow-border z-10 shadow-[0_0_10px_rgba(0,229,255,0.2)]">
                  <Icon className="h-5 w-5" />
                </div>
                
                {/* Content Card */}
                <div className={`ml-16 sm:ml-0 w-[calc(100%-4rem)] sm:w-[calc(50%-3rem)] ${
                  isEven ? "sm:text-right" : "sm:text-left"
                }`}>
                  <Card className="hover:border-primary/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(0,229,255,0.07)] transition-all duration-300">
                    <CardContent className="p-6">
                      <time className="font-mono text-sm font-semibold text-primary mb-2 block">
                        {event.date}
                      </time>
                      <h3 className="font-display text-xl font-bold text-foreground mb-2">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
