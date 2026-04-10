import logo from "@/assets/logo.png";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";

export const Footer = () => (
  <footer className="bg-primary border-t border-primary-foreground/10 pt-12 pb-6">
    <div className="container mx-auto px-4 flex flex-col gap-8">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Column 1: Info */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <img src={logo} alt="Espaço Educare" className="h-12 mb-2" />
          <p className="font-body text-primary-foreground/80 flex items-center gap-2 text-sm sm:text-base">
            <MapPin className="h-5 w-5 shrink-0 text-secondary" />
            <span className="text-center md:text-left">Rua Tomé de Souza, 68<br/>Lapa, São Paulo - SP</span>
          </p>
          <p className="font-body text-primary-foreground/80 flex items-center gap-2 text-sm sm:text-base">
            <Phone className="h-5 w-5 shrink-0 text-secondary" />
            (11) 97656-5537
          </p>
        </div>

        {/* Column 2: Social Media */}
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-heading text-xl font-bold text-primary-foreground">Redes Sociais</h3>
          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/escolaespacoeducare" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-secondary rounded-full hover:scale-110 transition-transform text-secondary-foreground shadow-lg"
              title="Acesse nosso Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a 
              href="https://www.instagram.com/espacoeducare.68/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 bg-secondary rounded-full hover:scale-110 transition-transform text-secondary-foreground shadow-lg"
              title="Acesse nosso Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Column 3: Map */}
        <div className="flex flex-col items-center md:items-end w-full">
          <iframe 
            src="https://www.google.com/maps?q=Rua+Tom%C3%A9+de+Souza,+68+-+Lapa,+S%C3%A3o+Paulo+-+SP&output=embed" 
            className="w-full h-48 md:w-[110%] rounded-xl border-4 border-secondary/20 shadow-xl" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="pt-6 border-t border-primary-foreground/10 text-center">
        <p className="font-body text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Espaço Educare — Todos os direitos reservados.
        </p>
      </div>

    </div>
  </footer>
);
