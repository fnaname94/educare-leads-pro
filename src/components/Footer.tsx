import logo from "@/assets/logo.png";
import { MapPin, Phone } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-primary border-t border-primary-foreground/10 pt-12 pb-6">
            <div className="container mx-auto px-4 flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

                    {/* Coluna 1: Info */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <img src={logo} alt="Espaço Educare" className="h-12 mb-2" />
                        <div className="font-body text-primary-foreground/80 flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-secondary" />
                            <span>Rua Tomé de Souza, 68 - Lapa</span>
                        </div>
                        <div className="font-body text-primary-foreground/80 flex items-center gap-2">
                            <Phone className="h-5 w-5 text-secondary" />
                            <span>(11) 3261-2124</span>
                        </div>
                    </div>

                    {/* Coluna 2: Redes Sociais apenas com Texto */}
                    <div className="flex flex-col items-center gap-4">
                        <h3 className="font-heading text-xl font-bold text-primary-foreground">Redes Sociais</h3>
                        <div className="flex flex-col gap-3 items-center">
                            <a
                                href="https://www.facebook.com/escolaespacoeducare"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary hover:text-white font-bold text-lg transition-colors"
                            >
                                Facebook
                            </a>
                            <a
                                href="https://www.instagram.com/espacoeducare.68/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-secondary hover:text-white font-bold text-lg transition-colors"
                            >
                                Instagram
                            </a>
                        </div>
                    </div>

                    {/* Coluna 3: Google Maps Real */}
                    <div className="flex flex-col items-center md:items-end w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1026462744884!2d-46.7058695!3d-23.528807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8634839807b%3A0xc3995817a597a7e!2sR.%20Tom%C3%A9%20de%20Souza%2C%2068%20-%20Lapa%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005079-000!5e0!3m2!1spt-BR!2sbr!4v1712780000000!5m2!1spt-BR!2sbr"
                            className="w-full h-48 rounded-xl border-4 border-secondary/20"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>

                <div className="pt-6 border-t border-primary-foreground/10 text-center">
                    <p className="text-xs text-primary-foreground/40">
                        © {new Date().getFullYear()} Espaço Educare - Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};