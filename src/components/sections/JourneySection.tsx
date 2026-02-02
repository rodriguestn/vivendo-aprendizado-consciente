import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, TrendingDown, RefreshCw } from "lucide-react";

const journeyStages = [
  {
    title: "Infância",
    subtitle: "Curiosidade Natural",
    description: "Questionamos tudo, experimentamos sem medo de errar, e aprendemos pela descoberta",
    principle: "Aprender é explorar",
    icon: Sparkles,
    color: "from-blue-400 to-cyan-400",
    images: [
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
      "https://images.unsplash.com/photo-1587616211892-e5e9e5f49afe",
      "https://images.unsplash.com/photo-1544776193-352d25ca82cd",
      "https://images.unsplash.com/photo-1472162072942-cd5147eb3902",
    ],
  },
  {
    title: "Adolescência",
    subtitle: "Aprendizado Estruturado",
    description: "Absorvemos padrões, seguimos currículos rígidos e começamos a temer o erro",
    principle: "Aprender é reproduzir",
    icon: TrendingDown,
    color: "from-orange-400 to-amber-400",
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
    ],
  },
  {
    title: "Vida Profissional",
    subtitle: "Execução Mecânica",
    description: "Fazemos sem questionar, evitamos riscos e perdemos a capacidade de aprender profundamente",
    principle: "Aprender é supérfluo",
    icon: RefreshCw,
    color: "from-slate-400 to-gray-500",
    images: [
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
      "https://images.unsplash.com/photo-1552664730-d307ca884978",
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    ],
  },
];

export const JourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <RefreshCw className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              A Jornada do Aprendizado
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            O que aconteceu com nossa{" "}
            <span className="text-primary">capacidade de aprender?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Nascemos curiosos, prontos para descobrir o mundo. Mas ao longo da vida,
            os princípios educacionais que nos tornavam aprendizes naturais são
            gradualmente substituídos por padrões rígidos e execução mecânica.
          </p>
          <blockquote className="text-xl md:text-2xl font-serif italic text-primary border-l-4 border-primary pl-6 max-w-3xl mx-auto">
            "A Blau Consultoria resgata os princípios educacionais fundamentais,
            transformando profissionais em aprendizes conscientes novamente."
          </blockquote>
        </motion.div>

        {/* Journey Stages */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {journeyStages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="bg-card border-2 border-border rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-500">
                {/* Image Grid */}
                <div className="relative h-80 overflow-hidden">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stage.color} opacity-20 mix-blend-multiply z-10`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/40 to-transparent z-20" />

                  {/* Images Grid */}
                  <div className="grid grid-cols-2 gap-1 h-full">
                    {stage.images.map((image, imgIndex) => (
                      <motion.div
                        key={imgIndex}
                        className="relative overflow-hidden"
                        initial={{ opacity: 0, scale: 1.2 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: index * 0.2 + imgIndex * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <img
                          src={image}
                          alt={`${stage.title} - ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Stage Icon */}
                  <motion.div
                    className="absolute top-4 right-4 z-30"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${stage.color} rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm`}>
                      <stage.icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {stage.title}
                    </h3>
                    <p className="text-sm font-semibold text-primary">
                      {stage.subtitle}
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {stage.description}
                  </p>

                  {/* Principle Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-foreground">
                      {stage.principle}
                    </span>
                  </div>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className={`h-1 bg-gradient-to-r ${stage.color}`}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                />
              </div>

              {/* Connection Arrow (except for last card) */}
              {index < journeyStages.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-1/2 -right-5 z-10"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 border border-primary/20"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              É possível resgatar a curiosidade e o prazer de aprender
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nossa metodologia reconecta profissionais com os princípios educacionais
              fundamentais: curiosidade, experimentação, reflexão crítica e aprendizado contínuo.
              Quando sua equipe volta a aprender conscientemente, a inovação se torna natural.
            </p>
            <motion.button
              className="px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-full shadow-lg transition-all duration-300 inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RefreshCw className="w-5 h-5" />
              Reconectar minha equipe ao aprendizado
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
