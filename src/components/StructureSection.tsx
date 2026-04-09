import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { WaveDivider } from "./DecorativeShapes";

import img1 from "@/assets/escola-1.jpg";
import img2 from "@/assets/escola-2.jpg";
import img3 from "@/assets/escola-3.jpg";
import img4 from "@/assets/escola-4.jpg";
import img5 from "@/assets/escola-5.jpg";
import img6 from "@/assets/escola-6.jpg";
import img7 from "@/assets/escola-7.jpg";
import img8 from "@/assets/escola-8.jpg";
import img9 from "@/assets/escola-9.jpg";
import img10 from "@/assets/escola-10.jpg";
import img11 from "@/assets/escola-11.jpg";
import img12 from "@/assets/escola-12.jpg";

const images = [
  { src: img1, alt: "Espaço de brincadeiras internas" },
  { src: img2, alt: "Playground ao ar livre" },
  { src: img3, alt: "Sala de atividades" },
  { src: img4, alt: "Brinquedoteca" },
  { src: img5, alt: "Piscina de bolinhas e teatro" },
  { src: img6, alt: "Área externa coberta" },
  { src: img7, alt: "Caixa de areia" },
  { src: img8, alt: "Biblioteca infantil" },
  { src: img9, alt: "Parquinho externo" },
  { src: img10, alt: "Sala de aula" },
  { src: img11, alt: "Brinquedoteca interativa" },
  { src: img12, alt: "Sala bilíngue CNA" },
];

export const StructureSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (selected === null) return;
    setSelected((selected + dir + images.length) % images.length);
  };

  return (
    <>
      <section id="estrutura" className="section-padding bg-soft-yellow relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full polka-dots opacity-30" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <motion.span
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring" }}
              className="inline-block text-5xl mb-4"
            >
              🏠
            </motion.span>
            <h2 className="mb-4 font-heading text-3xl font-extrabold text-foreground md:text-4xl">
              Nossa Estrutura
            </h2>
            <p className="mx-auto max-w-2xl font-body text-lg text-muted-foreground">
              Nossa escola possui salas amplas, arejadas e cuidadosamente
              preparadas para proporcionar conforto, segurança e bem-estar. Cada
              ambiente foi pensado para estimular o aprendizado de forma leve e
              divertida.
            </p>
            <p className="mx-auto mt-3 max-w-md font-body font-medium text-foreground">
              Conheça um pouquinho da nossa escola através das imagens abaixo 👇
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
            {images.map((img, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                onClick={() => setSelected(i)}
                className="group overflow-hidden rounded-2xl border-3 border-primary/20 shadow-md focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </motion.button>
            ))}
          </div>

          {/* Lightbox */}
          <AnimatePresence>
            {selected !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 p-4 backdrop-blur-md"
                onClick={() => setSelected(null)}
              >
                <button
                  onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-secondary p-2 text-secondary-foreground shadow-lg z-50"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <motion.img
                  key={selected}
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.7, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  src={images[selected].src}
                  alt={images[selected].alt}
                  className="max-h-[85vh] max-w-full rounded-3xl object-contain shadow-2xl border-4 border-secondary/30"
                  onClick={(e) => e.stopPropagation()}
                />
                <button
                  onClick={(e) => { e.stopPropagation(); navigate(1); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-secondary p-2 text-secondary-foreground shadow-lg z-50"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 rounded-full bg-secondary p-2 text-secondary-foreground shadow-lg z-50"
                >
                  <X className="h-6 w-6" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      <WaveDivider color="hsl(var(--background))" />
    </>
  );
};
