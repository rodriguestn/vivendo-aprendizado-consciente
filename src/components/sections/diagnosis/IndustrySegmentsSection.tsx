import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code, Factory, ShoppingCart, Building2, Heart, CheckCircle2 } from "lucide-react";

export const IndustrySegmentsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeSegment, setActiveSegment] = useState<number | null>(null);

  const segments = [
    {
      icon: Code,
      title: "Tecnologia e TI",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-500",
      problems: [
        "Equipes técnicas sem foco em resultados de negócio",
        "Dificuldade em comunicar valor técnico para clientes",
        "Alta rotatividade de talentos especializados",
        "Falta de processos comerciais estruturados",
        "Conhecimento concentrado em poucos profissionais"
      ],
      solutions: [
        "Cultura de aprendizado contínuo e compartilhamento",
        "Estratégia de marketing técnico e educacional",
        "Processos de retenção e desenvolvimento de talentos"
      ]
    },
    {
      icon: Factory,
      title: "Indústria e Manufatura",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      iconBg: "bg-orange-500",
      problems: [
        "Resistência à mudança e inovação no chão de fábrica",
        "Dificuldade em digitalizar processos tradicionais",
        "Falta de capacitação técnica atualizada",
        "Gestão comercial desconectada da produção",
        "Baixa visibilidade da marca no mercado digital"
      ],
      solutions: [
        "Programas de educação corporativa para modernização",
        "Estratégia de presença digital B2B",
        "Alinhamento entre produção, comercial e marketing"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Varejo e E-commerce",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconBg: "bg-green-500",
      problems: [
        "Equipe de vendas sem treinamento estruturado",
        "Baixo engajamento em canais digitais",
        "Dificuldade em converter visitantes em clientes",
        "Falta de estratégia omnichannel integrada",
        "Alto custo de aquisição de clientes (CAC)",
        "Gestão de estoque desalinhada com demanda",
        "Baixa fidelização e retenção de clientes",
        "Experiência do cliente inconsistente entre canais",
        "Dificuldade em competir com grandes redes",
        "Falta de uso de dados para decisões comerciais"
      ],
      solutions: [
        "Capacitação de equipes em vendas consultivas",
        "Estratégia de ferramentas digitais com foco em conversão",
        "Processos de vendas otimizados e mensuráveis",
        "Programas de fidelização e experiência do cliente",
        "Inteligência comercial baseada em dados"
      ]
    },
    {
      icon: Building2,
      title: "Serviços Financeiros",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-500",
      problems: [
        "Equipes comerciais com baixa performance",
        "Dificuldade em gerar confiança digital",
        "Processos de vendas longos e complexos",
        "Falta de educação financeira para clientes",
        "Comunicação técnica demais para o público"
      ],
      solutions: [
        "Educação corporativa focada em vendas consultivas",
        "Marketing de conteúdo educacional e autoridade",
        "Otimização de funil de vendas e conversão"
      ]
    },
    {
      icon: Heart,
      title: "Saúde e Bem-estar",
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      iconBg: "bg-teal-500",
      problems: [
        "Equipe clínica sem visão de gestão",
        "Baixa captação de pacientes/clientes",
        "Dificuldade em construir presença digital confiável",
        "Falta de processos de atendimento padronizados",
        "Comunicação inadequada com o público-alvo"
      ],
      solutions: [
        "Desenvolvimento de lideranças clínicas e gestoras",
        "Estratégia de marketing em saúde (respeitando normas)",
        "Processos comerciais éticos e eficientes"
      ]
    }
  ];

  return (
    <section id="segmentos" ref={ref} className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Segmentos Atendidos
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Soluções especializadas para{" "}
            <span className="text-emerald-600">seu setor</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Entendemos as dores específicas de cada indústria e oferecemos diagnósticos
            personalizados que geram resultados reais
          </p>
        </motion.div>

        {/* Segments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            const isActive = activeSegment === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setActiveSegment(index)}
                onMouseLeave={() => setActiveSegment(null)}
                className="group cursor-pointer"
              >
                <div
                  className={`h-full ${segment.bgColor} border-2 ${
                    isActive ? `${segment.borderColor} shadow-2xl scale-105` : "border-slate-200 shadow-lg"
                  } rounded-3xl p-8 transition-all duration-500 relative overflow-hidden`}
                >
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${segment.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 ${segment.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                      animate={{
                        scale: isActive ? [1, 1.1, 1] : 1,
                        rotate: isActive ? [0, 5, -5, 0] : 0,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                      {segment.title}
                    </h3>

                    {/* Problems */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-red-600 mb-3 uppercase tracking-wider">
                        Principais Desafios
                      </h4>
                      <ul className="space-y-2">
                        {segment.problems.slice(0, isActive ? segment.problems.length : 3).map((problem, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <span className="text-red-400 mt-0.5">•</span>
                            {problem}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions - Show on hover */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-slate-300 pt-4">
                        <h4 className="text-sm font-semibold text-emerald-600 mb-3 uppercase tracking-wider flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" />
                          Como o Blau Mapa ajuda
                        </h4>
                        <ul className="space-y-2">
                          {segment.solutions.map((solution, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="text-sm text-foreground flex items-start gap-2"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                              {solution}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>

                    {/* Hover indicator */}
                    <motion.div
                      className="absolute top-4 right-4"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={`w-3 h-3 rounded-full ${segment.iconBg} animate-pulse`} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Não encontrou seu segmento? O Blau Mapa é adaptável a qualquer setor.
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-semibold rounded-full shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Falar com um Especialista
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
