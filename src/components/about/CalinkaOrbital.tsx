import { motion } from "framer-motion";
import {
  GraduationCap,
  Heart,
  Target,
  Users,
  Lightbulb,
  BookOpen,
  Award,
  TrendingUp,
  Sparkles,
  Baby,
  Home,
  Compass,
  Brain,
  MessageCircle,
  Rocket,
  Shield
} from "lucide-react";
import calinkaPortrait from "@/assets/calinka-portrait.jpg";

interface OrbitItem {
  icon: React.ElementType;
  label: string;
  color: string;
  delay: number;
}

const educationItems: OrbitItem[] = [
  { icon: GraduationCap, label: "Formação Acadêmica", color: "from-blue-500 to-blue-600", delay: 0 },
  { icon: BookOpen, label: "Metodologias Ativas", color: "from-blue-400 to-blue-500", delay: 0.1 },
  { icon: Brain, label: "Design Instrucional", color: "from-indigo-500 to-indigo-600", delay: 0.2 },
  { icon: MessageCircle, label: "Comunicação", color: "from-blue-600 to-indigo-600", delay: 0.3 },
];

const managementItems: OrbitItem[] = [
  { icon: Target, label: "Visão Estratégica", color: "from-emerald-500 to-teal-600", delay: 0 },
  { icon: TrendingUp, label: "Gestão de Resultados", color: "from-teal-500 to-emerald-600", delay: 0.1 },
  { icon: Users, label: "Liderança de Equipes", color: "from-emerald-400 to-teal-500", delay: 0.2 },
  { icon: Rocket, label: "Mentoria de Startups", color: "from-teal-600 to-emerald-700", delay: 0.3 },
];

const lifeItems: OrbitItem[] = [
  { icon: Heart, label: "Paixão por Ensinar", color: "from-rose-500 to-pink-600", delay: 0 },
  { icon: Baby, label: "Mãe de 3 Filhos", color: "from-pink-500 to-rose-600", delay: 0.1 },
  { icon: Home, label: "Equilíbrio Vida-Trabalho", color: "from-rose-400 to-pink-500", delay: 0.2 },
  { icon: Compass, label: "Propósito de Vida", color: "from-pink-600 to-rose-700", delay: 0.3 },
];

const OrbitRing = ({
  items,
  radius,
  duration,
  direction = 1,
  category,
  categoryColor
}: {
  items: OrbitItem[];
  radius: number;
  duration: number;
  direction?: number;
  category: string;
  categoryColor: string;
}) => {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      animate={{ rotate: direction * 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      {items.map((item, index) => {
        const angle = (index * 360) / items.length;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <motion.div
            key={item.label}
            className="absolute"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: item.delay + 0.5, duration: 0.5 }}
          >
            <motion.div
              animate={{ rotate: -direction * 360 }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
              className="group relative"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform`}>
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>

              {/* Tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                <span className="px-2 py-1 bg-gray-900 text-white text-xs rounded-md shadow-lg">
                  {item.label}
                </span>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export const CalinkaOrbital = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 via-emerald-100 to-rose-100 text-gray-700 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 text-amber-500" />
            A Profissional Por Trás da Blau
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Educação, Gestão e Vida em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-emerald-500 to-rose-500">
              Harmonia
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Uma trajetória construída pela união de três pilares fundamentais:
            a excelência acadêmica, a visão estratégica de gestão e a riqueza
            das experiências de vida — incluindo a missão mais importante: ser mãe.
          </p>
        </motion.div>

        {/* Orbital Visualization */}
        <div className="relative flex items-center justify-center min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
          {/* Background Decorative Circles */}
          <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[480px] lg:h-[480px] rounded-full border border-blue-200/50" />
          <div className="absolute w-[380px] h-[380px] md:w-[500px] md:h-[500px] lg:w-[620px] lg:h-[620px] rounded-full border border-emerald-200/50" />
          <div className="absolute w-[480px] h-[480px] md:w-[620px] md:h-[620px] lg:w-[760px] lg:h-[760px] rounded-full border border-rose-200/50" />

          {/* Connecting Lines - Decorative */}
          <svg className="absolute w-full h-full pointer-events-none opacity-20" viewBox="0 0 800 800">
            <defs>
              <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#10B981" />
              </linearGradient>
              <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#F43F5E" />
              </linearGradient>
              <linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F43F5E" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Orbit Rings */}
          <OrbitRing
            items={educationItems}
            radius={140}
            duration={40}
            direction={1}
            category="Educação"
            categoryColor="blue"
          />
          <OrbitRing
            items={managementItems}
            radius={200}
            duration={50}
            direction={-1}
            category="Gestão"
            categoryColor="emerald"
          />
          <OrbitRing
            items={lifeItems}
            radius={260}
            duration={60}
            direction={1}
            category="Vida"
            categoryColor="rose"
          />

          {/* Center - Calinka Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative z-20"
          >
            {/* Glowing Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-emerald-500 to-rose-500 rounded-full blur-2xl opacity-30 scale-110" />

            {/* White Ring */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full bg-white p-2 shadow-2xl">
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-emerald-500 to-rose-500 p-1">
                <div className="w-full h-full rounded-full bg-white" />
              </div>

              {/* Portrait */}
              <img
                src={calinkaPortrait}
                alt="Calinka Rodor"
                className="relative w-full h-full rounded-full object-cover z-10"
              />
            </div>

            {/* Name Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              <div className="px-4 py-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-full shadow-xl">
                <p className="font-bold text-sm md:text-base">Calinka Rodor</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Legend / Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 md:gap-8 mt-16 max-w-5xl mx-auto"
        >
          {/* Education */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Educação</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Mais de 15 anos dedicados ao ensino, com formação acadêmica sólida
              e domínio de metodologias que transformam aprendizado em resultados.
            </p>
            <div className="flex flex-wrap gap-2">
              {educationItems.map((item) => (
                <span key={item.label} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* Management */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Gestão</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Visão estratégica para criar núcleos educacionais sustentáveis,
              com foco em resultados mensuráveis e desenvolvimento de lideranças.
            </p>
            <div className="flex flex-wrap gap-2">
              {managementItems.map((item) => (
                <span key={item.label} className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full">
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* Life */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Vida</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Mãe de 3 filhos, Calinka entende que a verdadeira educação acontece
              quando conectamos propósito, empatia e experiências reais.
            </p>
            <div className="flex flex-wrap gap-2">
              {lifeItems.map((item) => (
                <span key={item.label} className="px-2 py-1 bg-rose-50 text-rose-700 text-xs rounded-full">
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-xl md:text-2xl text-gray-600 italic max-w-3xl mx-auto">
            "Ser mãe me ensinou que <span className="text-gray-900 font-semibold">educar é um ato de amor e paciência</span>.
            Essa mesma dedicação guia meu trabalho com empresas — porque no fim,
            são sempre pessoas que estamos ajudando a crescer."
          </blockquote>
          <p className="mt-4 text-gray-500 font-medium">— Calinka Rodor</p>
        </motion.div>
      </div>
    </section>
  );
};
