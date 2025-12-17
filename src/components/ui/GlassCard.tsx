"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

type CardVariant = "default" | "elevated" | "featured";

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: CardVariant;
}

const cardVariants: Record<CardVariant, string> = {
  default: "card",
  elevated: "card-elevated",
  featured: "card-featured",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, hover = true, variant = "default", ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "group relative rounded-2xl overflow-hidden",
          cardVariants[variant],
          hover && "transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
          className
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

// Keep GlassCard as an alias for backward compatibility during migration
export const GlassCard = Card;
