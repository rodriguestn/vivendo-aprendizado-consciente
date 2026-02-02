import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Brain,
  Users,
  Target,
  Lightbulb,
  GraduationCap,
  Compass,
  Heart,
  Sparkles,
  BookOpen,
  Briefcase,
  PenTool,
  BarChart3,
  Presentation,
  Trophy,
} from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Consciência",
    description: "Decisões estratégicas com clareza mental",
    classroomIcon: BookOpen,
    corporateIcon: Briefcase,
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Trabalho em rede multidisciplinar",
    classroomIcon: GraduationCap,
    corporateIcon: Presentation,
  },
  {
    icon: Target,
    title: "Estratégia",
    description: "Metas claras e mensuráveis",
    classroomIcon: PenTool,
    corporateIcon: BarChart3,
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Soluções criativas e disruptivas",
    classroomIcon: Sparkles,
    corporateIcon: Trophy,
  },
  {
    icon: Compass,
    title: "Autonomia",
    description: "Protagonismo e autodireção",
    classroomIcon: BookOpen,
    corporateIcon: Target,
  },
  {
    icon: Heart,
    title: "Cultura",
    description: "Valores vivos na prática",
    classroomIcon: Users,
    corporateIcon: Heart,
  },
];

export const EducationStructure = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-background via-secondary/30 to-background overflow-hidden relative">
      {/* Background Pattern - Classroom + Corporate blend */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary/5 border border-primary/10 rounded-full mb-8"
          >
            <div className="flex items-center gap-1">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">+</span>
              <Briefcase className="w-4 h-4 text-accent" />
            </div>
            <span className="text-sm font-medium text-foreground">
              Onde a Sala de Aula encontra o Mundo Corporativo
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
            Ecossistema de{" "}
            <span className="relative">
              <span className="text-primary">Aprendizagem Viva</span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full origin-left"
              />
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Uma estrutura orgânica que integra metodologias pedagógicas inovadoras 
            com a prática corporativa real, criando pontes entre o aprender e o fazer.
          </p>
        </motion.div>

        {/* Main Visual Structure */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Hub */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
            className="relative flex items-center justify-center mb-16"
          >
            <div className="relative">
              {/* Outer glow */}
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 60px 20px hsla(var(--primary), 0.15)",
                    "0 0 80px 30px hsla(var(--primary), 0.2)",
                    "0 0 60px 20px hsla(var(--primary), 0.15)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 rounded-full"
              />
              
              {/* Core circle with dual icons */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-primary via-primary to-primary-dark rounded-full flex items-center justify-center shadow-strong overflow-hidden">
                {/* Inner pattern */}
                <div className="absolute inset-2 border-2 border-primary-foreground/20 rounded-full" />
                <div className="absolute inset-4 border border-primary-foreground/10 rounded-full" />
                
                <div className="text-center text-primary-foreground relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <GraduationCap className="w-6 h-6 md:w-7 md:h-7 opacity-90" />
                    <span className="text-lg opacity-60">×</span>
                    <Briefcase className="w-6 h-6 md:w-7 md:h-7 opacity-90" />
                  </div>
                  <span className="text-3xl md:text-4xl font-serif font-bold block">
                    Blau
                  </span>
                  <span className="text-xs md:text-sm opacity-80 font-medium tracking-wide">
                    EDUCAÇÃO CORPORATIVA
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Connecting Lines Visual */}
          <div className="absolute top-[200px] left-1/2 -translate-x-1/2 w-full h-24 hidden md:block">
            <svg className="w-full h-full" viewBox="0 0 1000 100" fill="none" preserveAspectRatio="xMidYMid meet">
              {pillars.map((_, index) => {
                const startX = 500;
                const endX = 83.33 + (index * 166.66);
                return (
                  <motion.path
                    key={index}
                    d={`M ${startX} 0 Q ${startX} 50, ${endX} 100`}
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    strokeDasharray="8 4"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 0.6 } : {}}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                  />
                );
              })}
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Pillar Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mt-8 md:mt-16">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                onMouseEnter={() => setHoveredPillar(index)}
                onMouseLeave={() => setHoveredPillar(null)}
                className="group relative"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative bg-card border border-border/50 rounded-2xl p-6 h-full shadow-soft hover:shadow-strong transition-all duration-500 overflow-hidden"
                >
                  {/* Hover gradient overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredPillar === index ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"
                  />
                  
                  {/* Top icons - dual concept */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1.5">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <pillar.classroomIcon className="w-4 h-4 text-primary" />
                      </div>
                      <motion.div
                        animate={{ 
                          x: hoveredPillar === index ? [0, 2, 0] : 0 
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-muted-foreground/40 text-sm"
                      >
                        →
                      </motion.div>
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                        <pillar.corporateIcon className="w-4 h-4 text-accent" />
                      </div>
                    </div>
                  </div>

                  {/* Main Icon */}
                  <div className="relative mb-4">
                    <motion.div
                      animate={{
                        scale: hoveredPillar === index ? [1, 1.1, 1] : 1,
                      }}
                      transition={{ duration: 0.4 }}
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center"
                    >
                      <pillar.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="font-serif font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Bottom accent line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredPillar === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent origin-left"
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Integration Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12"
          >
            {/* Left - Classroom */}
            <div className="flex items-center gap-3 px-6 py-3 bg-primary/5 rounded-full border border-primary/10">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Metodologias Ativas</span>
            </div>
            
            {/* Center connection */}
            <div className="hidden md:flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 rounded-full bg-primary/40"
              />
              <div className="w-16 h-0.5 bg-gradient-to-r from-primary/40 via-accent to-primary/40 rounded-full" />
              <motion.div
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 rounded-full bg-accent/60"
              />
            </div>

            {/* Right - Corporate */}
            <div className="flex items-center gap-3 px-6 py-3 bg-accent/5 rounded-full border border-accent/10">
              <Briefcase className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-foreground">Resultados Práticos</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
