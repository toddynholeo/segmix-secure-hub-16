import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img 
              src="/lovable-uploads/9e6022c6-68fc-47f9-92a9-9050fe5a9039.png" 
              alt="Segmix Tecnologia" 
              className="h-16 w-auto mb-4"
            />
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cta mt-1 flex-shrink-0" />
                <p className="text-white/90">
                  R. José Bonifácio, 552 – segundo andar<br />
                  Rio de Janeiro – RJ
                </p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cta" />
                <a href="mailto:sac@segmix.com.br" className="text-white/90 hover:text-cta transition-colors">
                  sac@segmix.com.br
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cta" />
                <a href="tel:2132765670" className="text-white/90 hover:text-cta transition-colors">
                  (21) 3276-5670
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-green-400" />
                <a href="https://wa.me/5521996586152" className="text-white/90 hover:text-cta transition-colors">
                  (21) 99658-6152
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <a href="#" className="block text-white/90 hover:text-cta transition-colors">
                A Empresa
              </a>
              <a href="#" className="block text-white/90 hover:text-cta transition-colors">
                Nossos Serviços
              </a>
              <a href="#" className="block text-white/90 hover:text-cta transition-colors">
                Blog
              </a>
              <a href="#" className="block text-white/90 hover:text-cta transition-colors">
                Trabalhe Conosco
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <img 
              src="/lovable-uploads/9e6022c6-68fc-47f9-92a9-9050fe5a9039.png" 
              alt="Segmix Tecnologia" 
              className="h-12 w-auto mb-4 md:mb-0"
            />
            <p className="text-white/70 text-center md:text-right">
              © 2024 Segmix. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};