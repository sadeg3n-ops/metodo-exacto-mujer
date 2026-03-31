"use client"

import { useRef } from "react"
import { motion, useSpring } from "framer-motion"

export function MagneticButton({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode, 
  className?: string 
}) {
  const ref = useRef<HTMLDivElement>(null)
  
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    
    // Magnetic pull: 30% towards the mouse relative to center
    const hX = (e.clientX - rect.left - width / 2) * 0.3
    const hY = (e.clientY - rect.top - height / 2) * 0.3
    
    x.set(hX)
    y.set(hY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className={`relative inline-flex ${className}`}
    >
      {children}
    </motion.div>
  )
}
