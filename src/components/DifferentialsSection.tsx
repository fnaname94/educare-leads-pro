import { motion } from "framer-motion";
import { ShieldCheck, GraduationCap, Globe, Brain, UserCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Ambiente seguro e acolhedor", desc: "Infraestrutura pensada para a segurança e o conforto da criança." },
  { icon: GraduationCap, title: "Equipe qualificada", desc: "Profissionais com formação especializada em educação infantil." },
  { icon: Globe, title: "Ensino bilíngue desde cedo", desc: "Contato com o segundo idioma de forma natural e lúdica." },
  { icon: Brain, title: "Desenvolvimento emocional e cognitivo", desc: "Estímulos que respeitam cada fase do crescimento." },
  { icon: UserCheck, title: "Atenção individualizada", desc: "Acompanhamento próximo para cada criança se sentir especial." },
];

export const DifferentialsSection = () => (
  <section id="diferenciais" className="section-padding bg-soft-pink">
    <div className="container mx-auto max-w-5xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center font-heading text-3xl font-extrabold text-foreground md:text-4xl"
      >
        Por que escolher a Espaço Educare? ❤️
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-4 rounded-2xl bg-card p-6 shadow-sm"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-warm-light">
              <item.icon className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <h3 className="mb-1 font-heading text-lg font-bold text-foreground">{item.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
