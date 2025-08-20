import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppModal } from "./WhatsAppModal";
import { whatsappConfig } from "@/config/whatsapp";

export interface WhatsAppLead {
  name: string;
  phone: string;
  timestamp: string;
}

export const WhatsAppButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleLeadSubmit = async (lead: WhatsAppLead) => {
    // Enviar para webhook do Google Sheets se configurado
    if (whatsappConfig.webhookUrl) {
      try {
        await fetch(whatsappConfig.webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify({
            ...lead,
            source: "WhatsApp Button",
            url: window.location.href,
          }),
        });
      } catch (error) {
        console.error("Erro ao enviar lead para webhook:", error);
      }
    }

    // Redirecionar para WhatsApp
    const message = whatsappConfig.defaultMessage(lead.name, lead.phone);
    const whatsappUrl = `https://wa.me/${whatsappConfig.phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, "_blank");
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300"
        size="icon"
      >
        <MessageCircle className="h-6 w-6 text-white" />
        <span className="sr-only">Falar no WhatsApp</span>
      </Button>

      <WhatsAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleLeadSubmit}
      />
    </>
  );
};