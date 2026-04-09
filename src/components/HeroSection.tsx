import { motion } from "framer-motion";
import { whatsappUrl } from "./WhatsAppButton";
import heroImg from "@/assets/hero-illustration.jpg";

export const HeroSection = () => (
  <section
    id="inicio"
    className="relative flex min-h-screen items-center overflow-hidden pt-20"
    style={{ background: "var(--hero-gradient)" }}
  >
    <div className="container mx-auto grid items-center gap-10 px-4 md:grid-cols-2 md:gap-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col gap-6"
      >
        <h1 className="font-heading text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl">
          Educação Infantil com{" "}
          <span className="text-gradient">acolhimento, segurança</span> e
          desenvolvimento bilíngue desde os primeiros anos.
        </h1>
        <p className="max-w-lg font-body text-lg text-muted-foreground md:text-xl">
          Aqui, cada criança é incentivada a aprender com alegria, carinho e
          estímulos que respeitam seu tempo e potencial.
        </p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-8 py-4 font-heading text-lg font-bold text-primary-foreground shadow-lg transition-transform hover:scale-105"
        >
          Fale com a nossa equipe
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex justify-center"
      >
        <img
          src={heroImg}
          alt="Crianças aprendendo com alegria na Espaço Educare"
          className="w-full max-w-lg rounded-3xl shadow-2xl"
          loading="eager"
        />
      </motion.div>
    </div>
  </section>
);
