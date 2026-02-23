import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

/* ───────────────────────────────────────────── */
/*  Animated counter                             */
/* ───────────────────────────────────────────── */
const AnimatedStat = ({
  value,
  suffix = "",
  prefix = "",
  inView,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  inView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

/* ───────────────────────────────────────────── */
/*  Benefits data — 4 outcomes, mirroring pain   */
/* ───────────────────────────────────────────── */
const benefitScenes = [
  {
    number: "01",
    title: "O conhecimento para de depender de pessoas",
    description:
      "Quando a educação vira sistema, o aprendizado circula sozinho. Novos colaboradores aprendem mais rápido, processos se documentam naturalmente e o conhecimento sobrevive a qualquer desligamento.",
    highlight:
      "O que antes levava meses, agora acontece em semanas. A empresa aprende enquanto opera.",
    stat: 3,
    statSuffix: "x",
    statLabel: "mais rápido na integração de novos colaboradores",
  },
  {
    number: "02",
    title: "Líderes constroem o futuro em vez de apagar incêndios",
    description:
      "Com multiplicadores formados e times autônomos, gestores param de centralizar decisões. A fila de aprovações desaparece. O tempo que era gasto resolvendo o urgente agora é investido no estratégico.",
    highlight:
      "Liderar deixa de ser sobreviver. E os melhores talentos querem ficar.",
    stat: 45,
    statSuffix: "%",
    statLabel: "mais tempo dos líderes dedicado a decisões estratégicas",
  },
  {
    number: "03",
    title: "Talentos ficam — e se multiplicam",
    description:
      "Profissionais de alto desempenho escolhem ambientes com propósito, clareza e crescimento. Quando a empresa investe em educação de verdade, a retenção cresce pelo sentido — não pelo salário.",
    highlight:
      "Cada pessoa que fica se torna multiplicadora. O ciclo de perda se inverte.",
    stat: 89,
    statSuffix: "%",
    statLabel: "de retenção em empresas com cultura educacional estruturada",
  },
  {
    number: "04",
    title: "A empresa escala com inteligência",
    description:
      "Times alinhados, linguagem comum, processos vivos. A inovação deixa de ser esforço e vira consequência. Novas receitas aparecem quando a equipe tem autonomia para enxergar oportunidades.",
    highlight:
      "Crescer vira o ritmo natural. O lucro é consequência da inteligência coletiva.",
    stat: 4,
    statSuffix: "x",
    statLabel: "mais rápido que empresas sem educação corporativa estruturada",
  },
];

/* ───────────────────────────────────────────── */
/*  Individual Benefit Card — mirrors PainCard   */
/* ───────────────────────────────────────────── */
const BenefitCard = ({
  scene,
  index,
}: {
  scene: (typeof benefitScenes)[0];
  index: number;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-60px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative group"
    >
      <div
        className={`grid lg:grid-cols-12 gap-6 lg:gap-10 items-start ${
          isEven ? "" : "lg:direction-rtl"
        }`}
      >
        {/* Stat block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={`lg:col-span-4 ${isEven ? "lg:order-1" : "lg:order-2"}`}
        >
          <div className="relative bg-gradient-to-br from-emerald-500/[0.04] to-primary/[0.03] rounded-3xl p-8 md:p-10 border border-emerald-500/[0.08] overflow-hidden">
            {/* Decorative corner glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/[0.06] rounded-full blur-2xl" />

            {/* Active result indicator */}
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60 font-medium">
                Resultado ativo
              </span>
            </div>

            {/* Stat number */}
            <div className="text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-none mb-3">
              {isInView && (
                <AnimatedStat
                  value={scene.stat}
                  suffix={scene.statSuffix}
                  prefix={""}
                  inView={isInView}
                />
              )}
            </div>
            <p className="text-sm text-muted-foreground/70 leading-relaxed">
              {scene.statLabel}
            </p>
          </div>
        </motion.div>

        {/* Content block */}
        <div
          className={`lg:col-span-8 ${
            isEven ? "lg:order-2" : "lg:order-1"
          } flex flex-col justify-center`}
        >
          {/* Number label */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center gap-4 mb-5"
          >
            <span className="text-xs font-semibold text-emerald-600/50 uppercase tracking-[0.25em]">
              Resultado {scene.number}
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/10 to-transparent" />
          </motion.div>

          {/* Title */}
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-2xl sm:text-3xl md:text-[2.25rem] font-serif font-bold text-foreground mb-5 leading-[1.15]"
          >
            {scene.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-base md:text-[1.075rem] text-muted-foreground leading-[1.75] mb-6 max-w-2xl"
          >
            {scene.description}
          </motion.p>

          {/* Highlight — the positive punch */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative pl-5 border-l-2 border-primary/25"
          >
            <p className="text-sm md:text-base text-primary/70 italic font-serif leading-relaxed">
              {scene.highlight}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

/* ───────────────────────────────────────────── */
/*  Main Section                                 */
/* ───────────────────────────────────────────── */
export const BenefitsSection = () => {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const closingRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: "-80px" });
  const isClosingInView = useInView(closingRef, { once: true, margin: "-60px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-background overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: bgY }}
          className="absolute top-[10%] -right-32 w-[500px] h-[500px] bg-emerald-500/[0.02] rounded-full blur-[100px]"
        />
        <motion.div
          style={{ y: bgY }}
          className="absolute bottom-[20%] -left-32 w-[400px] h-[400px] bg-primary/[0.02] rounded-full blur-[100px]"
        />
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* OPENING — Headline                          */}
      {/* ═══════════════════════════════════════════ */}
      <div
        ref={heroRef}
        className="relative pt-24 lg:pt-36 pb-16 lg:pb-24 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-emerald-500/[0.07] rounded-full mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-[0.2em]">
              O que muda quando a educação chega
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-bold text-foreground leading-[1.12] mb-7 tracking-tight"
          >
            Quando o núcleo existe,{" "}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-500 bg-clip-text text-transparent">
              tudo muda.
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Cada dor que você reconheceu tem uma solução.{" "}
            <span className="text-foreground/70 font-medium">
              E ela começa quando a educação se torna o centro da operação.
            </span>
          </motion.p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* BENEFIT CARDS — Alternating, mirrors pain   */}
      {/* ═══════════════════════════════════════════ */}
      <div className="relative max-w-6xl mx-auto px-6 py-8 md:py-12">
        <div className="space-y-16 md:space-y-24 lg:space-y-28">
          {benefitScenes.map((scene, index) => (
            <BenefitCard key={index} scene={scene} index={index} />
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* CLOSING                                     */}
      {/* ═══════════════════════════════════════════ */}
      <div
        ref={closingRef}
        className="relative py-24 md:py-36 px-6 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-primary/[0.03] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isClosingInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-20 h-px mx-auto mb-12 origin-center bg-gradient-to-r from-transparent via-emerald-500/25 to-transparent"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={isClosingInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground/40 text-xs uppercase tracking-[0.3em] mb-6"
          >
            Isso não é teoria
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 25 }}
            animate={isClosingInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-serif font-bold leading-[1.15] mb-7"
          >
            <span className="text-foreground">
              É o que acontece quando a educação
            </span>
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent">
              {" "}se torna o coração da empresa.
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isClosingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
          >
            Mais de 50 empresas já viveram essa transformação.{" "}
            <span className="text-foreground/70 font-medium">
              A próxima pode ser a sua.
            </span>
          </motion.p>
        </div>
      </div>
    </section>
  );
};
