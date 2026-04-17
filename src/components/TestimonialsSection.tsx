import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { WaveDivider } from "./DecorativeShapes";
import { testimonials } from "@/data/testimonials";

export const TestimonialsSection = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);

  return (
    <section id="depoimentos" className="section-padding bg-soft-yellow relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full rotate-180">
        <WaveDivider color="hsl(var(--background))" />
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-primary uppercase bg-yellow/20 rounded-full">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            As melhores avaliações vem de <br className="hidden md:block" />
            <span className="text-primary italic">quem vive nossa escola!</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Histórias reais de famílias que confiam o futuro e o desenvolvimento 
            de seus filhos à Escola Espaço Educare.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((t) => (
              <CarouselItem key={t.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-none shadow-xl bg-card overflow-hidden h-full rounded-3xl">
                    <CardContent className="p-0">
                      {t.type === "video" ? (
                        <div className="relative aspect-[9/16] bg-black overflow-hidden group">
                          {playingId === t.id ? (
                            (t.videoUrl?.match(/\.(mp4|webm|ogg)$/) || t.videoUrl?.startsWith("/") && !t.videoUrl?.includes("youtube") && !t.videoUrl?.includes("vimeo")) ? (
                              <video
                                src={t.videoUrl}
                                autoPlay
                                controls
                                className="w-full h-full object-cover"
                                playsInline
                              />
                            ) : (
                              <iframe
                                src={`${t.videoUrl}${t.videoUrl.includes("?") ? "&" : "?"}autoplay=1`}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                            )
                          ) : (
                            <>
                              {t.thumbnail ? (
                                <img
                                  src={t.thumbnail}
                                  alt={t.author || "Depoimento"}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70"
                                />
                              ) : (
                                <video
                                  src={t.videoUrl}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70"
                                  preload="metadata"
                                />
                              )}
                              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                                <button
                                  onClick={() => setPlayingId(t.id)}
                                  className="w-16 h-16 bg-white/20 backdrop-blur-md border-2 border-white rounded-full flex items-center justify-center mb-4 transition-transform hover:scale-110 hover:bg-white/40 group/btn"
                                >
                                  <Play className="fill-white w-6 h-6 ml-1" />
                                </button>
                                <p className="font-medium text-lg leading-relaxed drop-shadow-lg">
                                  "{t.text}"
                                </p>
                              </div>
                            </>
                          )}
                          <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <h4 className="font-bold text-white">{t.author}</h4>
                            <p className="text-white/80 text-sm">{t.role}</p>
                          </div>
                        </div>
                      ) : (
                        <div className="p-8 flex flex-col justify-between h-full min-h-[400px]">
                          <div className="mb-6">
                            <span className="text-4xl text-primary/20 font-serif">“</span>
                            <p className="text-xl italic text-foreground leading-relaxed mt-[-10px]">
                              {t.text}
                            </p>
                          </div>
                          <div>
                            <div className="h-px bg-border w-12 mb-4" />
                            <h4 className="font-bold text-foreground">{t.author}</h4>
                            <p className="text-muted-foreground text-sm">{t.role}</p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>

      <div className="mt-20">
        <WaveDivider color="hsl(var(--background))" flip />
      </div>
    </section>
  );
};
