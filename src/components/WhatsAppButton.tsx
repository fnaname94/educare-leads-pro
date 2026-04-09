import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "5511999999999"; // Substituir pelo número real
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá, gostaria de receber mais informações sobre a escola, valores e disponibilidade de matrícula."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export const WhatsAppButton = () => (
  <motion.a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: "spring", stiffness: 200 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[hsl(142,70%,45%)] px-5 py-4 font-heading font-bold text-white shadow-xl md:bottom-8 md:right-8"
    aria-label="Fale conosco pelo WhatsApp"
  >
    <MessageCircle className="h-6 w-6" fill="currentColor" />
    <span className="hidden sm:inline">Fale Conosco</span>
    {/* Pulse ring */}
    <span className="absolute inset-0 rounded-full bg-[hsl(142,70%,45%)]/30 animate-ping" />
  </motion.a>
);

export const whatsappUrl = WHATSAPP_URL;
