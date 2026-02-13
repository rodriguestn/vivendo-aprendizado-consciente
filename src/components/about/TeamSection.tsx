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
  CheckCircle2,
  Shield,
} from "lucide-react";
import rodriguesPortrait from "@/assets/rodrigues-portrait.png";

const AVATAR_URLS = [
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=120&h=120&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
];

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
            <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-3xl border border-gray-100 shadow-sm p-8 md:p-10 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                {/* Rodrigues — Left */}
                <div>
                  <div className="flex gap-5 mb-6">
                    {/* Photo */}
                    <div className="shrink-0">
                      <div className="relative">
                        <div className="w-32 h-40 md:w-36 md:h-44 rounded-2xl overflow-hidden shadow-lg">
                          <img
                            src={rodriguesPortrait}
                            alt="Rodrigues Teixeira"
                            className="w-full h-full object-cover"
                            style={{ objectPosition: "50% 20%" }}
                          />
                        </div>
                        <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-2.5 py-0.5 bg-indigo-600 text-white text-[9px] font-bold uppercase tracking-wider rounded-full shadow-md whitespace-nowrap">
                          Cofundador
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="pt-1 flex-1">
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">
                        Rodrigues Teixeira
                      </h3>
                      <p className="text-sm text-indigo-600 font-medium mb-3">
                        Vendas & Tecnologia
                      </p>

                      <p className="text-sm text-gray-500 leading-relaxed mb-4">
                        Responsável por conectar estratégia comercial e inovação
                        digital na Blau, garantindo que cada projeto tenha
                        suporte técnico e comercial para gerar resultados reais.
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          { icon: ShoppingCart, label: "Vendas Consultivas" },
                          { icon: Monitor, label: "Soluções Digitais" },
                          { icon: Rocket, label: "Inovação" },
                        ].map((skill) => (
                          <span
                            key={skill.label}
                            className="inline-flex items-center gap-1 px-2.5 py-1 bg-white rounded-full text-[11px] font-medium text-gray-600 border border-gray-100"
                          >
                            <skill.icon className="w-3 h-3 text-indigo-500" />
                            {skill.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Authority highlights */}
                  <div className="bg-white rounded-xl border border-gray-100 p-4 mb-4">
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div>
                        <p className="text-lg font-bold text-indigo-600">10+</p>
                        <p className="text-[10px] text-gray-400 leading-tight">
                          Anos em Vendas & Tech
                        </p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-indigo-600">30+</p>
                        <p className="text-[10px] text-gray-400 leading-tight">
                          Projetos Entregues
                        </p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-indigo-600">100%</p>
                        <p className="text-[10px] text-gray-400 leading-tight">
                          Foco em Resultados
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="flex items-start gap-2 pt-4 border-t border-gray-200/60">
                    <Quote className="w-3.5 h-3.5 text-indigo-300 shrink-0 mt-0.5" />
                    <p className="text-xs italic text-gray-400 leading-relaxed">
                      "Tecnologia é o meio, mas são as pessoas que transformam
                      resultados. Minha missão é garantir que cada solução gere
                      impacto mensurável."
                    </p>
                  </blockquote>
                </div>

                {/* Consultants — Right */}
                <div className="relative lg:pl-10 lg:before:absolute lg:before:left-0 lg:before:top-2 lg:before:bottom-2 lg:before:w-px lg:before:bg-gradient-to-b lg:before:from-transparent lg:before:via-gray-200 lg:before:to-transparent">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 leading-tight">
                        Consultores Associados
                      </h3>
                      <p className="text-xs text-gray-400 mt-0.5">
                        Especialistas sob demanda para cada frente
                      </p>
                    </div>
                    <div className="flex items-center -space-x-2">
                      {AVATAR_URLS.map((url, i) => (
                        <img
                          key={i}
                          src={url}
                          alt={`Consultor ${i + 1}`}
                          className="w-8 h-8 rounded-full border-2 border-gray-50 shadow-sm object-cover"
                        />
                      ))}
                      <div className="w-8 h-8 rounded-full border-2 border-gray-50 shadow-sm bg-indigo-600 flex items-center justify-center text-white text-[9px] font-bold">
                        +4
                      </div>
                    </div>
                  </div>

                  {/* Trust line */}
                  <div className="flex items-center gap-1.5 mb-5">
                    <Shield className="w-3 h-3 text-emerald-500" />
                    <p className="text-[11px] text-emerald-600 font-medium">
                      Profissionais certificados e com experiência corporativa
                      comprovada
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {consultantAreas.map((area, index) => (
                      <motion.div
                        key={area.area}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + index * 0.06 }}
                        className="group"
                      >
                        <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all">
                          <div
                            className={`w-9 h-9 rounded-lg bg-gradient-to-br ${area.gradient} flex items-center justify-center shadow-sm shrink-0 group-hover:scale-105 transition-transform`}
                          >
                            <area.icon className="w-4 h-4 text-white" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm leading-tight">
                              {area.area}
                            </h4>
                            <p className="text-[11px] text-gray-400 leading-tight mt-0.5">
                              {area.description}
                            </p>
                          </div>
                          <CheckCircle2 className="w-4 h-4 text-gray-200 shrink-0 group-hover:text-emerald-400 transition-colors" />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom authority */}
                  <div className="mt-5 pt-5 border-t border-gray-200/60">
                    <p className="text-xs text-gray-500 leading-relaxed text-center">
                      Cada projeto recebe uma{" "}
                      <span className="font-semibold text-gray-700">
                        equipe sob medida
                      </span>{" "}
                      com os especialistas mais adequados — montamos o time
                      ideal para as necessidades específicas da sua empresa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
