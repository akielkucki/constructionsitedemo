"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const ease = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
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

export function About() {
  const yearsInBusiness =
    new Date().getFullYear() - siteConfig.company.foundedYear;

  return (
    <section
      id="about"
      className="relative bg-[#0f0f0f] section-padding overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              className="inline-flex items-center gap-3 text-[#c9a227] text-sm uppercase tracking-[0.2em] mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.span
                className="w-12 h-[2px] bg-[#c9a227]"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              About Us
            </motion.span>

            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#f5f5f5] leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {siteConfig.about.title}
            </motion.h2>

            <motion.p
              className="mt-8 text-lg text-[#9a9a9a] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {siteConfig.about.description}
            </motion.p>

            <motion.div
              className="mt-10 grid grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {siteConfig.about.values.map((value) => (
                <motion.div
                  key={value}
                  className="flex items-start gap-3"
                  variants={itemVariants}
                >
                  <div className="mt-1 w-2 h-2 bg-[#c9a227] rotate-45 flex-shrink-0" />
                  <span className="text-[#f5f5f5] font-medium">{value}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href="#services"
                className="btn-primary"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
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
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              <div className="aspect-[4/5] bg-[#1a1a1a] clip-path-[polygon(0_0,calc(100%-40px)_0,100%_40px,100%_100%,0_100%)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a227]/10 to-transparent" />
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <div className="text-8xl lg:text-9xl font-bold text-[#c9a227]/20">
                      {yearsInBusiness}+
                    </div>
                    <div className="text-xl uppercase tracking-[0.2em] text-[#9a9a9a] mt-4">
                      Years of Excellence
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#c9a227] clip-path-[polygon(0_0,calc(100%-16px)_0,100%_16px,100%_100%,0_100%)] flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1a1a1a]">
                    {siteConfig.stats[0].value}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.1em] text-[#1a1a1a]/70 mt-1">
                    Projects
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#c9a227]/30 clip-path-[polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
