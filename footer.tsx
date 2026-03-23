import { Zap, Clock, Heart, Sparkles, Shield, TrendingDown } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Acelera o Metabolismo",
    description: "Ativa a queima de gordura de forma natural e eficiente"
  },
  {
    icon: Clock,
    title: "Resultados Rápidos",
    description: "Veja diferença já nas primeiras semanas de uso"
  },
  {
    icon: Heart,
    title: "Saudável e Seguro",
    description: "Fórmula 100% natural, sem efeitos colaterais"
  },
  {
    icon: Sparkles,
    title: "Fácil de Fazer",
    description: "Prepare em casa com ingredientes simples"
  },
  {
    icon: Shield,
    title: "Cientificamente Comprovado",
    description: "Baseado em estudos sobre metabolismo"
  },
  {
    icon: TrendingDown,
    title: "Reduz Medidas",
    description: "Diminui gordura localizada em áreas difíceis"
  }
]

export function BenefitsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que o{" "}
            <span className="text-primary">Protocolo Gelatina</span>{" "}
            funciona?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubra os benefícios que milhares de mulheres já estão experimentando
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
