import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { TrendingUp, Maximize2, ArrowUpRight } from "lucide-react";

export const EducationalPrinciplesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [hoveredFurniture, setHoveredFurniture] = useState<string | null>(null);

  const principles = {
    floor: {
      title: "Chão Baixo",
      subtitle: "Acessível a Todos",
      description: "Desafios acessíveis que permitem que todos possam começar, independentemente do nível inicial de conhecimento",
      color: "from-green-400 to-emerald-500",
      icon: TrendingUp,
      benefits: ["Inclusão total", "Engajamento inicial", "Confiança crescente"],
    },
    ceiling: {
      title: "Teto Alto",
      subtitle: "Possibilidades Infinitas",
      description: "Metas ambiciosas que estimulam crescimento contínuo, sem limites para o desenvolvimento",
      color: "from-blue-400 to-cyan-500",
      icon: ArrowUpRight,
      benefits: ["Crescimento contínuo", "Inovação constante", "Excelência sustentável"],
    },
    walls: {
      title: "Paredes Amplas",
      subtitle: "Exploração Livre",
      description: "Espaço amplo para experimentação, criatividade e diferentes caminhos de solução",
      color: "from-purple-400 to-pink-500",
      icon: Maximize2,
      benefits: ["Criatividade liberada", "Múltiplas soluções", "Autonomia plena"],
    },
  };

  return (
    <section id="principios" ref={ref} className="py-24 lg:py-32 bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Maximize2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Princípios Educacionais
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Chão Baixo, Teto Alto e{" "}
            <span className="text-primary">Paredes Amplas</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            O princípio que transforma aprendizes passivos em protagonistas do conhecimento,
            criando um ambiente onde todos podem começar, crescer infinitamente e explorar livremente.
          </p>
        </motion.div>

        {/* Visual Icons - Simplified and Elegant */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">

          {/* CHÃO BAIXO - Steps with Books */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            onMouseEnter={() => setHoveredElement("floor")}
            onMouseLeave={() => setHoveredElement(null)}
            className="cursor-pointer group"
          >
            <motion.div
              animate={{
                y: hoveredElement === "floor" ? -8 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl"
            >
              <svg viewBox="0 0 200 180" className="w-full h-auto mb-5">
                <defs>
                  <linearGradient id="greenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                </defs>

                {/* Steps ascending */}
                <g transform="translate(50, 140)">
                  {/* Step 1 */}
                  <rect x="0" y="0" width="35" height="30" fill="#d1fae5" stroke="#10b981" strokeWidth="2" rx="4" />
                  {/* Step 2 */}
                  <rect x="40" y="-25" width="35" height="30" fill="#a7f3d0" stroke="#10b981" strokeWidth="2" rx="4" />
                  {/* Step 3 */}
                  <rect x="80" y="-50" width="35" height="30" fill="url(#greenGrad)" stroke="#10b981" strokeWidth="2" rx="4" />

                  {/* Books on top step */}
                  <g transform="translate(85, -70)">
                    <rect x="0" y="0" width="8" height="12" fill="#059669" rx="1" />
                    <rect x="10" y="0" width="8" height="12" fill="#10b981" rx="1" />
                    <rect x="20" y="0" width="8" height="12" fill="#047857" rx="1" />
                  </g>

                  {/* Arrow going up */}
                  <motion.path
                    d="M 17,-30 L 17,-80"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeDasharray="5,5"
                    opacity="0.6"
                    animate={{
                      strokeDashoffset: hoveredElement === "floor" ? [0, -10] : 0,
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <path d="M 17,-80 L 12,-72 L 22,-72 Z" fill="#10b981" opacity="0.6" />
                </g>
              </svg>

              <h3 className="text-2xl font-bold text-green-900 mb-2 text-center">
                Chão Baixo
              </h3>
              <p className="text-green-700 text-center text-sm font-medium">
                Acessível a Todos
              </p>
            </motion.div>
          </motion.div>

          {/* TETO ALTO - Lights and Stars */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onMouseEnter={() => setHoveredElement("ceiling")}
            onMouseLeave={() => setHoveredElement(null)}
            className="cursor-pointer group"
          >
            <motion.div
              animate={{
                y: hoveredElement === "ceiling" ? -8 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl"
            >
              <svg viewBox="0 0 200 180" className="w-full h-auto mb-5">
                <defs>
                  <linearGradient id="blueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2452ff" />
                    <stop offset="100%" stopColor="#1a3fd9" />
                  </linearGradient>
                </defs>

                {/* Ceiling line */}
                <line x1="40" y1="50" x2="160" y2="50" stroke="#2452ff" strokeWidth="3" strokeLinecap="round" />

                {/* Hanging lights */}
                <g>
                  <line x1="70" y1="50" x2="70" y2="90" stroke="#2452ff" strokeWidth="2" />
                  <motion.circle
                    cx="70"
                    cy="95"
                    r="12"
                    fill={hoveredElement === "ceiling" ? "#fbbf24" : "#2452ff"}
                    opacity="0.9"
                    animate={{
                      scale: hoveredElement === "ceiling" ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.circle
                    cx="70"
                    cy="95"
                    r="18"
                    fill="none"
                    stroke={hoveredElement === "ceiling" ? "#fbbf24" : "#2452ff"}
                    strokeWidth="1"
                    opacity="0.3"
                    animate={{
                      scale: hoveredElement === "ceiling" ? [1, 1.5, 1] : 1,
                      opacity: hoveredElement === "ceiling" ? [0.3, 0, 0.3] : 0.3,
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <line x1="130" y1="50" x2="130" y2="80" stroke="#2452ff" strokeWidth="2" />
                  <motion.circle
                    cx="130"
                    cy="85"
                    r="12"
                    fill={hoveredElement === "ceiling" ? "#fbbf24" : "#2452ff"}
                    opacity="0.9"
                    animate={{
                      scale: hoveredElement === "ceiling" ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                  />
                </g>

                {/* Stars floating above */}
                <motion.g
                  animate={{
                    y: hoveredElement === "ceiling" ? [0, -5, 0] : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path d="M 100,25 L 102,33 L 110,33 L 104,38 L 106,46 L 100,41 L 94,46 L 96,38 L 90,33 L 98,33 Z"
                    fill={hoveredElement === "ceiling" ? "#fbbf24" : "#2452ff"}
                    opacity="0.7"
                  />
                  <path d="M 140,30 L 141,35 L 146,35 L 142,38 L 143,43 L 140,40 L 137,43 L 138,38 L 134,35 L 139,35 Z"
                    fill={hoveredElement === "ceiling" ? "#fbbf24" : "#2452ff"}
                    opacity="0.5"
                  />
                  <path d="M 60,35 L 61,40 L 66,40 L 62,43 L 63,48 L 60,45 L 57,48 L 58,43 L 54,40 L 59,40 Z"
                    fill={hoveredElement === "ceiling" ? "#fbbf24" : "#2452ff"}
                    opacity="0.5"
                  />
                </motion.g>
              </svg>

              <h3 className="text-2xl font-bold text-blue-900 mb-2 text-center">
                Teto Alto
              </h3>
              <p className="text-blue-700 text-center text-sm font-medium">
                Possibilidades Infinitas
              </p>
            </motion.div>
          </motion.div>

          {/* PAREDES AMPLAS - Wide Windows */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onMouseEnter={() => setHoveredElement("walls")}
            onMouseLeave={() => setHoveredElement(null)}
            className="cursor-pointer group"
          >
            <motion.div
              animate={{
                y: hoveredElement === "walls" ? -8 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="relative bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-3xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl"
            >
              <svg viewBox="0 0 200 180" className="w-full h-auto mb-5">
                <defs>
                  <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#9333ea" />
                  </linearGradient>
                </defs>

                {/* Large Window Frame */}
                <rect
                  x="40"
                  y="40"
                  width="120"
                  height="110"
                  fill={hoveredElement === "walls" ? "#fae8ff" : "#f3e8ff"}
                  stroke="#a855f7"
                  strokeWidth="3"
                  rx="8"
                />

                {/* Window panes - horizontal */}
                <line x1="40" y1="95" x2="160" y2="95" stroke="#a855f7" strokeWidth="2" />

                {/* Window panes - vertical */}
                <line x1="100" y1="40" x2="100" y2="150" stroke="#a855f7" strokeWidth="2" />

                {/* Expanding arrows showing width */}
                <motion.g
                  animate={{
                    x: hoveredElement === "walls" ? [-5, 0] : 0,
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <path d="M 25,95 L 35,90 L 35,100 Z" fill="#a855f7" opacity="0.6" />
                </motion.g>
                <motion.g
                  animate={{
                    x: hoveredElement === "walls" ? [5, 0] : 0,
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <path d="M 175,95 L 165,90 L 165,100 Z" fill="#a855f7" opacity="0.6" />
                </motion.g>

                {/* Sky/view through window */}
                <circle cx="70" cy="70" r="8" fill="#ddd6fe" opacity="0.5" />
                <circle cx="130" cy="65" r="6" fill="#ddd6fe" opacity="0.4" />
                <circle cx="85" cy="120" r="7" fill="#ddd6fe" opacity="0.4" />
              </svg>

              <h3 className="text-2xl font-bold text-purple-900 mb-2 text-center">
                Paredes Amplas
              </h3>
              <p className="text-purple-700 text-center text-sm font-medium">
                Exploração Livre
              </p>
            </motion.div>
          </motion.div>

        </div>

        {/* Info Panel */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredElement ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            {hoveredElement && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/80 backdrop-blur-xl border-2 border-slate-200 rounded-2xl px-8 py-6 shadow-xl"
              >
                <div className="flex items-center justify-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center shadow-md">
                    {hoveredElement === "floor" && <TrendingUp className="w-6 h-6 text-white" />}
                    {hoveredElement === "ceiling" && <ArrowUpRight className="w-6 h-6 text-white" />}
                    {hoveredElement === "walls" && <Maximize2 className="w-6 h-6 text-white" />}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    {hoveredElement === "floor" && "Chão Baixo"}
                    {hoveredElement === "ceiling" && "Teto Alto"}
                    {hoveredElement === "walls" && "Paredes Amplas"}
                  </h4>
                </div>
                <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  {hoveredElement === "floor" && "Ponto de entrada acessível para todos os colaboradores, independente do nível de conhecimento inicial"}
                  {hoveredElement === "ceiling" && "Potencial ilimitado de crescimento e desenvolvimento profissional para cada colaborador"}
                  {hoveredElement === "walls" && "Ampla liberdade para exploração, experimentação e descoberta de múltiplas soluções"}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>

        <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-slate-200">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Onde a educação encontra a transformação
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ao integrar estes três princípios fundamentais, criamos um ambiente de aprendizagem que é simultaneamente <strong className="text-green-600">acessível</strong>, <strong className="text-blue-600">aspiracional</strong> e <strong className="text-purple-600">expansivo</strong> — transformando colaboradores em protagonistas do conhecimento.
            </p>
          </div>
        </div>

        {/* Interactive Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {Object.entries(principles).map(([key, principle], index) => {
            const Icon = principle.icon;
            const isActive = hoveredElement === key;

            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHoveredElement(key)}
                onMouseLeave={() => setHoveredElement(null)}
                className="relative group cursor-pointer"
              >
                <div
                  className={`bg-card border-2 rounded-3xl p-8 transition-all duration-500 h-full ${
                    isActive
                      ? "border-primary shadow-2xl -translate-y-1"
                      : "border-border shadow-lg hover:border-primary/50"
                  }`}
                >
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${principle.color} flex items-center justify-center mb-6 shadow-lg`}
                    animate={{
                      scale: isActive ? [1, 1.1, 1] : 1,
                      rotate: isActive ? [0, 5, -5, 0] : 0,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm font-semibold text-primary mb-4">
                    {principle.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {principle.description}
                  </p>

                  {/* Benefits */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border pt-4 mt-4">
                      <p className="text-xs font-semibold text-primary mb-3 uppercase tracking-wider">
                        Benefícios
                      </p>
                      <ul className="space-y-2">
                        {principle.benefits.map((benefit, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-2 text-sm text-foreground"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${principle.color}`} />
                            {benefit}
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
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${principle.color} animate-pulse`} />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Transformation Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-12 border-2 border-primary/20">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">
              A Transformação em Prática
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Quando aplicamos este princípio, criamos ambientes onde <strong className="text-foreground">iniciantes encontram acolhimento</strong>,
              <strong className="text-foreground"> especialistas encontram desafios</strong> e{" "}
              <strong className="text-foreground">todos encontram espaço para experimentar</strong>. O resultado?
              Equipes mais autônomas, inovadoras e preparadas para crescer continuamente.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { number: "100%", label: "Inclusão na Aprendizagem" },
                { number: "∞", label: "Potencial de Crescimento" },
                { number: "360°", label: "Liberdade de Exploração" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                  className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50"
                >
                  <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
