import { useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Clients } from "@/components/Clients";

const ThankYou = () => {
  useEffect(() => {
    // Analytics or tracking can be added here
    console.log("Thank you page loaded");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header with logo */}
      <header className="py-6 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <img 
            src="/lovable-uploads/9e6022c6-68fc-47f9-92a9-9050fe5a9039.png" 
            alt="Segmix Tecnologia" 
            className="h-12 w-auto mx-auto"
          />
        </div>
      </header>

      {/* Main content */}
      <main className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Muito obrigado!
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Recebemos suas informações. Um de nossos especialistas entrará em contato em breve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => window.location.href = "/"}
              >
                Voltar ao Site
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open("https://wa.me/5521996586152", "_blank")}
              >
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
        
        {/* Social proof section */}
        <Clients />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <img 
              src="/lovable-uploads/9e6022c6-68fc-47f9-92a9-9050fe5a9039.png" 
              alt="Segmix Tecnologia" 
              className="h-12 w-auto mb-4 md:mb-0"
            />
            <p className="text-muted-foreground">
              © 2024 Segmix. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ThankYou;