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
  ArrowRight,
  Zap,
  Lightbulb,
  Users,
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
  glowColor: string;
  borderActive: string;
  bgActive: string;
  textColor: string;
  iconBg: string;
  skills: Skill[];
  quote: string;
}

interface Intersection {
  id: string;
  pillars: [string, string];
  label: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
}

const categories: Category[] = [
  {
    id: "education",
    label: "Educação",
    subtitle: "Base de conhecimento",
    icon: GraduationCap,
    gradient: "from-blue-500 to-indigo-600",
    glowColor: "shadow-blue-500/25",
    borderActive: "border-blue-400",
    bgActive: "bg-blue-500/5",
    textColor: "text-blue-600",
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
    skills: [
      { icon: GraduationCap, label: "Letras (UFES) + Pós em Gestão Escolar" },
      { icon: BookOpen, label: "Metodologias Ativas de Ensino" },
      { icon: Brain, label: "Design Instrucional" },
    ],
    quote:
      "Educação é a ferramenta mais poderosa para transformar realidades.",
  },
  {
    id: "management",
    label: "Gestão",
    subtitle: "Visão estratégica",
    icon: Target,
    gradient: "from-emerald-500 to-teal-600",
    glowColor: "shadow-emerald-500/25",
    borderActive: "border-emerald-400",
    bgActive: "bg-emerald-500/5",
    textColor: "text-emerald-600",
    iconBg: "bg-gradient-to-br from-emerald-500 to-teal-600",
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
    glowColor: "shadow-rose-500/25",
    borderActive: "border-rose-400",
    bgActive: "bg-rose-500/5",
    textColor: "text-rose-600",
    iconBg: "bg-gradient-to-br from-rose-500 to-pink-600",
    skills: [
      { icon: Heart, label: "15+ Anos Dedicados à Educação" },
      { icon: Baby, label: "Mãe de 3 Filhos" },
      { icon: Home, label: "Equilíbrio Profissional e Pessoal" },
    ],
    quote: "Ser mãe de 3 me ensinou que educar é um ato de amor.",
  },
];

const intersections: Intersection[] = [
  {
    id: "edu-mgmt",
    pillars: ["education", "management"],
    label: "Estratégia Educacional",
    description:
      "A educação ganha escala quando aliada à gestão estratégica — treinamentos que geram métricas reais",
    icon: Lightbulb,
    gradient: "from-blue-500 to-emerald-500",
  },
  {
    id: "mgmt-life",
    pillars: ["management", "life"],
    label: "Liderança com Propósito",
    description:
      "Gestão humanizada nasce da experiência de vida — liderar é cuidar de pessoas com visão e empatia",
    icon: Users,
    gradient: "from-emerald-500 to-rose-500",
  },
  {
    id: "edu-life",
    pillars: ["life", "education"],
    label: "Aprendizado Contínuo",
    description:
      "A vida é a maior escola — cada experiência pessoal alimenta uma educação mais autêntica e profunda",
    icon: Zap,
    gradient: "from-rose-500 to-blue-500",
  },
];

