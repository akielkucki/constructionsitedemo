"use client";

import { motion } from "framer-motion";
import { siteConfig } from "./index";


const ease = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease,
    },
  },
};

export function Stats() {
  return (
    <section
      className="relative bg-[#c9a227] py-20 lg:py-28 overflow-hidden"
      style={{
        clipPath: "polygon(0 0, 100% 40px, 100% 100%, 0 calc(100% - 40px))",
      }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <motion.div
        className="absolute top-10 left-10 w-40 h-40 border border-[#1a1a1a]/10 rotate-45"
        animate={{ rotate: [45, 50, 45] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-60 h-60 border border-[#1a1a1a]/10"
        animate={{ rotate: [12, 18, 12] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {siteConfig.stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center"
              variants={itemVariants}
            >
              <div className="relative inline-block">
                <motion.span
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1a1a1a]"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {stat.value}
                </motion.span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-[#1a1a1a]/20"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
              </div>
              <p className="mt-4 text-sm sm:text-base uppercase tracking-[0.15em] text-[#1a1a1a]/80 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
