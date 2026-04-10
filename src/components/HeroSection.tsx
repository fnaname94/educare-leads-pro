import { motion } from "framer-motion";
import { whatsappUrl } from "./WhatsAppButton";
import heroImg from "@/assets/hero-illustration.jpg";
import { FloatingCircle, WaveDivider } from "./DecorativeShapes";

const floatingEmojis = [
  { emoji: "⭐", top: "5%", right: "2%", duration: 2.2, delay: 0, size: "text-3xl" },
  { emoji: "✏️", top: "12%", right: "8%", duration: 2.8, delay: 0.3, size: "text-3xl" },
  { emoji: "🌈", bottom: "12%", right: "5%", duration: 3.2, delay: 0.7, size: "text-3xl" },
  { emoji: "🎨", top: "3%", right: "35%", duration: 2.6, delay: 0.1, size: "text-2xl" },
  { emoji: "✨", bottom: "35%", right: "1%", duration: 2, delay: 0.4, size: "text-2xl" },
  { emoji: "🌟", top: "25%", right: "15%", duration: 2.3, delay: 0.8, size: "text-3xl" },
  { emoji: "🎒", bottom: "8%", right: "20%", duration: 3.1, delay: 0.3, size: "text-2xl" },
  { emoji: "💡", top: "8%", right: "45%", duration: 2.4, delay: 0.5, size: "text-2xl" },
  { emoji: "📖", bottom: "5%", right: "40%", duration: 3, delay: 0.6, size: "text-2xl" },
];

export const HeroSection = () => (
  <>
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-primary pt-20"
    >
      {/* Decorative circles */}
      <FloatingCircle size={200} color="50 100% 50%" top="-60px" left="-60px" delay={0.3} className="animate-float-slow opacity-70" />
      <FloatingCircle size={120} color="50 100% 50% / 0.25" top="15%" right="0%" delay={0.5} className="animate-float" />
      <FloatingCircle size={60} color="0 0% 100% / 0.1" bottom="30%" left="10%" delay={0.7} className="animate-bounce-gentle" />
      <FloatingCircle size={160} color="0 0% 100% / 0.06" bottom="-50px" right="-50px" delay={0.4} className="animate-spin-slow" />
      <FloatingCircle size={80} color="50 100% 50% / 0.15" top="50%" left="50%" delay={0.6} className="animate-float" />
      <FloatingCircle size={40} color="0 0% 100% / 0.08" top="70%" right="30%" delay={0.9} className="animate-bounce-gentle" />

      {/* Polka dots pattern */}
      <div className="absolute top-10 right-0 w-48 h-48 polka-dots-white opacity-40" />
      <div className="absolute bottom-20 left-0 w-36 h-36 polka-dots-white opacity-30" />
      <div className="absolute top-1/2 right-10 w-24 h-24 polka-dots-white opacity-20" />

      {/* Floating emojis */}
      {floatingEmojis.map((item, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.85, scale: 1, y: [0, -12, 0, 8, 0] }}
          transition={{
            opacity: { delay: item.delay + 0.5, duration: 0.5 },
            scale: { delay: item.delay + 0.5, duration: 0.4, type: "spring" },
            y: { delay: item.delay + 1, duration: item.duration, repeat: Infinity, ease: "easeInOut" },
          }}
          className={`absolute pointer-events-none ${item.size} z-[5]`}
          style={{
            top: (item as any).top,
            left: (item as any).left,
            right: (item as any).right,
            bottom: (item as any).bottom,
          } as React.CSSProperties}
        >
          {item.emoji}
        </motion.span>
      ))}

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
          <div className="flex flex-col gap-3">
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
            <span className="ml-4 font-body text-base font-bold text-primary-foreground/90 flex items-center gap-2">
              📞 (11) 97656-5537
            </span>
          </div>
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
            alt="Crianças em aula de educação artística na Espaço Educare"
            className="w-full max-w-lg rounded-3xl shadow-2xl relative z-10 border-4 border-primary-foreground/20"
            loading="eager"
          />
          {/* Floating emojis around image */}
          <motion.span
            animate={{ y: [-5, 5, -5], rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-6 -right-4 text-5xl z-20"
          >
            🌟
          </motion.span>
          <motion.span
            animate={{ y: [5, -5, 5], rotate: [0, -15, 15, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="absolute -bottom-6 -left-4 text-4xl z-20"
          >
            📚
          </motion.span>
          <motion.span
            animate={{ y: [-3, 6, -3], x: [-2, 4, -2] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute top-1/2 -right-8 text-3xl z-20"
          >
            ✏️
          </motion.span>
          <motion.span
            animate={{ scale: [1, 1.2, 1], rotate: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 2.2 }}
            className="absolute -top-2 left-0 text-3xl z-20"
          >
            🎨
          </motion.span>
        </motion.div>
      </div>
    </section>
    <WaveDivider color="hsl(var(--background))" />
  </>
);
