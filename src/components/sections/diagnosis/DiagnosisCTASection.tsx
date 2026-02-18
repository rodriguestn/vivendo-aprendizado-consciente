import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Phone, Calendar, MapPin, Sparkles } from "lucide-react";
import { WHATSAPP_URL } from "@/constants/whatsapp";

export const DiagnosisCTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: Mail,
      title: "E-mail",
      description: "contato@blauconsultoria.com.br",
      action: "Enviar mensagem",
      href: "mailto:contato@blauconsultoria.com.br"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      description: "Resposta em até 2 horas",
      action: "Iniciar conversa",
      href: WHATSAPP_URL
    },
    {
      icon: Calendar,
      title: "Agendar Reunião",
      description: "30 min de consultoria gratuita",
      action: "Escolher horário",
      href: WHATSAPP_URL
    }
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="white" />
              <path d="M 30 0 L 30 60 M 0 30 L 60 30" stroke="white" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-semibold text-white">
              Pronto para descobrir seu tesouro corporativo?
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
            Solicite seu{" "}
            <span className="text-yellow-300">Blau Mapa</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-light">
            Agende uma conversa estratégica gratuita e descubra como o Blau Mapa pode
            revelar oportunidades valiosas no seu negócio
          </p>

          {/* Main CTA Button */}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group px-10 py-5 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold text-lg rounded-full shadow-2xl flex items-center gap-3 mx-auto transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar className="w-6 h-6" />
            Agendar Conversa Estratégica Gratuita
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </motion.a>

          <p className="text-sm text-white/70 mt-4">
            Sem compromisso • 30 minutos • 100% focado no seu negócio
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;

            return (
              <motion.a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 cursor-pointer group block"
              >
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-400 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
                <p className="text-sm text-white/80 mb-4">{method.description}</p>
                <div className="flex items-center justify-center gap-2 text-sm font-semibold text-yellow-300 group-hover:text-yellow-200">
                  {method.action}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-yellow-300 mb-2">50+</p>
                <p className="text-white/80 text-sm">Empresas Diagnosticadas</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-yellow-300 mb-2">95%</p>
                <p className="text-white/80 text-sm">Taxa de Satisfação</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-yellow-300 mb-2">R$ 10M+</p>
                <p className="text-white/80 text-sm">Em Oportunidades Identificadas</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="max-w-3xl mx-auto mt-16 text-center"
        >
          <blockquote className="text-xl md:text-2xl font-serif italic text-white/90 leading-relaxed mb-6">
            "O Blau Mapa revelou oportunidades que estavam bem na nossa frente, mas que
            não conseguíamos enxergar. Foi transformador para nossa estratégia de crescimento."
          </blockquote>
          <div className="text-white/70">
            <p className="font-semibold text-white">CEO</p>
            <p className="text-sm">Empresa de Tecnologia • São Paulo</p>
          </div>
        </motion.div>

        {/* Bottom Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
            <MapPin className="w-4 h-4 text-yellow-300" />
            <span className="text-sm text-white">
              Atendemos todo o Brasil • Processo 100% remoto ou presencial
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
