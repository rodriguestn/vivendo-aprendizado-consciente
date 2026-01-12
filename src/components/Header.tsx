import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoBlau from "@/assets/logo-blau.png";

const navItems = [
  { label: "Educação Corporativa", href: "#educacao-corporativa" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Diagnóstico", href: "#diagnostico" },
  { label: "Quem Lidera", href: "#quem-lidera" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
            <motion.a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
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
              />
            </motion.a>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center gap-1 bg-muted/30 backdrop-blur-sm rounded-full px-2 py-1.5">
                {navItems.map((item) => (
                  <motion.button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    onMouseEnter={() => setHoveredItem(item.href)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    <span className="relative z-10">{item.label}</span>
                    
                    {hoveredItem === item.href && (
                      <motion.div
                        layoutId="nav-hover"
                        className="absolute inset-0 bg-background rounded-full shadow-sm"
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
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={() => scrollToSection("#contato")}
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-full font-medium text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  <span>Falar com a Blau</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="lg:hidden relative z-10 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 8 : 0,
                  }}
                  className="w-full h-0.5 bg-foreground origin-left transition-all"
                />
                <motion.span
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    x: isMobileMenuOpen ? -20 : 0,
                  }}
                  className="w-full h-0.5 bg-foreground transition-all"
                />
                <motion.span
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -8 : 0,
                  }}
                  className="w-full h-0.5 bg-foreground origin-left transition-all"
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
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                    className="w-full text-center py-4 text-2xl font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="w-full pt-8"
                >
                  <Button
                    onClick={() => scrollToSection("#contato")}
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
