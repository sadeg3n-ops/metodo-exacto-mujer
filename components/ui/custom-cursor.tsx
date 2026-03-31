"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return

    setIsVisible(true)
    document.body.style.cursor = "none"

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      
      const target = e.target as HTMLElement
      // Consider hovering if element has cursor pointer or is interactive
      const isPointer = 
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button"
        
      setIsHovering(isPointer)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseout", handleMouseLeave)
    window.addEventListener("mouseover", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseout", handleMouseLeave)
      window.removeEventListener("mouseover", handleMouseEnter)
      document.body.style.cursor = "auto"
    }
  }, [cursorX, cursorY])

  if (!isVisible) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-primary pointer-events-none z-[9999] opacity-80 mix-blend-difference"
        style={{ 
          x: cursorX, 
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ scale: isHovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-primary pointer-events-none z-[9998] mix-blend-difference"
        style={{ 
          x: cursorXSpring, 
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ 
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(234, 88, 12, 0.2)" : "rgba(234, 88, 12, 0)",
          borderWidth: isHovering ? "0px" : "1px"
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  )
}
