export interface Testimonial {
  id: number;
  type: "video" | "text";
  thumbnail?: string;
  videoUrl?: string;
  author: string;
  role: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    type: "video",
    videoUrl: "/videos/depoimento1.mp4",
    author: "",
    role: "Família Educare",
    text: "Depoimento real de quem vive nossa escola"
  },
  {
    id: 2,
    type: "video",
    videoUrl: "/videos/depoimento2.mp4",
    author: "",
    role: "Família Educare",
    text: "Depoimento real de quem vive nossa escola"
  },
  {
    id: 3,
    type: "video",
    videoUrl: "/videos/depoimento3.mp4",
    author: "",
    role: "Família Educare",
    text: "Depoimento real de quem vive nossa escola"
  },
  {
    id: 4,
    type: "video",
    videoUrl: "/videos/depoimento4.mp4",
    author: "",
    role: "Família Educare",
    text: "Depoimento real de quem vive nossa escola"
  },
  {
    id: 5,
    type: "video",
    videoUrl: "/videos/depoimento5.mp4",
    author: "",
    role: "Família Educare",
    text: "Depoimento real de quem vive nossa escola"
  },
  {
    id: 6,
    type: "video",
    videoUrl: "/videos/depoimento6.mp4",
    author: "",
    role: "Família Educare",
    text: "Depoimento real de quem vive nossa escola"
  }
];
