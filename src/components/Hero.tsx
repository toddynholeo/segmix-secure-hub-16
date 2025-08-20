import { Button } from "@/components/ui/button";
import { Shield, Eye, Key, AlertTriangle } from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero = ({ onCtaClick }: HeroProps) => {
  const services = [
    { icon: Shield, text: "Portaria Remota" },
    { icon: Key, text: "Controle de Acesso" },
    { icon: Eye, text: "Monitoramento CFTV" },
    { icon: AlertTriangle, text: "Alarme Monitorado" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Tecnologia que protege o que{" "}
            <span className="text-cta">mais importa</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
            Segurança, tecnologia e economia para condomínios e empresas
          </p>
          
          <Button 
            variant="cta" 
            size="lg"
            onClick={onCtaClick}
            className="text-lg px-8 py-6 mb-16"
          >
            SOLICITE UM ORÇAMENTO
          </Button>
        </div>
        
        {/* Floating Service Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <service.icon className="w-8 h-8 mx-auto mb-2 text-cta" />
              <p className="text-sm font-medium">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};