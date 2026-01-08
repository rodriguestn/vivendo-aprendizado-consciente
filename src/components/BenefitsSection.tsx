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
    <section ref={ref} className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
            O que muda quando a empresa{" "}
            <span className="text-accent">aprende de verdade</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 hover:bg-primary-foreground/15 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <p className="text-primary-foreground font-medium">
                {benefit.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
