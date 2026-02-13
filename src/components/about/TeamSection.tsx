import { motion } from "framer-motion";
import {
  Code2,
  BarChart3,
  GraduationCap,
  Megaphone,
  Quote,
  Users,
  Rocket,
  Monitor,
  ShoppingCart,
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
  },
  {
    icon: GraduationCap,
    area: "Pedagogia",
    description: "Design instrucional, metodologias ativas e avaliação",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: BarChart3,
    area: "Gestão",
    description: "Planejamento estratégico, métricas e cultura organizacional",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: Megaphone,
    area: "Vendas",
    description: "Estratégias comerciais, posicionamento e crescimento",
    gradient: "from-amber-500 to-orange-600",
  },
];

const rodriguesSkills = [
  { icon: ShoppingCart, label: "Vendas Consultivas & Estratégia Comercial" },
  { icon: Monitor, label: "Soluções Tecnológicas & Plataformas Digitais" },
  { icon: Rocket, label: "Inovação & Crescimento de Negócios" },
];

export const TeamSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Rodrigues Teixeira — Featured Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl">
              {/* Decorative bg */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
              </div>

              <div className="relative grid lg:grid-cols-5 gap-0">
                {/* Photo column */}
                <div className="lg:col-span-2 relative">
                  <div className="aspect-[3/4] lg:aspect-auto lg:h-full overflow-hidden">
                    <img
                      src={rodriguesPortrait}
                      alt="Rodrigues Teixeira — Cofundador da Blau"
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Gradient overlay for text readability on mobile */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-slate-900" />
                  </div>
                </div>

                {/* Content column */}
                <div className="lg:col-span-3 p-8 md:p-10 lg:p-12 flex flex-col justify-center relative">
                  {/* Badge */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-widest rounded-full border border-indigo-500/20">
                      Cofundador
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Rodrigues Teixeira
                  </h3>
                  <p className="text-indigo-300 font-medium text-lg mb-6">
                    Especialista em Vendas & Tecnologia
                  </p>

                  <p className="text-gray-400 leading-relaxed mb-8 max-w-lg">
                    Responsável por conectar estratégia comercial e inovação
                    digital na Blau. Atua na construção de soluções tecnológicas
                    que potencializam os programas educacionais, garantindo que
                    cada projeto tenha o suporte técnico e comercial necessário
                    para gerar resultados reais.
                  </p>

                  {/* Skills */}
                  <div className="space-y-3 mb-8">
                    {rodriguesSkills.map((skill) => (
                      <div
                        key={skill.label}
                        className="flex items-center gap-3"
                      >
                        <div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0">
                          <skill.icon className="w-4 h-4 text-indigo-400" />
                        </div>
                        <span className="text-sm text-gray-300">
                          {skill.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="pt-6 border-t border-white/10">
                    <blockquote className="flex items-start gap-3">
                      <Quote className="w-5 h-5 text-indigo-500/50 shrink-0 mt-0.5" />
                      <p className="text-base italic text-gray-500 leading-relaxed">
                        "Tecnologia é o meio, mas são as pessoas que transformam
                        resultados."
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

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
