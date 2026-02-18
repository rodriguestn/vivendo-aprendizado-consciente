import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Users,
  Target,
  Repeat,
  Heart,
  Compass,
  Lightbulb,
} from "lucide-react";

const benefits = [
  {
    icon: Compass,
    title: "O conhecimento circula",
    description: "As pessoas sabem o que se espera delas, compreendem como avançar e têm clareza sobre o impacto do seu trabalho.",
  },
  {
    icon: Users,
    title: "A autonomia cresce",
    description: "Equipes autogerenciáveis que tomam decisões com confiança, reduzindo a dependência e a sobrecarga dos líderes.",
  },
  {
    icon: Brain,
    title: "A liderança respira",
    description: "Gestores operam com parâmetros claros. O RH ganha musculatura técnica para tomar decisões consistentes.",
  },
  {
    icon: Repeat,
    title: "A inovação vira prática",
    description: "O crescimento deixa de ser esforço e vira consequência. Processos se renovam e a empresa evolui continuamente.",
  },
  {
    icon: Heart,
    title: "A cultura ganha força",
    description: "Profissionais de alto desempenho escolhem ambientes com lógica, transparência e coerência. A retenção cresce pelo sentido.",
  },
  {
    icon: Lightbulb,
    title: "Descoberta de novas receitas",
    description: "Novas fontes de receita surgem quando a equipe tem clareza e autonomia para enxergar oportunidades que antes passavam despercebidas.",
  },
];

export const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <Target className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Resultados Transformadores
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Quando o núcleo existe,{" "}
            <span className="text-primary">tudo muda</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A empresa começa a funcionar em outro ritmo. As pessoas aprendem com mais clareza,
            os times operam com mais fluidez e a inovação aparece onde antes havia ruído.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-card border border-border rounded-2xl p-8 h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-foreground font-semibold text-lg leading-snug mb-2">
                  {benefit.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
