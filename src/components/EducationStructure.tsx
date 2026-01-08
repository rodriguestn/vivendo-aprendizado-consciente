import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Users,
  Target,
  Lightbulb,
  GraduationCap,
  Compass,
  Heart,
  Sparkles,
} from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Consciência",
    description: "Decisões estratégicas",
    angle: 0,
    color: "text-accent",
    bgColor: "bg-accent/20",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Trabalho em rede",
    angle: 45,
    color: "text-primary-light",
    bgColor: "bg-primary/20",
  },
  {
    icon: Target,
    title: "Estratégia",
    description: "Metas claras",
    angle: 90,
    color: "text-accent",
    bgColor: "bg-accent/20",
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Soluções criativas",
    angle: 135,
    color: "text-primary-light",
    bgColor: "bg-primary/20",
  },
  {
    icon: GraduationCap,
    title: "Aprendizagem",
    description: "Evolução contínua",
    angle: 180,
    color: "text-accent",
    bgColor: "bg-accent/20",
  },
  {
    icon: Compass,
    title: "Autonomia",
    description: "Protagonismo real",
    angle: 225,
    color: "text-primary-light",
    bgColor: "bg-primary/20",
  },
  {
    icon: Heart,
    title: "Cultura",
    description: "Valores vivos",
    angle: 270,
    color: "text-accent",
    bgColor: "bg-accent/20",
  },
  {
    icon: Sparkles,
    title: "Impacto",
    description: "Resultados mensuráveis",
    angle: 315,
    color: "text-primary-light",
    bgColor: "bg-primary/20",
  },
];

export const EducationStructure = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Estrutura Integrada
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Ecossistema de{" "}
            <span className="text-primary">Aprendizagem Viva</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Uma estrutura orgânica onde cada elemento se conecta e potencializa
            os demais, criando um ambiente de desenvolvimento contínuo e
            transformação sustentável.
          </p>
        </motion.div>

        {/* Orbital Structure */}
        <div className="relative flex items-center justify-center min-h-[600px] md:min-h-[700px]">
          {/* Center Core */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute z-20"
          >
            <div className="relative">
              {/* Pulsing rings */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary/20"
              />
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 rounded-full bg-accent/20"
              />
              {/* Core */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 bg-gradient-hero rounded-full flex items-center justify-center shadow-strong">
                <div className="text-center text-primary-foreground">
                  <span className="text-2xl md:text-3xl font-serif font-bold block">
                    Blau
                  </span>
                  <span className="text-xs md:text-sm opacity-80">
                    Núcleo de Educação
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Orbital Rings */}
          <motion.div
            initial={{ opacity: 0, rotate: -180 }}
            animate={isInView ? { opacity: 0.3, rotate: 0 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] border-2 border-dashed border-primary/30 rounded-full"
          />
          <motion.div
            initial={{ opacity: 0, rotate: 180 }}
            animate={isInView ? { opacity: 0.2, rotate: 0 } : {}}
            transition={{ duration: 1.5, delay: 0.7 }}
            className="absolute w-[450px] h-[450px] md:w-[550px] md:h-[550px] border border-accent/20 rounded-full"
          />

          {/* Orbiting Elements */}
          {pillars.map((pillar, index) => {
            const radius = 225; // Distance from center (md screens)
            const radiusSm = 160; // Distance for small screens
            const angleRad = (pillar.angle * Math.PI) / 180;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        scale: 1,
                      }
                    : {}
                }
                transition={{
                  duration: 0.6,
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                className="absolute"
                style={{
                  left: `calc(50% + ${Math.cos(angleRad) * radiusSm}px)`,
                  top: `calc(50% + ${Math.sin(angleRad) * radiusSm}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Connector Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="absolute w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent origin-left hidden md:block"
                  style={{
                    transform: `rotate(${pillar.angle + 180}deg)`,
                    left: "50%",
                    top: "50%",
                  }}
                />

                {/* Pillar Card */}
                <motion.div
                  whileHover={{ scale: 1.1, zIndex: 30 }}
                  className="relative group cursor-pointer"
                >
                  <div
                    className={`w-20 h-20 md:w-24 md:h-24 ${pillar.bgColor} backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center shadow-medium hover:shadow-strong transition-all duration-300 border border-border/50`}
                  >
                    <pillar.icon className={`w-6 h-6 md:w-8 md:h-8 ${pillar.color} mb-1`} />
                    <span className="text-xs md:text-sm font-semibold text-foreground text-center leading-tight">
                      {pillar.title}
                    </span>
                  </div>

                  {/* Tooltip */}
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-12 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-40">
                    <div className="bg-foreground text-background text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
                      {pillar.description}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={
                isInView
                  ? {
                      opacity: [0.3, 0.6, 0.3],
                      x: [0, Math.random() * 40 - 20, 0],
                      y: [0, Math.random() * 40 - 20, 0],
                    }
                  : {}
              }
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
              className="absolute w-2 h-2 bg-accent/40 rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
            />
          ))}
        </div>

        {/* Mobile List View */}
        <div className="md:hidden mt-8 grid grid-cols-2 gap-4">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className={`${pillar.bgColor} p-4 rounded-xl border border-border/50`}
            >
              <pillar.icon className={`w-6 h-6 ${pillar.color} mb-2`} />
              <h4 className="font-semibold text-foreground text-sm">
                {pillar.title}
              </h4>
              <p className="text-xs text-muted-foreground">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
