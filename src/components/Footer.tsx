import { motion } from "framer-motion";
import logoBlau from "@/assets/logo-blau.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left flex flex-col items-center md:items-start"
          >
            <img 
              src={logoBlau} 
              alt="Blau Consultoria" 
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-primary-foreground/70 text-sm mt-2">
              Consultoria em Educação Corporativa
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Blau Consultoria. Todos os direitos reservados.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-6"
          >
            <a
              href="#"
              className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
            >
              Termos de Uso
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
