import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Heart,
  Target,
  Users,
  BookOpen,
  TrendingUp,
  Sparkles,
  Baby,
  Home,
  Brain,
  MessageCircle,
  Rocket,
  X
} from "lucide-react";
import calinkaPortrait from "@/assets/calinka-portrait.jpg";

interface SkillPoint {
  id: string;
  icon: React.ElementType;
  label: string;
  description: string;
  category: "education" | "management" | "life";
  position: { top?: string; bottom?: string; left?: string; right?: string };
  color: string;
  bgColor: string;
  borderColor: string;
}

const skillPoints: SkillPoint[] = [
  // Education - Top area (blue)
  {
    id: "edu1",
    icon: GraduationCap,
    label: "Formação Acadêmica",
    description: "Licenciatura em Letras pela UFES e Pós-graduação em Gestão Escolar",
    category: "education",
    position: { top: "5%", left: "20%" },
    color: "text-blue-600",
    bgColor: "bg-blue-500",
    borderColor: "border-blue-400"
  },
  {
    id: "edu2",
    icon: BookOpen,
    label: "Metodologias Ativas",
    description: "Especialista em técnicas de ensino que engajam e transformam",
    category: "education",
    position: { top: "0%", left: "50%", },
    color: "text-blue-600",
    bgColor: "bg-blue-400",
    borderColor: "border-blue-300"
  },
  {
    id: "edu3",
    icon: Brain,
    label: "Design Instrucional",
    description: "Criação de experiências de aprendizado personalizadas",
    category: "education",
    position: { top: "5%", right: "20%" },
    color: "text-indigo-600",
    bgColor: "bg-indigo-500",
    borderColor: "border-indigo-400"
  },
  {
    id: "edu4",
    icon: MessageCircle,
    label: "Comunicação",
    description: "Habilidade em transmitir conhecimento de forma clara e inspiradora",
    category: "education",
    position: { top: "25%", right: "5%" },
    color: "text-blue-600",
    bgColor: "bg-blue-600",
    borderColor: "border-blue-500"
  },

  // Management - Right side (green)
  {
    id: "mgmt1",
    icon: Target,
    label: "Visão Estratégica",
    description: "Capacidade de alinhar educação corporativa aos objetivos do negócio",
    category: "management",
    position: { top: "50%", right: "0%" },
    color: "text-emerald-600",
    bgColor: "bg-emerald-500",
    borderColor: "border-emerald-400"
  },
  {
    id: "mgmt2",
    icon: TrendingUp,
    label: "Gestão de Resultados",
    description: "Foco em métricas e indicadores de sucesso mensuráveis",
    category: "management",
    position: { bottom: "25%", right: "5%" },
    color: "text-teal-600",
    bgColor: "bg-teal-500",
    borderColor: "border-teal-400"
  },
  {
    id: "mgmt3",
    icon: Users,
    label: "Liderança de Equipes",
    description: "Experiência em desenvolver e inspirar times de alta performance",
    category: "management",
    position: { bottom: "5%", right: "20%" },
    color: "text-emerald-600",
    bgColor: "bg-emerald-400",
    borderColor: "border-emerald-300"
  },
  {
    id: "mgmt4",
    icon: Rocket,
    label: "Mentoria de Startups",
    description: "Mentora oficial no programa Seedes do Governo do ES",
    category: "management",
    position: { bottom: "0%", left: "50%" },
    color: "text-teal-600",
    bgColor: "bg-teal-600",
    borderColor: "border-teal-500"
  },

  // Life - Left side (rose)
  {
    id: "life1",
    icon: Heart,
    label: "Paixão por Ensinar",
    description: "Mais de 15 anos dedicados à educação com propósito",
    category: "life",
    position: { bottom: "5%", left: "20%" },
    color: "text-rose-600",
    bgColor: "bg-rose-500",
    borderColor: "border-rose-400"
  },
  {
    id: "life2",
    icon: Baby,
    label: "Mãe de 3 Filhos",
    description: "A maternidade como escola de paciência, amor e dedicação",
    category: "life",
    position: { bottom: "25%", left: "5%" },
    color: "text-pink-600",
    bgColor: "bg-pink-500",
    borderColor: "border-pink-400"
  },
  {
    id: "life3",
    icon: Home,
    label: "Equilíbrio",
    description: "Harmonia entre vida profissional e pessoal como exemplo",
    category: "life",
    position: { top: "50%", left: "0%" },
    color: "text-rose-600",
    bgColor: "bg-rose-400",
    borderColor: "border-rose-300"
  },
  {
    id: "life4",
    icon: Sparkles,
    label: "Propósito",
    description: "Transformar vidas através da educação é mais que trabalho",
    category: "life",
    position: { top: "25%", left: "5%" },
    color: "text-pink-600",
    bgColor: "bg-pink-600",
    borderColor: "border-pink-500"
  },
];

