"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Flame, Users, Leaf } from "lucide-react"
import { QuizModal } from "./quiz-modal"

export function HeroSection() {
  const [isQuizOpen, setIsQuizOpen] = useState(false)
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1f1a] via-[#0d2620] to-[#0a1a15]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium">Método 100% Natural</span>
            </div>
            
            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              Protocolo{" "}
              <span className="text-primary">Gelatina</span>
            </h1>
            
            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
              Descubra como ativar seu metabolismo e perder até{" "}
              <span className="text-accent font-semibold">12kg em 30 dias</span>{" "}
              com a Gelatina Mounjaro!
            </p>
            
            {/* CTA Button */}
            <Button 
              size="lg" 
              onClick={() => setIsQuizOpen(true)}
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 hover:scale-105 mb-8"
            >
              Quero saber se funciona para mim!
              <Flame className="w-5 h-5 ml-2" />
            </Button>

            {/* Quiz Modal */}
            <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
            
            {/* Social proof badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6">
              <div className="flex items-center gap-2 text-foreground/80">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">127.000+ mulheres</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/80">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">100% Natural</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-75" />
              
              <div className="relative rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl">
                <Image
                  src="/images/hero-woman.jpg"
                  alt="Mulher saudável e confiante"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/images/gelatin.jpg"
                      alt="Gelatina"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Ingrediente</p>
                    <p className="text-sm font-semibold text-foreground">Gelatina Mounjaro</p>
                  </div>
                </div>
              </div>
              
              {/* Stats badge */}
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-xl p-4 shadow-xl">
                <p className="text-2xl font-bold">-12kg</p>
                <p className="text-xs">em 30 dias</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
