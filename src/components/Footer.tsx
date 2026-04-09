import logo from "@/assets/logo.png";

export const Footer = () => (
  <footer className="bg-primary border-t border-primary-foreground/10 py-8 text-center">
    <div className="container mx-auto flex flex-col items-center gap-4">
      <img src={logo} alt="Espaço Educare" className="h-10 opacity-80" />
      <p className="font-body text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} Espaço Educare — Todos os direitos reservados.
      </p>
    </div>
  </footer>
);
