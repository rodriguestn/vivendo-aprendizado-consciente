import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoBlau from "@/assets/logo-blau.png";

const navItems = [
  { label: "Educação Corporativa", href: "#educacao-corporativa" },
  { label: "Metodologia Blau", href: "#metodologia" },
  { label: "Diagnóstico Empresarial", href: "#diagnostico" },
  { label: "Quem Lidera", href: "#quem-lidera" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      {/* Top accent bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-[60] origin-left"
      />
      
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-1 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-card/98 backdrop-blur-xl shadow-lg border-b border-border/50"
            : "bg-gradient-to-b from-card/80 to-transparent backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-20" : "h-24"
          }`}>
            {/* Logo with enhanced styling */}
            <motion.a 
              href="#" 
              className="flex items-center group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="relative">
                <img 
                  src={logoBlau} 
                  alt="Blau Consultoria" 
                  className={`w-auto transition-all duration-300 ${
                    isScrolled ? "h-14" : "h-16 lg:h-20"
                  }`}
                />
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.a>

            {/* Desktop Navigation - Enhanced */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  onMouseEnter={() => setActiveItem(item.href)}
                  onMouseLeave={() => setActiveItem(null)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 group"
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Hover background */}
                  <motion.div
                    className="absolute inset-0 bg-primary/5 rounded-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ 
                      opacity: activeItem === item.href ? 1 : 0,
                      scale: activeItem === item.href ? 1 : 0.9
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Bottom indicator */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: activeItem === item.href ? "60%" : 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </nav>

            {/* CTA Button - Enhanced */}
            <div className="hidden lg:block">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="navCta"
                  onClick={() => scrollToSection("#contato")}
                  className="group relative overflow-hidden px-6 py-3 font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Falar com a Blau
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Toggle - Enhanced */}
            <motion.button
              className="lg:hidden p-3 text-foreground rounded-xl bg-muted/50 hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu - Enhanced */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-card/98 backdrop-blur-xl border-t border-border/50 overflow-hidden"
            >
              <nav className="container mx-auto px-6 py-8 flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="text-left text-lg font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all py-4 px-4 rounded-xl flex items-center justify-between group"
                  >
                    {item.label}
                    <ChevronRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 pt-4 border-t border-border/50"
                >
                  <Button
                    variant="accent"
                    className="w-full py-4 text-lg font-semibold"
                    onClick={() => scrollToSection("#contato")}
                  >
                    Falar com a Blau
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};
