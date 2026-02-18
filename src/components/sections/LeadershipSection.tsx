import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import calinkaImage from "@/assets/calinka-portrait.png";

export const LeadershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="quem-lidera" ref={ref} className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Toda empresa que aprende bem tem um{" "}
            <span className="text-primary">professor</span> no centro
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-strong">
              <img
                src={calinkaImage}
                alt="Calinka Rodor - Especialista em Educação Corporativa"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-serif font-bold text-foreground mb-2">
              Calinka Rodor
            </h3>
            <p className="text-accent font-medium mb-6">
              Fundadora da Blau Consultoria
            </p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Professora por formação e ser humana por missão, Calinka Rodor
                atua há mais de 15 anos na interseção entre educação,
                comportamento humano e estratégia organizacional — com olhar
                educacional, metodológico e humano.
              </p>
              <p>
                Ter um professor na estrutura corporativa faz diferença: porque
                ensinar é uma ciência, aprender é um processo e transformar
                conhecimento em cultura é técnica.
              </p>
              <p className="text-foreground font-medium">
                Na Blau, unimos a profundidade de quem entende de educação,
                a visão estratégica de negócios, tendências de inovação mapeadas
                e a capacidade de transformar pessoas em ativo estratégico.
              </p>
            </div>

            <Link
              to="/sobre"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
            >
              Sobre Nós
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
