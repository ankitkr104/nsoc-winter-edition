"use client"

import * as React from "react"
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "motion/react"
import { SectionHeading } from "@/components/ui/section-heading"
import { siteContent } from "@/config/content"

// Individual card with cursor hover gradient tracking
function TimelineCard({ event }: { event: any }) {
  const cardRef = React.useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-border/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md transition-colors duration-300 hover:border-sky-500/50 group shadow-sm hover:shadow-lg dark:hover:shadow-[0_8px_30px_rgba(56,189,248,0.1)]"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(56, 189, 248, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="p-6 relative z-10 flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <time className="font-mono text-sm font-bold text-sky-500 dark:text-sky-400">
            {event.date}
          </time>
          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full border border-slate-200 dark:border-slate-700">
            {event.step}
          </span>
        </div>
        <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-2">
          {event.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          {event.description}
        </p>
      </div>
    </div>
  )
}

export function Timeline() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  
  // Track scroll for the vertical center line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  // Animate the line height from 0 to 100%
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])
  
  // Smooth the scroll animation slightly
  const smoothedScaleY = useTransform(scaleY, value => value) // Can use spring if desired, but direct mapping is usually cleaner for strict scroll

  return (
    <section id="timeline" className="w-full py-24 md:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <SectionHeading subheading="Timeline">
          <span className="bg-gradient-to-r from-sky-400 to-slate-900 dark:to-white bg-clip-text text-transparent">Program Schedule</span>
        </SectionHeading>
      </motion.div>

      <div ref={containerRef} className="relative mx-auto max-w-4xl px-4 sm:px-6">
        {/* Background Vertical Line (Empty Track) */}
        <div className="absolute left-[39px] sm:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-slate-200 dark:bg-slate-800 rounded-full" />
        
        {/* Animated Gradient Line (Filled Track) */}
        <motion.div 
          className="absolute left-[39px] sm:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-sky-400 via-indigo-500 to-orange-400 rounded-full origin-top"
          style={{ scaleY: smoothedScaleY }}
        />
        
        <div className="space-y-12">
          {siteContent.timeline.map((event, index) => {
            const isEven = index % 2 === 0
            
            return (
              <motion.div 
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                  isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
                {/* Center Node dot */}
                <div className="absolute left-[39px] sm:left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-950 border-2 border-sky-400 z-10 shadow-[0_0_15px_rgba(56,189,248,0.4)]">
                  <div className="h-2.5 w-2.5 rounded-full bg-sky-500" />
                </div>
                
                {/* Content Card Wrapper */}
                <div className={`ml-16 sm:ml-0 w-[calc(100%-4rem)] sm:w-[calc(50%-3rem)] ${
                  isEven ? "sm:text-right" : "sm:text-left"
                }`}>
                  {/* For even items on desktop, we want to align text right, but keep the card layout standard or slightly modified if needed. */}
                  {/* Using text-left inside the card always looks cleaner, but we align the container. */}
                  <div className={`flex w-full ${isEven ? 'sm:justify-start' : 'sm:justify-end'}`}>
                    <TimelineCard event={event} />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
