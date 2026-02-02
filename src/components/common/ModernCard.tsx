import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ModernCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glass" | "gradient";
  hover?: boolean;
  delay?: number;
}

export const ModernCard = ({
  children,
  className,
  variant = "default",
  hover = true,
  delay = 0,
}: ModernCardProps) => {
  const variants = {
    default: "bg-card border border-border",
    glass: "glass-card",
    gradient: "bg-gradient-to-br from-card via-card to-primary/5 border border-primary/10",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={hover ? { y: -4 } : undefined}
      className={cn(
        "rounded-2xl p-6 transition-all duration-300",
        variants[variant],
        hover && "hover:shadow-lg hover:border-primary/30",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
