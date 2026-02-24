import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp, MapPin, Mail, Phone } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logoBlau from "@/assets/logo-blau.png";
import { WHATSAPP_URL } from "@/constants/whatsapp";

/* ─── Social SVG icons ─── */
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const YouTubeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const navigationLinks = [
    { label: "Educação Corporativa", href: "#educacao-corporativa" },
    { label: "Metodologia", href: "#principios" },
    { label: "Sobre a Blau", href: "/sobre" },
    { label: "Blau Mapa", href: "/diagnostico" },
    { label: "Blog", href: "/blog" },
  ];

  const serviceLinks = [
    { label: "Diagnóstico Educacional", href: "/diagnostico" },
    { label: "Núcleo de Educação", href: "#educacao-corporativa" },
    { label: "Formação de Multiplicadores", href: "#principios" },
    { label: "Mentoria Contínua", href: "/contato" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/blau-consultoria-es", icon: LinkedInIcon },
    { label: "Instagram", href: "https://www.instagram.com/blau.consultoria/", icon: InstagramIcon },
    { label: "YouTube", href: "https://www.youtube.com/@Blau_ce", icon: YouTubeIcon },
    { label: "WhatsApp", href: WHATSAPP_URL, icon: WhatsAppIcon },
  ];

  return (
    <footer className="relative bg-[hsl(227,30%,10%)] overflow-hidden">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Background textures */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* ═══ Top CTA Band ═══ */}
        <div className="py-20 lg:py-28 border-b border-white/[0.06]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-primary/70 text-xs font-semibold uppercase tracking-[0.25em] mb-5"
              >
                Próximo passo
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-bold text-white leading-[1.1] tracking-tight"
              >
                Vamos construir o futuro
                <br />
                <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">
                  da sua empresa.
                </span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 lg:justify-end"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)]"
              >
                Agendar conversa
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <button
                onClick={() => handleNavigation("/contato")}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/15 hover:border-white/30 text-white/80 hover:text-white rounded-full font-semibold text-sm tracking-wide transition-all duration-300"
              >
                Ver opções de contato
              </button>
            </motion.div>
          </div>
        </div>

        {/* ═══ Main Grid ═══ */}
        <div className="py-16 lg:py-20 border-b border-white/[0.06]">
          <div className="grid grid-cols-2 md:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-2 md:col-span-4 lg:col-span-4"
            >
              <div className="relative inline-block mb-6">
                <div
                  className="absolute -inset-4 rounded-lg opacity-50 blur-xl pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at 50% 50%, rgba(36,82,255,0.2) 0%, transparent 70%)",
                  }}
                />
                <img
                  src={logoBlau}
                  alt="Blau Consultoria"
                  className="relative h-16 w-auto"
                  style={{
                    filter: "brightness(1.6) drop-shadow(0 0 10px rgba(36,82,255,0.3))"
                  }}
                />
              </div>
              <p className="text-white/45 text-sm leading-relaxed mb-2 max-w-xs font-serif italic">
                &ldquo;Só a educação pode mudar o futuro.&rdquo;
              </p>
              <p className="text-white/30 text-xs leading-relaxed mb-6 max-w-xs">
                Consultoria de educação corporativa que transforma empresas em
                ecossistemas vivos de aprendizagem.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2.5 text-white/40">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p className="text-xs leading-relaxed">
                    Vitória, ES — Grande Vitória
                    <br />
                    Projetos em todo o Brasil
                  </p>
                </div>
                <a
                  href="mailto:contato@blauconsultoria.com.br"
                  className="flex items-center gap-2.5 text-white/40 hover:text-white/70 transition-colors text-xs"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  contato@blauconsultoria.com.br
                </a>
                <a
                  href="tel:+5527996656233"
                  className="flex items-center gap-2.5 text-white/40 hover:text-white/70 transition-colors text-xs"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  (27) 99665-6233
                </a>
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-1 md:col-span-3 lg:col-span-3"
            >
              <h4 className="text-white/30 text-[11px] font-semibold uppercase tracking-[0.2em] mb-6">
                Navegação
              </h4>
              <ul className="space-y-3.5">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="text-white/50 hover:text-white text-[13px] transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="col-span-1 md:col-span-3 lg:col-span-3"
            >
              <h4 className="text-white/30 text-[11px] font-semibold uppercase tracking-[0.2em] mb-6">
                Serviços
              </h4>
              <ul className="space-y-3.5">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="text-white/50 hover:text-white text-[13px] transition-colors duration-200"
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
              transition={{ delay: 0.2 }}
              className="col-span-2 md:col-span-2 lg:col-span-2"
            >
              <h4 className="text-white/30 text-[11px] font-semibold uppercase tracking-[0.2em] mb-6">
                Redes sociais
              </h4>
              <div className="flex flex-wrap gap-3 mb-8">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="group w-10 h-10 rounded-full bg-white/[0.06] hover:bg-primary/30 border border-white/[0.08] hover:border-primary/40 flex items-center justify-center transition-all duration-300"
                    >
                      <Icon className="w-4 h-4 text-white/50 group-hover:text-white transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
              <div className="space-y-2 pt-4 border-t border-white/[0.06]">
                <p className="text-white/40 text-xs">+50 empresas transformadas</p>
                <p className="text-white/40 text-xs">Atuação em todo o Brasil</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ═══ Bottom Bar ═══ */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            &copy; {currentYear} Blau Consultoria. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNavigation("/contato")}
              className="text-white/25 hover:text-white/50 text-xs transition-colors"
            >
              Contato
            </button>
            <button
              onClick={() => handleNavigation("/blog")}
              className="text-white/25 hover:text-white/50 text-xs transition-colors"
            >
              Blog
            </button>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08] hover:border-white/[0.15] flex items-center justify-center text-white/40 hover:text-white/70 transition-all duration-300"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
