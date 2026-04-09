import { motion } from "framer-motion";
import { MessageCircle, MapPin, Phone } from "lucide-react";
import { whatsappUrl } from "./WhatsAppButton";

export const ContactSection = () => (
  <section id="contato" className="section-padding bg-primary relative overflow-hidden">
    <div className="absolute inset-0 polka-dots-white opacity-20" />

    <div className="container mx-auto max-w-3xl text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring" }}
          className="inline-block text-5xl mb-4"
        >
          💬
        </motion.span>
        <h2 className="mb-4 font-heading text-3xl font-extrabold text-primary-foreground md:text-4xl">
          Fale com a nossa equipe
        </h2>
        <p className="mx-auto mb-8 max-w-md font-body text-lg text-primary-foreground/80">
          Fale com a nossa equipe agora mesmo e agende uma visita. Tire todas as
          suas dúvidas pelo WhatsApp.
        </p>

        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 rounded-full bg-secondary px-10 py-5 font-heading text-xl font-bold text-secondary-foreground shadow-xl animate-pulse-scale"
        >
          <MessageCircle className="h-7 w-7" fill="currentColor" />
          Conversar pelo WhatsApp
        </motion.a>

        <div className="mt-12 flex flex-col items-center gap-4 text-primary-foreground/70 sm:flex-row sm:justify-center sm:gap-8">
          <span className="inline-flex items-center gap-2 font-body text-sm">
            <MapPin className="h-4 w-4 text-secondary" /> São Paulo, SP
          </span>
          <span className="inline-flex items-center gap-2 font-body text-sm">
            <Phone className="h-4 w-4 text-secondary" /> (11) 9 9999-9999
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);
