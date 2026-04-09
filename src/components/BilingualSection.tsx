import { motion } from "framer-motion";
import { Globe, Music, Gamepad2 } from "lucide-react";
import { WaveDivider } from "./DecorativeShapes";

const cards = [
  { icon: Globe, label: "Imersão natural", emoji: "🌍" },
  { icon: Music, label: "Músicas e histórias", emoji: "🎵" },
  { icon: Gamepad2, label: "Brincadeiras em inglês", emoji: "🎮" },
];

export const BilingualSection = () => (
  <>
    <section id="bilingue" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-48 h-48 polka-dots opacity-30" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block text-5xl mb-4"
            >
              🌎
            </motion.span>
            <h2 className="mb-4 font-heading text-3xl font-extrabold text-foreground md:text-4xl">
              Programa Bilíngue
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-3"
          >
            {cards.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex flex-col items-center gap-3 rounded-3xl bg-primary p-6 text-center shadow-lg border-2 border-secondary/30 cursor-default"
              >
                <span className="text-3xl">{item.emoji}</span>
                <item.icon className="h-8 w-8 text-secondary" />
                <span className="font-heading text-sm font-bold text-primary-foreground">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
    <WaveDivider color="hsl(var(--soft-pink))" />
  </>
);
