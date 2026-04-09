import { motion } from "framer-motion";
import { useState } from "react";

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
];

export const StructureSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="estrutura" className="section-padding bg-soft-green">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setSelected(i)}
              className="group overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </motion.button>
          ))}
        </div>

        {/* Lightbox */}
        {selected !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
            />
          </div>
        )}
      </div>
    </section>
  );
};
