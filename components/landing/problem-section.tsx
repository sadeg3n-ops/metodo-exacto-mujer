"use client"

import { TrendingDown, Users, AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/ui/reveal"

const problems = [
  {
    icon: TrendingDown,
    title: "Rutina sin dirección",
    description: "Entrenas, pero no sabes qué variable tocar cuando dejas de progresar o empiezas a acumular más fatiga."
  },
  {
    icon: Users,
    title: "Dietas difíciles de sostener",
    description: "Si comer bien implica vivir restringida, controlar todo o renunciar a tu vida social, acabarás soltándolo."
  },
  {
    icon: AlertCircle,
    title: "Cero personalización",
    description: "Sin seguimiento ni ajustes cuando baja tu energía o cambia tu rendimiento, es fácil sentir que haces todo bien y no ver resultados."
  }
]

export function ProblemSection() {
  return (
    <section className="light-section py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Si entrenas, comes razonablemente bien y aun así no cambias, no te falta esfuerzo.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg text-muted-foreground">
              El bloqueo rara vez es la actitud. Suele ser un sistema mal ajustado.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <Reveal key={index} delay={index * 0.15}>
              <Card className="bg-card border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_24px_50px_-28px_rgba(111,49,78,0.38)] group h-full">
                <CardContent className="p-6 md:p-8 flex h-full flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <problem.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="mb-3 flex min-h-[4rem] items-center justify-center text-xl font-semibold text-foreground md:min-h-[4.5rem]">
                    {problem.title}
                  </h3>
                  <p className="max-w-[27ch] text-balance text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
