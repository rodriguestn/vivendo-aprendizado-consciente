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
    description: "Plataformas, automação e ferramentas digitais",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: GraduationCap,
    area: "Pedagogia",
    description: "Design instrucional e metodologias ativas",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: BarChart3,
    area: "Gestão",
    description: "Estratégia, métricas e cultura organizacional",
    gradient: "from-purple-500 to-violet-600",
  },
  {
    icon: Megaphone,
    area: "Vendas",
    description: "Estratégias comerciais e crescimento",
    gradient: "from-amber-500 to-orange-600",
  },
];

export const TeamSection = () => {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            Quem Está Por Trás
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Estratégia, Tecnologia e uma{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
              Rede de Especialistas
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Além da liderança educacional de Calinka, a Blau conta com expertise
            em vendas e tecnologia e uma rede multidisciplinar para cada projeto.
          </p>
        </motion.div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gray-50 rounded-3xl p-6 md:p-8 lg:p-10">
              <div className="grid lg:grid-cols-5 gap-8 items-center">
                {/* Rodrigues — Left */}
                <div className="lg:col-span-2 flex flex-col items-center text-center">
                  {/* Photo */}
                  <div className="relative mb-5">
                    <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white">
                      <img
                        src={rodriguesPortrait}
                        alt="Rodrigues Teixeira"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg whitespace-nowrap">
                      Cofundador
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-0.5">
                    Rodrigues Teixeira
                  </h3>
                  <p className="text-sm text-indigo-600 font-medium mb-4">
                    Vendas & Tecnologia
                  </p>

                  <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-xs">
                    Conecta estratégia comercial e inovação digital, garantindo
                    suporte técnico e comercial para resultados reais.
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      { icon: ShoppingCart, label: "Vendas" },
                      { icon: Monitor, label: "Tecnologia" },
                      { icon: Rocket, label: "Inovação" },
                    ].map((skill) => (
                      <span
                        key={skill.label}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full text-xs font-medium text-gray-600 shadow-sm border border-gray-100"
                      >
                        <skill.icon className="w-3 h-3 text-indigo-500" />
                        {skill.label}
                      </span>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="mt-5 pt-5 border-t border-gray-200/60 w-full">
                    <blockquote className="flex items-center justify-center gap-2">
                      <Quote className="w-3.5 h-3.5 text-indigo-300 shrink-0" />
                      <p className="text-xs italic text-gray-400">
                        "Tecnologia é o meio, mas são as pessoas que transformam
                        resultados."
                      </p>
                    </blockquote>
                  </div>
                </div>

                {/* Divider */}
                <div className="hidden lg:flex justify-center">
                  <div className="w-px h-64 bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
                </div>
                <div className="lg:hidden w-full h-px bg-gray-200" />

                {/* Consultants — Right */}
                <div className="lg:col-span-2">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-0.5">
                        Consultores Associados
                      </h3>
                      <p className="text-xs text-gray-400">
                        Especialistas sob demanda
                      </p>
                    </div>
                    <div className="flex items-center -space-x-2">
                      <img
                        src={consultant1}
                        alt="Consultora"
                        className="w-8 h-8 rounded-full border-2 border-gray-50 shadow-sm object-cover"
                      />
                      <img
                        src={consultant2}
                        alt="Consultora"
                        className="w-8 h-8 rounded-full border-2 border-gray-50 shadow-sm object-cover"
                      />
                      <div className="w-8 h-8 rounded-full border-2 border-gray-50 shadow-sm bg-indigo-600 flex items-center justify-center text-white text-[9px] font-bold">
                        +5
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {consultantAreas.map((area, index) => (
                      <motion.div
                        key={area.area}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.06 }}
                        className="group"
                      >
                        <div className="flex items-center gap-3.5 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all">
                          <div
                            className={`w-9 h-9 rounded-lg bg-gradient-to-br ${area.gradient} flex items-center justify-center shadow-sm shrink-0 group-hover:scale-105 transition-transform`}
                          >
                            <area.icon className="w-4 h-4 text-white" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                              {area.area}
                            </h4>
                            <p className="text-[11px] text-gray-400 leading-tight mt-0.5 truncate">
                              {area.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <p className="text-[11px] text-gray-400 mt-4 text-center">
                    Equipe personalizada para as{" "}
                    <span className="font-semibold text-gray-600">
                      necessidades de cada projeto
                    </span>
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
