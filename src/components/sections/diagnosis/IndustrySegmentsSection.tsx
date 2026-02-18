import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Code,
  Factory,
  ShoppingCart,
  Building2,
  Heart,
  CheckCircle2,
  GraduationCap,
  Truck,
  Wheat,
  Utensils,
  HardHat,
  Scale,
  Landmark,
  Wrench,
  Briefcase,
} from "lucide-react";

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
        "Conhecimento crítico concentrado em poucos profissionais",
        "Alta rotatividade e perda de capital intelectual",
        "Equipes técnicas sem foco em resultados de negócio",
        "Onboarding lento e falta de padronização",
        "Dificuldade em escalar conhecimento entre times"
      ],
      solutions: [
        "Núcleo de educação que sistematiza e distribui conhecimento técnico",
        "Formação de multiplicadores internos para retenção de capital intelectual",
        "Programas de desenvolvimento que conectam habilidades técnicas a resultados de negócio"
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
        "Processos que envelhecem sem atualização contínua",
        "Gestores operacionais sem preparo para liderança",
        "Desconexão entre operação, gestão e estratégia",
        "Dificuldade em implantar novas formas de trabalho"
      ],
      solutions: [
        "Educação corporativa que moderniza a cultura operacional",
        "Formação de lideranças no chão de fábrica com visão estratégica",
        "Alinhamento entre produção, gestão e planejamento através de aprendizagem integrada"
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
        "Alta rotatividade e custo de recontratação",
        "Atendimento inconsistente entre canais e lojas",
        "Falta de cultura de aprendizado contínuo",
        "Dificuldade em escalar padrões de qualidade"
      ],
      solutions: [
        "Núcleo educacional que padroniza e eleva a qualidade do atendimento",
        "Capacitação em vendas consultivas com multiplicadores internos",
        "Sistema de aprendizagem contínua que reduz turnover e eleva performance"
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
        "Equipes comerciais com baixa performance consultiva",
        "Comunicação técnica demais para o público",
        "Processos de vendas longos e sem padronização",
        "Dificuldade em gerar confiança e autoridade",
        "Compliance e regulamentações que exigem atualização constante"
      ],
      solutions: [
        "Educação corporativa focada em vendas consultivas e humanizadas",
        "Núcleo de aprendizagem que mantém equipes atualizadas em compliance",
        "Formação de lideranças que traduzem complexidade em clareza para o cliente"
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
        "Equipe clínica sem visão de gestão e negócio",
        "Falta de processos de atendimento padronizados",
        "Baixa retenção de profissionais qualificados",
        "Dificuldade em escalar qualidade do cuidado",
        "Lideranças clínicas sem preparo para gestão de pessoas"
      ],
      solutions: [
        "Desenvolvimento de lideranças clínicas com visão estratégica e humana",
        "Núcleo educacional que padroniza protocolos e eleva a qualidade do cuidado",
        "Formação de multiplicadores que preservam e disseminam conhecimento clínico"
      ]
    },
    {
      icon: GraduationCap,
      title: "Educação e EdTechs",
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      iconBg: "bg-indigo-500",
      problems: [
        "Corpo docente desatualizado em metodologias ativas",
        "Desconexão entre prática pedagógica e estratégia institucional",
        "Dificuldade em reter e desenvolver talentos educacionais",
        "Falta de indicadores para mensurar impacto educacional",
        "Resistência à inovação pedagógica"
      ],
      solutions: [
        "Formação continuada de educadores em metodologias contemporâneas",
        "Alinhamento entre projeto pedagógico e objetivos estratégicos",
        "Sistema de mensuração de impacto educacional com indicadores claros"
      ]
    },
    {
      icon: Truck,
      title: "Logística e Transporte",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      iconBg: "bg-amber-500",
      problems: [
        "Operação dependente de poucos gestores experientes",
        "Alta rotatividade de motoristas e operadores",
        "Dificuldade em padronizar processos em múltiplas bases",
        "Falta de cultura de segurança e melhoria contínua",
        "Conhecimento operacional não documentado nem replicável"
      ],
      solutions: [
        "Núcleo que sistematiza conhecimento operacional e reduz dependência",
        "Formação de líderes operacionais como multiplicadores de boas práticas",
        "Programa de educação que fortalece cultura de segurança e padronização"
      ]
    },
    {
      icon: Wheat,
      title: "Agronegócio",
      color: "from-lime-600 to-green-700",
      bgColor: "bg-lime-50",
      borderColor: "border-lime-200",
      iconBg: "bg-lime-600",
      problems: [
        "Gestores de campo sem formação em liderança de pessoas",
        "Sazonalidade que dificulta programas de capacitação",
        "Conhecimento técnico que se perde com turnover",
        "Desafio de modernizar cultura em operações tradicionais",
        "Dificuldade em atrair e reter jovens talentos"
      ],
      solutions: [
        "Programas de liderança adaptados à realidade do campo",
        "Sistema de preservação e disseminação de conhecimento técnico-agrícola",
        "Educação corporativa que atrai talentos e moderniza a cultura organizacional"
      ]
    },
    {
      icon: Utensils,
      title: "Alimentação e Food Service",
      color: "from-rose-500 to-pink-600",
      bgColor: "bg-rose-50",
      borderColor: "border-rose-200",
      iconBg: "bg-rose-500",
      problems: [
        "Altíssima rotatividade de equipe operacional",
        "Dificuldade em manter padrão de qualidade entre unidades",
        "Gestores promovidos sem preparo para liderança",
        "Falta de processos de integração e treinamento estruturados",
        "Cultura organizacional fraca e fragmentada"
      ],
      solutions: [
        "Núcleo educacional que reduz turnover através de desenvolvimento e pertencimento",
        "Sistema de padronização e replicação de boas práticas entre unidades",
        "Formação de gestores operacionais em liderança humanizada e estratégica"
      ]
    },
    {
      icon: HardHat,
      title: "Construção Civil e Engenharia",
      color: "from-yellow-600 to-amber-700",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      iconBg: "bg-yellow-600",
      problems: [
        "Projetos dependentes de profissionais-chave insubstituíveis",
        "Falta de padronização entre equipes e obras",
        "Dificuldade em desenvolver lideranças de campo",
        "Conhecimento técnico que não se transfere entre projetos",
        "Cultura de segurança que não permeia todos os níveis"
      ],
      solutions: [
        "Formação de multiplicadores técnicos que distribuem conhecimento entre projetos",
        "Programa de liderança para engenheiros e mestres de obra",
        "Núcleo de educação que preserva capital intelectual e fortalece cultura de segurança"
      ]
    },
    {
      icon: Scale,
      title: "Jurídico e Consultoria",
      color: "from-slate-600 to-gray-700",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-200",
      iconBg: "bg-slate-600",
      problems: [
        "Sócios sobrecarregados por falta de autonomia da equipe",
        "Dificuldade em desenvolver visão de negócio em profissionais técnicos",
        "Conhecimento concentrado nos fundadores",
        "Falta de processos de gestão e desenvolvimento de pessoas",
        "Crescimento limitado pela capacidade individual dos líderes"
      ],
      solutions: [
        "Educação que desenvolve visão estratégica em profissionais técnicos",
        "Sistema de distribuição de responsabilidades e autonomia progressiva",
        "Núcleo que transforma conhecimento individual em ativo organizacional"
      ]
    },
    {
      icon: Landmark,
      title: "Setor Público e ONGs",
      color: "from-sky-600 to-blue-700",
      bgColor: "bg-sky-50",
      borderColor: "border-sky-200",
      iconBg: "bg-sky-600",
      problems: [
        "Burocracia que engessa inovação e aprendizagem",
        "Alta rotatividade por mudanças de gestão política",
        "Falta de cultura de resultados e mensuração de impacto",
        "Conhecimento institucional perdido a cada transição",
        "Equipes desmotivadas e sem perspectiva de desenvolvimento"
      ],
      solutions: [
        "Núcleo educacional que preserva conhecimento institucional independente de gestões",
        "Programa de desenvolvimento que cria cultura de resultados e impacto mensurável",
        "Formação de servidores como multiplicadores de boas práticas e inovação"
      ]
    },
    {
      icon: Wrench,
      title: "Serviços e Manutenção",
      color: "from-cyan-600 to-teal-700",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      iconBg: "bg-cyan-600",
      problems: [
        "Técnicos que executam sem entender o porquê dos processos",
        "Dificuldade em manter qualidade com crescimento da equipe",
        "Gestores operacionais sem preparo para liderança",
        "Conhecimento prático que não é registrado nem replicado",
        "Alta dependência de profissionais-chave"
      ],
      solutions: [
        "Sistema de documentação e replicação de conhecimento técnico",
        "Formação de líderes operacionais que desenvolvem suas equipes",
        "Núcleo educacional que garante qualidade mesmo com escala"
      ]
    },
    {
      icon: Briefcase,
      title: "Startups e Scale-ups",
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-50",
      borderColor: "border-violet-200",
      iconBg: "bg-violet-500",
      problems: [
        "Crescimento acelerado sem estrutura para absorver novos talentos",
        "Cultura que se dilui conforme a empresa escala",
        "Fundadores sobrecarregados como gargalo de decisões",
        "Falta de processos de onboarding e desenvolvimento",
        "Conhecimento estratégico que não acompanha o ritmo de crescimento"
      ],
      solutions: [
        "Núcleo educacional que preserva cultura e valores durante o crescimento",
        "Formação de lideranças que desafogam fundadores e distribuem decisão",
        "Sistema de onboarding e desenvolvimento que escala com a empresa"
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
