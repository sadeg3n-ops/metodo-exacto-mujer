"use client"

import { ArrowRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { Counter } from "@/components/ui/counter"

interface HeroSectionProps {
  onCtaClick: () => void
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-portada.jpg')" }}
      />
      <div className="absolute inset-0 bg-background/58 md:bg-background/48" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/52 via-background/28 to-background/82" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/22 via-transparent to-background/22" />
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 mx-auto">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                Valoración inicial · 15 min · Gratis
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.2} duration={0.8}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-balance text-foreground drop-shadow-[0_6px_24px_rgba(0,0,0,0.75)]">
              La asesoría online para{" "}
              <span className="animate-text-gradient bg-gradient-to-r from-primary via-[#e6c7be] to-primary">
                mujeres que entrenan y no ven cambios
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.3} duration={0.8}>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 text-pretty drop-shadow-[0_4px_18px_rgba(0,0,0,0.65)]">
              Detectamos qué está frenando tu progreso, qué conviene ajustar y si tiene sentido trabajar contigo.
            </p>
          </Reveal>

          <Reveal delay={0.4} duration={0.8}>
            <div className="flex flex-col items-center gap-4">
              <MagneticButton>
                <Button
                  onClick={onCtaClick}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-7 rounded-xl group transition-all hover:scale-105"
                >
                  Reservar valoración
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </MagneticButton>

              <p className="text-sm text-foreground/70 drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)]">
                Online. Gratis. Si no encaja, te lo digo.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.5} duration={0.8}>
            <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 pt-16 pb-12 border-t border-border/50">
              <div className="text-center">
                <p className="text-3xl md:text-5xl font-bold text-primary mb-2">
                  <Counter value={200} prefix="+" suffix="" delay={0.1} />
                </p>
                <p className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">Clientas</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-5xl font-bold text-primary mb-2">
                  <Counter value={12} delay={0.3} />
                </p>
                <p className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">Semanas</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-5xl font-bold text-primary mb-2">
                  <Counter value={98} suffix="%" delay={0.5} />
                </p>
                <p className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">Éxito</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
