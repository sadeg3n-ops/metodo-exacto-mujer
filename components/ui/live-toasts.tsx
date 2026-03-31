"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bell } from "lucide-react"

const TOASTS = [
  { name: "Elena", action: "acaba de reservar su valoración", time: "hace 2 min" },
  { name: "David", action: "completó su check-in semanal", time: "hace 18 min" },
  { name: "María", action: "recibió su ajuste de nutrición", time: "hace 1 hora" },
  { name: "Javier", action: "empezó su semana 1", time: "hace 7 min" }
]

export function LiveToasts() {
  const [currentToast, setCurrentToast] = useState<typeof TOASTS[0] | null>(null)

  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setCurrentToast(TOASTS[0])
      setTimeout(() => setCurrentToast(null), 5000)
    }, 15000)

    const interval = setInterval(() => {
      const randomToast = TOASTS[Math.floor(Math.random() * TOASTS.length)]
      setCurrentToast(randomToast)
      setTimeout(() => setCurrentToast(null), 5000)
    }, 25000)

    return () => {
      clearTimeout(firstTimer)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="fixed bottom-4 left-4 z-50 pointer-events-none">
      <AnimatePresence>
        {currentToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="bg-card/90 backdrop-blur-md border border-border shadow-2xl rounded-xl p-4 flex items-start gap-3 max-w-xs"
          >
            <div className="w-8 h-8 rounded-full bg-primary/20 flex flex-shrink-0 items-center justify-center mt-0.5">
              <Bell className="w-4 h-4 text-primary" />
            </div>
            <div>
              <p className="text-sm text-foreground">
                <span className="font-semibold">{currentToast.name}</span> {currentToast.action}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{currentToast.time}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
