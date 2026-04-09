import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { whatsappUrl } from "./WhatsAppButton";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Bilíngue", href: "#bilingue" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#contato" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-40 w-full border-b border-border/50 bg-primary/95 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="Espaço Educare" className="h-10 md:h-12" />
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm font-medium text-primary-foreground/80 transition-colors hover:text-secondary"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-secondary px-5 py-2 font-heading text-sm font-bold text-secondary-foreground transition-all hover:scale-105 hover:shadow-lg"
          >
            Agende uma Visita
          </a>
        </nav>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4 overflow-hidden border-t border-primary-foreground/10 bg-primary px-6 py-6 md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="font-body text-base font-medium text-primary-foreground"
              >
                {item.label}
              </motion.a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-secondary px-5 py-3 text-center font-heading font-bold text-secondary-foreground"
            >
              Agende uma Visita
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
