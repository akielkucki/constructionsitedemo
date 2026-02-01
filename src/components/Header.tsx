"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { siteConfig } from "./index";


const ease = [0.16, 1, 0.3, 1] as const;

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease,
    },
  }),
};

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease,
    },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      ease,
    },
  },
};

const mobileItemVariants = {
  closed: { opacity: 0, x: -20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease,
    },
  }),
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Resolve href: prefix anchor links with "/" when not on homepage
  const resolveHref = (href: string) => {
    if (href.startsWith("#") && !isHomePage) {
      return `/${href}`;
    }
    return href;
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease }}
    >
      <motion.div
        className="transition-all duration-500"
        animate={{
          backgroundColor: isScrolled
            ? "rgba(15, 15, 15, 0.95)"
            : "rgba(15, 15, 15, 0)",
          backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
          padding: isScrolled ? "16px 0" : "24px 0",
        }}
      >
        <div className="container-custom flex items-center justify-between">
          <motion.a
            href="/"
            className="flex items-center gap-3 group"
            aria-label={siteConfig.company.name}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="w-10 h-10 bg-[#c9a227] flex items-center justify-center"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)",
              }}
              whileHover={{ scale: 1.1 }}
            >
              <span className="text-[#1a1a1a] font-bold text-lg">
                {siteConfig.company.name.charAt(0)}
              </span>
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-semibold tracking-tight text-[#f5f5f5] group-hover:text-[#c9a227] transition-colors duration-300">
                {siteConfig.company.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#9a9a9a]">
                Construction
              </span>
            </div>
          </motion.a>

          <nav className="hidden lg:flex items-center gap-8">
            {siteConfig.navigation.map((item, i) => (
              <motion.a
                key={item.label}
                href={resolveHref(item.href)}
                className="relative text-sm uppercase tracking-[0.1em] text-[#9a9a9a] hover:text-[#f5f5f5] transition-colors duration-300 py-2 group"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                whileHover={{ letterSpacing: "2px" }}
              >
                {item.label}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c9a227] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.a
              href={resolveHref("#contact")}
              className="btn-primary text-sm"
              whileHover={{ width: "calc(100%+50px)" }}

            >
              Get Quote
            </motion.a>
          </motion.div>

          <motion.button
            type="button"
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                className="block w-6 h-0.5 bg-[#f5f5f5]"
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 8 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-[#f5f5f5]"
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-[#f5f5f5]"
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -8 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        className="lg:hidden absolute top-full left-0 right-0 bg-[#0f0f0f]/98 backdrop-blur-lg overflow-hidden"
        variants={mobileMenuVariants}
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
      >
        <nav className="container-custom py-6 flex flex-col gap-4">
          {siteConfig.navigation.map((item, i) => (
            <motion.a
              key={item.label}
              href={resolveHref(item.href)}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg uppercase tracking-[0.1em] text-[#9a9a9a] hover:text-[#c9a227] transition-colors duration-300 py-2 border-b border-[#333333]"
              custom={i}
              variants={mobileItemVariants}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.a
            href={resolveHref("#contact")}
            className="btn-primary text-center mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
            custom={siteConfig.navigation.length}
            variants={mobileItemVariants}
            whileTap={{ scale: 0.95 }}
          >
            Get Quote
          </motion.a>
        </nav>
      </motion.div>
    </motion.header>
  );
}
