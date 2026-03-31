"use client"

import { Shield } from "lucide-react"

export function GuaranteeSection() {
  return (
    <section className="py-16 md:py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-primary" />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Garantía 30 días
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Si cumples el plan y no hay mejora medible, te devolvemos el dinero.
          </p>
        </div>
      </div>
    </section>
  )
}
