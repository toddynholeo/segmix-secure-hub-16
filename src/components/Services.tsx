import { Shield, Key, Eye, AlertTriangle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import portariaRemotaImg from "@/assets/portaria-remota.jpg";
import controleAcessoImg from "@/assets/controle-acesso.jpg";
import monitoramentoCftvImg from "@/assets/monitoramento-cftv.jpg";
import alarmeMonitoradoImg from "@/assets/alarme-monitorado.jpg";
import rastreadorVeicularImg from "@/assets/rastreador-veicular.jpg";

export const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Portaria Remota / Autônoma",
      description: "Reduza em até 60% os custos com portaria e aumente a segurança do seu condomínio com a nossa Portaria Remota ou Autônoma.",
      image: portariaRemotaImg
    },
    {
      icon: Key,
      title: "Controle de Acesso",
      description: "Gerencie e controle o fluxo de entrada e saída de pessoas e veículos do seu patrimônio com o nosso Controle de Acesso.",
      image: controleAcessoImg
    },
    {
      icon: Eye,
      title: "Monitoramento CFTV",
      description: "Monitore em tempo real o que acontece no seu patrimônio de onde estiver com o nosso sistema de Monitoramento CFTV.",
      image: monitoramentoCftvImg
    },
    {
      icon: AlertTriangle,
      title: "Alarme Monitorado",
      description: "Proteja seu patrimônio com a nossa Central de Monitoramento 24h, pronta para atuar em qualquer sinal de invasão.",
      image: alarmeMonitoradoImg
    },
    {
      icon: MapPin,
      title: "Rastreador Veicular",
      description: "Monitore seu carro, moto ou frota em tempo real com a nossa tecnologia de rastreamento via GPS.",
      image: rastreadorVeicularImg
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Conheça nossas soluções completas de segurança
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-border text-center group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button 
            variant="cta" 
            size="lg"
            className="text-lg px-12 py-6"
            onClick={() => {
              const event = new CustomEvent('openQuoteModal');
              window.dispatchEvent(event);
            }}
          >
            SOLICITE UM ORÇAMENTO GRATUITO
          </Button>
        </div>
      </div>
    </section>
  );
};