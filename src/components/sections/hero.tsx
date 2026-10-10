"use client"

import * as React from "react"
import { motion } from "motion/react"
import { Snowflake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteContent } from "@/config/content"

export function Hero() {
  const [snowflakes, setSnowflakes] = React.useState<Array<{ left: string, size: string, duration: string, delay: string }>>([])
  const [birds, setBirds] = React.useState<Array<{ top: string, duration: string, delay: string, scale: number }>>([])
  const [typedLine1, setTypedLine1] = React.useState("")
  const [typedLine2, setTypedLine2] = React.useState("")
  const [isTypingLine1, setIsTypingLine1] = React.useState(true)
  const [isTypingLine2, setIsTypingLine2] = React.useState(false)

  React.useEffect(() => {
    setSnowflakes(
      [...Array(30)].map(() => ({
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 4 + 2}px`,
        duration: `${Math.random() * 10 + 10}s`,
        delay: `-${Math.random() * 20}s`,
      }))
    )
    
    setBirds(
      [...Array(4)].map(() => ({
        top: `${Math.random() * 20 + 10}%`,
        duration: `${Math.random() * 20 + 30}s`,
        delay: `-${Math.random() * 40}s`,
        scale: Math.random() * 0.4 + 0.4,
      }))
    )

    const text1 = "Nexus Spring"
    const text2 = "of Code"
    let i1 = 0
    let i2 = 0
    let interval1: NodeJS.Timeout
    let interval2: NodeJS.Timeout

    const startDelay = setTimeout(() => {
      interval1 = setInterval(() => {
        i1++
        setTypedLine1(text1.substring(0, i1))
        
        if (i1 >= text1.length) {
          clearInterval(interval1)
          setIsTypingLine1(false)
          setIsTypingLine2(true)
          
          interval2 = setInterval(() => {
            i2++
            setTypedLine2(text2.substring(0, i2))
            if (i2 >= text2.length) {
              clearInterval(interval2)
            }
          }, 150)
        }
      }, 150)
    }, 800) // Wait for initial fade in

    return () => {
      clearTimeout(startDelay)
      clearInterval(interval1)
      clearInterval(interval2)
    }
  }, [])

  return (
    <section className="relative flex min-h-[100vh] flex-col overflow-hidden bg-gradient-to-b from-[#e0f2fe] via-[#f0f9ff] to-white dark:from-slate-900 dark:via-slate-800 dark:to-background pt-32 pb-32">
      {/* Background Particles/Snow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {snowflakes.map((flake, i) => (
          <div
            key={`snow-${i}`}
            className="absolute rounded-full bg-white dark:bg-slate-200 opacity-60 dark:opacity-40 shadow-[0_0_5px_rgba(255,255,255,0.8)]"
            style={{
              top: '-10px',
              left: flake.left,
              width: flake.size,
              height: flake.size,
              animation: `snowfall ${flake.duration} linear infinite`,
              animationDelay: flake.delay,
            }}
          />
        ))}
        
        {birds.map((bird, i) => (
          <div
            key={`bird-${i}`}
            className="absolute right-0 text-slate-700 dark:text-slate-400 opacity-60"
            style={{
              top: bird.top,
              animation: `fly ${bird.duration} linear infinite`,
              animationDelay: bird.delay,
              transform: `scale(${bird.scale})`,
            }}
          >
            <svg viewBox="0 0 24 14" width="24" height="14" className="fill-current" style={{ animation: 'flap 1s ease-in-out infinite alternate' }}>
              <path d="M0 12 Q 6 2 12 8 Q 18 2 24 12 Q 18 6 12 10 Q 6 6 0 12 Z" />
            </svg>
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-start mt-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex items-center gap-2 rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-md px-4 py-1.5 text-xs font-mono font-semibold tracking-[0.2em] text-slate-600 dark:text-slate-300 shadow-sm border border-white/40 dark:border-slate-700"
        >
          <Snowflake className="h-3.5 w-3.5 text-blue-500" />
          SPRING EDITION • 15 OCTOBER - 30 DECEMBER
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl font-display text-5xl font-extrabold tracking-tight sm:text-6xl md:text-[5rem] lg:text-[6rem] leading-[1.1]"
        >
          <span className="text-slate-900 dark:text-white">
            {typedLine1}
            {isTypingLine1 && <span className="inline-block w-[4px] h-[0.9em] bg-slate-900 dark:bg-white animate-pulse ml-2 align-baseline" />}
          </span>
          <br />
          <span className="bg-gradient-to-r from-sky-400 via-sky-500 to-slate-900 dark:via-sky-300 dark:to-white bg-clip-text text-transparent">
            {typedLine2}
          </span>
          {isTypingLine2 && <span className="inline-block w-[4px] h-[0.9em] bg-sky-400 animate-pulse ml-2 align-baseline" />}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 max-w-2xl text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium"
        >
          {siteContent.hero.tagline} Discover beginner-friendly issues, contribute to projects, and become part of the open source community.
        </motion.p>
      </div>

      {/* SVG Landscape Footer */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none z-0 h-[40vh] min-h-[300px]">
        {/* Mountain Back */}
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 w-[110%] -left-[5%] h-full text-sky-200 dark:text-slate-800" style={{ animation: 'pan-slow 60s ease-in-out infinite alternate' }}>
          <path fill="currentColor" d="M0,320 L0,150 L200,80 L350,180 L550,50 L850,220 L1100,60 L1300,190 L1440,110 L1440,320 Z"></path>
        </svg>
        
        {/* Mountain Mid */}
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 w-[115%] -left-[7.5%] h-[85%] text-sky-300 dark:text-slate-900" style={{ animation: 'pan-medium 45s ease-in-out infinite alternate-reverse' }}>
          <path fill="currentColor" d="M0,320 L0,220 L150,130 L400,280 L700,90 L950,250 L1200,120 L1440,240 L1440,320 Z"></path>
        </svg>
        
        {/* Hills Front */}
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 w-[110%] -left-[5%] h-[60%] text-white dark:text-background" style={{ animation: 'pan-fast 30s ease-in-out infinite alternate' }}>
          <path fill="currentColor" d="M0,320 L0,270 Q400,200 750,280 T1440,240 L1440,320 Z"></path>
        </svg>

        {/* Trees Left */}
        <div className="absolute bottom-0 left-[-5%] sm:left-[2%] flex items-end -mb-2 space-x-1 sm:space-x-3 z-10">
          <Tree className="h-[150px] w-[60px] sm:h-[200px] sm:w-[85px]" delay="0s" />
          <Tree className="h-[120px] w-[50px] sm:h-[160px] sm:w-[65px]" delay="-2s" />
          <Tree className="h-[140px] w-[55px] sm:h-[180px] sm:w-[75px]" delay="-5s" />
          <Tree className="h-[100px] w-[40px] sm:h-[130px] sm:w-[55px]" delay="-1s" />
        </div>

        {/* Trees Right */}
        <div className="absolute bottom-0 right-[-5%] sm:right-[2%] flex items-end -mb-2 space-x-1 sm:space-x-4 z-20">
          <Tree className="h-[110px] w-[45px] sm:h-[150px] sm:w-[65px]" delay="-3s" />
          <Tree className="h-[160px] w-[65px] sm:h-[210px] sm:w-[90px]" delay="-1s" />
          <Tree className="h-[130px] w-[50px] sm:h-[170px] sm:w-[70px]" delay="-6s" />
          <Tree className="h-[180px] w-[70px] sm:h-[230px] sm:w-[95px]" delay="-4s" />
        </div>
      </div>

      {/* Snowman - Right Side (Hidden on Mobile) */}
      <div className="absolute hidden md:block bottom-[12vh] lg:bottom-[15vh] right-[5%] lg:right-[8%] z-10 pointer-events-none">
        <Snowman className="md:h-[400px] md:w-[280px] lg:h-[480px] lg:w-[340px]" delay="-3s" />
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes snowfall {
          0% { transform: translateY(-10vh) translateX(0px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(110vh) translateX(20px); opacity: 0; }
        }
        @keyframes fly {
          0% { transform: translateX(5vw) translateY(0px); }
          25% { transform: translateX(-30vw) translateY(-15px); }
          50% { transform: translateX(-60vw) translateY(10px); }
          75% { transform: translateX(-90vw) translateY(-5px); }
          100% { transform: translateX(-120vw) translateY(0px); }
        }
        @keyframes flap {
          0% { transform: scaleY(1); }
          100% { transform: scaleY(0.4); }
        }
        @keyframes sway {
          0% { transform: rotate(-2deg); }
          100% { transform: rotate(3deg); }
        }
        @keyframes pan-slow {
          0% { transform: translateX(0%); }
          100% { transform: translateX(2%); }
        }
        @keyframes pan-medium {
          0% { transform: translateX(0%); }
          100% { transform: translateX(3%); }
        }
        @keyframes pan-fast {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-1%); }
        }
      `}} />
    </section>
  )
}

function Tree({ className = "", delay = "0s" }: { className?: string, delay?: string }) {
  return (
    <svg 
      viewBox="0 0 100 200" 
      preserveAspectRatio="none"
      className={`text-[#1e293b] dark:text-slate-950 ${className}`}
      style={{ 
        transformOrigin: "bottom center",
        animation: `sway 6s ease-in-out infinite alternate ${delay}` 
      }}
    >
      <path fill="currentColor" d="M50 0 L100 100 L80 100 L100 150 L75 150 L100 200 L0 200 L25 150 L0 150 L20 100 L0 100 Z" />
    </svg>
  )
}

function Snowman({ className = "", delay = "0s" }: { className?: string, delay?: string }) {
  return (
    <svg 
      viewBox="0 0 240 320" 
      className={`overflow-visible drop-shadow-xl ${className}`}
      style={{
        transformOrigin: "bottom center",
        animation: `sway 7s ease-in-out infinite alternate ${delay}`
      }}
    >
      <defs>
        <radialGradient id="snowball" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="60%" stopColor="#f1f5f9" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </radialGradient>
        <linearGradient id="hat" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="scarf" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#b91c1c" />
        </linearGradient>
        <linearGradient id="carrot" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#c2410c" />
        </linearGradient>
        <linearGradient id="wood" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#451a03" />
        </linearGradient>
      </defs>

      {/* Right Arm */}
      <path d="M170 170 Q200 150 220 130" stroke="url(#wood)" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M200 150 L215 155" stroke="url(#wood)" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* Left Arm */}
      <path d="M70 170 Q40 150 20 170" stroke="url(#wood)" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M40 150 L30 140" stroke="url(#wood)" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* Body Bottom */}
      <circle cx="120" cy="230" r="75" fill="url(#snowball)" />
      
      {/* Body Top (Head) */}
      <circle cx="120" cy="110" r="55" fill="url(#snowball)" />

      {/* Buttons */}
      <circle cx="120" cy="175" r="7" fill="#0f172a" />
      <circle cx="120" cy="210" r="7" fill="#0f172a" />
      <circle cx="120" cy="245" r="7" fill="#0f172a" />

      {/* Scarf wrapping neck */}
      <path d="M70 145 Q120 175 170 145 Q175 155 160 165 Q120 185 65 160 Z" fill="url(#scarf)" />
      {/* Scarf tail */}
      <path d="M85 160 Q70 210 85 250 Q95 245 100 160 Z" fill="url(#scarf)" />

      {/* Eyes */}
      <circle cx="102" cy="100" r="5" fill="#0f172a" />
      <circle cx="138" cy="100" r="5" fill="#0f172a" />
      <circle cx="100" cy="98" r="2" fill="#ffffff" />
      <circle cx="136" cy="98" r="2" fill="#ffffff" />
      
      {/* Blush */}
      <circle cx="85" cy="115" r="9" fill="#fecdd3" opacity="0.7" />
      <circle cx="155" cy="115" r="9" fill="#fecdd3" opacity="0.7" />

      {/* Smile */}
      <path d="M95 125 Q120 145 145 125" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" fill="none" />
      <circle cx="95" cy="124" r="2" fill="#0f172a" />
      <circle cx="145" cy="124" r="2" fill="#0f172a" />

      {/* Carrot Nose */}
      <path d="M120 108 Q150 120 120 122 Z" fill="url(#carrot)" />
      
      {/* Hat Brim */}
      <ellipse cx="120" cy="55" rx="60" ry="14" fill="url(#hat)" />
      {/* Hat Top */}
      <path d="M85 55 L92 5 Q120 -2 148 5 L155 55 Z" fill="url(#hat)" />
      
      {/* Holly Berry and Leaf on Hat */}
      <path d="M135 35 Q155 25 160 40 Q145 45 135 35 Z" fill="#16a34a" />
      <path d="M135 35 Q150 20 160 30 Q150 45 135 35 Z" fill="#15803d" />
      <circle cx="138" cy="40" r="4" fill="#ef4444" />
      <circle cx="132" cy="35" r="4" fill="#ef4444" />
      <circle cx="144" cy="33" r="4" fill="#ef4444" />
    </svg>
  )
}
