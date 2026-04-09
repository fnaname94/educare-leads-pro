import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5511999999999"; // Substituir pelo número real
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, gostaria de receber mais informações sobre a escola, valores e disponibilidade de matrícula."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[hsl(142,70%,45%)] px-5 py-4 font-heading font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95 md:bottom-8 md:right-8"
    aria-label="Fale conosco pelo WhatsApp"
  >
    <MessageCircle className="h-6 w-6" fill="currentColor" />
    <span className="hidden sm:inline">Fale Conosco</span>
  </a>
);

export const whatsappUrl = WHATSAPP_URL;
