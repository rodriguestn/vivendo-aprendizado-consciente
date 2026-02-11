import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import logoBlau from "@/assets/logo-blau.png";

const navItems = [
  { label: "Educação Corporativa", href: "#educacao-corporativa" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Sobre", href: "/sobre" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "#contato" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled
            ? "bg-background/95 backdrop-blur-2xl shadow-[0_1px_0_0_hsl(var(--border))]"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? "h-20" : "h-28"
          }`}>
            {/* Logo */}
            <motion.button
              onClick={() => {
                if (location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  navigate('/');
                }
              }}
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <img
                src={logoBlau}
                alt="Blau Consultoria"
                className={`w-auto transition-all duration-500 ${
                  isScrolled ? "h-12 lg:h-14" : "h-16 lg:h-20"
                }`}
                style={{
                  filter: !isScrolled
                    ? "drop-shadow(0 0 8px rgba(255,255,255,0.9)) drop-shadow(0 0 4px rgba(255,255,255,0.8)) brightness(1.2) contrast(1.1)"
                    : "none"
                }}
              />
            </motion.button>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center gap-3">
              <div className="flex items-center gap-1 bg-muted/30 backdrop-blur-sm rounded-full px-2 py-1.5">
                {navItems.map((item) => (
                  <motion.button
                    key={item.href}
                    onClick={() => handleNavigation(item.href)}
                    onMouseEnter={() => setHoveredItem(item.href)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>

                    {hoveredItem === item.href && (
                      <motion.div
                        layoutId="nav-hover"
                        className={`absolute inset-0 rounded-full shadow-sm ${
                          isScrolled ? "bg-background" : "bg-white/20"
                        }`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        style={{ zIndex: -1 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Blau Mapa - Destaque Especial */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => handleNavigation("/diagnostico")}
                  className={`group relative overflow-hidden font-semibold text-sm rounded-full transition-all duration-300 ${
                    isScrolled
                      ? "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 px-6 py-2.5"
                      : "bg-gradient-to-r from-yellow-400 to-amber-400 hover:from-yellow-300 hover:to-amber-300 text-slate-900 shadow-lg shadow-yellow-400/30 hover:shadow-xl hover:shadow-yellow-400/40 px-6 py-2.5"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Blau Mapa
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </Button>
              </motion.div>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => handleNavigation("#contato")}
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-full font-medium text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  <span>Falar com a Blau</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="lg:hidden relative z-50 p-3 rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: isMobileMenuOpen ? 'transparent' : (isScrolled ? 'transparent' : 'rgba(255,255,255,0.1)')
              }}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 8 : 0,
                  }}
                  className={`w-full h-0.5 origin-left transition-all ${
                    isScrolled || isMobileMenuOpen ? "bg-foreground" : "bg-white"
                  }`}
                />
                <motion.span
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    x: isMobileMenuOpen ? -20 : 0,
                  }}
                  className={`w-full h-0.5 transition-all ${
                    isScrolled || isMobileMenuOpen ? "bg-foreground" : "bg-white"
                  }`}
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -8 : 0,
                  }}
                  className={`w-full h-0.5 origin-left transition-all ${
                    isScrolled || isMobileMenuOpen ? "bg-foreground" : "bg-white"
                  }`}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/98 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="relative h-full flex flex-col justify-center items-center px-8"
            >
              <div className="flex flex-col items-center gap-2 w-full max-w-sm">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => handleNavigation(item.href)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                    className="w-full text-center py-4 text-2xl font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </motion.button>
                ))}

                {/* Blau Mapa - Destaque Mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="w-full pt-4"
                >
                  <Button
                    onClick={() => handleNavigation("/diagnostico")}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-6 rounded-full font-bold text-lg shadow-xl shadow-emerald-500/20 relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                      Blau Mapa
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="w-full pt-4"
                >
                  <Button
                    onClick={() => handleNavigation("#contato")}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-full font-medium text-lg"
                  >
                    Falar com a Blau
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
