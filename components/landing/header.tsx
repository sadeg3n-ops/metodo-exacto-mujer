"use client"

import { useState, useEffect } from "react"
import { Menu, X, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useScroll, useSpring } from "framer-motion"

interface HeaderProps {
  onCtaClick: () => void
}

export function Header({ onCtaClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#resultados", label: "Proceso" },
    { href: "#precio", label: "Programa" },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[70] bg-[#c85c7a] shadow-[0_0_16px_rgba(200,92,122,0.55)]"
        style={{ scaleX }}
      />

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border py-2"
          : "bg-transparent border-transparent py-4"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-16">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Dumbbell className="w-5 h-5 text-primary" />
              </div>
              <span className="text-lg md:text-xl font-bold text-foreground">
                Método <span className="text-primary">Exacto</span>
              </span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:block">
              <Button
                onClick={onCtaClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6"
              >
                Reservar valoración
              </Button>
            </div>

            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border animate-in fade-in slide-in-from-top-2 duration-200">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <Button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onCtaClick()
                  }}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full mt-2"
                >
                  Reservar valoración
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
