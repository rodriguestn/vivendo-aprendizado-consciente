import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Sparkles,
  TrendingDown,
  RefreshCw,
  Flame,
  Eye,
  Puzzle,
  ShieldAlert,
  BookX,
  Cog,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const journeyStages = [
  {
    title: "Infância",
    subtitle: "Curiosidade Natural",
    description:
      "Questionamos tudo, experimentamos sem medo de errar e aprendemos pela descoberta. O mundo é um laboratório ilimitado.",
    principle: "Aprender é explorar",
    icon: Sparkles,
    energyLevel: 100,
    gradient: "from-blue-500 to-cyan-400",
    bgGlow: "bg-blue-500/10",
    borderColor: "border-blue-200",
    borderActive: "border-blue-400",
    textAccent: "text-blue-600",
    bgAccent: "bg-blue-50",
    barColor: "bg-gradient-to-r from-blue-400 to-cyan-400",
    traits: [
      { icon: Eye, label: "Curiosidade ilimitada" },
      { icon: Puzzle, label: "Exploração sem medo" },
      { icon: Flame, label: "Prazer em descobrir" },
    ],
  },
  {
    title: "Adolescência",
    subtitle: "Aprendizado Estruturado",
    description:
      "Absorvemos padrões, seguimos currículos rígidos e começamos a temer o erro. A criatividade dá lugar à reprodução.",
    principle: "Aprender é reproduzir",
    icon: TrendingDown,
    energyLevel: 50,
    gradient: "from-amber-500 to-orange-400",
    bgGlow: "bg-amber-500/10",
    borderColor: "border-amber-200",
    borderActive: "border-amber-400",
    textAccent: "text-amber-600",
    bgAccent: "bg-amber-50",
    barColor: "bg-gradient-to-r from-amber-400 to-orange-400",
    traits: [
      { icon: BookX, label: "Medo de errar" },
      { icon: ShieldAlert, label: "Padrões rígidos" },
      { icon: TrendingDown, label: "Criatividade reduzida" },
    ],
  },
  {
    title: "Vida Profissional",
    subtitle: "Execução Mecânica",
    description:
      "Fazemos sem questionar, evitamos riscos e perdemos a capacidade de aprender profundamente. O ciclo se completa.",
    principle: "Aprender é supérfluo",
    icon: Cog,
    energyLevel: 15,
    gradient: "from-slate-400 to-gray-500",
    bgGlow: "bg-slate-500/10",
    borderColor: "border-slate-200",
    borderActive: "border-slate-400",
    textAccent: "text-slate-500",
    bgAccent: "bg-slate-50",
    barColor: "bg-gradient-to-r from-slate-400 to-gray-400",
    traits: [
      { icon: Cog, label: "Execução automática" },
      { icon: ShieldAlert, label: "Aversão ao risco" },
      { icon: BookX, label: "Desaprendizagem" },
    ],
  },
];

