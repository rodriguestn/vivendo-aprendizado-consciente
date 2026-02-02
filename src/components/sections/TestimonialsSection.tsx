import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "A Blau transformou a forma como nossa equipe pensa e resolve problemas. Hoje, temos líderes que lideram de verdade.",
    author: "Diretor de RH",
    company: "Empresa de Tecnologia",
    focus: "Autonomia",
    rating: 5,
  },
  {
    quote:
      "Antes, éramos dependentes de treinamentos externos. Agora, desenvolvemos nosso próprio conhecimento internamente.",
    author: "CEO",
    company: "Indústria Nacional",
    focus: "Consciência",
    rating: 5,
  },
  {
    quote:
      "O diagnóstico da Blau revelou pontos cegos que impactavam diretamente nossos resultados. A mudança foi profunda.",
    author: "Diretor Comercial",
    company: "Distribuidora Regional",
    focus: "Resultados",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="depoimentos" ref={ref} className="py-24 lg:py-32 bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-primary">
              Depoimentos de Clientes
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Quando o aprendizado muda, o{" "}
            <span className="text-primary">resultado acompanha</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Histórias reais de transformação empresarial
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-card border border-border rounded-2xl p-8 relative group hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote icon with gradient background */}
              <div className="absolute -top-4 left-8">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="pt-6">
                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>

                {/* Focus badge */}
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                  {testimonial.focus}
                </span>

                {/* Quote */}
                <blockquote className="text-foreground leading-relaxed mb-6 text-base">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author info */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
