import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, Users, BarChart3, FileText, Lightbulb, ArrowRight } from "lucide-react";

export const ProcessTimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const phases = [
    {
      phase: "Fase 1",
      duration: "Semanas 1-4",
      title: "Imersão e Coleta",
      icon: ClipboardList,
      color: "from-blue-500 to-indigo-600",
      activities: [
        "Reunião de alinhamento estratégico",
        "Coleta de dados quantitativos e qualitativos",
        "Entrevistas com stakeholders-chave",
        "Análise documental e de processos"
      ],
      deliverable: "Relatório de Diagnóstico Preliminar"
    },
    {
      phase: "Fase 2",
      duration: "Semanas 5-10",
      title: "Análise Profunda",
      icon: BarChart3,
      color: "from-purple-500 to-pink-600",
      activities: [
        "Avaliação dos 3 pilares (Educação, Ferramentas Digitais, Vendas)",
        "Benchmarking setorial",
        "Identificação de gaps e oportunidades",
        "Mapeamento de recursos e capacidades"
      ],
      deliverable: "Dashboard de Insights Estratégicos"
    },
    {
      phase: "Fase 3",
      duration: "Semanas 11-16",
      title: "Planejamento Estratégico",
      icon: Lightbulb,
      color: "from-emerald-500 to-teal-600",
      activities: [
        "Desenvolvimento de recomendações personalizadas",
        "Priorização de iniciativas (quick wins e long-term)",
        "Elaboração de roadmap de implementação",
        "Cálculo de ROI projetado"
      ],
      deliverable: "Mapa do Tesouro Blau (Versão Draft)"
    },
    {
      phase: "Fase 4",
      duration: "Semanas 17-20",
      title: "Apresentação e Refinamento",
      icon: Users,
      color: "from-orange-500 to-red-600",
      activities: [
        "Reunião estratégica de apresentação",
        "Workshop com liderança",
        "Ajustes baseados em feedback",
        "Definição de métricas de sucesso"
      ],
      deliverable: "Mapa do Tesouro Blau (Versão Final)"
    },
    {
      phase: "Fase 5",
      duration: "Semanas 21-24",
      title: "Suporte à Implementação",
      icon: ArrowRight,
      color: "from-cyan-500 to-blue-600",
      activities: [
        "Sessões de mentoria com a equipe",
        "Acompanhamento dos primeiros passos",
        "Ajustes táticos conforme necessário",
        "Revisão de progresso e próximos passos"
      ],
      deliverable: "Relatório de Acompanhamento Inicial"
    }
  ];

  return (
    <section id="blau-mapa-processo" ref={ref} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full mb-6">
            <FileText className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-600">
              Processo Estruturado
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            A jornada até o{" "}
            <span className="text-emerald-600">Mapa do Tesouro</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Um processo consultivo estruturado que combina rigor analítico com pragmatismo empresarial.
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-full border-2 border-emerald-200">
            <span className="text-2xl font-bold text-emerald-600">90-180 dias</span>
            <span className="text-sm text-muted-foreground">de transformação estratégica</span>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            const isLast = index === phases.length - 1;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="flex items-start gap-8 mb-12">
                  {/* Timeline Line and Icon */}
                  <div className="relative flex flex-col items-center flex-shrink-0">
                    {/* Icon */}
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center shadow-xl z-10`}
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>

                    {/* Connecting Line */}
                    {!isLast && (
                      <motion.div
                        className="w-0.5 h-full bg-gradient-to-b from-slate-300 to-slate-200 absolute top-20 left-1/2 -translate-x-1/2"
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                        style={{ transformOrigin: "top" }}
                      />
                    )}
                  </div>

                  {/* Content Card */}
                  <motion.div
                    className="flex-1 bg-card border-2 border-border rounded-3xl p-8 shadow-lg hover:shadow-xl hover:border-emerald-200 transition-all duration-300 group"
                    whileHover={{ y: -5 }}
                  >
                    {/* Phase Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-4 py-1.5 bg-gradient-to-r ${phase.color} text-white text-sm font-bold rounded-full shadow-md`}>
                        {phase.phase}
                      </span>
                      <span className="text-sm text-muted-foreground font-medium">
                        {phase.duration}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                      {phase.title}
                    </h3>

                    {/* Activities */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                        Atividades-chave
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {phase.activities.map((activity, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.15 + 0.1 + idx * 0.05 }}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${phase.color} mt-1.5 flex-shrink-0`} />
                            {activity}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverable */}
                    <div className="border-t border-border pt-4">
                      <div className="flex items-center gap-2">
                        <FileText className={`w-5 h-5 bg-gradient-to-r ${phase.color} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', backgroundClip: 'text' }} />
                        <span className="text-sm font-semibold text-foreground">
                          Entregável: <span className="text-emerald-600">{phase.deliverable}</span>
                        </span>
                      </div>
                    </div>

                    {/* Hover gradient overlay */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${phase.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-3xl mx-auto mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl p-8 border-2 border-emerald-200">
            <p className="text-lg text-foreground leading-relaxed mb-4">
              <strong className="text-emerald-600">Flexibilidade garantida:</strong> O cronograma pode ser ajustado entre 90 e 180 dias
              conforme a complexidade da empresa e disponibilidade da equipe.
            </p>
            <p className="text-sm text-muted-foreground">
              Cada fase é adaptada às necessidades específicas do seu negócio, garantindo relevância e aplicabilidade máximas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
