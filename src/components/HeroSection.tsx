import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-collaboration.jpg";

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Equipe em ambiente colaborativo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-32 pt-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6">
              Educação Corporativa que transforma aprendizagem em{" "}
              <span className="text-accent">autonomia</span> e resultado real
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed"
          >
            A Blau cria Núcleos de Educação Interna a partir de diagnósticos
            profundos da realidade da empresa, formando pessoas que aprendem,
            ensinam e resolvem problemas com consciência, estratégia e
            colaboração.
          </motion.p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-6 mb-10"
          >
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <Calendar className="w-5 h-5 text-accent" />
              <span className="font-medium">Programa estruturado em 2 anos</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <User className="w-5 h-5 text-accent" />
              <span className="font-medium">Liderado por Calinka Rodor</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              variant="hero"
              onClick={() => scrollToSection("#educacao-corporativa")}
            >
              Conhecer a Educação Corporativa Blau
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="heroOutline"
              onClick={() => scrollToSection("#diagnostico")}
            >
              Ver Diagnóstico Empresarial
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
