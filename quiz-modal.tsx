export function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground text-sm mb-4">
            © {new Date().getFullYear()} Protocolo Gelatina. Todos os direitos reservados.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">
              Contato
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-foreground max-w-xl mx-auto">
            Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma forma.
          </p>
        </div>
      </div>
    </footer>
  )
}
