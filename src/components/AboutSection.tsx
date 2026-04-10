import { motion } from "framer-motion";
import { WaveDivider } from "./DecorativeShapes";
import imgAcolhimento from "@/assets/about-acolhimento.jpg";
import imgEquipe from "@/assets/about-equipe.jpg";
import imgLudico from "@/assets/about-ludico.jpg";

const values = [
  { img: imgAcolhimento, title: "Acolhimento", desc: "Ambiente seguro e carinhoso para cada criança." },
  { img: imgEquipe, title: "Equipe Dedicada", desc: "Profissionais qualificados e apaixonados pela educação." },
  { img: imgLudico, title: "Aprendizado Lúdico", desc: "Experiências que estimulam criatividade e autonomia." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring" as const, stiffness: 200 } },
};

export const AboutSection = () => (
  <>
    <section id="quem-somos" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-10 right-10 w-32 h-32 polka-dots opacity-50" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-5xl mb-4"
          >
            🏫
          </motion.span>
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

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="flex flex-col items-center gap-4 rounded-3xl bg-card overflow-hidden shadow-md border-2 border-border/50 hover:border-secondary/50 transition-colors cursor-default"
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={v.img}
                  alt={v.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="px-6 pb-6 text-center">
                <h3 className="font-heading text-xl font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 font-body text-muted-foreground">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    <WaveDivider color="hsl(var(--soft-yellow))" />
  </>
);
