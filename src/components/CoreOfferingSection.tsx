import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  CheckCircle2,
  Lightbulb,
  Users,
  Target,
  TrendingUp,
  BookOpen,
  HandHeart,
} from "lucide-react";

const year1Features = [
  "Diagnóstico educacional, cultural e estratégico",
  "Criação do setor de educação corporativa interna",
  "Formação de multiplicadores de conhecimento",
  "Metodologias ativas baseadas em desafios reais",
  "Aprendizagem aplicada ao contexto da empresa",
];

const year2Features = [
  "Mentoria contínua com especialistas",
  "Ajustes estratégicos e fortalecimento da cultura",
  "Mensuração de impacto educacional e organizacional",
  "Consolidação da autonomia interna de aprendizagem",
];

export const CoreOfferingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="educacao-corporativa"
      ref={ref}
      className="py-24 bg-background"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Metodologia Exclusiva
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            O Núcleo de Educação é o{" "}
            <span className="text-primary">coração</span> da metodologia Blau
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Inspirada em princípios de aprendizagem ativa e ambientes
            educacionais vivos, a Blau transforma empresas em ecossistemas de
            aprendizagem contínua. O Núcleo de Educação Corporativa não é um
            projeto paralelo — é uma estrutura estratégica que sustenta cultura,
            autonomia e inovação.
          </p>
        </motion.div>

        {/* Program Structure */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Year 1 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-hero rounded-2xl p-8 md:p-10 text-primary-foreground h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-sm font-medium text-accent">
                    Ano 1
                  </span>
                  <h3 className="text-2xl font-serif font-bold">
                    Implantação do Núcleo
                  </h3>
                </div>
              </div>
              <ul className="space-y-4">
                {year1Features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-primary-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Year 2 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 md:p-10 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-medium text-primary">
                    Ano 2
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-foreground">
                    Acompanhamento e Consolidação
                  </h3>
                </div>
              </div>
              <ul className="space-y-4">
                {year2Features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-secondary rounded-2xl p-8 md:p-12 text-center"
        >
          <HandHeart className="w-12 h-12 text-primary mx-auto mb-6" />
          <p className="text-xl md:text-2xl font-serif text-foreground max-w-3xl mx-auto">
            O objetivo não é ensinar mais. É criar uma empresa que{" "}
            <span className="text-primary font-semibold">aprende melhor</span> —
            de forma viva, consciente e sustentável.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
