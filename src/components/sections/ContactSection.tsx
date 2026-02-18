import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Send, ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/constants/whatsapp";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    // Load HubSpot form script
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/24357275.js";
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="contato" ref={ref} className="py-24 lg:py-32 bg-gradient-to-br from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <Send className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Entre em Contato
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Qual é o próximo nível de{" "}
            <span className="text-primary">aprendizagem</span> da sua empresa?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Você pode começar com um diagnóstico estratégico ou avançar direto
            para a criação de um Núcleo de Educação Corporativa. A Blau ajuda a
            definir o caminho mais consciente.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
          {/* HubSpot Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500">
              <h3 className="text-xl font-bold text-foreground mb-2">Preencha o formulário</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Deixe seus dados e entraremos em contato com você.
              </p>
              <div
                className="hs-form-frame"
                data-region="na1"
                data-form-id="a253c78f-87a5-4878-8696-2b19f9e112f8"
                data-portal-id="24357275"
              />
            </div>
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            {/* WhatsApp Card */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#25D366] to-[#128C7E] p-8 md:p-10 shadow-2xl">
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full" />

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-9 h-9 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Prefere conversar agora?
                </h3>
                <p className="text-white/90 text-lg mb-8 leading-relaxed">
                  Tire suas dúvidas diretamente com nosso time. Atendimento rápido e personalizado.
                </p>

                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-[#25D366] font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-6 h-6" />
                  Conversar no WhatsApp
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <div className="flex items-center gap-3 mt-6">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-white/30 border-2 border-white/50" />
                    <div className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/50" />
                    <div className="w-8 h-8 rounded-full bg-white/25 border-2 border-white/50" />
                  </div>
                  <p className="text-white/80 text-sm">
                    Resposta em até 2 horas
                  </p>
                </div>
              </div>
            </div>

            {/* Informações extras */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-6 text-center shadow-lg">
                <p className="text-3xl font-bold text-primary mb-1">30 min</p>
                <p className="text-sm text-muted-foreground">Consultoria gratuita</p>
              </div>
              <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-2xl p-6 text-center shadow-lg">
                <p className="text-3xl font-bold text-primary mb-1">100%</p>
                <p className="text-sm text-muted-foreground">Sem compromisso</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