export const JourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStage, setActiveStage] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-slate-100/50 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <RefreshCw className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              A Jornada do Aprendizado
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            O que aconteceu com nossa{" "}
            <span className="text-primary">capacidade de aprender?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nascemos curiosos, prontos para descobrir o mundo. Mas ao longo da
            vida, os princípios que nos tornavam aprendizes naturais são
            gradualmente substituídos por padrões rígidos e execução mecânica.
          </p>
        </motion.div>

        {/* Curiosity Decline Visual Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-14"
        >
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3 px-1">
            <span className="text-blue-500">Curiosidade alta</span>
            <span className="text-slate-400">Curiosidade baixa</span>
          </div>
          <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-amber-400 to-slate-300 rounded-full"
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
            />
            {/* Stage markers */}
            {[0, 50, 85].map((pos, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-[3px] border-white shadow-md z-10"
                style={{
                  left: `${pos}%`,
                  background:
                    i === 0 ? "#3b82f6" : i === 1 ? "#f59e0b" : "#94a3b8",
                }}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.3, type: "spring" }}
              />
            ))}
          </div>
        </motion.div>

        {/* Journey Stage Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-8">
          {journeyStages.map((stage, index) => {
            const isActive = activeStage === index;
            const Icon = stage.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <motion.div
                  onMouseEnter={() => setActiveStage(index)}
                  onMouseLeave={() => setActiveStage(null)}
                  onClick={() =>
                    setActiveStage(isActive ? null : index)
                  }
                  className={`relative rounded-2xl p-6 md:p-7 transition-all duration-300 border-2 cursor-pointer h-full ${
                    isActive
                      ? `${stage.bgAccent} ${stage.borderActive} shadow-xl`
                      : `bg-white/80 backdrop-blur-sm ${stage.borderColor} hover:shadow-lg shadow-md`
                  }`}
                  whileHover={{ y: -4 }}
                >
                  {/* Stage number + energy bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stage.gradient} flex items-center justify-center shadow-md`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">
                          Fase {index + 1}
                        </span>
                        <h3 className="text-lg font-bold text-gray-900 leading-tight">
                          {stage.title}
                        </h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <span
                        className={`text-xl font-bold ${stage.textAccent}`}
                      >
                        {stage.energyLevel}%
                      </span>
                      <p className="text-[10px] text-gray-400 leading-tight">
                        curiosidade
                      </p>
                    </div>
                  </div>

                  {/* Mini energy bar */}
                  <div className="h-1.5 bg-gray-100 rounded-full mb-5 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${stage.barColor}`}
                      initial={{ width: "0%" }}
                      animate={
                        isInView
                          ? { width: `${stage.energyLevel}%` }
                          : {}
                      }
                      transition={{
                        duration: 1,
                        delay: 0.5 + index * 0.3,
                        ease: "easeOut",
                      }}
                    />
                  </div>

                  {/* Subtitle */}
                  <p
                    className={`text-sm font-semibold ${stage.textAccent} mb-2`}
                  >
                    {stage.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">
                    {stage.description}
                  </p>

                  {/* Traits */}
                  <div className="space-y-2 mb-5">
                    {stage.traits.map((trait, i) => (
                      <motion.div
                        key={trait.label}
                        className="flex items-center gap-2.5"
                        animate={isActive ? { x: 4 } : { x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <div
                          className={`w-7 h-7 rounded-lg ${stage.bgAccent} flex items-center justify-center shrink-0`}
                        >
                          <trait.icon
                            className={`w-3.5 h-3.5 ${stage.textAccent}`}
                          />
                        </div>
                        <span className="text-xs text-gray-600 font-medium">
                          {trait.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Principle Badge */}
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${
                      isActive
                        ? `${stage.bgAccent} ${stage.borderActive}`
                        : "bg-gray-50 border-gray-100"
                    } transition-colors`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${stage.gradient}`}
                    />
                    <span
                      className={`text-xs font-semibold ${
                        isActive ? stage.textAccent : "text-gray-500"
                      }`}
                    >
                      {stage.principle}
                    </span>
                  </div>
                </motion.div>

                {/* Connection arrow between cards */}
                {index < journeyStages.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 lg:-right-5 z-10 -translate-y-1/2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.8 + index * 0.2, type: "spring" }}
                      className="w-8 h-8 bg-white rounded-full border-2 border-gray-200 shadow-md flex items-center justify-center"
                    >
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Blockquote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-3xl mx-auto mb-14"
        >
          <blockquote className="relative text-center px-8 py-6">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 via-amber-400 to-slate-400 rounded-full" />
            <p className="text-xl md:text-2xl font-serif italic text-gray-700 leading-relaxed mt-4">
              "Nada evolui sozinho. Empresas que realmente crescem entendem que
              conhecimento precisa ser cultivado, estruturado, distribuído —{" "}
              <span className="text-primary font-semibold not-italic">
                vivido
              </span>
              ."
            </p>
          </blockquote>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700" />
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-72 h-72 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-300 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative px-8 md:px-12 py-10 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 rounded-full text-blue-100 text-xs font-medium mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Reversão é possível
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                É hora de parar de "tapar buracos" e construir bases sólidas
              </h3>
              <p className="text-blue-100 leading-relaxed mb-8 max-w-xl mx-auto">
                Se quer sair do modelo de sobrevivência e entrar no campo da
                construção estratégica, está na hora de transformar sua empresa
                numa máquina de aprender e crescer.
              </p>
              <motion.button
                className="px-7 py-3.5 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 text-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <RefreshCw className="w-4 h-4" />
                Reconectar minha equipe ao aprendizado
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
