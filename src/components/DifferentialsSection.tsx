import { motion } from "framer-motion";
import { ShieldCheck, GraduationCap, Globe, Brain, UserCheck, Sparkles } from "lucide-react";
import { WaveDivider } from "./DecorativeShapes";

const items = [
  { icon: ShieldCheck, title: "Ambiente seguro e acolhedor", desc: "Infraestrutura pensada para a segurança e o conforto da criança.", emoji: "🛡️" },
  { icon: GraduationCap, title: "Equipe qualificada", desc: "Profissionais com formação especializada em educação infantil.", emoji: "🎓" },
  { icon: Globe, title: "Ensino bilíngue desde cedo", desc: "Contato com o segundo idioma de forma natural e lúdica.", emoji: "🌍" },
  { icon: Brain, title: "Desenvolvimento emocional e cognitivo", desc: "Estímulos que respeitam cada fase do crescimento.", emoji: "🧠" },
  { icon: UserCheck, title: "Atenção individualizada", desc: "Acompanhamento próximo para cada criança se sentir especial.", emoji: "💛" },
  { icon: Sparkles, title: "Atividades lúdicas e criativas", desc: "Arte, música e brincadeiras que estimulam a imaginação.", emoji: "🎨" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 200 } },
};

export const DifferentialsSection = () => (
  <>
    <section id="diferenciais" className="section-padding bg-soft-pink relative overflow-hidden">
      <div className="absolute top-10 left-10 w-40 h-40 polka-dots opacity-30" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <motion.span
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring" }}
            className="inline-block text-5xl mb-4"
          >
            ❤️
          </motion.span>
          <h2 className="font-heading text-3xl font-extrabold text-foreground md:text-4xl">
            Por que escolher a Espaço Educare?
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={card}
              whileHover={{ y: -8, scale: 1.02 }}
              className="flex gap-4 rounded-3xl bg-card p-6 shadow-md border-2 border-border/50 hover:border-secondary/50 transition-colors cursor-default"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-secondary/20">
                <span className="text-2xl">{item.emoji}</span>
              </div>
              <div>
                <h3 className="mb-1 font-heading text-lg font-bold text-foreground">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    <WaveDivider color="hsl(var(--primary))" />
  </>
);
