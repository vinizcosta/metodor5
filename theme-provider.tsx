"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { CheckCircle, ArrowRight, Sparkles, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface QuizModalProps {
  isOpen: boolean
  onClose: () => void
}

const questions = [
  {
    id: 1,
    question: "Qual é o seu principal objetivo?",
    options: [
      "Perder peso de forma saudável",
      "Acelerar meu metabolismo",
      "Reduzir medidas abdominais",
      "Ter mais energia e disposição",
    ],
  },
  {
    id: 2,
    question: "Você já tentou outros métodos de emagrecimento?",
    options: [
      "Sim, vários, mas nenhum funcionou",
      "Sim, alguns, com pouco resultado",
      "Sim, mas voltei a engordar",
      "Não, essa é minha primeira vez",
    ],
  },
  {
    id: 3,
    question: "Quantos quilos você gostaria de perder?",
    options: [
      "Até 5kg",
      "Entre 5kg e 10kg",
      "Entre 10kg e 20kg",
      "Mais de 20kg",
    ],
  },
  {
    id: 4,
    question: "Você tem disponibilidade para dedicar 10 minutos por dia?",
    options: [
      "Sim, com certeza!",
      "Sim, posso me organizar",
      "Tenho pouco tempo, mas dou um jeito",
      "Tenho uma rotina muito corrida",
    ],
  },
  {
    id: 5,
    question: "Como você se sente em relação ao seu corpo atualmente?",
    options: [
      "Insatisfeita e querendo mudar",
      "Desanimada com a balança",
      "Com baixa autoestima",
      "Determinada a transformar minha vida",
    ],
  },
]

export function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleSelectAnswer = (answer: string) => {
    setSelectedAnswer(answer)
  }

  const handleNext = () => {
    if (!selectedAnswer) return

    const newAnswers = [...answers, selectedAnswer]
    setAnswers(newAnswers)
    setSelectedAnswer(null)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleClose = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setSelectedAnswer(null)
    setShowResult(false)
    onClose()
  }

  // Link de afiliado Kiwify
  const affiliateLink = "https://pay.kiwify.com.br/jmq9GS0"

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg p-0 bg-card border-border overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>Quiz - Descubra se o Protocolo Gelatina funciona para você</DialogTitle>
          <DialogDescription>Responda algumas perguntas para descobrir se o método é ideal para o seu perfil</DialogDescription>
        </VisuallyHidden>
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-50 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!showResult ? (
          <div className="p-6">
            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <h3 className="text-xl font-bold text-foreground mb-6">
              {questions[currentQuestion].question}
            </h3>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectAnswer(option)}
                  className={cn(
                    "w-full p-4 text-left rounded-xl border-2 transition-all duration-200",
                    selectedAnswer === option
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border bg-secondary/50 text-foreground/80 hover:border-primary/50 hover:bg-secondary"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                      selectedAnswer === option
                        ? "border-primary bg-primary"
                        : "border-muted-foreground"
                    )}>
                      {selectedAnswer === option && (
                        <CheckCircle className="w-3 h-3 text-primary-foreground" />
                      )}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Next button */}
            <Button
              onClick={handleNext}
              disabled={!selectedAnswer}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion < questions.length - 1 ? (
                <>
                  Continuar
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              ) : (
                <>
                  Ver meu resultado
                  <Sparkles className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </div>
        ) : (
          /* Result screen */
          <div className="p-6 text-center">
            {/* Success animation */}
            <div className="w-20 h-20 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-4">
              Parabéns! O Protocolo Gelatina é{" "}
              <span className="text-primary">perfeito para você!</span>
            </h3>

            <p className="text-muted-foreground mb-6">
              Baseado nas suas respostas, você tem{" "}
              <span className="text-accent font-semibold">97% de compatibilidade</span>{" "}
              com o método. Mulheres com o seu perfil perderam em média{" "}
              <span className="text-accent font-semibold">8 a 12kg em 30 dias</span>.
            </p>

            {/* Benefits */}
            <div className="bg-secondary/50 rounded-xl p-4 mb-6">
              <p className="text-sm font-semibold text-foreground mb-3">
                O que você vai conquistar:
              </p>
              <ul className="space-y-2 text-left">
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Metabolismo acelerado 24h por dia
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Redução de medidas em poucos dias
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Mais energia e disposição
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/80">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  Resultados sem efeito sanfona
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <a
              href={affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button 
                size="lg" 
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-7 rounded-xl shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 hover:scale-105 animate-pulse"
              >
                Quero começar agora!
                <Sparkles className="w-5 h-5 ml-2" />
              </Button>
            </a>

            <p className="mt-4 text-xs text-muted-foreground">
              Oferta por tempo limitado - Garanta seu acesso com desconto
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
