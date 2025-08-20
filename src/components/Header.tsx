import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

interface HeaderProps {
  onCtaClick: () => void;
}

export const Header = ({ onCtaClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/9e6022c6-68fc-47f9-92a9-9050fe5a9039.png" 
              alt="Segmix Tecnologia" 
              className="h-12 w-auto"
            />
          </div>

          {/* Contact Information */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="text-sm text-foreground">
              <span className="font-medium">Fale com um especialista</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">(21) 3276-5670</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium">(21) 99658-6152</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            variant="cta" 
            size="lg"
            onClick={onCtaClick}
            className="text-sm md:text-base"
          >
            SOLICITE UM ORÇAMENTO
          </Button>
        </div>
      </div>
    </header>
  );
};