import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Building, Home, Factory, ArrowRight, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: QuoteFormData) => void;
}

export interface QuoteFormData {
  propertyType: string;
  companyName: string;
  name: string;
  email: string;
  phone: string;
}

export const QuoteModal = ({ isOpen, onClose, onSubmit }: QuoteModalProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>({
    propertyType: "",
    companyName: "",
    name: "",
    email: "",
    phone: ""
  });
  const { toast } = useToast();

  const propertyTypes = [
    { value: "condominio", label: "Condomínio", icon: Building },
    { value: "empresa", label: "Empresa", icon: Factory },
    { value: "residencia", label: "Residência", icon: Home }
  ];

  const handlePropertyTypeSelect = (type: string) => {
    setFormData({ ...formData, propertyType: type });
    setStep(2);
  };

  const handleNext = () => {
    if (step === 2 && !formData.companyName.trim()) {
      setStep(3);
    } else if (step === 3 && !formData.name.trim()) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, informe seu nome.",
        variant: "destructive",
      });
      return;
    } else if (step === 4 && !formData.email.trim()) {
      toast({
        title: "Campo obrigatório", 
        description: "Por favor, informe seu e-mail.",
        variant: "destructive",
      });
      return;
    } else if (step === 5 && !formData.phone.trim()) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, informe seu telefone.",
        variant: "destructive",
      });
      return;
    }
    
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    if (!formData.phone.trim()) {
      toast({
        title: "Campo obrigatório",
        description: "Por favor, informe seu telefone.",
        variant: "destructive",
      });
      return;
    }
    
    onSubmit(formData);
    setStep(1);
    setFormData({
      propertyType: "",
      companyName: "",
      name: "",
      email: "",
      phone: ""
    });
    onClose();
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center mb-6">
              Para qual tipo de imóvel você precisa de segurança?
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {propertyTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => handlePropertyTypeSelect(type.value)}
                  className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:bg-accent hover:border-primary transition-all duration-200"
                >
                  <type.icon className="w-6 h-6 text-primary" />
                  <span className="text-lg font-medium">{type.label}</span>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center mb-6">
              Qual o nome do seu {formData.propertyType === "condominio" ? "condomínio" : formData.propertyType === "empresa" ? "empresa" : "residência"}? (Opcional)
            </h3>
            <Input
              placeholder="Digite o nome..."
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="text-lg p-4"
            />
            <div className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
              <Button variant="cta" onClick={handleNext}>
                Próximo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center mb-6">
              Por gentileza, qual o seu nome?
            </h3>
            <Input
              placeholder="Digite seu nome completo..."
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="text-lg p-4"
              required
            />
            <div className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
              <Button variant="cta" onClick={handleNext}>
                Próximo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center mb-6">
              Qual o seu melhor e-mail?
            </h3>
            <Input
              type="email"
              placeholder="exemplo@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="text-lg p-4"
              required
            />
            <div className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
              <Button variant="cta" onClick={handleNext}>
                Próximo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-center mb-6">
              Para concluir, qual o seu telefone com DDD?
            </h3>
            <Input
              type="tel"
              placeholder="(21) 99999-9999"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="text-lg p-4"
              required
            />
            <div className="flex justify-between">
              <Button variant="outline" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
              <Button variant="cta" onClick={handleSubmit} className="text-lg px-8">
                Enviar
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary text-center">
            Solicitar Orçamento
          </DialogTitle>
        </DialogHeader>
        
        {/* Progress indicator */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i <= step ? "bg-cta" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        {renderStep()}
      </DialogContent>
    </Dialog>
  );
};