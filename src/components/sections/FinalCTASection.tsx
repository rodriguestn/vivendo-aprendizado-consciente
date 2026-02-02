import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, GraduationCap, Users, TrendingUp, Sparkles, Check, Zap } from "lucide-react";

export const FinalCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const guarantees = [
    "Diagnóstico completo em 90-180 dias",
    "Formação de multiplicadores internos",
    "Programa estruturado em 2 anos",
    "ROI mensurável e comprovado",
    "Acompanhamento contínuo da Blau"
  ];

  const stats = [
    { icon: Users, value: "100+", label: "Líderes Formados" },
    { icon: TrendingUp, value: "+85%", label: "Aumento em Autonomia" },
    { icon: GraduationCap, value: "2 Anos", label: "de Transformação" }
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gradient-to-br from-primary via-primary-dark to-primary-light relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="final-cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#final-cta-grid)" />
        </svg>
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-40 w-96 h-96 bg-primary-light/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-white">
                Transforme sua empresa em um ecossistema de aprendizagem
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Está pronto para multiplicar
              <br />
              os <span className="text-accent">resultados</span> da sua empresa?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light max-w-3xl mx-auto">
              Implemente um <strong className="font-semibold">Núcleo de Educação Interna</strong> e transforme
              colaboradores em protagonistas do conhecimento
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-sm text-white/80">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-10">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">O que você recebe</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {guarantees.map((guarantee, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-3 text-white"
                  >
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white/90 font-medium">{guarantee}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.button
              className="group px-10 py-5 bg-accent hover:bg-accent-hover text-white font-bold text-lg rounded-full shadow-2xl flex items-center justify-center gap-3 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              <GraduationCap className="w-6 h-6" />
              Iniciar Programa de Educação Corporativa
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </motion.button>

            <motion.button
              className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-bold text-lg rounded-full transition-all duration-300"
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Fazer Diagnóstico Gratuito
            </motion.button>
          </motion.div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="text-center mt-8"
          >
            <p className="text-white/70 text-sm">
              Sem compromisso • Consultoria estratégica gratuita • Resultados mensuráveis
            </p>
          </motion.div>

          {/* Testimonial Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-16 text-center max-w-3xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <blockquote className="text-xl md:text-2xl font-serif italic text-white/90 leading-relaxed mb-4">
                "A Blau não entregou apenas consultoria, entregou transformação. Nossa equipe
                passou de executora para pensadora estratégica."
              </blockquote>
              <div className="text-white/70">
                <p className="font-semibold text-white">Diretor de RH</p>
                <p className="text-sm">Empresa de Tecnologia</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
