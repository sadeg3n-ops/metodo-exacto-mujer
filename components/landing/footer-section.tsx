"use client"

import { ArrowRight, MapPin, Phone, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FooterSectionProps {
  onCtaClick: () => void
}

export function FooterSection({ onCtaClick }: FooterSectionProps) {
  const navLinks = [
    { href: "#resultados", label: "Proceso" },
    { href: "#precio", label: "Programa" },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <section className="relative min-h-[54svh] md:min-h-[74vh] flex items-start md:items-center pt-10 pb-14 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute left-1/2 top-1/3 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl md:h-[34rem] md:w-[34rem]" />
        <div className="absolute -left-24 bottom-10 h-56 w-56 rounded-full bg-primary/10 blur-3xl md:h-80 md:w-80" />
        <div className="absolute -right-24 top-16 h-56 w-56 rounded-full bg-primary/10 blur-3xl md:h-80 md:w-80" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-5 md:mb-8">
              Valoración inicial · 15 min
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-5 md:mb-8 text-balance leading-[1.02]">
              Reserva la valoración y{" "}
              <span className="text-primary">sal de dudas con criterio</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto text-pretty">
              Vemos tu punto de partida, qué está frenando tu progreso y si este sistema tiene sentido para ti.
            </p>

            <Button
              onClick={onCtaClick}
              sheen
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg md:text-xl px-10 md:px-12 py-7 md:py-8 rounded-2xl group transition-all hover:scale-105 shadow-[0_18px_60px_rgba(200,92,122,0.26)]"
            >
              Reservar valoración inicial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-sm md:text-base text-muted-foreground mt-5">
              15 min. Online. Gratis. Si no encaja, te lo digo.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-border/70 py-10 md:py-12 bg-background/30 md:bg-transparent backdrop-blur-[2px] md:backdrop-blur-none">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-start text-center md:text-left justify-items-center md:justify-items-stretch">
            <div className="max-w-xs md:max-w-none">
              <a href="#" className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Dumbbell className="w-5 h-5 text-primary" />
                </div>
                <span className="text-lg font-bold text-foreground">
                  Método <span className="text-primary">Exacto</span>
                </span>
              </a>
              <p className="text-muted-foreground/80 text-sm max-w-xs mx-auto md:mx-0">
                Entrenamiento y nutrición con criterio, seguimiento real y ajustes continuos para progresar sin vivir a dieta.
              </p>
            </div>

            <div className="max-w-xs md:max-w-none">
              <h4 className="font-semibold text-foreground mb-4">Navegación</h4>
              <nav className="flex flex-col gap-2 items-center md:items-start">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground/80 hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="max-w-xs md:max-w-none">
              <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
              <div className="space-y-3 flex flex-col items-center md:items-start">
                <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground/80 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Online | España</span>
                </div>
                <a
                  href="https://wa.me/34600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground/80 text-sm hover:text-foreground transition-colors group"
                >
                  <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span>WhatsApp · +34 600 000 000</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-border/60 text-center">
            <p className="text-sm text-muted-foreground/75">
              © {new Date().getFullYear()} Método Exacto. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
