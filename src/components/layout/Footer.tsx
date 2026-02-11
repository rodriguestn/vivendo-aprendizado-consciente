import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logoBlau from "@/assets/logo-blau.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigation = (href: string) => {
    // Check if it's a route (starts with /) or anchor (starts with #)
    if (href.startsWith('/')) {
      // Navigate to a different page
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith('#')) {
      // If not on home page, navigate to home first then scroll
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const navigationLinks = [
    { label: "Educação Corporativa", href: "#educacao-corporativa" },
    { label: "Metodologia", href: "#metodologia" },
    { label: "Sobre", href: "/sobre" },
    { label: "Blau Mapa", href: "/diagnostico" },
    { label: "Blog", href: "/blog" },
  ];

  const contactLinks = [
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
  ];

  return (
    <footer className="relative bg-primary overflow-hidden">
      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top Section - CTA */}
        <div className="py-20 lg:py-32 border-b border-primary-foreground/10">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary-foreground/60 text-sm uppercase tracking-widest mb-4"
            >
              Pronto para transformar?
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-8"
            >
              Vamos criar algo 
              <br />
              extraordinário juntos.
            </motion.h2>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              href="#contato"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("#contato");
              }}
              className="group inline-flex items-center gap-3 text-primary-foreground text-lg font-medium hover:opacity-80 transition-opacity"
            >
              <span>Iniciar conversa</span>
              <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </span>
            </motion.a>
          </div>
        </div>

        {/* Middle Section - Links Grid */}
        <div className="py-16 lg:py-20 border-b border-primary-foreground/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-2 md:col-span-1"
            >
              <img
                src={logoBlau}
                alt="Blau Consultoria"
                className="h-10 w-auto mb-6"
                style={{
                  filter: "drop-shadow(0 0 8px rgba(255,255,255,0.9)) drop-shadow(0 0 4px rgba(255,255,255,0.8)) brightness(1.3) contrast(1.1)"
                }}
              />
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                Transformando empresas através de educação corporativa estratégica.
              </p>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-primary-foreground/40 text-xs uppercase tracking-widest mb-6">
                Navegação
              </h4>
              <ul className="space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* More Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-primary-foreground/40 text-xs uppercase tracking-widest mb-6">
                Mais
              </h4>
              <ul className="space-y-3">
                {contactLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-primary-foreground/40 text-xs uppercase tracking-widest mb-6">
                Social
              </h4>
              <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors duration-200"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary-foreground/40 text-sm"
          >
            © {currentYear} Blau Consultoria. Todos os direitos reservados.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-8"
          >
            <a
              href="#"
              className="text-primary-foreground/40 hover:text-primary-foreground/80 text-sm transition-colors"
            >
              Privacidade
            </a>
            <a
              href="#"
              className="text-primary-foreground/40 hover:text-primary-foreground/80 text-sm transition-colors"
            >
              Termos
            </a>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center text-primary-foreground transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
