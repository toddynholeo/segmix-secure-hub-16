import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Experience } from "@/components/Experience";
import { Clients } from "@/components/Clients";
import { Footer } from "@/components/Footer";
import { QuoteModal, QuoteFormData } from "@/components/QuoteModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCtaClick = () => {
    setIsModalOpen(true);
  };

  // Listen for custom event from Services component
  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener('openQuoteModal', handleOpenModal);
    return () => window.removeEventListener('openQuoteModal', handleOpenModal);
  }, []);

  const handleQuoteSubmit = (data: QuoteFormData) => {
    // Here you would typically send the data to your backend
    console.log("Quote form submitted:", data);
    
    toast({
      title: "Orçamento solicitado!",
      description: "Entraremos em contato em breve.",
    });
    
    // Redirect to thank you page
    navigate("/obrigado");
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Segmix - Teste</h1>
        <p className="text-lg text-gray-700">Site carregando...</p>
      </div>
      
      <WhatsAppButton />
    </div>
  );
};

export default Index;
