"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Header, Footer, siteConfig } from "@/components";
import { BlurFade } from "@/components/magicui";

type Project = (typeof siteConfig.projects)[number];

interface ProjectPageClientProps {
  project: Project;
  relatedProjects: Project[];
}

export function ProjectPageClient({
  project,
  relatedProjects,
}: ProjectPageClientProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const gallery = project.gallery || [project.image];

  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      <Header />

      {/* Breadcrumb */}
      <section className="pt-28 lg:pt-36 pb-8">
        <div className="container-custom">
          <BlurFade delay={0.1} inView>
            <nav className="flex items-center gap-2 text-sm text-[#9a9a9a]">
              <Link
                href="/"
                className="hover:text-[#c9a227] transition-colors"
              >
                Home
              </Link>
              <span>/</span>
              <Link
                href="/projects"
                className="hover:text-[#c9a227] transition-colors"
              >
                Projects
              </Link>
              <span>/</span>
              <span className="text-[#f5f5f5]">{project.title}</span>
            </nav>
          </BlurFade>
        </div>
      </section>

      {/* Project Header */}
      <section className="pb-12">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left: Title and Info */}
            <div>
              <BlurFade delay={0.1} inView>
                <span className="inline-flex items-center gap-3 text-[#c9a227] text-sm uppercase tracking-[0.2em] mb-4">
                  <span className="w-12 h-[2px] bg-[#c9a227]" />
                  {project.category}
                </span>
              </BlurFade>

              <BlurFade delay={0.2} inView>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#f5f5f5] leading-tight mb-6">
                  {project.title}
                </h1>
              </BlurFade>

              <BlurFade delay={0.3} inView>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 text-[#9a9a9a]">
                    <svg
                      className="w-5 h-5 text-[#c9a227]"
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
                    <span>
                      {project.city}, {project.state}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#9a9a9a]">
                    <svg
                      className="w-5 h-5 text-[#c9a227]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Completed {project.year}</span>
                  </div>
                </div>
              </BlurFade>

              <BlurFade delay={0.4} inView>
                <p className="text-lg text-[#9a9a9a] leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </BlurFade>
            </div>

            {/* Right: Features */}
            <div className="lg:pt-12">
              <BlurFade delay={0.5} inView>
                <h3 className="text-xl font-semibold text-[#f5f5f5] mb-6">
                  Project Features
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.features?.map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="flex items-center gap-3 p-4 bg-[#1a1a1a] border border-[#333333]"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index }}
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                      }}
                    >
                      <svg
                        className="w-5 h-5 text-[#c9a227] flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-[#f5f5f5]">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="pb-16 lg:pb-24">
        <div className="container-custom">
          <BlurFade delay={0.2} inView>
            {/* Main Image */}
            <div
              className="relative aspect-[16/9] lg:aspect-[21/9] bg-[#1a1a1a] overflow-hidden mb-4"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 40px), calc(100% - 40px) 100%, 0 100%)",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-9xl font-bold text-[#c9a227]/10">
                      {String(selectedImage + 1).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Thumbnail Gallery */}
            {gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {gallery.map((image, index) => (
                  <motion.button
                    key={image}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={`relative flex-shrink-0 w-24 h-16 lg:w-32 lg:h-20 bg-[#1a1a1a] overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? "border-[#c9a227]"
                        : "border-transparent hover:border-[#333333]"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-[#c9a227]/20">
                        {index + 1}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            )}
          </BlurFade>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#c9a227]">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <BlurFade delay={0.1} inView>
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1a1a1a] mb-2">
                  Interested in a Similar Project?
                </h2>
                <p className="text-[#1a1a1a]/80">
                  Contact us today to discuss your vision and get a free
                  consultation.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <Link href="/#contact">
                <motion.span
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#1a1a1a] text-[#f5f5f5] font-semibold uppercase tracking-[0.1em] text-sm"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                  }}
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
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="container-custom">
            <BlurFade delay={0.1} inView>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#f5f5f5] mb-8">
                Related <span className="text-gradient">Projects</span>
              </h2>
            </BlurFade>

            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <BlurFade key={relatedProject.slug} delay={0.2 + index * 0.1} inView>
                  <Link
                    href={`/projects/${relatedProject.slug}`}
                    className="group block"
                  >
                    <div
                      className="relative overflow-hidden bg-[#1a1a1a]"
                      style={{
                        clipPath:
                          index % 2 === 0
                            ? "polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)"
                            : "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)",
                      }}
                    >
                      <div className="aspect-[16/10] relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/50 to-transparent z-10" />
                        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-8xl font-bold text-[#c9a227]/10">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                          <span className="px-3 py-1 bg-[#c9a227] text-[#1a1a1a] text-xs uppercase tracking-[0.1em] font-medium w-fit mb-2">
                            {relatedProject.category}
                          </span>
                          <h3 className="text-xl lg:text-2xl font-semibold text-[#f5f5f5] group-hover:text-[#c9a227] transition-colors">
                            {relatedProject.title}
                          </h3>
                          <p className="text-sm text-[#9a9a9a] mt-2">
                            {relatedProject.city}, {relatedProject.state}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </BlurFade>
              ))}
            </div>

            <BlurFade delay={0.4} inView>
              <div className="mt-12 text-center">
                <Link href="/projects">
                  <motion.span
                    className="btn-secondary inline-flex items-center gap-2"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View All Projects
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
              </div>
            </BlurFade>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
