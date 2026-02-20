import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Clock,
  Shield,
  Users,
  Map,
  GraduationCap,
  Sparkles,
  Target,
  BarChart3,
  Globe2,
  ShoppingCart,
  Users2,
  Puzzle,
  RefreshCw,
  Zap,
  Brain,
  AlertTriangle,
  CheckCircle2,
  MessageCircle,
  Star,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/common/SEO";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { WHATSAPP_URL } from "@/constants/whatsapp";

const VAGAS_RESTANTES = 3;

const blauMapaPillars = [
  { icon: GraduationCap, label: "Educação" },
  { icon: Globe2, label: "Ferramentas Digitais" },
  { icon: ShoppingCart, label: "Vendas" },
];

const nucleoPillars = [
  { icon: Brain, label: "Consciência" },
  { icon: Users2, label: "Colaboração" },
  { icon: Target, label: "Estratégia" },
  { icon: Zap, label: "Inovação" },
  { icon: Sparkles, label: "Autonomia" },
  { icon: RefreshCw, label: "Cultura" },
];

const urgencyReasons = [
  "Cada mês sem estrutura educacional custa talentos, retrabalho e oportunidades perdidas",
  "Seus concorrentes já estão investindo em educação corporativa estruturada",
  "O custo de não agir é sempre maior que o custo de transformar",
];

