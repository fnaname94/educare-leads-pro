import { motion } from "framer-motion";
import { whatsappUrl } from "./WhatsAppButton";
import heroImg from "@/assets/hero-illustration.jpg";
import { FloatingCircle, WaveDivider } from "./DecorativeShapes";

export const HeroSection = () => (
  <>
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-primary pt-20"
    >
      {/* Decorative shapes */}
      <FloatingCircle size={200} color="50 100% 50%" top="-60px" left="-60px" delay={0.3} className="animate-float-slow opacity-70" />
      <FloatingCircle size={100} color="50 100% 50% / 0.3" top="20%" right="5%" delay={0.5} className="animate-float" />
      <FloatingCircle size={60} color="0 0% 100% / 0.1" bottom="30%" left="10%" delay={0.7} className="animate-bounce-gentle" />
      <FloatingCircle size={140} color="0 0% 100% / 0.08" bottom="-40px" right="-40px" delay={0.4} className="animate-spin-slow" />

      {/* Polka dots pattern */}
      <div className="absolute top-10 right-0 w-48 h-48 polka-dots-white opacity-40" />
      <div className="absolute bottom-20 left-0 w-36 h-36 polka-dots-white opacity-30" />

      <div className="container mx-auto grid items-center gap-10 px-4 md:grid-cols-2 md:gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-4 py-2 font-heading text-sm font-bold text-secondary-foreground"
          >
            ⭐ Matrículas Abertas 2026
          </motion.div>
          <h1 className="font-heading text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Educação Infantil com{" "}
            <span className="text-secondary">acolhimento, segurança</span> e
            desenvolvimento bilíngue desde os primeiros anos.
          </h1>
          <p className="max-w-lg font-body text-lg text-primary-foreground/80 md:text-xl">
            Aqui, cada criança é incentivada a aprender com alegria, carinho e
            estímulos que respeitam seu tempo e potencial.
          </p>
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-8 py-4 font-heading text-lg font-bold text-secondary-foreground shadow-lg"
          >
            🎒 Fale com a nossa equipe
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
          className="flex justify-center relative"
        >
          {/* Decorative border around image */}
          <div className="absolute -inset-3 rounded-[2rem] border-4 border-dashed border-secondary/40 animate-spin-slow" style={{ animationDuration: "30s" }} />
          <img
            src={heroImg}
            alt="Crianças aprendendo com alegria na Espaço Educare"
            className="w-full max-w-lg rounded-3xl shadow-2xl relative z-10 border-4 border-primary-foreground/20"
            loading="eager"
          />
          {/* Small floating emoji */}
          <motion.span
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-4 -right-2 text-4xl z-20"
          >
            🌟
          </motion.span>
          <motion.span
            animate={{ y: [5, -5, 5] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="absolute -bottom-4 -left-2 text-3xl z-20"
          >
            📚
          </motion.span>
        </motion.div>
      </div>
    </section>
    <WaveDivider color="hsl(var(--background))" />
  </>
);
