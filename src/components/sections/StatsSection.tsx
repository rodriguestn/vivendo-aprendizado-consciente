import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  GraduationCap,
  Building2,
  Users,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  {
    icon: GraduationCap,
    value: 15,
    suffix: "+",
    label: "Anos em Educação",
    description: "Experiência transformando pessoas e organizações",
  },
  {
    icon: Building2,
    value: 50,
    suffix: "+",
    label: "Empresas Atendidas",
    description: "Programas educacionais implantados com sucesso",
  },
  {
    icon: Users,
    value: 100,
    suffix: "+",
    label: "Líderes Formados",
    description: "Profissionais capacitados como multiplicadores",
  },
  {
    icon: TrendingUp,
    value: 95,
    suffix: "%",
    label: "Satisfação",
    description: "Dos clientes recomendam nossos programas",
  },
];

function AnimatedCounter({
  target,
  suffix,
  isInView,
}: {
  target: number;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Dark authoritative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900" />
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative">
        {/* Top trust strip */}
        <div className="py-5 border-b border-white/10">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-2 text-amber-400/90">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Mentora oficial no Programa Seedes — Governo do ES
              </span>
            </div>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
            <span className="text-xs text-white/40 font-medium">
              Referência em Educação Corporativa no Espírito Santo
            </span>
          </div>
        </div>

        {/* Main stats area */}
        <div className="py-14 lg:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative group"
              >
                {/* Divider between items (desktop) */}
                {index > 0 && (
                  <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                )}

                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center mb-5 group-hover:bg-white/10 transition-colors">
                    <stat.icon className="w-5 h-5 text-amber-400" />
                  </div>

                  <div className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.suffix}
                      isInView={isInView}
                    />
                  </div>

                  <div className="text-sm font-semibold text-white/90 mb-1">
                    {stat.label}
                  </div>

                  <div className="text-xs text-white/40 max-w-[180px] leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="py-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <p className="text-sm text-white/50">
            Transforme sua empresa em um ambiente de aprendizado contínuo
          </p>
          <Link
            to="/diagnostico"
            className="inline-flex items-center gap-2 px-5 py-2 bg-amber-400 hover:bg-amber-300 text-gray-900 text-sm font-semibold rounded-full transition-all shadow-lg shadow-amber-400/20"
          >
            Diagnosticar minha empresa
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
