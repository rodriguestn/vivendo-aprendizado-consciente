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
  angle: number; // Position in degrees around the circle
  color: string;
  bgColor: string;
  borderColor: string;
  connections: string[]; // IDs of related points
}

const skillPoints: SkillPoint[] = [
  // Education (blue) - Top area
  {
    id: "edu1",
    icon: GraduationCap,
    label: "Formação Acadêmica",
    description: "Licenciatura em Letras pela UFES e Pós-graduação em Gestão Escolar",
    category: "education",
    angle: 270,
    color: "text-blue-600",
    bgColor: "bg-blue-500",
    borderColor: "border-blue-400",
    connections: ["edu2", "mgmt1"]
  },
  {
    id: "edu2",
    icon: BookOpen,
    label: "Metodologias Ativas",
    description: "Especialista em técnicas de ensino que engajam e transformam",
    category: "education",
    angle: 300,
    color: "text-blue-600",
    bgColor: "bg-blue-400",
    borderColor: "border-blue-300",
    connections: ["edu1", "edu3", "life1"]
  },
  {
    id: "edu3",
    icon: Brain,
    label: "Design Instrucional",
    description: "Criação de experiências de aprendizado personalizadas",
    category: "education",
    angle: 330,
    color: "text-indigo-600",
    bgColor: "bg-indigo-500",
    borderColor: "border-indigo-400",
    connections: ["edu2", "edu4", "mgmt2"]
  },
  {
    id: "edu4",
    icon: MessageCircle,
    label: "Comunicação",
    description: "Habilidade em transmitir conhecimento de forma clara e inspiradora",
    category: "education",
    angle: 0,
    color: "text-blue-600",
    bgColor: "bg-blue-600",
    borderColor: "border-blue-500",
    connections: ["edu3", "mgmt1", "life1"]
  },

  // Management (green) - Right side
  {
    id: "mgmt1",
    icon: Target,
    label: "Visão Estratégica",
    description: "Capacidade de alinhar educação corporativa aos objetivos do negócio",
    category: "management",
    angle: 30,
    color: "text-emerald-600",
    bgColor: "bg-emerald-500",
    borderColor: "border-emerald-400",
    connections: ["edu1", "edu4", "mgmt2"]
  },
  {
    id: "mgmt2",
    icon: TrendingUp,
    label: "Gestão de Resultados",
    description: "Foco em métricas e indicadores de sucesso mensuráveis",
    category: "management",
    angle: 60,
    color: "text-teal-600",
    bgColor: "bg-teal-500",
    borderColor: "border-teal-400",
    connections: ["edu3", "mgmt1", "mgmt3"]
  },
  {
    id: "mgmt3",
    icon: Users,
    label: "Liderança",
    description: "Experiência em desenvolver e inspirar times de alta performance",
    category: "management",
    angle: 90,
    color: "text-emerald-600",
    bgColor: "bg-emerald-400",
    borderColor: "border-emerald-300",
    connections: ["mgmt2", "mgmt4", "life3"]
  },
  {
    id: "mgmt4",
    icon: Rocket,
    label: "Mentoria Startups",
    description: "Mentora oficial no programa Seedes do Governo do ES",
    category: "management",
    angle: 120,
    color: "text-teal-600",
    bgColor: "bg-teal-600",
    borderColor: "border-teal-500",
    connections: ["mgmt3", "life4"]
  },

  // Life (rose) - Left side
  {
    id: "life1",
    icon: Heart,
    label: "Paixão por Ensinar",
    description: "Mais de 15 anos dedicados à educação com propósito",
    category: "life",
    angle: 150,
    color: "text-rose-600",
    bgColor: "bg-rose-500",
    borderColor: "border-rose-400",
    connections: ["edu2", "edu4", "life2"]
  },
  {
    id: "life2",
    icon: Baby,
    label: "Mãe de 3 Filhos",
    description: "A maternidade como escola de paciência, amor e dedicação",
    category: "life",
    angle: 180,
    color: "text-pink-600",
    bgColor: "bg-pink-500",
    borderColor: "border-pink-400",
    connections: ["life1", "life3"]
  },
  {
    id: "life3",
    icon: Home,
    label: "Equilíbrio",
    description: "Harmonia entre vida profissional e pessoal como exemplo",
    category: "life",
    angle: 210,
    color: "text-rose-600",
    bgColor: "bg-rose-400",
    borderColor: "border-rose-300",
    connections: ["life2", "life4", "mgmt3"]
  },
  {
    id: "life4",
    icon: Sparkles,
    label: "Propósito",
    description: "Transformar vidas através da educação é mais que trabalho",
    category: "life",
    angle: 240,
    color: "text-pink-600",
    bgColor: "bg-pink-600",
    borderColor: "border-pink-500",
    connections: ["life3", "mgmt4", "edu1"]
  },
];

