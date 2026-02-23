import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Brain,
  Users,
  Target,
  Lightbulb,
  Compass,
  Heart,
  GraduationCap,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  TrendingUp,
  HandHeart,
  XCircle,
  Zap,
  BarChart3,
  Link2,
  X,
} from "lucide-react";
import { WHATSAPP_URL } from "@/constants/whatsapp";


const pillars = [
  {
    icon: Brain,
    title: "Consciência",
    subtitle: "Decisões estratégicas com clareza mental",
    description:
      "Desenvolvemos a capacidade de análise crítica e tomada de decisão consciente, promovendo líderes que pensam antes de agir e compreendem o impacto profundo de suas escolhas.",
    color: "from-blue-500 to-blue-600",
    lightColor: "bg-blue-500/10",
    borderColor: "border-blue-500",
    textColor: "text-blue-600",
    problems: [
      "Decisões impulsivas e sem análise profunda",
      "Falta de reflexão sobre impactos a longo prazo",
      "Liderança baseada em reações ao invés de estratégia",
    ],
    solutions: [
      "Metodologias de pensamento crítico aplicadas ao dia a dia",
      "Práticas reflexivas estruturadas semanalmente",
      "Ferramentas de análise de impacto e cenários",
    ],
    results: [
      "Redução de 40% em decisões precipitadas",
      "Aumento de 65% na previsibilidade de resultados",
      "Líderes mais confiantes e assertivos",
    ],
    connectedPillars: [1, 2, 4],
  },
  {
    icon: Users,
    title: "Colaboração",
    subtitle: "Trabalho em rede multidisciplinar",
    description:
      "Criamos ambientes onde o conhecimento flui livremente entre equipes, promovendo sinergia e quebrando silos organizacionais para resultados exponenciais.",
    color: "from-purple-500 to-purple-600",
    lightColor: "bg-purple-500/10",
    borderColor: "border-purple-500",
    textColor: "text-purple-600",
    problems: [
      "Silos departamentais que impedem o fluxo de conhecimento",
      "Competição interna ao invés de cooperação",
      "Comunicação fragmentada entre equipes",
    ],
    solutions: [
      "Projetos multidisciplinares com metas compartilhadas",
      "Espaços estruturados para troca de conhecimento",
      "Reconhecimento de contribuições colaborativas",
    ],
    results: [
      "Aumento de 80% na colaboração entre departamentos",
      "Redução de 50% no retrabalho",
      "Inovações 3x mais frequentes",
    ],
    connectedPillars: [0, 3, 5],
  },
  {
    icon: Target,
    title: "Estratégia",
    subtitle: "Metas claras e mensuráveis",
    description:
      "Alinhamos objetivos organizacionais com capacidades individuais, criando roadmaps claros que transformam visão em ação concreta e resultados tangíveis.",
    color: "from-indigo-500 to-indigo-600",
    lightColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500",
    textColor: "text-indigo-600",
    problems: [
      "Metas vagas sem clareza de execução",
      "Desalinhamento entre objetivos e capacidades",
      "Falta de visibilidade do progresso",
    ],
    solutions: [
      "OKRs alinhados do estratégico ao operacional",
      "Dashboards de acompanhamento em tempo real",
      "Ciclos de feedback e ajuste contínuo",
    ],
    results: [
      "95% de alinhamento estratégico",
      "Aumento de 70% no alcance de metas",
      "Clareza total sobre prioridades",
    ],
    connectedPillars: [0, 4, 3],
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    subtitle: "Soluções criativas e disruptivas",
    description:
      "Estimulamos o pensamento fora da caixa e a experimentação segura, criando uma cultura onde novas ideias são celebradas e implementadas com coragem.",
    color: "from-amber-500 to-amber-600",
    lightColor: "bg-amber-500/10",
    borderColor: "border-amber-500",
    textColor: "text-amber-600",
    problems: [
      "Medo de errar inibe novas ideias",
      "Processos engessados que bloqueiam criatividade",
      "Resistência a mudanças e experimentação",
    ],
    solutions: [
      "Laboratórios de inovação com espaço seguro para testar",
      "Metodologias ágeis de prototipagem rápida",
      "Celebração de aprendizados vindos de erros",
    ],
    results: [
      "200% mais ideias implementadas",
      "Ciclo de inovação 60% mais rápido",
      "Cultura de experimentação consolidada",
    ],
    connectedPillars: [1, 2, 4],
  },
  {
    icon: Compass,
    title: "Autonomia",
    subtitle: "Protagonismo e autodireção",
    description:
      "Formamos profissionais autônomos que não dependem de supervisão constante, capazes de tomar iniciativas e resolver problemas de forma independente e responsável.",
    color: "from-green-500 to-green-600",
    lightColor: "bg-green-500/10",
    borderColor: "border-green-500",
    textColor: "text-green-600",
    problems: [
      "Dependência excessiva de aprovações e supervisão",
      "Falta de iniciativa para resolver problemas",
      "Cultura de 'esperar ordens' ao invés de agir",
    ],
    solutions: [
      "Empoderamento progressivo com responsabilidades claras",
      "Frameworks de tomada de decisão descentralizada",
      "Mentorias que desenvolvem autoconfiança",
    ],
    results: [
      "Redução de 75% em microgerenciamento",
      "Aumento de 90% em iniciativas próprias",
      "Equipes autogerenciáveis e produtivas",
    ],
    connectedPillars: [0, 2, 3],
  },
  {
    icon: Heart,
    title: "Cultura",
    subtitle: "Valores vivos na prática",
    description:
      "Transformamos valores abstratos em comportamentos concretos, criando uma cultura organizacional autêntica que guia decisões e fortalece a identidade coletiva.",
    color: "from-rose-500 to-rose-600",
    lightColor: "bg-rose-500/10",
    borderColor: "border-rose-500",
    textColor: "text-rose-600",
    problems: [
      "Valores pendurados na parede sem aplicação prática",
      "Desconexão entre discurso e prática organizacional",
      "Cultura tóxica ou não intencional",
    ],
    solutions: [
      "Rituais e práticas que incorporam valores diariamente",
      "Reconhecimento de comportamentos alinhados",
      "Liderança exemplar que vive os valores",
    ],
    results: [
      "85% de adesão aos valores culturais",
      "Redução de 60% no turnover",
      "Senso de pertencimento 4x maior",
    ],
    connectedPillars: [1, 4, 0],
  },
];

