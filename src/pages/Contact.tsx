import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Clock,
  Shield,
  Users,
  TrendingUp,
  Search,
  GraduationCap,
  BookOpen,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/common/SEO";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { WHATSAPP_URL } from "@/constants/whatsapp";

const VAGAS_RESTANTES = 3;

const services = [
  {
    icon: Search,
    title: "Diagnóstico Estratégico",
    description: "Mapeamento completo dos gaps de conhecimento, cultura e liderança da sua empresa.",
  },
  {
    icon: GraduationCap,
    title: "Núcleo de Educação",
    description: "Implantação de um setor interno de educação corporativa viva e autossustentável.",
  },
  {
    icon: BookOpen,
    title: "Formação de Multiplicadores",
    description: "Seus líderes se tornam educadores internos, replicando conhecimento com método.",
  },
  {
    icon: Lightbulb,
    title: "Mentoria Contínua",
    description: "Acompanhamento estratégico por 2 anos com indicadores reais de evolução.",
  },
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
        description="Agende sua consultoria estratégica gratuita. Vagas limitadas para diagnóstico empresarial este mês. Transforme a educação corporativa da sua empresa."
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
                  className="group px-10 py-5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-lg rounded-full shadow-2xl shadow-green-500/30 flex items-center justify-center gap-3 transition-all duration-300"
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
                  className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 text-white font-bold text-lg rounded-full transition-all duration-300"
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
        {/* RESUMO DOS SERVIÇOS                         */}
        {/* ═══════════════════════════════════════════ */}
        <section ref={servicesRef} className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-14 max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                O que você ganha ao agendar sua{" "}
                <span className="text-primary">conversa estratégica</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Em 30 minutos, você terá clareza sobre o caminho ideal para transformar a educação
                corporativa da sua empresa.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>

            {/* Mid-page CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mt-12"
            >
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Quero agendar minha consultoria gratuita
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════ */}
        {/* BASE EDUCACIONAL (Metodologia)              */}
        {/* ═══════════════════════════════════════════ */}
        <MethodologySection />

        {/* ═══════════════════════════════════════════ */}
        {/* DEPOIMENTOS                                 */}
        {/* ═══════════════════════════════════════════ */}
        <TestimonialsSection />

        {/* ═══════════════════════════════════════════ */}
        {/* SEÇÃO DE ESCASSEZ / URGÊNCIA                */}
        {/* ═══════════════════════════════════════════ */}
        <section ref={urgencyRef} className="py-20 lg:py-28 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-100/50 rounded-full blur-3xl" />
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
