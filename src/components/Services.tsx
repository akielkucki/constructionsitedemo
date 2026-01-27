"use client";

import { motion } from "framer-motion";
import { siteConfig } from "./index";


const icons: Record<string, React.ReactNode> = {
  building: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  ),
  home: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  ),
  refresh: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
  ),
  factory: (
    <svg
      className="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
      />
    </svg>
  ),
};

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

export function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#0f0f0f] section-padding"
    >
      <div className="container-custom">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center justify-center gap-3 text-[#c9a227] text-sm uppercase tracking-[0.2em] mb-6">
            <motion.span
              className="w-12 h-[2px] bg-[#c9a227]"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            What We Do
            <motion.span
              className="w-12 h-[2px] bg-[#c9a227]"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#f5f5f5] leading-tight">
            Our <span className="text-gradient">Services</span>
          </h2>

          <p className="mt-6 text-lg text-[#9a9a9a]">
            Comprehensive construction solutions tailored to your unique needs
            and vision
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {siteConfig.services.map((service) => (
            <motion.div
              key={service.title}
              className="group relative bg-[#1a1a1a] p-8 lg:p-10 hover:bg-[#242424] transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)",
              }}
            >
              <div className="absolute top-0 right-0 w-[30px] h-[30px] border-l border-b border-[#c9a227]/30 transform translate-x-0 -translate-y-0" />

              <div className="flex items-start gap-6">
                <motion.div
                  className="flex-shrink-0 w-16 h-16 bg-[#c9a227]/10 flex items-center justify-center text-[#c9a227] group-hover:bg-[#c9a227] group-hover:text-[#1a1a1a] transition-all duration-300 clip-path-[polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)]"
                  whileHover={{ scale: 1.05 }}
                >
                  {icons[service.icon]}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-semibold text-[#f5f5f5] group-hover:text-[#c9a227] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[#9a9a9a] leading-relaxed">
                    {service.description}
                  </p>

                  <motion.a
                    href="#contact"
                    className="inline-flex items-center gap-2 mt-6 text-sm uppercase tracking-[0.1em] text-[#c9a227] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 10 }}
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <svg
                      className="w-4 h-4"
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
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
