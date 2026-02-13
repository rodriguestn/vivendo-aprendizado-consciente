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
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            Quem Está Por Trás
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Estratégia, Tecnologia e uma{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
              Rede de Especialistas
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">
            Além da liderança educacional de Calinka, a Blau conta com expertise
            em vendas e tecnologia e uma rede multidisciplinar pronta para
            atender cada projeto de ponta a ponta.
          </p>
        </motion.div>

        {/* Two-column layout: Rodrigues + Consultants side by side */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            {/* Rodrigues Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 rounded-2xl overflow-hidden shadow-xl h-full">
                {/* Glow */}
                <div className="absolute top-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />

                <div className="flex flex-col h-full">
                  {/* Photo */}
                  <div className="relative h-56 md:h-64 overflow-hidden shrink-0">
                    <img
                      src={rodriguesPortrait}
                      alt="Rodrigues Teixeira"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5">
                      <span className="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 text-[10px] font-bold uppercase tracking-widest rounded-full border border-indigo-500/20">
                        Cofundador
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      Rodrigues Teixeira
                    </h3>
                    <p className="text-indigo-300 font-medium text-sm mb-4">
                      Vendas & Tecnologia
                    </p>

                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      Conecta estratégia comercial e inovação digital,
                      garantindo que cada projeto tenha suporte técnico e
                      comercial para gerar resultados reais.
                    </p>

                    {/* Skills compact */}
                    <div className="space-y-2 mb-5">
                      {[
                        { icon: ShoppingCart, label: "Vendas Consultivas" },
                        { icon: Monitor, label: "Soluções Tecnológicas" },
                        { icon: Rocket, label: "Inovação & Crescimento" },
                      ].map((skill) => (
                        <div
                          key={skill.label}
                          className="flex items-center gap-2.5"
                        >
                          <div className="w-7 h-7 rounded-md bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0">
                            <skill.icon className="w-3.5 h-3.5 text-indigo-400" />
                          </div>
                          <span className="text-xs text-gray-300">
                            {skill.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="mt-auto pt-4 border-t border-white/10">
                      <blockquote className="flex items-start gap-2">
                        <Quote className="w-4 h-4 text-indigo-500/40 shrink-0 mt-0.5" />
                        <p className="text-xs italic text-gray-500 leading-relaxed">
                          "Tecnologia é o meio, mas são as pessoas que
                          transformam resultados."
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Consultants Network Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative rounded-2xl overflow-hidden h-full">
                {/* Gradient border */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-amber-500 rounded-2xl" />
                <div className="absolute inset-[2px] bg-white rounded-[14px]" />

                <div className="relative px-6 py-7 md:px-8 md:py-8 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        Rede de Consultores Associados
                      </h3>
                      <p className="text-sm text-gray-500">
                        Especialistas sob demanda para cada frente do seu
                        projeto
                      </p>
                    </div>
                    <div className="flex items-center -space-x-2.5 shrink-0">
                      <img
                        src={consultant1}
                        alt="Consultora"
                        className="w-9 h-9 rounded-full border-2 border-white shadow-sm object-cover"
                      />
                      <img
                        src={consultant2}
                        alt="Consultora"
                        className="w-9 h-9 rounded-full border-2 border-white shadow-sm object-cover"
                      />
                      <img
                        src={rodriguesPortrait}
                        alt="Consultor"
                        className="w-9 h-9 rounded-full border-2 border-white shadow-sm object-cover"
                      />
                      <div className="w-9 h-9 rounded-full border-2 border-white shadow-sm bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-[10px] font-bold">
                        +5
                      </div>
                    </div>
                  </div>

                  {/* Areas grid */}
                  <div className="grid grid-cols-2 gap-3 flex-1">
                    {consultantAreas.map((area, index) => (
                      <motion.div
                        key={area.area}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.06 }}
                        className="group"
                      >
                        <div className="rounded-xl border border-gray-100 p-4 hover:border-gray-200 hover:shadow-md transition-all bg-gray-50/50 h-full">
                          <div
                            className={`w-9 h-9 rounded-lg bg-gradient-to-br ${area.gradient} flex items-center justify-center mb-2.5 shadow-sm group-hover:scale-105 transition-transform`}
                          >
                            <area.icon className="w-4 h-4 text-white" />
                          </div>
                          <h4 className="font-bold text-gray-900 text-sm mb-1">
                            {area.area}
                          </h4>
                          <p className="text-[11px] text-gray-400 leading-relaxed">
                            {area.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom message */}
                  <div className="mt-5 pt-5 border-t border-gray-100 text-center">
                    <p className="text-xs text-gray-500">
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
      </div>
    </section>
  );
};
