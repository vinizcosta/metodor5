"use client"

import Image from "next/image"
import { ArrowRight, Calendar, TrendingDown } from "lucide-react"

const transformations = [
  {
    name: "Maria Aparecida",
    age: 47,
    location: "São Paulo, SP",
    beforeImage: "/images/before-1.jpg",
    afterImage: "/images/after-1.jpg",
    weightLost: "14kg",
    duration: "45 dias",
    quote: "Achava que nunca ia conseguir emagrecer na minha idade. O método da gelatina mudou minha vida!"
  },
  {
    name: "Fernanda Costa",
    age: 34,
    location: "Rio de Janeiro, RJ",
    beforeImage: "/images/before-2.jpg",
    afterImage: "/images/after-2.jpg",
    weightLost: "11kg",
    duration: "30 dias",
    quote: "Perdi 11kg sem passar fome e sem academia. Meu marido não acredita na transformação!"
  },
  {
    name: "Dona Lúcia",
    age: 52,
    location: "Belo Horizonte, MG",
    beforeImage: "/images/before-3.jpg",
    afterImage: "/images/after-3.jpg",
    weightLost: "16kg",
    duration: "60 dias",
    quote: "Com 52 anos eu achava que era impossível. Hoje me sinto 20 anos mais nova!"
  }
]

export function TransformationsSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            PROVAS REAIS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Veja as <span className="text-primary">Transformações Reais</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mulheres comuns que decidiram mudar de vida com o Protocolo Gelatina
          </p>
        </div>

        {/* Transformations Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((transformation, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Before/After Images */}
              <div className="relative">
                <div className="flex">
                  {/* Before */}
                  <div className="w-1/2 relative">
                    <div className="aspect-[3/4] relative">
                      <Image
                        src={transformation.beforeImage}
                        alt={`${transformation.name} antes`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-destructive/90 text-white text-xs font-bold px-2 py-1 rounded">
                        ANTES
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="bg-primary text-primary-foreground rounded-full p-2 shadow-lg">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                  
                  {/* After */}
                  <div className="w-1/2 relative">
                    <div className="aspect-[3/4] relative">
                      <Image
                        src={transformation.afterImage}
                        alt={`${transformation.name} depois`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-primary/90 text-primary-foreground text-xs font-bold px-2 py-1 rounded">
                        DEPOIS
                      </div>
                    </div>
                  </div>
                </div>

                {/* Weight Lost Badge */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <TrendingDown className="w-4 h-4" />
                  <span>-{transformation.weightLost}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-foreground">{transformation.name}</h3>
                    <p className="text-sm text-muted-foreground">{transformation.age} anos • {transformation.location}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-primary bg-primary/10 px-2 py-1 rounded">
                    <Calendar className="w-3 h-3" />
                    <span>{transformation.duration}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "{transformation.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 bg-card rounded-2xl p-8 border border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">127.000+</p>
              <p className="text-sm text-muted-foreground mt-1">Mulheres Transformadas</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">12kg</p>
              <p className="text-sm text-muted-foreground mt-1">Média de Perda em 30 dias</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">97%</p>
              <p className="text-sm text-muted-foreground mt-1">Taxa de Satisfação</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">4.9/5</p>
              <p className="text-sm text-muted-foreground mt-1">Avaliação das Alunas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
