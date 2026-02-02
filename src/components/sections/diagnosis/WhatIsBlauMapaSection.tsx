import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, TrendingUp, Users, FileText, Globe, Target } from "lucide-react";

export const WhatIsBlauMapaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = [
    {
      icon: GraduationCap,
      title: "Educação",
      description: "Avaliação da cultura de aprendizagem, desenvolvimento de talentos e capacitação interna",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: TrendingUp,
      title: "Ferramentas Digitais",
      description: "Análise de presença digital, estratégias de atração e posicionamento de marca",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: Users,
      title: "Vendas",
      description: "Diagnóstico de processos comerciais, gestão de pipeline e performance de equipe",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
  ];

  const differentials = [
    {
      icon: Globe,
      title: "Padrão Internacional",
      description: "Melhores práticas globais de consultoria aplicadas à realidade brasileira",
    },
    {
      icon: Target,
      title: "Sob Medida",
      description: "Diagnóstico personalizado baseado nas necessidades específicas do seu negócio",
    },
    {
      icon: FileText,
      title: "Mapa do Tesouro Blau",
      description: "Documento estratégico completo com diretrizes práticas e implementáveis",
    },
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

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
              O Blau Mapa
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Um diagnóstico que transforma{" "}
            <span className="text-emerald-600">dados em crescimento</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            O Blau Mapa é um serviço consultivo focado em ajudar <strong className="text-foreground">pequenas e médias empresas</strong> a
            desenvolverem uma estratégia de crescimento sustentável. Através de um levantamento e diagnóstico detalhado,
            avaliamos três pilares essenciais do seu negócio.
          </p>
        </motion.div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`${pillar.bgColor} border-2 ${pillar.borderColor} rounded-3xl p-8 transition-all duration-300 hover:shadow-xl group`}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Process Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-3xl p-12 border-2 border-emerald-200">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 text-center">
              Como funciona o processo
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Com base em <strong className="text-foreground">dados coletados</strong> e em uma{" "}
                <strong className="text-foreground">reunião estratégica com a equipe</strong>, a Blau identifica áreas de
                melhoria e oportunidades de crescimento que muitas vezes passam despercebidas.
              </p>
              <p>
                Utilizando <strong className="text-emerald-600">melhores práticas internacionais de consultoria</strong>,
                garantimos que nossas recomendações estejam alinhadas com padrões globais de excelência, adaptados à
                realidade do mercado brasileiro.
              </p>
              <p>
                O resultado final é o <strong className="text-emerald-600">"Mapa do Tesouro Blau"</strong>, um documento
                estratégico que apresenta diretrizes personalizadas e recomendações práticas para implementar melhorias e
                otimizar as operações da empresa.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Differentials */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentials.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-10 h-10 text-white" />
                </motion.div>
                <h4 className="text-xl font-bold text-foreground mb-2">
                  {diff.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {diff.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
