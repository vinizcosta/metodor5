import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Maria Silva",
    location: "São Paulo, SP",
    text: "Perdi 8kg em apenas 3 semanas! Nunca imaginei que algo tão simples pudesse funcionar tão bem.",
    rating: 5,
    weight: "-8kg"
  },
  {
    name: "Ana Costa",
    location: "Rio de Janeiro, RJ",
    text: "Já tinha tentado de tudo, mas só o Protocolo Gelatina me deu resultados reais. Recomendo!",
    rating: 5,
    weight: "-12kg"
  },
  {
    name: "Juliana Santos",
    location: "Belo Horizonte, MG",
    text: "Minha autoestima voltou! Estou me sentindo mais leve e confiante com meu corpo.",
    rating: 5,
    weight: "-10kg"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que dizem nossas{" "}
            <span className="text-primary">alunas</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Histórias reais de transformação
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-background border border-border rounded-2xl relative"
            >
              {/* Weight badge */}
              <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                {testimonial.weight}
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-foreground mb-4 text-pretty">
                {`"${testimonial.text}"`}
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