// Calculate position based on angle
const getPosition = (angle: number, radius: number) => {
  const radian = (angle * Math.PI) / 180;
  const x = Math.cos(radian) * radius;
  const y = Math.sin(radian) * radius;
  return { x, y };
};

export const CalinkaOrbital = () => {
  const [activePoint, setActivePoint] = useState<SkillPoint | null>(null);
  const radius = 140; // Radius for points positioning

  // Get connected points
  const getConnectedPoints = (point: SkillPoint | null) => {
    if (!point) return [];
    return skillPoints.filter(p => point.connections.includes(p.id));
  };

  const connectedPoints = getConnectedPoints(activePoint);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Educação, Gestão e Vida em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-500 to-rose-500">
              Harmonia
            </span>
          </h2>
          <p className="text-sm text-gray-500">
            Clique nos pontos para explorar as conexões
          </p>
        </motion.div>

        {/* Main Container */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Orbital Visualization */}
          <div className="relative w-[340px] h-[340px] md:w-[400px] md:h-[400px] mx-auto lg:mx-0 flex-shrink-0">
            {/* SVG for connection lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 5 }}>
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#10B981" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#F43F5E" stopOpacity="0.6" />
                </linearGradient>
              </defs>

              {/* Connection lines when a point is active */}
              <AnimatePresence>
                {activePoint && connectedPoints.map((connectedPoint) => {
                  const activePos = getPosition(activePoint.angle, radius);
                  const connectedPos = getPosition(connectedPoint.angle, radius);
                  const centerX = 170;
                  const centerY = 170;

                  return (
                    <motion.line
                      key={`line-${activePoint.id}-${connectedPoint.id}`}
                      x1={centerX + activePos.x}
                      y1={centerY + activePos.y}
                      x2={centerX + connectedPos.x}
                      y2={centerY + connectedPos.y}
                      stroke="url(#connectionGradient)"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      exit={{ pathLength: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  );
                })}
              </AnimatePresence>
            </svg>

            {/* Background Circle */}
            <div className="absolute inset-6 md:inset-8 rounded-full border-2 border-dashed border-gray-200" />

            {/* Category Labels - Better positioned */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
              <span className="px-3 py-1.5 bg-blue-500 text-white text-xs font-semibold rounded-full shadow-md">
                Educação
              </span>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-2 z-20">
              <span className="px-3 py-1.5 bg-emerald-500 text-white text-xs font-semibold rounded-full shadow-md">
                Gestão
              </span>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -left-2 z-20">
              <span className="px-3 py-1.5 bg-rose-500 text-white text-xs font-semibold rounded-full shadow-md">
                Vida
              </span>
            </div>

            {/* Interactive Points */}
            {skillPoints.map((point) => {
              const pos = getPosition(point.angle, radius);
              const isActive = activePoint?.id === point.id;
              const isConnected = activePoint && activePoint.connections.includes(point.id);

              return (
                <motion.div
                  key={point.id}
                  className="absolute z-10"
                  style={{
                    left: `calc(50% + ${pos.x}px)`,
                    top: `calc(50% + ${pos.y}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: point.angle / 1000, duration: 0.3 }}
                >
                  <motion.button
                    onClick={() => setActivePoint(isActive ? null : point)}
                    className="relative group"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      scale: isActive ? 1.2 : isConnected ? 1.1 : 1,
                    }}
                  >
                    {/* Pulse for active/connected */}
                    {(isActive || isConnected) && (
                      <motion.div
                        className={`absolute inset-0 ${point.bgColor} rounded-full`}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    )}

                    {/* Main Circle */}
                    <div className={`relative w-11 h-11 md:w-12 md:h-12 ${point.bgColor} rounded-full flex items-center justify-center shadow-lg border-2 border-white cursor-pointer transition-all ${isActive ? 'ring-4 ring-offset-2 ' + point.borderColor : ''} ${isConnected ? 'ring-2 ring-offset-1 ring-gray-300' : ''}`}>
                      <point.icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Label on hover */}
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-7 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30">
                      <span className="px-2 py-1 bg-gray-900 text-white text-[10px] rounded shadow-lg">
                        {point.label}
                      </span>
                    </div>
                  </motion.button>
                </motion.div>
              );
            })}

            {/* Center - Calinka Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center z-15"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-emerald-400 to-rose-400 rounded-full blur-lg opacity-50 scale-110" />
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full p-0.5 bg-gradient-to-r from-blue-500 via-emerald-500 to-rose-500 shadow-xl">
                  <img
                    src={calinkaPortrait}
                    alt="Calinka Rodor"
                    className="w-full h-full rounded-full object-cover border-2 border-white"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                  <span className="px-2 py-0.5 bg-gray-900 text-white text-[10px] font-medium rounded-full shadow">
                    Calinka
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Info Panel - Side or Bottom */}
          <div className="flex-1 max-w-md">
            <AnimatePresence mode="wait">
              {activePoint ? (
                <motion.div
                  key={activePoint.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className={`bg-white rounded-2xl p-5 shadow-xl border-l-4 ${activePoint.borderColor}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${activePoint.bgColor} rounded-xl flex items-center justify-center shrink-0`}>
                        <activePoint.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className={`text-[10px] font-bold ${activePoint.color} uppercase tracking-wider`}>
                          {activePoint.category === "education" ? "Educação" : activePoint.category === "management" ? "Gestão" : "Vida"}
                        </span>
                        <h4 className="text-lg font-bold text-gray-900">{activePoint.label}</h4>
                      </div>
                    </div>
                    <button
                      onClick={() => setActivePoint(null)}
                      className="p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <X className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">{activePoint.description}</p>

                  {/* Connected Skills */}
                  {connectedPoints.length > 0 && (
                    <div className="pt-3 border-t border-gray-100">
                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Conecta com:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {connectedPoints.map((cp) => (
                          <button
                            key={cp.id}
                            onClick={() => setActivePoint(cp)}
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 ${cp.bgColor} bg-opacity-10 ${cp.color} text-xs font-medium rounded-full hover:bg-opacity-20 transition-colors`}
                          >
                            <cp.icon className="w-3 h-3" />
                            {cp.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-100 via-emerald-100 to-rose-100 flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-gray-400" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Explore as Conexões</h4>
                    <p className="text-sm text-gray-500 mb-4">
                      Clique em qualquer ponto para descobrir como educação, gestão e vida se conectam na trajetória de Calinka.
                    </p>
                    <blockquote className="text-sm text-gray-600 italic border-l-2 border-rose-300 pl-3">
                      "Ser mãe de 3 me ensinou que educar é um ato de amor."
                    </blockquote>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Compact Legend */}
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <span className="text-[10px] text-gray-500">Educação</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] text-gray-500">Gestão</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="text-[10px] text-gray-500">Vida</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
