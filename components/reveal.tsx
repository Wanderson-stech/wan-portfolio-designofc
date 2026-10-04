"use client";

import { motion, useReducedMotion } from "motion/react";
import { motionTokens } from "@/lib/motion";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: motionTokens.duration.fast, ease: motionTokens.ease, delay }}
    >
      {children}
    </motion.div>
  );
}
