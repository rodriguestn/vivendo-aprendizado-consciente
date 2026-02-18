import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Puzzle, Users2, RefreshCw } from "lucide-react";

const principles = [
  {
    icon: Sparkles,
    title: "Aprendizagem Ativa",
    description:
      "Aprender resolvendo problemas reais, não consumindo cursos avulsos que desaparecem na rotina",
  },
  {
    icon: Users2,
    title: "Protagonismo Humano",
    description:
      "Pessoas como ativo estratégico — ensinar é ciência, aprender é processo, transformar é técnica",
  },
  {
    icon: Puzzle,
    title: "Integração Estratégica",
    description:
      "Educação como software que dá precisão ao hardware da estratégia organizacional",
  },
  {
    icon: RefreshCw,
    title: "Ciclos de Evolução",
    description:
      "Estrutura, não improviso. Cultura, não coleção de treinamentos. Aprendizado contínuo, não evento isolado",
  },
];

export const MethodologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="metodologia" ref={ref} className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">
                Base Educacional
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Não levamos treinamento. Implantamos um{" "}
              <span className="text-primary">núcleo vivo de aprendizagem</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              As maiores escolas de negócio do mundo têm algo em comum: elas
              fazem do conhecimento um motor. A Blau leva esse motor para
              dentro da sua empresa — com metodologia educacional, visão
              estratégica e indicadores reais de impacto.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Porque educação corporativa é muito mais que programas de
              treinamento. É um sistema vivo que transforma a maneira como
              as pessoas e a organização aprendem, se adaptam e competem.
            </p>
          </motion.div>

          {/* Principles Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <principle.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
