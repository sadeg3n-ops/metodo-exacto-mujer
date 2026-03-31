"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation, Variant } from "framer-motion"

interface RevealProps {
  children: React.ReactNode
  width?: "fit-content" | "100%"
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
}

export function Reveal({
  children,
  width = "100%",
  delay = 0,
  duration = 0.5,
  direction = "up",
  className = "",
}: RevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-20px" })
  const mainControls = useAnimation()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView, mainControls])

  const getVariants = (): { hidden: Variant; visible: Variant } => {
    const hiddenState = { opacity: 0 }
    const offset = isMobile ? 30 : 75
    
    switch (direction) {
      case "up":
        Object.assign(hiddenState, { y: offset })
        break
      case "down":
        Object.assign(hiddenState, { y: -offset })
        break
      case "left":
        Object.assign(hiddenState, { x: offset })
        break
      case "right":
        Object.assign(hiddenState, { x: -offset })
        break
      default:
        break
    }

    return {
      hidden: hiddenState,
      visible: { opacity: 1, y: 0, x: 0 },
    }
  }

  return (
    <div ref={ref} style={{ width }} className={`relative overflow-hidden ${className}`}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        animate={mainControls}
        transition={{ 
          duration: isMobile ? duration * 0.6 : duration, 
          delay: isMobile ? delay * 0.5 : delay, 
          ease: [0.25, 0.46, 0.45, 0.94] 
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
