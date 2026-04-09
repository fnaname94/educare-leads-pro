import { motion } from "framer-motion";
import { Heart, Users, Sparkles } from "lucide-react";

const values = [
  { icon: Heart, title: "Acolhimento", desc: "Ambiente seguro e carinhoso para cada criança." },
  { icon: Users, title: "Equipe Dedicada", desc: "Profissionais qualificados e apaixonados pela educação." },
  { icon: Sparkles, title: "Aprendizado Lúdico", desc: "Experiências que estimulam criatividade e autonomia." },
];

export const AboutSection = () => (
  <section id="quem-somos" className="section-padding bg-background">
    <div className="container mx-auto max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="mb-4 font-heading text-3xl font-extrabold text-foreground md:text-4xl">
          Quem Somos
        </h2>
        <p className="mx-auto max-w-2xl font-body text-lg text-muted-foreground">
          A Escola Espaço Educare nasceu com o propósito de oferecer um ambiente
          seguro, acolhedor e estimulante para o desenvolvimento infantil.
        </p>
        <p className="mx-auto mt-4 max-w-2xl font-body text-muted-foreground">
          Nossa proposta pedagógica valoriza o aprendizado por meio de
          experiências lúdicas, promovendo autonomia, criatividade e
          desenvolvimento emocional. Contamos com uma equipe qualificada e
          dedicada, preparada para acompanhar cada etapa do crescimento das
          crianças.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex flex-col items-center gap-4 rounded-2xl bg-card p-8 text-center shadow-sm"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-soft-green">
              <v.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">{v.title}</h3>
            <p className="font-body text-muted-foreground">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
