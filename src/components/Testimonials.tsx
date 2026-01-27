"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";

const ease = [0.16, 1, 0.3, 1] as const;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % siteConfig.testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleSelect = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <section
      id="testimonials"
      className="relative bg-[#0f0f0f] section-padding overflow-hidden"
    >
      <motion.div
        className="absolute top-1/4 -left-32 w-64 h-64 bg-[#c9a227]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#c9a227]/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-custom relative z-10">
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
            Testimonials
            <motion.span
              className="w-12 h-[2px] bg-[#c9a227]"
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#f5f5f5] leading-tight">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            <motion.div
              className="absolute -top-8 -left-4 text-[120px] leading-none text-[#c9a227]/10 font-serif select-none"
              animate={{ opacity: [0.1, 0.15, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              &ldquo;
            </motion.div>

            <div
              className="relative bg-[#1a1a1a] p-8 lg:p-12 overflow-hidden"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px))",
              }}
            >
              <div className="min-h-[200px] relative">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease }}
                    className="flex flex-col justify-center"
                  >
                    <p className="text-xl lg:text-2xl text-[#f5f5f5] leading-relaxed italic">
                      {siteConfig.testimonials[activeIndex].quote}
                    </p>

                    <div className="mt-8 flex items-center gap-4">
                      <motion.div
                        className="w-14 h-14 bg-[#c9a227]/20 flex items-center justify-center text-[#c9a227] text-xl font-semibold clip-path-[polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]"
                        whileHover={{ scale: 1.1 }}
                      >
                        {siteConfig.testimonials[activeIndex].author.charAt(0)}
                      </motion.div>
                      <div>
                        <div className="text-[#f5f5f5] font-semibold">
                          {siteConfig.testimonials[activeIndex].author}
                        </div>
                        <div className="text-[#9a9a9a] text-sm">
                          {siteConfig.testimonials[activeIndex].role},{" "}
                          {siteConfig.testimonials[activeIndex].company}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <motion.div
              className="absolute -bottom-8 -right-4 text-[120px] leading-none text-[#c9a227]/10 font-serif rotate-180 select-none"
              animate={{ opacity: [0.1, 0.15, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              &ldquo;
            </motion.div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {siteConfig.testimonials.map((_, index) => (
              <motion.button
                key={index}
                type="button"
                onClick={() => handleSelect(index)}
                className={`h-1 transition-all duration-300 ${
                  index === activeIndex ? "bg-[#c9a227]" : "bg-[#333333]"
                }`}
                animate={{ width: index === activeIndex ? 48 : 32 }}
                whileHover={{ scale: 1.1 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-20 grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {siteConfig.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              className={`p-6 border transition-all duration-300 cursor-pointer ${
                index === activeIndex
                  ? "border-[#c9a227]"
                  : "border-[#333333] hover:border-[#c9a227]/50"
              }`}
              onClick={() => handleSelect(index)}
              whileHover={{ y: -4 }}
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#c9a227]/10 flex items-center justify-center text-[#c9a227] font-semibold clip-path-[polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,0_100%)]">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="text-[#f5f5f5] font-medium text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-[#9a9a9a] text-xs">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
