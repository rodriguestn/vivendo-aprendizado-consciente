import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Map, TrendingUp, Sparkles, Compass, MapPin } from "lucide-react";
import { useRef } from "react";

export const BlauMapaHeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Floating map pins
  const floatingPins = [
    { delay: 0.2, x: "15%", y: "20%", duration: 18 },
    { delay: 0.4, x: "85%", y: "25%", duration: 22 },
    { delay: 0.6, x: "20%", y: "70%", duration: 20 },
    { delay: 0.3, x: "80%", y: "65%", duration: 24 },
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="treasure-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="white" />
              <path d="M 30 0 L 30 60 M 0 30 L 60 30" stroke="white" strokeWidth="0.3" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#treasure-grid)" />
        </svg>
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-20 -left-40 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 -right-40 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating Map Pins */}
      {floatingPins.map((pin, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: pin.x, top: pin.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
            y: [0, -15, 0],
          }}
          transition={{
            delay: pin.delay,
            duration: pin.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
            <MapPin className="w-7 h-7 text-yellow-300" />
          </div>
        </motion.div>
      ))}

      {/* Treasure Chest Illustration (Abstract) */}
      <motion.div
        className="absolute top-1/4 right-10 hidden xl:block"
        initial={{ opacity: 0, x: 50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <motion.div
          className="relative"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl shadow-2xl flex items-center justify-center border-4 border-yellow-300/30">
            <Sparkles className="w-16 h-16 text-white" />
          </div>
          <motion.div
            className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-300 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div style={{ opacity }} className="relative container mx-auto px-6 py-32 pt-40 z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 shadow-lg"
          >
            <Compass className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-semibold text-white">
              Descubra os tesouros escondidos no seu negócio
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-8 tracking-tight">
              <span className="relative inline-block">
                <span className="relative z-10 text-yellow-300">Blau Mapa</span>
                <motion.span
                  className="absolute -bottom-3 left-0 w-full h-3 bg-yellow-300/30 rounded-full blur-sm"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
              <br />
              O mapa do seu{" "}
              <span className="text-yellow-200">tesouro corporativo</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto font-light"
          >
            Um diagnóstico estratégico <strong className="font-semibold">sob medida</strong> que revela{" "}
            <strong className="font-semibold">oportunidades valiosas</strong> em Educação, Ferramentas Digitais e Vendas.{" "}
            Transforme dados em crescimento sustentável.
          </motion.p>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {[
              { icon: Map, text: "Diagnóstico Completo" },
              { icon: TrendingUp, text: "90-180 dias" },
              { icon: Sparkles, text: "Padrão Internacional" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                transition={{ duration: 0.2 }}
              >
                <feature.icon className="w-5 h-5 text-yellow-300" />
                <span className="text-white font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              onClick={() => scrollToSection("#blau-mapa-processo")}
              className="group px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-semibold rounded-full shadow-2xl flex items-center gap-3 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Descobrir meu Mapa do Tesouro
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("#segmentos")}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-semibold rounded-full transition-all duration-300"
              whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Segmentos Atendidos
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-xs uppercase tracking-wider font-medium">Descubra mais</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-3 bg-white/70 rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
