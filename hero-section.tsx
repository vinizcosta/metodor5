"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Flame, CheckCircle, Shield, Clock } from "lucide-react"
import { QuizModal } from "./quiz-modal"

export function CTASection() {
  const [isQuizOpen, setIsQuizOpen] = useState(false)
  return (
    <section className="py-20 bg-gradient-to-b from-card to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Comece sua{" "}
            <span className="text-primary">transformação</span>{" "}
            hoje mesmo!
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Junte-se a mais de 127.000 mulheres que já transformaram seus corpos com o Protocolo Gelatina
          </p>
          
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-foreground/80">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm">Acesso imediato</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/80">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm">Suporte exclusivo</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            onClick={() => setIsQuizOpen(true)}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-10 py-7 rounded-full shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 hover:scale-105 animate-pulse"
          >
            Quero saber se funciona para mim!
            <Flame className="w-6 h-6 ml-2" />
          </Button>
          
          {/* Urgency text */}
          <p className="mt-6 text-sm text-muted-foreground">
            <span className="text-accent font-semibold">Atenção:</span>{" "}
            Vagas limitadas para acesso ao método completo
          </p>

          {/* Quiz Modal */}
          <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
        </div>
      </div>
    </section>
  )
}
