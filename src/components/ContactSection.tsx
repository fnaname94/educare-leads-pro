import { motion } from "framer-motion";
import { MessageCircle, MapPin, Phone } from "lucide-react";
import { whatsappUrl } from "./WhatsAppButton";

export const ContactSection = () => (
  <section id="contato" className="section-padding bg-background">
    <div className="container mx-auto max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="mb-4 font-heading text-3xl font-extrabold text-foreground md:text-4xl">
          Fale com a nossa equipe 💬
        </h2>
        <p className="mx-auto mb-8 max-w-md font-body text-lg text-muted-foreground">
          Fale com a nossa equipe agora mesmo e agende uma visita. Tire todas as
          suas dúvidas pelo WhatsApp.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-[hsl(142,70%,45%)] px-10 py-5 font-heading text-xl font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
        >
          <MessageCircle className="h-7 w-7" fill="currentColor" />
          Conversar pelo WhatsApp
        </a>

        <div className="mt-12 flex flex-col items-center gap-4 text-muted-foreground sm:flex-row sm:justify-center sm:gap-8">
          <span className="inline-flex items-center gap-2 font-body text-sm">
            <MapPin className="h-4 w-4 text-primary" /> São Paulo, SP
          </span>
          <span className="inline-flex items-center gap-2 font-body text-sm">
            <Phone className="h-4 w-4 text-primary" /> (11) 9 9999-9999
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);
