export const siteConfig = {
  // Company Information
  company: {
    name: "Neudecker Construction",
    tagline: "A Premier Remodeling Company",
    description:
        "Established in 1969, Neudecker Construction is a premier remodeling company serving Bucks County and Montgomery County. We treat every customer like family, and every home like our own.",
    foundedYear: 1969,
    license: "PA007949",
  },

  // Contact Information
  contact: {
    phone: "(215) 443-9200",
    email: "info@neudeckerconstruction.com",
    address: {
      street: "538 Bradford Avenue",
      city: "Warrington",
      state: "PA",
      zip: "18976",
      country: "United States",
    },
  },

  // Social Media Links
  social: {
    linkedin: "",
    instagram: "",
    facebook: "",
    twitter: "",
  },

  // Navigation Links
  navigation: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],

  // Hero Section
  hero: {
    headline: "Quality Craftsmanship Since 1969",
    subheadline: "Treating every customer like family, and every home like our own",
    description:
        "With over 50 years of experience and thousands of completed projects, Neudecker Construction delivers premier remodeling services throughout Bucks County and Montgomery County.",
    primaryCta: { label: "Request a Quote", href: "#contact" },
    secondaryCta: { label: "View Our Work", href: "#projects" },
    backgroundImage: "/hero-neudecker.jpg",
  },

  // Statistics
  stats: [
    { value: "55+", label: "Years Experience" },
    { value: "1000s", label: "Projects Completed" },
    { value: "100%", label: "Licensed & Insured" },
    { value: "5-Star", label: "Client Reputation" },
  ],

  // Services
  services: [
    {
      title: "Basement Finishing",
      description:
          "Transform your basement into functional living space with expert finishing and renovation services.",
      icon: "home",
    },
    {
      title: "Kitchen & Bathroom Remodeling",
      description:
          "Complete kitchen and bathroom renovations featuring quality materials and expert craftsmanship.",
      icon: "refresh",
    },
    {
      title: "Home Additions",
      description:
          "Expand your living space with seamlessly integrated home additions designed to match your existing structure.",
      icon: "building",
    },
    {
      title: "Decks & Porches",
      description:
          "Custom deck and porch construction to enhance your outdoor living experience.",
      icon: "factory",
    },
  ],

  // Featured Projects
  projects: [
    {
      title: "Basement Renovation",
      category: "Residential",
      description:
          "Complete basement finishing with custom design and modern amenities.",
      image: "/projects/basement-renovation.jpg",
      year: 2024,
    },
    {
      title: "Kitchen Remodel",
      category: "Residential",
      description:
          "Full kitchen transformation with premium finishes and functional layout.",
      image: "/projects/kitchen-remodel.jpg",
      year: 2024,
    },
    {
      title: "Bathroom Renovation",
      category: "Residential",
      description:
          "Luxury bathroom remodel featuring custom tile work and modern fixtures.",
      image: "/projects/bathroom-remodel.jpg",
      year: 2023,
    },
    {
      title: "Custom Deck Construction",
      category: "Outdoor",
      description:
          "Beautiful deck addition designed for outdoor entertaining and relaxation.",
      image: "/projects/deck-construction.jpg",
      year: 2023,
    },
  ],

  // Testimonials
  testimonials: [
    {
      quote:
          "Neudecker Construction exceeded our expectations. Their attention to detail and professionalism made our remodel a seamless experience.",
      author: "Satisfied Homeowner",
      role: "Residential Client",
      company: "Bucks County",
    },
    {
      quote:
          "From start to finish, the team communicated every step of the way. Our new basement is exactly what we envisioned.",
      author: "Happy Customer",
      role: "Basement Renovation Client",
      company: "Montgomery County",
    },
    {
      quote:
          "They truly treat every home like their own. The quality of workmanship is outstanding.",
      author: "Repeat Client",
      role: "Kitchen Remodel Client",
      company: "Warrington",
    },
  ],

  // About Section
  about: {
    title: "Building Trust Since 1969",
    description:
        "For over 50 years, Neudecker Construction has been a premier remodeling company serving Bucks County and Montgomery County. We pledge to exceed customer expectations, maintain communication throughout your project, complete work professionally and on time, and use materials and workmanship exceeding industry standards.",
    values: [
      "Family-Focused Service",
      "Exceeding Expectations",
      "Clear Communication",
      "Quality Workmanship",
    ],
  },

  // CTA Section
  cta: {
    headline: "Ready to Start Your Project?",
    description:
        "Contact Neudecker Construction today to discuss your remodeling project and receive a personalized consultation.",
    buttonText: "Contact Us",
    buttonHref: "#contact",
  },

  // Footer
  footer: {
    description:
        "Neudecker Construction is a Pennsylvania-licensed contractor (PA007949) delivering premier remodeling services throughout Bucks County and Montgomery County since 1969.",
    copyright: `© ${new Date().getFullYear()} Neudecker Construction. All rights reserved.`,
  },
};

export type SiteConfig = typeof siteConfig;
