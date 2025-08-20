// Configuração do WhatsApp
export const whatsappConfig = {
  // Substitua pelo seu número do WhatsApp (incluindo código do país, sem + nem espaços)
  phoneNumber: "5511999999999", // Exemplo: Brasil (55) + DDD (11) + número (999999999)
  
  // Webhook do Google Sheets (opcional)
  // Para configurar, siga as instruções no arquivo WEBHOOK-SETUP.md
  webhookUrl: process.env.VITE_GOOGLE_SHEETS_WEBHOOK || "",
  
  // Email para receber notificações dos leads (opcional)
  notificationEmail: "contato@segmix.com.br",
  
  // Mensagem padrão que será enviada no WhatsApp
  defaultMessage: (name: string, phone: string) => 
    `Olá! Meu nome é ${name} e gostaria de saber mais sobre os serviços da Segmix. Meu telefone é ${phone}.`,
};