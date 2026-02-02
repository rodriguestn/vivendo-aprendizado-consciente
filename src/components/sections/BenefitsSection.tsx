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
} from "lucide-react";

const benefits = [
  {
    icon: Compass,
    title: "Lideranças que pensam estrategicamente",
  },
  {
    icon: Users,
    title: "Equipes com autonomia, responsabilidade e protagonismo",
  },
  {
    icon: Brain,
    title: "Decisões mais conscientes e menos reativas",
  },
  {
    icon: Repeat,
    title: "Redução de retrabalho, ruído e dependência",
  },
  {
    icon: Heart,
    title: "Retenção de talentos pelo sentido, não pelo controle",
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
            O que muda quando a empresa{" "}
            <span className="text-primary">aprende de verdade</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Educação corporativa que gera impacto real e duradouro
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
                <p className="text-foreground font-semibold text-lg leading-snug">
                  {benefit.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