const Contact = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const urgencyRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const isUrgencyInView = useInView(urgencyRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contato | Blau Consultoria"
        description="Agende sua consultoria estratégica gratuita em Vitória - ES. Vagas limitadas para diagnóstico empresarial. Atendimento presencial na Grande Vitória e projetos em todo o Brasil."
        canonical="/contato"
      />
      <Header />
      <main>
        {/* ═══════════════════════════════════════════ */}
        {/* HERO — ESCASSEZ + CTA DIRETO               */}
        {/* ═══════════════════════════════════════════ */}
        <section
          ref={heroRef}
          className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 bg-gradient-to-br from-primary via-primary-dark to-primary-light overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="contact-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#contact-grid)" />
            </svg>
          </div>
          <motion.div
            className="absolute top-1/3 -left-32 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Scarcity Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-500/20 backdrop-blur-md border border-red-400/30 rounded-full mb-8 shadow-lg"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                </span>
                <span className="text-sm font-bold text-white">
                  Apenas {VAGAS_RESTANTES} vagas para diagnóstico gratuito este mês
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6"
              >
                O momento de transformar sua empresa é{" "}
                <span className="text-accent">agora</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10 max-w-3xl mx-auto font-light"
              >
                Enquanto você pondera, empresas ao seu redor já estão construindo equipes que
                aprendem, inovam e lideram. <strong className="font-semibold">Não fique para trás.</strong>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-6 sm:px-10 py-4 sm:py-5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-base sm:text-lg rounded-full shadow-2xl shadow-green-500/30 flex items-center justify-center gap-3 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-6 h-6" />
                  Garantir minha vaga agora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="#formulario"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-6 sm:px-10 py-4 sm:py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-bold text-base sm:text-lg rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Preencher formulário
                </motion.a>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isHeroInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/10"
              >
                <div className="flex items-center gap-2 text-white/70">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm font-medium">Sem compromisso</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm font-medium">30 min de consultoria gratuita</span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Users className="w-5 h-5" />
                  <span className="text-sm font-medium">+50 empresas transformadas</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════ */}
        {/* DOIS CAMINHOS — BLAU MAPA + NÚCLEO         */}
        {/* ═══════════════════════════════════════════ */}
        <section ref={servicesRef} className="py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-6 max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Puzzle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Duas Soluções Estratégicas</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-5">
                Escolha o caminho certo para a{" "}
                <span className="text-primary">sua empresa</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Não levamos treinamento. Implantamos inteligência educacional.
                Conheça nossas duas soluções e descubra qual faz mais sentido para o seu momento.
              </p>
            </motion.div>

            {/* Service Cards */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mt-14">
              {/* BLAU MAPA Card */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={isServicesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-br from-accent/40 to-primary/40 rounded-[2rem] blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card/90 backdrop-blur-xl border border-border/60 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
                      <Map className="w-4 h-4 text-accent" />
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">Diagnóstico</span>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">90–180 dias</span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-accent/20">
                    <Map className="w-8 h-8 text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
                    Blau Mapa
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    O mapa do tesouro da sua empresa. Um diagnóstico estratégico que revela
                    oportunidades ocultas e transforma dados em um plano de crescimento prático e implementável.
                  </p>

                  {/* 3 Pillars */}
                  <div className="space-y-3 mb-8 flex-1">
                    <p className="text-sm font-semibold text-foreground mb-3">3 pilares analisados:</p>
                    {blauMapaPillars.map((pillar, i) => (
                      <div key={i} className="flex items-center gap-3 bg-secondary/60 rounded-xl px-4 py-3">
                        <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <pillar.icon className="w-4 h-4 text-accent" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{pillar.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Key Results */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    <div className="bg-accent/5 border border-accent/10 rounded-xl px-4 py-3 text-center">
                      <p className="text-xl font-bold text-accent">3x</p>
                      <p className="text-xs text-muted-foreground">Crescimento mais rápido</p>
                    </div>
                    <div className="bg-accent/5 border border-accent/10 rounded-xl px-4 py-3 text-center">
                      <p className="text-xl font-bold text-accent">360°</p>
                      <p className="text-xs text-muted-foreground">Visão integrada</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center justify-center gap-3 px-6 py-4 bg-accent hover:bg-accent/90 text-white font-bold rounded-full shadow-lg shadow-accent/20 transition-all duration-300"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Quero o Blau Mapa
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>

              {/* NÚCLEO DE EDUCAÇÃO Card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={isServicesInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="relative group"
              >
                {/* Popular badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-full shadow-lg shadow-primary/30">
                    <Star className="w-3.5 h-3.5 fill-white" />
                    Mais procurado
                  </div>
                </div>

                <div className="absolute -inset-1 bg-gradient-to-br from-primary/50 to-accent/40 rounded-[2rem] blur-lg opacity-30 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card/90 backdrop-blur-xl border-2 border-primary/30 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">Transformação</span>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">Programa de 2 anos</span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
                    Projeto Educação
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Um núcleo vivo de educação corporativa dentro da sua empresa.
                    Formamos multiplicadores, implantamos metodologia e criamos uma cultura
                    de aprendizagem que gera resultados mensuráveis.
                  </p>

                  {/* 6 Pillars */}
                  <div className="mb-8 flex-1">
                    <p className="text-sm font-semibold text-foreground mb-3">6 pilares integrados:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {nucleoPillars.map((pillar, i) => (
                        <div key={i} className="flex items-center gap-2.5 bg-secondary/60 rounded-xl px-3 py-2.5">
                          <div className="w-7 h-7 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <pillar.icon className="w-3.5 h-3.5 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-foreground">{pillar.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Results */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    <div className="bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 text-center">
                      <p className="text-xl font-bold text-primary">75%</p>
                      <p className="text-xs text-muted-foreground">Menos microgestão</p>
                    </div>
                    <div className="bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 text-center">
                      <p className="text-xl font-bold text-primary">200%</p>
                      <p className="text-xs text-muted-foreground">Mais inovação</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center justify-center gap-3 px-6 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full shadow-lg shadow-primary/20 transition-all duration-300"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Quero o Projeto Educação
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Bottom note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isServicesInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center text-muted-foreground mt-10 max-w-2xl mx-auto"
            >
              Não sabe qual escolher? <strong className="text-foreground">Não tem problema.</strong>{" "}
              Na conversa estratégica gratuita, ajudamos você a entender qual solução
              faz mais sentido para o momento da sua empresa.
            </motion.p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════ */}
        {/* O QUE VOCÊ GANHA — BENEFÍCIOS RÁPIDOS      */}
        {/* ═══════════════════════════════════════════ */}
        <section className="py-20 lg:py-24 bg-secondary/40">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12 max-w-2xl mx-auto"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
                O que você ganha ao agendar sua{" "}
                <span className="text-primary">conversa estratégica</span>
              </h2>
              <p className="text-muted-foreground">
                Em 30 minutos, você terá clareza sobre o caminho ideal — sem compromisso.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
              {[
                { icon: BarChart3, title: "Diagnóstico inicial", desc: "Visão clara dos principais gaps e oportunidades da sua empresa" },
                { icon: Target, title: "Plano personalizado", desc: "Recomendação do caminho ideal: Blau Mapa ou Projeto Educação" },
                { icon: Sparkles, title: "Insights estratégicos", desc: "Benchmarks do seu setor e práticas das melhores empresas" },
                { icon: Shield, title: "Zero compromisso", desc: "Consultoria 100% gratuita, sem nenhuma obrigação de contratação" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 text-center hover:shadow-md hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-1.5 text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════ */}
        {/* DEPOIMENTOS                                 */}
        {/* ═══════════════════════════════════════════ */}
        <TestimonialsSection />

        {/* ═══════════════════════════════════════════ */}
        {/* SEÇÃO DE ESCASSEZ / URGÊNCIA                */}
        {/* ═══════════════════════════════════════════ */}
        <section ref={urgencyRef} className="py-20 lg:py-28 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-100/50 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-60 h-60 bg-orange-100/40 rounded-full blur-3xl" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Urgency Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isUrgencyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-center mb-14"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 border border-red-200 rounded-full mb-6">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-bold text-red-700">
                    O custo de esperar é real
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                  Cada dia sem ação é um dia de{" "}
                  <span className="text-red-600">oportunidade perdida</span>
                </h2>
              </motion.div>

              {/* Urgency Reasons */}
              <div className="space-y-4 mb-12">
                {urgencyReasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isUrgencyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                    className="flex items-start gap-4 bg-white/80 backdrop-blur-sm border border-red-100 rounded-xl p-5"
                  >
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <AlertTriangle className="w-4 h-4 text-red-600" />
                    </div>
                    <p className="text-foreground font-medium leading-relaxed">{reason}</p>
                  </motion.div>
                ))}
              </div>

              {/* Scarcity Counter */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isUrgencyInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white border-2 border-primary/20 rounded-3xl p-8 md:p-10 shadow-xl"
              >
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Vagas */}
                  <div className="text-center">
                    <div className="text-6xl font-bold text-red-600 mb-2">{VAGAS_RESTANTES}</div>
                    <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                      Vagas restantes
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">para diagnóstico gratuito</p>
                  </div>

                  {/* Garantias */}
                  <div className="space-y-3">
                    {[
                      "Consultoria 100% gratuita",
                      "Sem compromisso de contratação",
                      "Diagnóstico personalizado",
                      "Plano de ação prático",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-sm font-medium text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="text-center">
                    <motion.a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold rounded-full shadow-xl shadow-green-500/20 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageCircle className="w-5 h-5" />
                      Garantir vaga
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                    <p className="text-xs text-muted-foreground mt-3">
                      Resposta em até 2 horas
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isUrgencyInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap justify-center gap-8 mt-10"
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-xs text-muted-foreground">Empresas Transformadas</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">95%</p>
                  <p className="text-xs text-muted-foreground">Taxa de Satisfação</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">2 anos</p>
                  <p className="text-xs text-muted-foreground">Acompanhamento Contínuo</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">R$ 10M+</p>
                  <p className="text-xs text-muted-foreground">Oportunidades Identificadas</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════ */}
        {/* FORMULÁRIO + WHATSAPP                       */}
        {/* ═══════════════════════════════════════════ */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