const InteractivePoint = ({
  point,
  isActive,
  onClick
}: {
  point: SkillPoint;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.div
      className="absolute z-10"
      style={point.position}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: Math.random() * 0.3, duration: 0.4 }}
    >
      <motion.button
        onClick={onClick}
        className={`relative group`}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulse Animation */}
        <motion.div
          className={`absolute inset-0 ${point.bgColor} rounded-full opacity-30`}
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Main Circle */}
        <div className={`relative w-10 h-10 md:w-12 md:h-12 ${point.bgColor} rounded-full flex items-center justify-center shadow-lg border-2 border-white cursor-pointer transition-all ${isActive ? 'ring-4 ring-offset-2 ' + point.borderColor : ''}`}>
          <point.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
        </div>

        {/* Hover Label */}
        <div className={`absolute left-1/2 -translate-x-1/2 -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20`}>
          <span className={`px-2 py-1 ${point.bgColor} text-white text-xs rounded-md shadow-lg`}>
            {point.label}
          </span>
        </div>
      </motion.button>
    </motion.div>
  );
};

export const CalinkaOrbital = () => {
  const [activePoint, setActivePoint] = useState<SkillPoint | null>(null);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-100 via-emerald-100 to-rose-100 text-gray-700 rounded-full text-xs font-medium mb-3">
            <Sparkles className="w-3 h-3 text-amber-500" />
            Clique nos pontos para explorar
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Educação, Gestão e Vida em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-500 to-rose-500">
              Harmonia
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Três pilares que se unem na trajetória de uma profissional completa
          </p>
        </motion.div>

        {/* Interactive Visualization */}
        <div className="relative max-w-lg mx-auto aspect-square">
          {/* Background Circles */}
          <div className="absolute inset-8 md:inset-12 rounded-full border-2 border-dashed border-blue-200/60" />
          <div className="absolute inset-16 md:inset-20 rounded-full border-2 border-dashed border-emerald-200/60" />
          <div className="absolute inset-24 md:inset-28 rounded-full border-2 border-dashed border-rose-200/60" />

          {/* Category Labels */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
            Educação
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-2 px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full">
            Gestão
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-2 px-3 py-1 bg-rose-100 text-rose-700 text-xs font-medium rounded-full">
            Vida
          </div>

          {/* Interactive Points */}
          {skillPoints.map((point) => (
            <InteractivePoint
              key={point.id}
              point={point}
              isActive={activePoint?.id === point.id}
              onClick={() => setActivePoint(activePoint?.id === point.id ? null : point)}
            />
          ))}

          {/* Center - Calinka Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <div className="relative">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-emerald-400 to-rose-400 rounded-full blur-xl opacity-40 scale-110" />

              {/* Portrait Container */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full p-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-rose-500 shadow-2xl">
                <img
                  src={calinkaPortrait}
                  alt="Calinka Rodor"
                  className="w-full h-full rounded-full object-cover border-3 border-white"
                />
              </div>

              {/* Name Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <div className="px-3 py-1 bg-gray-900 text-white text-xs md:text-sm font-medium rounded-full shadow-lg">
                  Calinka Rodor
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Active Point Detail Panel */}
        <AnimatePresence>
          {activePoint && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-6 max-w-md mx-auto"
            >
              <div className={`relative bg-white rounded-2xl p-5 shadow-xl border-2 ${activePoint.borderColor}`}>
                <button
                  onClick={() => setActivePoint(null)}
                  className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>

                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${activePoint.bgColor} rounded-xl flex items-center justify-center shrink-0`}>
                    <activePoint.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className={`text-xs font-medium ${activePoint.color} uppercase tracking-wide`}>
                      {activePoint.category === "education" ? "Educação" : activePoint.category === "management" ? "Gestão" : "Vida"}
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 mt-0.5">{activePoint.label}</h4>
                    <p className="text-sm text-gray-600 mt-1">{activePoint.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Compact Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-xs text-gray-600">Educação (4)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-xs text-gray-600">Gestão (4)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <span className="text-xs text-gray-600">Vida (4)</span>
          </div>
        </motion.div>

        {/* Compact Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center max-w-2xl mx-auto"
        >
          <blockquote className="text-base md:text-lg text-gray-600 italic">
            "Ser mãe de 3 me ensinou que <span className="text-gray-900 font-semibold">educar é um ato de amor</span>.
            Essa dedicação guia meu trabalho com empresas."
          </blockquote>
          <p className="mt-2 text-sm text-gray-500">— Calinka Rodor, Fundadora</p>
        </motion.div>
      </div>
    </section>
  );
};
