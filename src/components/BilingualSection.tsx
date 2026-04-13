import { motion } from "framer-motion";
import { WaveDivider } from "./DecorativeShapes";
import bilingualImg from "@/assets/bilingual-class.jpg";

const benefits = [
  { emoji: "🌍", label: "Imersão natural no idioma" },
  { emoji: "🎵", label: "Músicas e histórias em inglês" },
  { emoji: "🎮", label: "Brincadeiras bilíngues" },
  { emoji: "🗣️", label: "Interação constante" },
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
            <p className="mb-4 font-body text-muted-foreground">
              O aprendizado acontece de maneira leve, através de atividades
              lúdicas, músicas, brincadeiras e interação constante.
            </p>
            <p className="mb-6 font-body text-foreground bg-primary/5 p-4 rounded-xl border border-primary/10">
              <span className="text-secondary font-bold">Parceria de sucesso com a escola de idiomas CNA!</span><br />
              O CNA vai até a escola com toda metodologia e técnicas para os alunos.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  className="flex items-center gap-2 rounded-2xl bg-primary/10 px-4 py-3"
                >
                  <span className="text-xl">{b.emoji}</span>
                  <span className="font-heading text-sm font-bold text-foreground">{b.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150 }}
            className="relative"
          >
            <div className="absolute -inset-2 rounded-3xl border-4 border-dashed border-secondary/30 animate-spin-slow" style={{ animationDuration: "25s" }} />
            <img
              src={bilingualImg}
              alt="Crianças em aula bilíngue na Espaço Educare"
              className="w-full rounded-3xl shadow-2xl border-4 border-primary/20 relative z-10"
              loading="lazy"
            />
            <motion.span
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-4 -right-2 text-4xl z-20"
            >
              🇺🇸
            </motion.span>
            <motion.span
              animate={{ y: [3, -5, 3] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="absolute -bottom-4 -left-2 text-3xl z-20"
            >
              🇧🇷
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
    <WaveDivider color="hsl(var(--soft-pink))" />
  </>
);
