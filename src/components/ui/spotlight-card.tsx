"use client"

import * as React from "react"
import { motion, useMotionValue, useMotionTemplate } from "motion/react"
import { cn } from "@/lib/utils"

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  spotlightColor?: string
}

export function SpotlightCard({ 
  children, 
  className, 
  spotlightColor = "rgba(56, 189, 248, 0.25)",
  ...props 
}: SpotlightCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isHovering, setIsHovering] = React.useState(false)

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { left, top } = e.currentTarget.getBoundingClientRect()
      mouseX.set(e.clientX - left)
      mouseY.set(e.clientY - top)
    },
    [mouseX, mouseY]
  )

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={cn(
        "relative overflow-hidden transition-all duration-500 hover:-translate-y-2 group bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border border-border/50 hover:border-sky-400/50 hover:shadow-[0_20px_40px_rgba(56,189,248,0.15)] dark:hover:shadow-[0_20px_40px_rgba(56,189,248,0.1)] rounded-xl",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 via-transparent to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
      
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </div>
  )
}
