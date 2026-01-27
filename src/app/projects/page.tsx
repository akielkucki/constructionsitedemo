"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Header, Footer, siteConfig } from "@/components";
import { BlurFade } from "@/components/magicui";

export default function ProjectsPage() {
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
    <main className="min-h-screen bg-[#0f0f0f]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container-custom relative">
          <BlurFade delay={0.1} inView>
            <span className="inline-flex items-center gap-3 text-[#c9a227] text-sm uppercase tracking-[0.2em] mb-6">
              <span className="w-12 h-[2px] bg-[#c9a227]" />
              Our Portfolio
            </span>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-[#f5f5f5] leading-tight mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <p className="text-lg lg:text-xl text-[#9a9a9a] max-w-2xl">
              Explore our portfolio of completed projects throughout Bucks County
              and Montgomery County. Each project represents our commitment to
              quality craftsmanship and customer satisfaction.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-8">
        <div className="container-custom">
          <BlurFade delay={0.4} inView>
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
          </BlurFade>
        </div>
      </section>

      {/* Projects Gallery Grid */}
      <section className="pb-24">
        <div className="container-custom">
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <BlurFade delay={0.1 + index * 0.1} inView>
                    <Link href={`/projects/${project.slug}`} className="group block">
                      <div
                        className="relative overflow-hidden bg-[#1a1a1a]"
                        style={{
                          clipPath:
                            index % 2 === 0
                              ? "polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)"
                              : "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)",
                        }}
                      >
                        {/* Image Container */}
                        <div className="aspect-[4/3] relative">
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/50 to-transparent z-10"
                            initial={{ opacity: 0.7 }}
                            whileHover={{ opacity: 0.9 }}
                            transition={{ duration: 0.3 }}
                          />

                          {/* Placeholder pattern */}
                          <div className="absolute inset-0 bg-grid-pattern opacity-20" />

                          {/* Project number */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.span
                              className="text-8xl font-bold text-[#c9a227]/10"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.3 }}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </motion.span>
                          </div>

                          {/* Content Overlay */}
                          <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="px-3 py-1 bg-[#c9a227] text-[#1a1a1a] text-xs uppercase tracking-[0.1em] font-medium">
                                {project.category}
                              </span>
                              <span className="text-[#9a9a9a] text-sm">
                                {project.year}
                              </span>
                            </div>

                            <h3 className="text-xl lg:text-2xl font-semibold text-[#f5f5f5] group-hover:text-[#c9a227] transition-colors duration-300 mb-2">
                              {project.title}
                            </h3>

                            <p className="text-sm text-[#9a9a9a] mb-3 line-clamp-2">
                              {project.description}
                            </p>

                            <div className="flex items-center gap-2 text-[#c9a227]">
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
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                              </svg>
                              <span className="text-sm">
                                {project.city}, {project.state}
                              </span>
                            </div>

                            <motion.div
                              className="mt-4 flex items-center gap-2 text-sm uppercase tracking-[0.1em] text-[#c9a227]"
                              initial={{ opacity: 0, x: -10 }}
                              whileHover={{ opacity: 1, x: 0 }}
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
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </BlurFade>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <BlurFade delay={0.2} inView>
              <div className="text-center py-16">
                <p className="text-[#9a9a9a] text-lg">
                  No projects found in this category.
                </p>
              </div>
            </BlurFade>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#1a1a1a]">
        <div className="container-custom text-center">
          <BlurFade delay={0.1} inView>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#f5f5f5] mb-6">
              Ready to Start <span className="text-gradient">Your Project</span>?
            </h2>
          </BlurFade>

          <BlurFade delay={0.2} inView>
            <p className="text-lg text-[#9a9a9a] max-w-2xl mx-auto mb-8">
              Contact us today to discuss your remodeling project and receive a
              personalized consultation from our experienced team.
            </p>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <Link href="/#contact">
              <motion.span
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get a Free Quote
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
              </motion.span>
            </Link>
          </BlurFade>
        </div>
      </section>

      <Footer />
    </main>
  );
}