const year1Features = [
  "Diagnóstico educacional, cultural e estratégico",
  "Criação do setor de educação corporativa interna",
  "Formação de multiplicadores de conhecimento",
  "Metodologias ativas baseadas em desafios reais",
  "Aprendizagem aplicada ao contexto da empresa",
];

const year2Features = [
  "Mentoria contínua com especialistas",
  "Ajustes estratégicos e fortalecimento da cultura",
  "Mensuração de impacto educacional e organizacional",
  "Consolidação da autonomia interna de aprendizagem",
];

export const NucleoVisualizationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  return (
    <section
      id="educacao-corporativa"
      ref={ref}
      className="py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Metodologia Exclusiva
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            O Núcleo de Educação: o{" "}
            <span className="text-primary">coração</span> que pulsa a organização
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Um lugar onde o conhecimento vira sistema. Um núcleo de educação que
            funciona como o coração da organização — pulsando cultura, autonomia,
            inovação e consistência. 6 pilares integrados que transformam a empresa
            em um ecossistema vivo de aprendizagem.
          </p>
          <p className="text-base text-primary font-semibold">
            👇 Clique em cada pilar para descobrir problemas, soluções e resultados
          </p>
        </motion.div>

        {/* Visualização: Radial (Desktop) ou Grid (Mobile) */}
        <AnimatePresence mode="wait">
          {selectedPillar === null ? (
            <motion.div
              key="visualization"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Desktop: Radial Layout */}
              <div className="hidden lg:flex justify-center items-center mb-20">
                <div className="relative w-full h-[1000px] max-w-7xl mx-auto">
                  {/* SVG para conexões neurais */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                    <defs>
                      {/* Gradiente para as linhas */}
                      <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.08" />
                        <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.08" />
                      </linearGradient>

                      {/* Gradiente para linhas ativas */}
                      <linearGradient id="lineGradientActive" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                        <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                      </linearGradient>

                      {/* Gradiente para partículas */}
                      <radialGradient id="particleGradient">
                        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
                        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                      </radialGradient>

                      {/* Filtro de brilho */}
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>

                      {/* Filtro de brilho suave */}
                      <filter id="softGlow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Conexões entre pilares relacionados (muito sutis) */}
                    {pillars.map((pillar, index) => {
                      return pillar.connectedPillars.slice(0, 2).map((connectedIdx) => {
                        if (connectedIdx <= index) return null; // Evita duplicatas

                        const angle1 = (index * 60 - 90) * (Math.PI / 180);
                        const angle2 = (connectedIdx * 60 - 90) * (Math.PI / 180);
                        const radius = 400;

                        const x1 = Math.cos(angle1) * radius;
                        const y1 = Math.sin(angle1) * radius;
                        const x2 = Math.cos(angle2) * radius;
                        const y2 = Math.sin(angle2) * radius;

                        return (
                          <motion.line
                            key={`${index}-${connectedIdx}`}
                            x1={`calc(50% + ${x1}px)`}
                            y1={`calc(50% + ${y1}px)`}
                            x2={`calc(50% + ${x2}px)`}
                            y2={`calc(50% + ${y2}px)`}
                            stroke="hsl(var(--primary))"
                            strokeWidth="1"
                            strokeOpacity={hoveredPillar === index || hoveredPillar === connectedIdx ? "0.15" : "0.05"}
                            strokeDasharray="3,6"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, delay: 0.5 }}
                          />
                        );
                      });
                    })}

                    {/* Linhas principais conectando centro aos pilares */}
                    {pillars.map((_, index) => {
                      const angle = (index * 60 - 90) * (Math.PI / 180);
                      const radius = 400;
                      const x = Math.cos(angle) * radius;
                      const y = Math.sin(angle) * radius;
                      const centerX = "50%";
                      const centerY = "50%";
                      const endX = `calc(50% + ${x}px)`;
                      const endY = `calc(50% + ${y}px)`;

                      return (
                        <g key={index}>
                          {/* Linha base com sombra */}
                          <motion.line
                            x1={centerX}
                            y1={centerY}
                            x2={endX}
                            y2={endY}
                            stroke="hsl(var(--primary))"
                            strokeWidth="3"
                            strokeOpacity="0.03"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: index * 0.1 }}
                          />

                          {/* Linha principal animada */}
                          <motion.line
                            x1={centerX}
                            y1={centerY}
                            x2={endX}
                            y2={endY}
                            stroke={hoveredPillar === index ? "url(#lineGradientActive)" : "url(#lineGradient)"}
                            strokeWidth={hoveredPillar === index ? "2.5" : "1.5"}
                            strokeDasharray="8,4"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                              pathLength: 1,
                              opacity: 1,
                              strokeDashoffset: [0, -12],
                            }}
                            transition={{
                              pathLength: { duration: 1.5, delay: index * 0.1 },
                              opacity: { duration: 0.5, delay: index * 0.1 },
                              strokeDashoffset: { duration: 3, repeat: Infinity, ease: "linear" }
                            }}
                            filter={hoveredPillar === index ? "url(#glow)" : "url(#softGlow)"}
                          />

                          {/* Partícula viajando na linha */}
                          <motion.circle
                            r="3"
                            fill="url(#particleGradient)"
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: hoveredPillar === index ? [0, 1, 1, 0] : [0, 0.6, 0.6, 0],
                              cx: [centerX, endX],
                              cy: [centerY, endY],
                            }}
                            transition={{
                              opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                              cx: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                              cy: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                            }}
                          />

                          {/* Ponto pulsante no final da linha */}
                          <motion.circle
                            cx={endX}
                            cy={endY}
                            r={hoveredPillar === index ? "5" : "3.5"}
                            fill="hsl(var(--primary))"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{
                              scale: hoveredPillar === index ? [1, 1.4, 1] : 1,
                              opacity: hoveredPillar === index ? [0.6, 1, 0.6] : 0.5,
                            }}
                            transition={{
                              scale: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
                              opacity: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
                            }}
                            filter="url(#softGlow)"
                          />

                          {/* Halo ao redor do ponto quando hover */}
                          {hoveredPillar === index && (
                            <motion.circle
                              cx={endX}
                              cy={endY}
                              r="12"
                              fill="none"
                              stroke="hsl(var(--primary))"
                              strokeWidth="1"
                              strokeOpacity="0.3"
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{
                                scale: [0.5, 1.5],
                                opacity: [0.5, 0],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeOut",
                              }}
                            />
                          )}
                        </g>
                      );
                    })}

                    {/* Círculos concêntricos ao redor do centro */}
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="135"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="1"
                      strokeOpacity="0.15"
                      strokeDasharray="6,3"
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="160"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="0.5"
                      strokeOpacity="0.08"
                      strokeDasharray="4,8"
                      animate={{
                        rotate: -360,
                      }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </svg>

                  {/* Central Hub */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 10 }}>
                    {/* Outer ambient glow */}
                    <motion.div
                      className="absolute -inset-4 rounded-full"
                      animate={{
                        boxShadow: [
                          "0 0 50px 15px rgba(36, 82, 255, 0.15), 0 0 100px 40px rgba(36, 82, 255, 0.06)",
                          "0 0 70px 25px rgba(36, 82, 255, 0.25), 0 0 120px 50px rgba(36, 82, 255, 0.1)",
                          "0 0 50px 15px rgba(36, 82, 255, 0.15), 0 0 100px 40px rgba(36, 82, 255, 0.06)",
                        ],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <motion.div
                      animate={{
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-64 h-64 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
                      style={{
                        background: "radial-gradient(circle at 40% 35%, hsl(227 100% 67%) 0%, hsl(227 100% 57%) 40%, hsl(227 100% 42%) 100%)",
                      }}
                    >
                      {/* Camada de brilho animada — specular highlight */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: "radial-gradient(ellipse at 35% 25%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 35%, transparent 65%)",
                        }}
                        animate={{
                          opacity: [0.6, 0.9, 0.6],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Bottom ambient reflection */}
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: "radial-gradient(ellipse at 60% 85%, rgba(255,255,255,0.08) 0%, transparent 50%)",
                        }}
                      />

                      {/* Outer ring — crisp border */}
                      <div className="absolute inset-0 rounded-full border border-white/25" />
                      {/* Inner ring */}
                      <div className="absolute inset-3 rounded-full border border-white/10" />
                      {/* Innermost subtle ring */}
                      <div className="absolute inset-6 rounded-full border border-white/[0.04]" />

                      <div className="text-center text-white px-6 relative z-10 flex flex-col items-center justify-center">
                        {/* Icons row */}
                        <motion.div
                          className="flex items-center justify-center gap-3.5 mb-4"
                          animate={{
                            scale: [1, 1.04, 1],
                          }}
                          transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="relative">
                            <GraduationCap className="w-10 h-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" strokeWidth={1.8} />
                          </div>
                          <div className="w-px h-8 bg-white/30 rounded-full" />
                          <div className="relative">
                            <Briefcase className="w-10 h-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" strokeWidth={1.8} />
                          </div>
                        </motion.div>

                        {/* Brand name */}
                        <h3 className="text-[2.75rem] font-serif font-bold mb-0.5 tracking-tight leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
                          Blau
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="w-5 h-px bg-white/40 rounded-full" />
                          <p className="text-[9px] uppercase tracking-[0.3em] opacity-75 font-semibold">
                            Educação Corporativa
                          </p>
                          <div className="w-5 h-px bg-white/40 rounded-full" />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Pillars */}
                  {pillars.map((pillar, index) => {
                    const angle = (index * 60 - 90) * (Math.PI / 180);
                    const radius = 400;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    const PillarIcon = pillar.icon;

                    return (
                      <div
                        key={index}
                        className="absolute top-1/2 left-1/2"
                        style={{
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                          zIndex: 5,
                        }}
                      >
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, y: 20 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          transition={{
                            duration: 0.7,
                            delay: index * 0.12,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                          whileHover={{
                            scale: 1.08,
                            y: -10,
                            transition: { duration: 0.25, ease: "easeOut" }
                          }}
                          onMouseEnter={() => setHoveredPillar(index)}
                          onMouseLeave={() => setHoveredPillar(null)}
                          onClick={() => setSelectedPillar(index)}
                          className={`w-52 bg-card/95 backdrop-blur-md border-2 ${
                            hoveredPillar === index
                              ? `${pillar.borderColor} shadow-2xl`
                              : "border-border/50 shadow-lg"
                          } rounded-2xl p-6 cursor-pointer transition-all duration-300 relative overflow-hidden group`}
                        >
                          {/* Efeito de brilho no hover - melhorado */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-8 transition-opacity duration-300`} />

                          {/* Brilho sutil superior */}
                          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          {/* Indicador de pulso no canto */}
                          <motion.div
                            className={`absolute top-3 right-3 w-2 h-2 ${pillar.lightColor} rounded-full`}
                            animate={hoveredPillar === index ? {
                              scale: [1, 1.3, 1],
                              opacity: [0.5, 1, 0.5],
                            } : {}}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          />

                          <div className="relative z-10">
                            <motion.div
                              className={`w-14 h-14 ${pillar.lightColor} rounded-xl flex items-center justify-center mb-4 shadow-sm`}
                              whileHover={{
                                scale: 1.15,
                                rotate: [0, -5, 5, 0],
                                transition: { duration: 0.4 }
                              }}
                            >
                              <PillarIcon className={`w-7 h-7 ${pillar.textColor}`} />
                            </motion.div>
                            <h3 className="text-lg font-bold text-foreground mb-1.5 leading-tight group-hover:text-primary transition-colors duration-300">
                              {pillar.title}
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {pillar.subtitle}
                            </p>
                          </div>

                          {/* Indicador de clique animado */}
                          <motion.div
                            className="absolute bottom-3 right-3"
                            initial={{ opacity: 0, x: -5 }}
                            animate={hoveredPillar === index ? {
                              opacity: 1,
                              x: 0,
                              transition: { duration: 0.2 }
                            } : {
                              opacity: 0,
                              x: -5,
                              transition: { duration: 0.2 }
                            }}
                          >
                            <div className="bg-primary/10 rounded-full p-1.5">
                              <ArrowRight className="w-3.5 h-3.5 text-primary" />
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile: Grid Layout */}
              <div className="lg:hidden grid grid-cols-2 gap-4 mb-12">
                {pillars.map((pillar, index) => {
                  const PillarIcon = pillar.icon;
                  return (
                    <div
                      key={index}
                      onClick={() => setSelectedPillar(index)}
                      className="cursor-pointer"
                    >
                      <div className="bg-card border-2 border-border rounded-2xl p-6 h-full hover:shadow-lg transition-all">
                        <div
                          className={`w-12 h-12 ${pillar.lightColor} rounded-xl flex items-center justify-center mb-4`}
                        >
                          <PillarIcon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-base font-bold text-foreground mb-1">
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {pillar.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={`details-${selectedPillar}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl mx-auto mb-24"
            >
              {/* Header */}
              <div
                className={`bg-gradient-to-br ${pillars[selectedPillar].color} rounded-3xl p-8 md:p-12 text-white mb-8 shadow-2xl relative`}
              >
                <button
                  onClick={() => setSelectedPillar(null)}
                  className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    {(() => {
                      const Icon = pillars[selectedPillar].icon;
                      return <Icon className="w-10 h-10 text-white" />;
                    })()}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-serif font-bold mb-2">
                      {pillars[selectedPillar].title}
                    </h3>
                    <p className="text-xl font-semibold opacity-90">
                      {pillars[selectedPillar].subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed opacity-95">
                  {pillars[selectedPillar].description}
                </p>
              </div>

              {/* Antes → Depois */}
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* ANTES */}
                <div className="bg-destructive/5 border-2 border-destructive/20 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center">
                      <XCircle className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground">Antes</h4>
                      <p className="text-sm text-muted-foreground">
                        Problemas identificados
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {pillars[selectedPillar].problems.map((problem, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* DEPOIS */}
                <div className="bg-gradient-to-br from-accent/5 to-accent/10 border-2 border-accent/30 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                      <Zap className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground">Depois</h4>
                      <p className="text-sm text-muted-foreground">Soluções aplicadas</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {pillars[selectedPillar].solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-foreground font-medium">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Resultados */}
              <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">
                      Resultados Esperados
                    </h4>
                    <p className="text-sm text-muted-foreground">Impactos mensuráveis</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {pillars[selectedPillar].results.map((result, idx) => (
                    <div
                      key={idx}
                      className="bg-card border border-primary/20 rounded-xl p-4 text-center"
                    >
                      <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="text-sm font-semibold text-foreground">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pilares Conectados */}
              {pillars[selectedPillar].connectedPillars.length > 0 && (
                <div className="mt-8 bg-secondary/50 border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Link2 className="w-5 h-5 text-accent" />
                    <h4 className="text-lg font-bold text-foreground">
                      Trabalha integrado com
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {pillars[selectedPillar].connectedPillars.map((connectedIdx) => {
                      const ConnectedIcon = pillars[connectedIdx].icon;
                      return (
                        <div
                          key={connectedIdx}
                          onClick={() => setSelectedPillar(connectedIdx)}
                          className={`flex items-center gap-2 px-4 py-2 ${pillars[connectedIdx].lightColor} border ${pillars[connectedIdx].borderColor} rounded-full cursor-pointer hover:shadow-md transition-all`}
                        >
                          <ConnectedIcon
                            className={`w-4 h-4 ${pillars[connectedIdx].textColor}`}
                          />
                          <span
                            className={`text-sm font-semibold ${pillars[connectedIdx].textColor}`}
                          >
                            {pillars[connectedIdx].title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Program Structure - 2 Years */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Programa estruturado em <span className="text-primary">2 anos</span>
            </h3>
            <p className="text-muted-foreground">
              Dividido em duas fases complementares para máxima efetividade
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Year 1 */}
            <div className="bg-gradient-hero rounded-2xl p-8 md:p-10 text-primary-foreground h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-sm font-medium text-accent">Ano 1</span>
                  <h3 className="text-2xl font-serif font-bold">
                    Implantação do Núcleo
                  </h3>
                </div>
              </div>
              <ul className="space-y-4">
                {year1Features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-primary-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Year 2 */}
            <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 md:p-10 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <span className="text-sm font-medium text-primary">Ano 2</span>
                  <h3 className="text-2xl font-serif font-bold text-foreground">
                    Acompanhamento e Consolidação
                  </h3>
                </div>
              </div>
              <ul className="space-y-4">
                {year2Features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="bg-gradient-to-br from-secondary to-secondary/50 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <HandHeart className="w-14 h-14 text-primary mx-auto mb-6" />
          <p className="text-xl md:text-2xl font-serif text-foreground max-w-3xl mx-auto mb-8">
            O objetivo não é ensinar mais. É criar uma empresa que{" "}
            <span className="text-primary font-semibold">aprende melhor</span> — porque
            conhecimento não é recurso, é capital humano em movimento.
            Empresas que aprendem primeiro, lideram.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Quero implementar o Núcleo
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
