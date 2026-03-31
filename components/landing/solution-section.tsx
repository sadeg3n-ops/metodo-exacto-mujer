"use client"

import { useRef } from "react"
import { ChevronDown } from "lucide-react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Reveal } from "@/components/ui/reveal"
import { Tilt } from "@/components/ui/tilt"

const features = [
  {
    title: "Entrenamiento con criterio",
    subtitle: "El estímulo que sí te hace progresar",
    description: "Rutina diseñada según tu nivel, tu material, tu experiencia, tu agenda y la carga que realmente puedes tolerar sin desgastarte de más.",
    image: "/images/process/entrenamiento-con-criterio.jpg",
    imagePosition: "center center",
  },
  {
    title: "Nutrición sostenible",
    subtitle: "Comer bien sin vivir a dieta",
    description: "Objetivos claros, pautas flexibles y margen para comer fuera, mantener tu vida normal y seguir avanzando sin estrategias agresivas.",
    image: "/images/process/nutricion-sostenible.jpg",
    imagePosition: "center center",
  },
  {
    title: "Seguimiento constante",
    subtitle: "Ajustes cuando toca",
    description: "Revisamos técnica, recuperación, sensaciones y rendimiento para tocar carga, volumen o alimentación en el momento correcto.",
    image: "/images/process/seguimiento-constante.jpg",
    imagePosition: "center center",
  }
]

function SolutionFeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 88%", "center 46%"],
  })

  const mobileImageShade = useTransform(scrollYProgress, [0, 0.35, 0.8], [0.02, 0.14, 0.3])
  const mobileDescriptionOpacity = useTransform(scrollYProgress, [0.18, 0.45, 0.82], [0, 0.45, 1])
  const mobileDescriptionY = useTransform(scrollYProgress, [0.18, 0.82], [16, 0])

  return (
    <Reveal
      delay={0.3 + index * 0.15}
      className={index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
    >
      <div ref={ref} className="h-full">
        <Tilt className="h-full">
          <Card className="group relative h-full min-h-[23rem] overflow-hidden border-border/70 bg-card/30 transition-all duration-500 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10 md:min-h-0">
            <div
              className="absolute inset-0 scale-100 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('${feature.image}')`,
                backgroundPosition: feature.imagePosition,
              }}
            />
            <div className="absolute inset-0 bg-black/28 transition-colors duration-500 md:bg-black/45 group-hover:bg-black/80" />
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 bg-black md:hidden"
              style={{
                opacity: shouldReduceMotion ? 0.22 : mobileImageShade,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/26 to-black/6 transition-all duration-500 md:from-black/90 md:via-black/45 md:to-black/20 group-hover:md:from-black/95 group-hover:md:via-black/80 group-hover:md:to-black/55" />

            <CardContent className={`relative z-10 flex h-full flex-col justify-end p-6 text-left md:p-8 ${index === 0 ? "md:p-12" : ""}`}>
              <div className="max-w-xl">
                <h3 className={`mb-2 font-semibold text-white ${index === 0 ? "text-3xl md:text-4xl" : "text-2xl"}`}>
                  {feature.title}
                </h3>
                <p className={`font-semibold tracking-wide text-primary ${index === 0 ? "text-lg md:text-xl" : "text-base"}`}>
                  {feature.subtitle}
                </p>
                <motion.p
                  className={`mt-4 text-sm leading-relaxed text-slate-300 md:hidden ${index === 0 ? "max-w-lg" : "max-w-sm"}`}
                  style={
                    shouldReduceMotion
                      ? undefined
                      : {
                          opacity: mobileDescriptionOpacity,
                          y: mobileDescriptionY,
                        }
                  }
                >
                  {feature.description}
                </motion.p>
                <p className={`mt-4 hidden text-sm leading-relaxed text-slate-300 transition-all duration-500 md:block md:text-base md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 ${index === 0 ? "max-w-lg" : "max-w-sm"}`}>
                  {feature.description}
                </p>
              </div>
            </CardContent>
          </Card>
        </Tilt>
      </div>
    </Reveal>
  )
}

export function SolutionSection() {
  return (
    <section id="resultados" className="pt-16 pb-12 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Reveal>
            <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-4">
              Proceso
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Qué cambia cuando trabajas con un sistema adaptado a ti
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-muted-foreground">
              Diagnóstico, programación y ajustes continuos. Sabes qué hacer, por qué hacerlo y cómo adaptar el plan cuando tu cuerpo no responde igual cada semana.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 max-w-5xl mx-auto md:auto-rows-fr">
          {features.map((feature, index) => (
            <SolutionFeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <div className="flex flex-col items-center text-primary/80">
            <div className="h-8 w-px bg-primary/35" />
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
