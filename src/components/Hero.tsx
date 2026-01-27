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
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

const statsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.6,
    },
  },
};

const statItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease,
    },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0f0f]">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0f0f]/50 to-[#0f0f0f]"
        aria-hidden="true"
      />

      <motion.div
        className="absolute top-1/4 -left-32 w-64 h-64 bg-[#c9a227]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#c9a227]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="absolute top-20 right-20 hidden lg:block">
        <motion.div
          className="corner-accent corner-accent-br w-32 h-32"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </div>
      <div className="absolute bottom-20 left-20 hidden lg:block">
        <motion.div
          className="corner-accent corner-accent-tl w-32 h-32"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-3 text-[#c9a227] text-sm uppercase tracking-[0.2em] mb-6">
              <motion.span
                className="w-12 h-[2px] bg-[#c9a227]"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
              Since {siteConfig.company.foundedYear}
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants}>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-[#f5f5f5] leading-[1.05] tracking-tight">
              {siteConfig.hero.headline.split(" ")[0]}
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight mt-2">
              <span className="text-gradient">
                {siteConfig.hero.headline.split(" ").slice(1).join(" ")}
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-8 text-lg sm:text-xl text-[#9a9a9a] max-w-2xl leading-relaxed"
          >
            {siteConfig.hero.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href={siteConfig.hero.primaryCta.href}
              className="btn-primary"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {siteConfig.hero.primaryCta.label}
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
            <motion.a
              href={siteConfig.hero.secondaryCta.href}
              className="btn-secondary"
              whileHover={{ border: "2x 22px solid yellow" }}
              whileTap={{ scale: 0.98 }}
            >
              {siteConfig.hero.secondaryCta.label}
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 pt-12 border-t border-[#333333]"
          variants={statsVariants}
          initial="hidden"
          animate="visible"
        >
          {siteConfig.stats.map((stat) => (
            <motion.div key={stat.label} variants={statItemVariants}>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#c9a227]">
                {stat.value}
              </div>
              <div className="mt-2 text-sm uppercase tracking-[0.1em] text-[#9a9a9a]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-[#9a9a9a] hover:text-[#c9a227] transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
