"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    ...new Set(siteConfig.projects.map((p) => p.category)),
  ];

  const filteredProjects =
    activeFilter === "All"
      ? siteConfig.projects
      : siteConfig.projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative bg-[#0f0f0f] section-padding"
    >
      <div className="container-custom">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <span className="inline-flex items-center gap-3 text-[#c9a227] text-sm uppercase tracking-[0.2em] mb-6">
              <motion.span
                className="w-12 h-[2px] bg-[#c9a227]"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              />
              Portfolio
            </span>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#f5f5f5] leading-tight">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                type="button"
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 text-sm uppercase tracking-[0.1em] transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-[#c9a227] text-[#1a1a1a]"
                    : "bg-transparent text-[#9a9a9a] border border-[#333333] hover:border-[#c9a227] hover:text-[#c9a227]"
                }`}
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative overflow-hidden cursor-pointer"
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                style={{
                  clipPath:
                    index % 2 === 0
                      ? "polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)"
                      : "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)",
                }}
              >
                <div className="aspect-[4/3] bg-[#1a1a1a] relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/40 to-transparent"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 0.85 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-6xl font-bold text-[#c9a227]/10"
                      whileHover={{ scale: 1.1, opacity: 0.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </motion.div>
                  </div>

                  <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                    <motion.div
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-[#c9a227] text-[#1a1a1a] text-xs uppercase tracking-[0.1em] font-medium">
                          {project.category}
                        </span>
                        <span className="text-[#9a9a9a] text-sm">
                          {project.year}
                        </span>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-semibold text-[#f5f5f5] group-hover:text-[#c9a227] transition-colors duration-300">
                        {project.title}
                      </h3>

                      <motion.p
                        className="mt-3 text-[#9a9a9a]"
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.description}
                      </motion.p>

                      <motion.a
                        href="#contact"
                        className="inline-flex items-center gap-2 mt-4 text-sm uppercase tracking-[0.1em] text-[#c9a227]"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1, x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        View Project
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
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a
            href="#contact"
            className="btn-secondary"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
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
      </div>
    </section>
  );
}
