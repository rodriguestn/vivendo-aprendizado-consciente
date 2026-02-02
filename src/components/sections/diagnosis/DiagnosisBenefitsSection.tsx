import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, TrendingUp, Users, Zap, Shield, Award, Compass, Rocket } from "lucide-react";

export const DiagnosisBenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Target,
      title: "Clareza Estratégica",
      description: "Visão completa e objetiva dos pontos fortes e oportunidades de melhoria da sua empresa",
      color: "from-blue-500 to-indigo-600",
      stat: "100%",
      statLabel: "Transparência"
    },
    {
      icon: TrendingUp,
      title: "Crescimento Acelerado",
      description: "Roadmap prático com quick wins e iniciativas de longo prazo priorizadas por impacto",
      color: "from-green-500 to-emerald-600",
      stat: "3x",
      statLabel: "Mais Rápido"
    },
    {
      icon: Users,
      title: "Alinhamento de Equipe",
      description: "Toda a organização compartilha a mesma visão estratégica e direção de crescimento",
      color: "from-purple-500 to-pink-600",
      stat: "360°",
      statLabel: "Visão Integrada"
    },
    {
      icon: Zap,
      title: "Decisões Data-Driven",
      description: "Recomendações baseadas em dados reais, não em achismos ou intuições",
      color: "from-orange-500 to-red-600",
      stat: "ROI",
      statLabel: "Mensurável"
    },
    {
      icon: Shield,
      title: "Redução de Riscos",
      description: "Identifique e mitigue riscos antes que se tornem problemas críticos para o negócio",
      color: "from-slate-500 to-gray-600",
      stat: "Zero",
      statLabel: "Pontos Cegos"
    },
    {
      icon: Award,
      title: "Padrão Internacional",
      description: "Metodologia alinhada com as melhores práticas globais de consultoria empresarial",
      color: "from-cyan-500 to-teal-600",
      stat: "Global",
      statLabel: "Best Practices"
    }
  ];

  const outcomes = [
    {
      icon: Compass,
      title: "Documento Estratégico Completo",
      description: "O Mapa do Tesouro Blau com análises, insights e recomendações práticas"
    },
    {
      icon: Rocket,
      title: "Plano de Ação Implementável",
      description: "Passos claros e priorizados para transformar estratégia em resultados"
    },
    {
      icon: Users,
      title: "Capacitação da Liderança",
      description: "Workshops e mentorias que desenvolvem a capacidade decisória da equipe"
    }
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full mb-6">
            <Award className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-600">
              Benefícios e Resultados
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            O que você ganha com o{" "}
            <span className="text-emerald-600">Blau Mapa</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Muito mais do que um diagnóstico: uma transformação estratégica completa
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-card border-2 border-border rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:border-emerald-200 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Stat Badge */}
                  <div className="absolute top-6 right-6">
                    <div className={`bg-gradient-to-br ${benefit.color} px-3 py-1 rounded-full shadow-md`}>
                      <p className="text-xs font-bold text-white">{benefit.stat}</p>
                    </div>
                    <p className="text-xs text-muted-foreground text-center mt-1">{benefit.statLabel}</p>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* What You Get */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                  O que está incluso no Blau Mapa
                </h3>
                <p className="text-xl text-white/90 font-light">
                  Tudo que você precisa para transformar estratégia em ação
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {outcomes.map((outcome, index) => {
                  const Icon = outcome.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                      className="text-center"
                    >
                      <motion.div
                        className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </motion.div>
                      <h4 className="text-xl font-bold mb-2">{outcome.title}</h4>
                      <p className="text-white/80 text-sm leading-relaxed">{outcome.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16"
        >
          {[
            { value: "90-180", label: "Dias de Processo", suffix: "" },
            { value: "3", label: "Pilares Analisados", suffix: "" },
            { value: "100+", label: "Páginas de Insights", suffix: "" },
            { value: "∞", label: "Potencial de ROI", suffix: "" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-center shadow-lg"
            >
              <p className="text-4xl font-bold text-emerald-600 mb-2">
                {stat.value}{stat.suffix}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
