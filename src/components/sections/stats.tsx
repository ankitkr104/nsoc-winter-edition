"use client"

import * as React from "react"
import { motion, type Variants, useInView } from "motion/react"
import { siteContent } from "@/config/content"

function AnimatedStat({ value }: { value: string }) {
  const [display, setDisplay] = React.useState("0")
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  React.useEffect(() => {
    if (!isInView) return;
    
    const match = value.match(/^(\d+)(.*)$/)
    if (!match) {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        setDisplay(value.substring(0, i));
        if (i >= value.length) clearInterval(interval);
      }, 150);
      return () => clearInterval(interval);
    }

    const num = parseInt(match[1], 10)
    const suffix = match[2]
    const duration = 2000
    const steps = 60
    const stepTime = duration / steps
    let current = 0

    const interval = setInterval(() => {
      current += num / steps
      if (current >= num) {
        setDisplay(num.toString() + suffix)
        clearInterval(interval)
      } else {
        setDisplay(Math.floor(current).toString() + suffix)
      }
    }, stepTime)

    return () => clearInterval(interval)
  }, [value, isInView])

  return <span ref={ref}>{display}</span>
}

export function Stats() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const statVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  }

  return (
    <section id="impact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background -z-10" />
      
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-snug mb-16"
        >
          {siteContent.stats.quote}
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-border/50"
        >
          {siteContent.stats.items.map((stat, i) => (
            <motion.div key={i} variants={statVariants} className="flex flex-col items-center justify-center py-6 sm:py-0">
              <div className="font-display text-5xl md:text-6xl font-extrabold text-primary glow-text mb-2">
                <AnimatedStat value={stat.value} />
              </div>
              <div className="text-sm md:text-base font-medium uppercase tracking-wider text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
