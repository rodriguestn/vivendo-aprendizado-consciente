import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowUp } from "lucide-react";
import logoBlau from "@/assets/logo-blau.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    { label: "Educação Corporativa", href: "#educacao-corporativa" },
    { label: "Metodologia Blau", href: "#metodologia" },
    { label: "Diagnóstico Empresarial", href: "#diagnostico" },
    { label: "Quem Lidera", href: "#quem-lidera" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-primary to-primary/95 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-accent via-white/50 to-accent" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <img 
                src={logoBlau} 
                alt="Blau Consultoria" 
                className="h-16 w-auto brightness-0 invert mb-6"
              />
              <p className="text-primary-foreground/80 text-base leading-relaxed mb-6">
                Transformando empresas em ecossistemas de aprendizagem contínua através de educação corporativa estratégica.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 hover:bg-accent rounded-xl flex items-center justify-center text-primary-foreground hover:text-white transition-all duration-300"
                >
                  <Linkedin size={18} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 hover:bg-accent rounded-xl flex items-center justify-center text-primary-foreground hover:text-white transition-all duration-300"
                >
                  <Instagram size={18} />
                </motion.a>
              </div>
            </motion.div>

            {/* Navigation Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-primary-foreground font-semibold text-lg mb-6">
                Navegação
              </h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-primary-foreground/70 hover:text-white text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-primary-foreground font-semibold text-lg mb-6">
                Contato
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail size={14} className="text-accent" />
                  </div>
                  <div>
                    <span className="text-primary-foreground/70 text-sm block">contato@blau.com.br</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone size={14} className="text-accent" />
                  </div>
                  <div>
                    <span className="text-primary-foreground/70 text-sm block">(11) 99999-9999</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={14} className="text-accent" />
                  </div>
                  <div>
                    <span className="text-primary-foreground/70 text-sm block">São Paulo, Brasil</span>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Newsletter Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-primary-foreground font-semibold text-lg mb-6">
                Insights Blau
              </h4>
              <p className="text-primary-foreground/70 text-sm mb-4">
                Receba conteúdos exclusivos sobre educação corporativa e transformação organizacional.
              </p>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent focus:bg-white/15 transition-all text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 text-sm"
                >
                  Inscrever-se
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-primary-foreground/60 text-sm text-center md:text-left"
            >
              © {currentYear} Blau Consultoria. Todos os direitos reservados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-white text-sm transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-white text-sm transition-colors"
              >
                Termos de Uso
              </a>
            </motion.div>

            {/* Scroll to top button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-white/10 hover:bg-accent rounded-xl flex items-center justify-center text-primary-foreground hover:text-white transition-all duration-300"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
