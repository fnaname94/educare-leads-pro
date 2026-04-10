import { motion } from "framer-motion";
import { MessageCircle, MapPin, Phone } from "lucide-react";
import { whatsappUrl } from "./WhatsAppButton";
import contactImg from "@/assets/contact-visit.jpg";

export const ContactSection = () => (
  <section id="contato" className="section-padding bg-primary relative overflow-hidden">
    <div className="absolute inset-0 polka-dots-white opacity-20" />

    <div className="container mx-auto max-w-5xl relative z-10">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring" }}
          className="hidden md:block relative"
        >
          <img
            src={contactImg}
            alt="Família sendo recebida na Espaço Educare"
            className="w-full rounded-3xl shadow-2xl border-4 border-secondary/20"
            loading="lazy"
          />
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-3 -right-3 text-4xl"
          >
            👋
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
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
          <p className="mb-8 max-w-md font-body text-lg text-primary-foreground/80">
            Fale com a nossa equipe agora mesmo e agende uma visita. Tire todas as
            suas dúvidas pelo WhatsApp.
          </p>

          <div className="flex flex-col items-center md:items-start gap-3">
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
            <span className="ml-4 font-body text-lg font-bold text-primary-foreground/90 flex items-center gap-2">
              📞 (11) 97656-5537
            </span>
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 text-primary-foreground/70 md:items-start sm:flex-row sm:gap-8">
            <span className="inline-flex items-center gap-2 font-body text-sm text-center sm:text-left">
              <MapPin className="h-8 w-8 sm:h-4 sm:w-4 text-secondary shrink-0" /> Rua Tomé de Souza, 68 - Lapa, São Paulo - SP
            </span>
            <span className="inline-flex items-center gap-2 font-body text-sm">
              <Phone className="h-4 w-4 text-secondary" /> (11) 97656-5537
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
