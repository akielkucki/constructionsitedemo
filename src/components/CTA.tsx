"use client";

import { motion } from "framer-motion";
import { siteConfig } from "./index";


export function CTA() {
  return (
    <section
      id="contact"
      className="relative bg-[#1a1a1a] section-padding overflow-hidden"
      style={{
        clipPath: "polygon(0 60px, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#c9a227]/5 to-transparent" />

      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-[#c9a227]/10 rotate-45"
        animate={{ rotate: [45, 50, 45] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 border border-[#c9a227]/10"
        animate={{ rotate: [-12, -8, -12] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-custom relative z-10 pt-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
              Get Started
            </motion.span>

            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#f5f5f5] leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {siteConfig.cta.headline}
            </motion.h2>

            <motion.p
              className="mt-6 text-lg text-[#9a9a9a] max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {siteConfig.cta.description}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
              >
                <div className="w-14 h-14 bg-[#c9a227]/10 flex items-center justify-center text-[#c9a227] clip-path-[polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.1em] text-[#9a9a9a]">
                    Call Us
                  </div>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\D/g, "")}`}
                    className="text-[#f5f5f5] font-semibold hover:text-[#c9a227] transition-colors duration-300"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                whileHover={{ x: 5 }}
              >
                <div className="w-14 h-14 bg-[#c9a227]/10 flex items-center justify-center text-[#c9a227] clip-path-[polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.1em] text-[#9a9a9a]">
                    Email Us
                  </div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-[#f5f5f5] font-semibold hover:text-[#c9a227] transition-colors duration-300"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.form
              className="bg-[#242424] p-8 lg:p-10"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)",
              }}
              onSubmit={(e) => e.preventDefault()}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold text-[#f5f5f5] mb-6">
                Request a Quote
              </h3>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <label
                      htmlFor="name"
                      className="block text-xs uppercase tracking-[0.1em] text-[#9a9a9a] mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-[#1a1a1a] border border-[#333333] px-4 py-3 text-[#f5f5f5] placeholder-[#666666] focus:border-[#c9a227] focus:outline-none transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.55 }}
                  >
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase tracking-[0.1em] text-[#9a9a9a] mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-[#1a1a1a] border border-[#333333] px-4 py-3 text-[#f5f5f5] placeholder-[#666666] focus:border-[#c9a227] focus:outline-none transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <label
                    htmlFor="service"
                    className="block text-xs uppercase tracking-[0.1em] text-[#9a9a9a] mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full bg-[#1a1a1a] border border-[#333333] px-4 py-3 text-[#f5f5f5] focus:border-[#c9a227] focus:outline-none transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    {siteConfig.services.map((service) => (
                      <option key={service.title} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.65 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-[0.1em] text-[#9a9a9a] mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full bg-[#1a1a1a] border border-[#333333] px-4 py-3 text-[#f5f5f5] placeholder-[#666666] focus:border-[#c9a227] focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="btn-primary w-full"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {siteConfig.cta.buttonText}
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
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
