"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Snowflake } from "lucide-react"
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from "motion/react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { NAV_LINKS } from "@/config/site"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [hoveredLink, setHoveredLink] = React.useState<string | null>(null)
  
  // Spotlight effect states
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isHoveringNav, setIsHoveringNav] = React.useState(false)

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const { left, top } = e.currentTarget.getBoundingClientRect()
      mouseX.set(e.clientX - left)
      mouseY.set(e.clientY - top)
    },
    [mouseX, mouseY]
  )

  // Handle scroll to add glassmorphism effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <motion.header 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHoveringNav(true)}
      onMouseLeave={() => setIsHoveringNav(false)}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden",
        isScrolled 
          ? "py-3 bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border-b border-white/20 dark:border-slate-800/50 shadow-[0_4px_30px_rgba(0,0,0,0.05)]"
          : "py-6 px-4 md:px-8 bg-transparent border-transparent shadow-none"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 hidden md:block"
        style={{
          opacity: isHoveringNav ? 1 : 0,
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(56, 189, 248, 0.3),
              transparent 80%
            )
          `,
        }}
      />
      {/* Glowing Bottom Border Trace */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] z-10 transition-opacity duration-300 hidden md:block"
        style={{
          opacity: isHoveringNav ? 1 : 0,
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px 100%,
              rgba(56, 189, 248, 0.8),
              transparent 100%
            )
          `,
        }}
      />
      <div className={cn("mx-auto flex items-center justify-between transition-all duration-500 relative z-10", isScrolled ? "max-w-7xl px-6 lg:px-8" : "max-w-7xl")}>
        {/* Logo (Left) */}
        <Link 
          href="/" 
          className="flex items-center gap-3 transition-transform hover:scale-105 group w-48"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-slate-900 dark:to-slate-200 text-white dark:text-slate-900 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 dark:bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <Snowflake className="h-6 w-6 relative z-10 group-hover:animate-spin-slow" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight bg-gradient-to-r from-sky-400 to-slate-900 dark:to-white bg-clip-text text-transparent">
            NSoC
          </span>
        </Link>

        {/* Desktop Navigation (Center) */}
        <nav 
          className="hidden lg:flex items-center gap-2 absolute left-1/2 -translate-x-1/2"
          onMouseLeave={() => setHoveredLink(null)}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:text-foreground"
              onMouseEnter={() => setHoveredLink(link.name)}
            >
              <span className="relative z-10">{link.name}</span>
              {hoveredLink === link.name && (
                <motion.div
                  layoutId="nav-hover"
                  className="absolute inset-0 bg-white/60 dark:bg-white/10 rounded-full shadow-sm border border-white/40 dark:border-white/5"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30
                  }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Actions (Right) */}
        <div className="flex items-center justify-end gap-3 w-48">
          <div className="hidden sm:flex items-center gap-2">
            <ThemeToggle />
            <Button className="rounded-full px-6 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40 hover:-translate-y-0.5">
              Join now
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-foreground hover:bg-foreground/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl lg:hidden flex flex-col"
          >
            <div className="flex h-24 items-center justify-between px-8 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-slate-900 dark:to-slate-200 text-white dark:text-slate-900 shadow-lg">
                  <Snowflake className="h-6 w-6 animate-spin-slow" />
                </div>
                <span className="font-display text-2xl font-bold bg-gradient-to-r from-sky-400 to-slate-900 dark:to-white bg-clip-text text-transparent">NSoC</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-foreground/10 hover:rotate-90 transition-all duration-300 rounded-full"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <nav className="flex flex-col items-center justify-center gap-8 flex-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    className="text-4xl font-display font-bold text-foreground/80 transition-all hover:text-blue-600 active:scale-95 inline-block hover:tracking-wide"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-8 flex flex-col items-center gap-6"
              >
                <ThemeToggle />
                <Button className="rounded-full px-10 py-6 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_40px_rgba(37,99,235,0.4)]">
                  Join now
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
