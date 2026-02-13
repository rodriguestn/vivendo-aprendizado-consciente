import { motion } from "framer-motion";
import {
  Code2,
  BarChart3,
  GraduationCap,
  Megaphone,
  Linkedin,
  Quote,
  Sparkles,
  Users,
} from "lucide-react";
import rodriguesPortrait from "@/assets/rodrigues-portrait.png";
import consultant1 from "@/assets/consultant-1.png";
import consultant2 from "@/assets/consultant-2.png";

const consultantAreas = [
  {
    icon: Code2,
    area: "Tecnologia",
    description: "Plataformas de aprendizado, automação e ferramentas digitais",
    gradient: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    icon: GraduationCap,
    area: "Pedagogia",
    description: "Design instrucional, metodologias ativas e avaliação",
    gradient: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-600",
  },
  {
    icon: BarChart3,
    area: "Gestão",
    description: "Planejamento estratégico, métricas e cultura organizacional",
    gradient: "from-purple-500 to-violet-600",
    bgLight: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    icon: Megaphone,
    area: "Vendas",
    description: "Estratégias comerciais, posicionamento e crescimento",
    gradient: "from-amber-500 to-orange-600",
    bgLight: "bg-amber-50",
    textColor: "text-amber-600",
  },
];

export const TeamSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            Nosso Time
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Liderança e Especialistas que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Fazem Acontecer
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Uma equipe multidisciplinar com consultores especializados para
            atender as necessidades específicas de cada projeto.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Founders Row */}
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {/* Calinka Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 md:p-8 shadow-lg hover:shadow-xl hover:border-blue-200 transition-all h-full">
                <div className="flex items-start gap-5">
                  {/* Photo */}
                  <div className="relative shrink-0">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border-2 border-gray-100 shadow-md">
                      <img
                        src={consultant2}
                        alt="Calinka Rodor"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider rounded">
                        Fundadora
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-0.5">
                      Calinka Rodor
                    </h3>
                    <p className="text-sm text-blue-600 font-medium mb-3">
                      Educação Corporativa & Estratégia Pedagógica
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      15+ anos em educação. Especialista em transformar empresas
                      em ambientes de aprendizado contínuo.
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <blockquote className="flex items-start gap-2">
                    <Quote className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
                    <p className="text-sm italic text-gray-400 leading-relaxed">
                      "Toda empresa pode se tornar um ambiente de aprendizado
                      contínuo."
                    </p>
                  </blockquote>
                </div>
              </div>
            </motion.div>

            {/* Rodrigues Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl border-2 border-gray-100 p-6 md:p-8 shadow-lg hover:shadow-xl hover:border-indigo-200 transition-all h-full">
                <div className="flex items-start gap-5">
                  {/* Photo */}
                  <div className="relative shrink-0">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl overflow-hidden border-2 border-gray-100 shadow-md">
                      <img
                        src={rodriguesPortrait}
                        alt="Rodrigues Teixeira"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
                      <Code2 className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-[10px] font-bold uppercase tracking-wider rounded">
                        Cofundador
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-0.5">
                      Rodrigues Teixeira
                    </h3>
                    <p className="text-sm text-indigo-600 font-medium mb-3">
                      Vendas & Tecnologia
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Especialista em vendas consultivas e soluções
                      tecnológicas. Responsável por conectar estratégia comercial
                      e inovação digital na Blau.
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <blockquote className="flex items-start gap-2">
                    <Quote className="w-4 h-4 text-indigo-300 shrink-0 mt-0.5" />
                    <p className="text-sm italic text-gray-400 leading-relaxed">
                      "Tecnologia é o meio, mas são as pessoas que transformam
                      resultados."
                    </p>
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Consultants Network */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 rounded-2xl" />
              <div className="absolute inset-[2px] bg-white rounded-[14px]" />

              <div className="relative px-6 md:px-10 py-8 md:py-10">
                {/* Section title */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      Rede de Consultores Associados
                    </h3>
                    <p className="text-sm text-gray-500">
                      Especialistas sob demanda para cada frente do seu projeto
                    </p>
                  </div>
                  <div className="flex items-center -space-x-3">
                    <img
                      src={consultant1}
                      alt="Consultora"
                      className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
                    />
                    <img
                      src={consultant2}
                      alt="Consultora"
                      className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
                    />
                    <img
                      src={rodriguesPortrait}
                      alt="Consultor"
                      className="w-10 h-10 rounded-full border-2 border-white shadow-sm object-cover"
                    />
                    <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                      +5
                    </div>
                  </div>
                </div>

                {/* Areas grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {consultantAreas.map((area, index) => (
                    <motion.div
                      key={area.area}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.08 }}
                      className="group"
                    >
                      <div className="rounded-xl border border-gray-100 p-4 hover:border-gray-200 hover:shadow-md transition-all bg-gray-50/50 h-full">
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-br ${area.gradient} flex items-center justify-center mb-3 shadow-sm group-hover:scale-105 transition-transform`}
                        >
                          <area.icon className="w-5 h-5 text-white" />
                        </div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1">
                          {area.area}
                        </h4>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom message */}
                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                  <p className="text-sm text-gray-500">
                    Cada projeto recebe uma equipe personalizada com os
                    especialistas mais adequados às suas{" "}
                    <span className="font-semibold text-gray-700">
                      necessidades específicas
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