export const CalinkaOrbital = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeIntersection, setActiveIntersection] = useState<string | null>(
    null
  );

  const isRelated = (catId: string) => {
    if (!activeIntersection) return false;
    const inter = intersections.find((i) => i.id === activeIntersection);
    return inter?.pillars.includes(catId) ?? false;
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden relative">
      {/* Background decorative mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-rose-100/40 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-100/30 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 via-emerald-50 to-rose-50 border border-gray-200 rounded-full text-sm font-medium text-gray-600 mb-5">
            <Sparkles className="w-4 h-4 text-amber-500" />
            Três Dimensões, Uma Visão
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Educação, Gestão e Vida em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-500 to-rose-500">
              Harmonia
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
            Os três pilares que definem a essência de Calinka se entrelaçam,
            gerando pontos de convergência únicos
          </p>
        </motion.div>

        {/* Central Profile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-6"
        >
          <div className="relative mb-5">
            {/* Animated gradient ring */}
            <motion.div
              className="absolute -inset-2 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #3b82f6, #10b981, #f43f5e, #3b82f6)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            {/* Outer glow */}
            <motion.div
              className="absolute -inset-4 rounded-full opacity-30 blur-xl"
              style={{
                background:
                  "conic-gradient(from 0deg, #3b82f6, #10b981, #f43f5e, #3b82f6)",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-[3px] border-white shadow-2xl">
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
          <div className="flex items-center gap-4 text-sm text-gray-500">
            {categories.map((cat) => (
              <span key={cat.id} className="flex items-center gap-1.5">
                <span
                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${cat.gradient}`}
                />
                {cat.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Pillar Cards */}
        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto mb-8">
          {categories.map((cat, index) => {
            const isActive = activeId === cat.id;
            const highlighted = isRelated(cat.id);

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
              >
                <motion.button
                  onClick={() => setActiveId(isActive ? null : cat.id)}
                  className={`w-full text-left rounded-2xl p-6 transition-all duration-300 border-2 backdrop-blur-sm ${
                    isActive
                      ? `${cat.bgActive} ${cat.borderActive} shadow-xl ${cat.glowColor}`
                      : highlighted
                      ? `bg-white/80 ${cat.borderActive} shadow-lg border-opacity-50`
                      : "bg-white/80 border-gray-100 hover:border-gray-200 hover:shadow-lg shadow-md"
                  }`}
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Card Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <motion.div
                      className={`w-12 h-12 rounded-xl ${cat.iconBg} flex items-center justify-center shadow-lg`}
                      animate={
                        isActive
                          ? { rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }
                          : {}
                      }
                      transition={{ duration: 0.6 }}
                    >
                      <cat.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg leading-tight">
                        {cat.label}
                      </h4>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {cat.subtitle}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: isActive ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`${cat.textColor} opacity-40`}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* Skills */}
                  <div className="space-y-3">
                    {cat.skills.map((skill, i) => (
                      <motion.div
                        key={skill.label}
                        className="flex items-center gap-3"
                        animate={isActive ? { x: 4 } : { x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 transition-colors ${
                            isActive ? `${cat.bgActive}` : ""
                          }`}
                        >
                          <skill.icon
                            className={`w-4 h-4 ${
                              isActive ? cat.textColor : "text-gray-400"
                            } transition-colors`}
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
                            <Sparkles className="w-4 h-4 shrink-0 mt-0.5 opacity-60" />
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

        {/* Intersections - Connection Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-6">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
              Pontos de Convergência
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {intersections.map((inter, index) => {
              const isActive = activeIntersection === inter.id;
              const pillar1 = categories.find(
                (c) => c.id === inter.pillars[0]
              );
              const pillar2 = categories.find(
                (c) => c.id === inter.pillars[1]
              );

              return (
                <motion.div
                  key={inter.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <motion.button
                    onClick={() =>
                      setActiveIntersection(isActive ? null : inter.id)
                    }
                    onMouseEnter={() => setActiveIntersection(inter.id)}
                    onMouseLeave={() => setActiveIntersection(null)}
                    className={`w-full text-left rounded-2xl p-5 transition-all duration-300 border-2 group ${
                      isActive
                        ? "bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 shadow-2xl shadow-gray-900/20"
                        : "bg-white/60 backdrop-blur-sm border-dashed border-gray-200 hover:border-gray-300 hover:shadow-md"
                    }`}
                    whileHover={{ y: -2 }}
                  >
                    {/* Connecting Dots */}
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${pillar1?.gradient}`}
                      />
                      <div
                        className={`flex-1 h-px bg-gradient-to-r ${inter.gradient} ${
                          isActive ? "opacity-60" : "opacity-20"
                        } transition-opacity`}
                      />
                      <motion.div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-br ${inter.gradient} flex items-center justify-center shadow-md`}
                        animate={
                          isActive
                            ? { scale: [1, 1.1, 1] }
                            : {}
                        }
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <inter.icon
                          className={`w-4 h-4 ${
                            isActive ? "text-white" : "text-white"
                          }`}
                        />
                      </motion.div>
                      <div
                        className={`flex-1 h-px bg-gradient-to-r ${inter.gradient} ${
                          isActive ? "opacity-60" : "opacity-20"
                        } transition-opacity`}
                      />
                      <div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${pillar2?.gradient}`}
                      />
                    </div>

                    {/* Labels */}
                    <div className="flex items-center justify-between text-[10px] font-medium mb-3">
                      <span
                        className={
                          isActive ? "text-gray-400" : `${pillar1?.textColor}`
                        }
                      >
                        {pillar1?.label}
                      </span>
                      <span
                        className={
                          isActive ? "text-gray-400" : `${pillar2?.textColor}`
                        }
                      >
                        {pillar2?.label}
                      </span>
                    </div>

                    {/* Content */}
                    <h5
                      className={`font-bold text-base mb-1 transition-colors ${
                        isActive ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {inter.label}
                    </h5>

                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="text-sm text-gray-400 leading-relaxed overflow-hidden"
                        >
                          {inter.description}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {!isActive && (
                      <p className="text-xs text-gray-400 mt-1">
                        Toque para explorar
                      </p>
                    )}
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Central Essence - Where All Three Meet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 max-w-3xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-emerald-500 to-rose-500 rounded-2xl" />
            <div className="absolute inset-[2px] bg-white rounded-[14px]" />

            <div className="relative px-8 py-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex -space-x-1">
                  {categories.map((cat) => (
                    <div
                      key={cat.id}
                      className={`w-8 h-8 rounded-full ${cat.iconBg} flex items-center justify-center border-2 border-white shadow-sm`}
                    >
                      <cat.icon className="w-4 h-4 text-white" />
                    </div>
                  ))}
                </div>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                A Essência Blau
              </h4>
              <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                Quando educação, gestão e vida se encontram, nasce uma abordagem
                única — transformar empresas em ambientes de aprendizado humano,
                estratégico e contínuo.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
