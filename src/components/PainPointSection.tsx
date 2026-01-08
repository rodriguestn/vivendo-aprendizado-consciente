import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, Users, Target, Brain } from "lucide-react";

const painPoints = [
  {
    icon: Brain,
    title: "Conhecimento fragmentado e pouco aplicado",
  },
  {
    icon: Target,
    title: "Lideranças sobrecarregadas por decisões operacionais",
  },
  {
    icon: Users,
    title: "Baixa autonomia e protagonismo das equipes",
  },
];

export const PainPointSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-secondary">
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
            Sua empresa até treina. Mas será que{" "}
            <span className="text-primary">aprende de verdade?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Muitas empresas investem em treinamentos pontuais, mas não
            desenvolvem a capacidade de aprender continuamente. O conhecimento
            não se transforma em prática, as decisões permanecem centralizadas e
            as equipes seguem dependentes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <point.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-lg font-medium text-foreground">
                {point.title}
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
            "Aprender não é absorver conteúdo. É transformar comportamento,
            pensamento e decisão."
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};
