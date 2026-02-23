import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

/* ───────────────────────────────────────────── */
/*  Animated counter — counts up when visible    */
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
/*  Pain data — deep, persuasive copy            */
/* ───────────────────────────────────────────── */
const painScenes = [
  {
    number: "01",
    title: "O treinamento que morre na segunda-feira",
    description:
      "Sua empresa investiu tempo e dinheiro num workshop incrível. Na sexta, todos aplaudiram. Na segunda, ninguém lembra. Sem um sistema educacional vivo, cada capacitação é um gasto que evapora — não um investimento que multiplica.",
    consequence:
      "Enquanto isso, seus concorrentes estão transformando aprendizado em vantagem competitiva.",
    stat: 87,
    statSuffix: "%",
    statLabel: "do conteúdo é esquecido em 30 dias sem reforço estruturado",
  },
  {
    number: "02",
    title: "O líder que carrega a empresa nas costas",
    description:
      "Seus gestores mais talentosos passam o dia apagando incêndios, não construindo o futuro. Sem multiplicadores de conhecimento, cada decisão depende de uma pessoa. Cada problema volta para a mesma mesa. A fila de aprovações cresce. A inovação para.",
    consequence:
      "E quando esse líder sai — e um dia ele vai sair — o que acontece com tudo que só ele sabia?",
    stat: 73,
    statSuffix: "%",
    statLabel: "dos gestores brasileiros se sentem sobrecarregados",
  },
  {
    number: "03",
    title: "O talento que leva tudo embora",
    description:
      "Cada colaborador que pede demissão carrega anos de conhecimento não documentado, processos que só ele dominava, relações que não se transferem. O crachá volta. O conhecimento crítico, não.",
    consequence:
      "E o próximo profissional vai levar meses para render metade — se ele não sair antes.",
    stat: 150,
    statPrefix: "R$",
    statSuffix: "k",
    statLabel: "custo médio para substituir um profissional-chave",
  },
  {
    number: "04",
    title: "A empresa que confundiu sobreviver com crescer",
    description:
      "Cada área opera no seu ritmo. Cada líder cria sua própria metodologia. Não existe linguagem comum. Não existe cultura de aprendizado. O resultado é uma empresa fragmentada que se move devagar enquanto o mercado acelera.",
    consequence:
      "Todo mês você se pergunta por que o crescimento não vem. A resposta está onde você ainda não olhou.",
    stat: 4,
    statSuffix: "x",
    statLabel: "mais lento que empresas com educação corporativa estruturada",
  },
];

/* ───────────────────────────────────────────── */
/*  Individual Pain Card                         */
/* ───────────────────────────────────────────── */
const PainCard = ({
  scene,
  index,
}: {
  scene: (typeof painScenes)[0];
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
          <div className="relative bg-gradient-to-br from-primary/[0.04] to-accent/[0.03] rounded-3xl p-8 md:p-10 border border-primary/[0.06] overflow-hidden">
            {/* Decorative corner glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/[0.06] rounded-full blur-2xl" />

            {/* Live pulse indicator */}
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent/60 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60 font-medium">
                Dor ativa
              </span>
            </div>

            {/* Stat number */}
            <div className="text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-none mb-3">
              {isInView && (
                <AnimatedStat
                  value={scene.stat}
                  suffix={scene.statSuffix}
                  prefix={scene.statPrefix || ""}
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
            <span className="text-xs font-semibold text-primary/40 uppercase tracking-[0.25em]">
              Sintoma {scene.number}
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-primary/10 to-transparent" />
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

          {/* Consequence — the emotional punch */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative pl-5 border-l-2 border-accent/30"
          >
            <p className="text-sm md:text-base text-accent/80 italic font-serif leading-relaxed">
              {scene.consequence}
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
export const PainPointSection = () => {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const revealRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true, margin: "-80px" });
  const isRevealInView = useInView(revealRef, { once: true, margin: "-80px" });

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
      {/* Subtle background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: bgY }}
          className="absolute top-[10%] -left-32 w-[500px] h-[500px] bg-primary/[0.02] rounded-full blur-[100px]"
        />
        <motion.div
          style={{ y: bgY }}
          className="absolute bottom-[20%] -right-32 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px]"
        />
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* OPENING — Dramatic headline                 */}
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
            className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-accent/[0.07] rounded-full mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent/50 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-xs font-semibold text-accent uppercase tracking-[0.2em]">
              Você reconhece esses sinais?
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
            Sua empresa sente isso{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-blue-500 bg-clip-text text-transparent">
              todo dia.
            </span>
            <br />
            <span className="text-muted-foreground/50">
              E chama de rotina.
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Existe uma peça faltando na sua organização. Você sente nos
            resultados, na rotatividade, na lentidão.{" "}
            <span className="text-foreground/70 font-medium">
              Mas não consegue nomear.
            </span>
          </motion.p>
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* PAIN CARDS — Alternating deep-dive scenes   */}
      {/* ═══════════════════════════════════════════ */}
      <div className="relative max-w-6xl mx-auto px-6 py-8 md:py-12">
        <div className="space-y-16 md:space-y-24 lg:space-y-28">
          {painScenes.map((scene, index) => (
            <PainCard key={index} scene={scene} index={index} />
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════ */}
      {/* THE REVEAL — The missing piece               */}
      {/* ═══════════════════════════════════════════ */}
      <div
        ref={revealRef}
        className="relative py-24 md:py-36 px-6 overflow-hidden"
      >
        {/* Gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-primary/[0.04] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative">
          {/* Animated divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isRevealInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-20 h-px mx-auto mb-12 origin-center bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={isRevealInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground/40 text-xs uppercase tracking-[0.3em] mb-6"
          >
            A peça que falta tem nome
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 25 }}
            animate={isRevealInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 1,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-bold leading-[1.1] mb-7"
          >
            <span className="text-foreground">
              E se existisse uma peça capaz
              <br className="hidden sm:block" /> de resolver tudo isso?
            </span>
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isRevealInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="relative inline-block"
          >
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent">
              Educação.
            </span>
            {/* Glow behind the word */}
            <div className="absolute inset-0 bg-primary/10 blur-[60px] rounded-full scale-150 pointer-events-none" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isRevealInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 1.1 }}
            className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed mt-8"
          >
            Não um treinamento pontual. Um{" "}
            <span className="text-foreground font-medium">
              sistema vivo de aprendizagem
            </span>{" "}
            que pulsa no coração da sua organização.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
