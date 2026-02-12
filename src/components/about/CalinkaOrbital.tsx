import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Heart,
  Target,
  BookOpen,
  Brain,
  TrendingUp,
  Baby,
  Home,
  Rocket,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import calinkaPortrait from "@/assets/calinka-portrait.png";

interface Skill {
  icon: React.ElementType;
  label: string;
}

interface Category {
  id: string;
  label: string;
  subtitle: string;
  icon: React.ElementType;
  gradient: string;
  lightBg: string;
  textColor: string;
  iconBg: string;
  ringColor: string;
  dotColor: string;
  skills: Skill[];
  quote: string;
}

const categories: Category[] = [
  {
    id: "education",
    label: "Educação",
    subtitle: "Base de conhecimento",
    icon: GraduationCap,
    gradient: "from-blue-500 to-indigo-600",
    lightBg: "bg-blue-50",
    textColor: "text-blue-600",
    iconBg: "bg-blue-100",
    ringColor: "ring-blue-200",
    dotColor: "bg-blue-500",
    skills: [
      { icon: GraduationCap, label: "Letras (UFES) + Pós em Gestão Escolar" },
      { icon: BookOpen, label: "Metodologias Ativas de Ensino" },
      { icon: Brain, label: "Design Instrucional" },
    ],
    quote: "Educação é a ferramenta mais poderosa para transformar realidades.",
  },
  {
    id: "management",
    label: "Gestão",
    subtitle: "Visão estratégica",
    icon: Target,
    gradient: "from-emerald-500 to-teal-600",
    lightBg: "bg-emerald-50",
    textColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
    ringColor: "ring-emerald-200",
    dotColor: "bg-emerald-500",
    skills: [
      { icon: Target, label: "Estratégia Educacional Corporativa" },
      { icon: TrendingUp, label: "Gestão de Resultados e Métricas" },
      { icon: Rocket, label: "Mentora no Programa Seedes (Gov. ES)" },
    ],
    quote: "Gestão eficiente transforma visão em resultados concretos.",
  },
  {
    id: "life",
    label: "Vida",
    subtitle: "Propósito pessoal",
    icon: Heart,
    gradient: "from-rose-500 to-pink-600",
    lightBg: "bg-rose-50",
    textColor: "text-rose-600",
    iconBg: "bg-rose-100",
    ringColor: "ring-rose-200",
    dotColor: "bg-rose-500",
    skills: [
      { icon: Heart, label: "15+ Anos Dedicados à Educação" },
      { icon: Baby, label: "Mãe de 3 Filhos" },
      { icon: Home, label: "Equilíbrio Profissional e Pessoal" },
    ],
    quote: "Ser mãe de 3 me ensinou que educar é um ato de amor.",
  },
];

export const CalinkaOrbital = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
            Educação, Gestão e Vida em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-500 to-rose-500">
              Harmonia
            </span>
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm md:text-base">
            Uma profissional onde educação, gestão e vida pessoal se harmonizam
          </p>
        </motion.div>

        {/* Calinka Profile - Center Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-14"
        >
          {/* Photo with animated gradient ring */}
          <div className="relative mb-5">
            {/* Outer glow */}
            <motion.div
              className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-400 via-emerald-400 to-rose-400 opacity-40 blur-xl"
              animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Spinning gradient ring */}
            <motion.div
              className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-blue-500 via-emerald-500 to-rose-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            {/* Photo */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src={calinkaPortrait}
                alt="Calinka Rodor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
            Calinka Rodor
          </h3>
          <div className="flex items-center gap-3 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Educadora
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Gestora
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              Mãe
            </span>
          </div>
        </motion.div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {categories.map((cat, index) => {
            const isActive = activeId === cat.id;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <motion.button
                  onClick={() => setActiveId(isActive ? null : cat.id)}
                  className={`w-full text-left rounded-2xl p-5 transition-all duration-300 border-2 ${
                    isActive
                      ? `${cat.lightBg} border-current ${cat.textColor} shadow-xl ring-4 ${cat.ringColor}`
                      : "bg-white border-gray-100 hover:border-gray-200 hover:shadow-lg shadow-md"
                  }`}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center shadow-lg`}
                      >
                        <cat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">
                          {cat.label}
                        </h4>
                        <p className="text-xs text-gray-400">{cat.subtitle}</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-300" />
                    </motion.div>
                  </div>

                  {/* Skills */}
                  <div className="space-y-2.5">
                    {cat.skills.map((skill, i) => (
                      <motion.div
                        key={skill.label}
                        className="flex items-center gap-3"
                        initial={false}
                        animate={{
                          x: isActive ? 4 : 0,
                        }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg ${cat.iconBg} flex items-center justify-center shrink-0`}
                        >
                          <skill.icon
                            className={`w-4 h-4 ${cat.textColor}`}
                          />
                        </div>
                        <span className="text-sm text-gray-700 leading-tight">
                          {skill.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Expanded Quote */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-gray-200/60">
                          <blockquote
                            className={`text-sm italic ${cat.textColor} font-medium flex items-start gap-2`}
                          >
                            <Sparkles className="w-4 h-4 shrink-0 mt-0.5 opacity-70" />
                            <span>"{cat.quote}"</span>
                          </blockquote>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-gray-400 italic max-w-md mx-auto">
            "A harmonia entre educação, gestão e vida pessoal é o que torna a
            jornada completa."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
