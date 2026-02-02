import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ClipboardCheck,
  TrendingUp,
  GraduationCap,
  Search,
} from "lucide-react";

const diagnosticCards = [
  {
    icon: ClipboardCheck,
    title: "Diagnóstico Gerencial e Operacional",
    features: [
      "Estrutura de liderança e tomada de decisão",
      "Processos, fluxos e responsabilidades",
      "Grau de autonomia e eficiência operacional",
    ],
  },
  {
    icon: TrendingUp,
    title: "Diagnóstico Comercial",
    features: [
      "Estratégia e comportamento comercial",
      "Comunicação com o mercado",
      "Performance, processos e mentalidade de vendas",
    ],
  },
  {
    icon: GraduationCap,
    title: "Treinamentos Estratégicos",
    features: [
      "Treinamentos personalizados",
      "Baseados nos diagnósticos realizados",
      "Foco em aplicação prática e mudança de comportamento",
    ],
  },
];

export const DiagnosisSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="diagnostico" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <Search className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Porta de Entrada
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Diagnóstico Empresarial Blau
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Para empresas que ainda não estão prontas para estruturar um Núcleo
            de Educação, a Blau oferece diagnósticos estratégicos e intervenções
            pontuais — que fazem parte da mesma metodologia e revelam o nível de
            maturidade organizacional.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {diagnosticCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-medium transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                {card.title}
              </h3>
              <ul className="space-y-3">
                {card.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Connection Text and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-xl font-serif italic text-primary mb-8">
            O diagnóstico não é o fim. É o início de uma transformação mais
            profunda.
          </p>
          <Button variant="accent" size="lg" onClick={scrollToContact}>
            Conhecer o Diagnóstico Empresarial
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
