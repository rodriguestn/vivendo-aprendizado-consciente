import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "A Blau transformou a forma como nossa equipe pensa e resolve problemas. Hoje, temos líderes que lideram de verdade.",
    author: "Diretor de RH",
    company: "Empresa de Tecnologia",
    focus: "Autonomia",
  },
  {
    quote:
      "Antes, éramos dependentes de treinamentos externos. Agora, desenvolvemos nosso próprio conhecimento internamente.",
    author: "CEO",
    company: "Indústria Nacional",
    focus: "Consciência",
  },
  {
    quote:
      "O diagnóstico da Blau revelou pontos cegos que impactavam diretamente nossos resultados. A mudança foi profunda.",
    author: "Diretor Comercial",
    company: "Distribuidora Regional",
    focus: "Resultados",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="depoimentos" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Quando o aprendizado muda, o{" "}
            <span className="text-primary">resultado acompanha</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card border border-border rounded-2xl p-8 relative group hover:shadow-medium transition-all duration-300"
            >
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Quote className="w-5 h-5 text-accent-foreground" />
                </div>
              </div>
              <div className="pt-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                  {testimonial.focus}
                </span>
                <blockquote className="text-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
