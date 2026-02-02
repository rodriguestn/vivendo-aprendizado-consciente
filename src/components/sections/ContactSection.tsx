import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, BookOpen, Search } from "lucide-react";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (type: "diagnosis" | "nucleus") => {
    if (!formData.name || !formData.email) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha seu nome e email.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Mensagem enviada!",
      description:
        type === "diagnosis"
          ? "Entraremos em contato sobre o Diagnóstico Empresarial."
          : "Entraremos em contato sobre o Núcleo de Educação.",
    });

    setFormData({ name: "", company: "", role: "", email: "", phone: "" });
  };

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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
                  <Label htmlFor="name" className="text-sm font-semibold">Nome *</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-2 focus:border-primary transition-all"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
                  <Label htmlFor="company" className="text-sm font-semibold">Empresa</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Nome da empresa"
                    value={formData.company}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-2 focus:border-primary transition-all"
                  />
                </motion.div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="space-y-2"
                >
                  <Label htmlFor="role" className="text-sm font-semibold">Cargo</Label>
                  <Input
                    id="role"
                    name="role"
                    placeholder="Seu cargo"
                    value={formData.role}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-2 focus:border-primary transition-all"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="space-y-2"
                >
                  <Label htmlFor="email" className="text-sm font-semibold">E-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-2 focus:border-primary transition-all"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="space-y-2"
              >
                <Label htmlFor="phone" className="text-sm font-semibold">Telefone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 rounded-xl border-2 focus:border-primary transition-all"
                />
              </motion.div>

              <div className="grid sm:grid-cols-2 gap-4 pt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full h-14 rounded-xl font-semibold border-2 hover:border-primary hover:text-primary transition-all"
                    onClick={() => handleSubmit("diagnosis")}
                  >
                    <Search className="w-5 h-5" />
                    Quero meu diagnóstico
                  </Button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="accent"
                    size="lg"
                    className="w-full h-14 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                    onClick={() => handleSubmit("nucleus")}
                  >
                    <BookOpen className="w-5 h-5" />
                    Quero conhecer o Núcleo
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
