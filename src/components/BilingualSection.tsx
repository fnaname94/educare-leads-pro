import { motion } from "framer-motion";
import { Globe, Music, Gamepad2 } from "lucide-react";

export const BilingualSection = () => (
  <section id="bilingue" className="section-padding bg-background">
    <div className="container mx-auto max-w-5xl">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 font-heading text-3xl font-extrabold text-foreground md:text-4xl">
            Programa Bilíngue 🌎
          </h2>
          <p className="mb-4 font-body text-lg text-muted-foreground">
            Oferecemos um programa bilíngue que estimula o contato com um segundo
            idioma desde cedo, de forma natural e integrada à rotina da criança.
          </p>
          <p className="font-body text-muted-foreground">
            O aprendizado acontece de maneira leve, através de atividades
            lúdicas, músicas, brincadeiras e interação constante.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {[
            { icon: Globe, label: "Imersão natural" },
            { icon: Music, label: "Músicas e histórias" },
            { icon: Gamepad2, label: "Brincadeiras em inglês" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 rounded-2xl bg-soft-blue p-6 text-center"
            >
              <item.icon className="h-8 w-8 text-accent" />
              <span className="font-heading text-sm font-bold text-foreground">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);
