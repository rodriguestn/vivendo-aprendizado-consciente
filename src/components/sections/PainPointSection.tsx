import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, Users, Target, Brain, TrendingDown, Cog } from "lucide-react";

const painPoints = [
  {
    icon: Brain,
    title: "Ausência de estrutura educacional",
    description: "Cursos isolados que desaparecem na rotina. Falta um sistema onde o aprendizado tenha rumo, ciclo e propósito.",
  },
  {
    icon: Target,
    title: "Lideranças sobrecarregadas e decisões centralizadas",
    description: "Sem multiplicadores de conhecimento, gestores acumulam funções e decisões. A empresa trava antes de perceber onde está travando.",
  },
  {
    icon: TrendingDown,
    title: "Processos que envelhecem e talentos que vão embora",
    description: "Conhecimento crítico desaparece com cada desligamento. A operação fica pesada, lenta e frágil.",
  },
  {
    icon: Cog,
    title: "Empresas que sobrevivem em vez de crescer",
    description: "Cada gestor cria seu próprio jeito, cada time opera em seu ritmo. A consequência: uma empresa que não escala.",
  },
];

export const PainPointSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <AlertCircle className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              A dor invisível
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            No fundo, o que falta não são{" "}
            <span className="text-primary">cursos</span>. Falta{" "}
            <span className="text-primary">estrutura.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O problema é que a maioria das organizações ainda funciona como se
            bastasse contratar pessoas boas e esperar que tudo aconteça sozinho.
            Sem um núcleo de educação que funcione como coração da organização,
            mesmo os melhores talentos acabam presos numa rotina de sobrevivência.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card border border-border p-8 rounded-2xl hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <point.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-lg font-semibold text-foreground leading-snug mb-2">
                {point.title}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <blockquote className="text-xl md:text-2xl font-serif italic text-primary max-w-2xl mx-auto">
            "Não ter um núcleo de educação pode significar a não manutenção dos
            processos e dificuldades na implantação de novas formas de trabalho.
            A empresa trava — antes de perceber onde está travando."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};
