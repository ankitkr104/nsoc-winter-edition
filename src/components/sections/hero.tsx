"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { gsap } from "gsap"
import confetti from "canvas-confetti"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  const titleRef = React.useRef<HTMLHeadingElement>(null)

  // GSAP advanced stagger animation with strict cleanup
  React.useEffect(() => {
    if (!titleRef.current) return
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    const words = titleRef.current.querySelectorAll(".word")
    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { y: 50, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: 0.1,
        }
      )
    })

    return () => ctx.revert() // Cleanup on unmount
  }, [])

  // Minimal snowfall effect handling visibility and cleanup
  React.useEffect(() => {
    let animationFrameId: number
    const duration = 5 * 1000
    const end = Date.now() + duration
    const colors = ["#ffffff", "#00e5ff"]

    const frame = () => {
      // Pause animation if document is hidden to save resources
      if (document.hidden) {
        if (Date.now() < end) {
          animationFrameId = requestAnimationFrame(frame)
        }
        return
      }

      confetti({
        particleCount: 2,
        angle: 270,
        spread: 60,
        origin: { x: Math.random(), y: -0.1 },
        colors: colors,
        disableForReducedMotion: true,
        gravity: 0.8,
        scalar: 0.5,
        ticks: 300,
        zIndex: 0,
      })

      if (Date.now() < end) {
        animationFrameId = requestAnimationFrame(frame)
      }
    }
    
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!prefersReducedMotion) {
      frame()
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [])

  // Interactive confetti burst on primary CTA click
  const handleCtaClick = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#00e5ff", "#ffffff", "#0ea5e9"],
      disableForReducedMotion: true,
      zIndex: 100,
    })
  }

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden pt-24 pb-16 text-center">
      <div className="absolute inset-0 -z-10 bg-snow-pattern opacity-50" />
      <div className="absolute top-0 left-1/2 h-[500px] w-full max-w-[1000px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px] dark:bg-primary/10 -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[300px] w-full bg-gradient-to-t from-background to-transparent -z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto flex max-w-4xl flex-col items-center px-4 sm:px-6 lg:px-8"
      >
        <Badge variant="winter" className="mb-8 px-4 py-1.5 text-sm">
          Winter Edition 2026
        </Badge>

        <h1 
          ref={titleRef}
          className="mb-6 font-display text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-foreground [perspective:1000px]"
        >
          {"Nexus Spring of Code (NSoC)".split(" ").map((word, i) => (
            <span key={i} className="word inline-block origin-bottom mr-3 lg:mr-4 last:mr-0 glow-text">
              {word}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 max-w-3xl text-lg sm:text-xl md:text-2xl font-medium text-foreground/90 leading-relaxed"
        >
          A 45-day open source program where project admins bring real codebases and contributors close issues that ship to production.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-10 max-w-2xl text-base sm:text-lg text-muted-foreground"
        >
          Nexus Spring of Code (NSoC) is an open source contribution program designed to help developers explore open source, collaborate on real projects, and grow their development skills.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button 
            variant="winter" 
            size="lg" 
            className="w-full sm:w-auto min-w-[200px] h-14 text-base font-mono uppercase tracking-wider group hover:scale-105 transition-transform" 
            asChild
            onClick={handleCtaClick}
          >
            <Link href="https://discord.gg/bZ47fac2jn" target="_blank" rel="noopener noreferrer">
              Join the Community
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[200px] h-14 text-base font-mono uppercase tracking-wider glass hover:scale-105 transition-transform" asChild>
            <Link href="/projects">
              Explore Projects
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
