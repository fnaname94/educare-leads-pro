import { useState } from "react";
import { Menu, X } from "lucide-react";
import { whatsappUrl } from "./WhatsAppButton";

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
    <header className="fixed top-0 z-40 w-full border-b border-border/50 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:h-20">
        <a href="#inicio" className="font-heading text-xl font-extrabold text-primary md:text-2xl">
          Espaço Educare
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2 font-heading text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            Agende uma Visita
          </a>
        </nav>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t bg-background px-6 py-6 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-body text-base font-medium text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-full bg-primary px-5 py-3 text-center font-heading font-bold text-primary-foreground"
          >
            Agende uma Visita
          </a>
        </nav>
      )}
    </header>
  );
};
