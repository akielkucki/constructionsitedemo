// Site Configuration - Edit these values to customize the demo site
// All variables defined here are used across the entire website
// This config supports both site templates for easy copy/paste during cold calls

export const siteConfig = {
  // Company Information
  company: {
    name: "Neudecker Construction",
    tagline: "A Premier Remodeling Company",
    fullName: "Neudecker Construction",
    description:
        "Established in 1969, Neudecker Construction is a premier remodeling company serving Bucks County and Montgomery County. We treat every customer like family, and every home like our own.",
    foundedYear: 1969,
    license: "PA007949",
    yearsExperience: 55,
    projectsCompleted: 1000,
    awardsWon: 0,
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
      full: "538 Bradford Avenue, Warrington, PA 18976",
    },
  },

  // Social Media Links
  social: {
    linkedin: "",
    instagram: "",
    facebook: "",
    twitter: "",
    pinterest: "",
    houzz: "",
  },

  // Navigation Links
  navigation: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "/projects" },
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
      icon: "kitchen",
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
      icon: "commercial",
    },
  ],

  // Portfolio Projects (simple format for gallery display)
  portfolio: [
    {
      title: "Basement Renovation",
      category: "Full Renovation",
      image: "/portfolio/basement.jpg",
      description: "Complete basement finishing with custom design and modern amenities.",
    },
    {
      title: "Kitchen Remodel",
      category: "Kitchen",
      image: "/portfolio/silverlake.png",
      description: "Full kitchen transformation with premium finishes and functional layout.",
    },
    {
      title: "Bathroom Renovation",
      category: "Bathroom",
      image: "/portfolio/pasadena.jpg",
      description: "Luxury bathroom remodel featuring custom tile work and modern fixtures.",
    },
    {
      title: "Custom Deck Construction",
      category: "Outdoor",
      image: "/portfolio/deck.png",
      description: "Beautiful deck addition designed for outdoor entertaining and relaxation.",
    },
  ],

  // Featured Projects (detailed format with slugs for dynamic pages)
  projects: [
    {
      title: "Basement Renovation",
      slug: "basement-renovation-warrington-pa",
      category: "Residential",
      city: "Warrington",
      state: "PA",
      description:
          "Complete basement finishing with custom design and modern amenities.",
      fullDescription:
          "This comprehensive basement renovation transformed an underutilized space into a fully functional living area. The project included custom built-ins, modern lighting design, luxury vinyl plank flooring, and a dedicated entertainment zone. Our team worked closely with the homeowners to create a space that perfectly suits their family's lifestyle.",
      image: "/portfolio/basement.jpg",
      gallery: ["/projects/basement-renovation.jpg", "/projects/basement-renovation-2.jpg", "/projects/basement-renovation-3.jpg"],
      year: 2024,
      features: ["Custom Built-ins", "Modern Lighting", "Entertainment Area", "Full Bathroom"],
    },
    {
      title: "Kitchen Remodel",
      slug: "kitchen-remodel-doylestown-pa",
      category: "Residential",
      city: "Doylestown",
      state: "PA",
      description:
          "Full kitchen transformation with premium finishes and functional layout.",
      fullDescription:
          "A complete kitchen transformation featuring custom cabinetry, quartz countertops, and high-end stainless steel appliances. The open-concept design maximizes space and natural light while providing ample storage and workspace for the avid home chef.",
      image: "/portfolio/silverlake.png",
      gallery: ["/projects/kitchen-remodel.jpg", "/projects/kitchen-remodel-2.jpg", "/projects/kitchen-remodel-3.jpg"],
      year: 2024,
      features: ["Custom Cabinetry", "Quartz Countertops", "Stainless Appliances", "Open Concept"],
    },
    {
      title: "Bathroom Renovation",
      slug: "bathroom-renovation-lansdale-pa",
      category: "Residential",
      city: "Lansdale",
      state: "PA",
      description:
          "Luxury bathroom remodel featuring custom tile work and modern fixtures.",
      fullDescription:
          "This luxury master bathroom renovation features floor-to-ceiling custom tile work, a walk-in frameless glass shower, freestanding soaking tub, and dual vanities with quartz countertops. Heated floors and a modern lighting scheme complete the spa-like atmosphere.",
      image: "/portfolio/pasadena.jpg",
      gallery: ["/projects/bathroom-remodel.jpg", "/projects/bathroom-remodel-2.jpg", "/projects/bathroom-remodel-3.jpg"],
      year: 2023,
      features: ["Custom Tile Work", "Walk-in Shower", "Heated Floors", "Dual Vanities"],
    },
    {
      title: "Custom Deck Construction",
      slug: "custom-deck-construction-chalfont-pa",
      category: "Outdoor",
      city: "Chalfont",
      state: "PA",
      description:
          "Beautiful deck addition designed for outdoor entertaining and relaxation.",
      fullDescription:
          "A stunning multi-level composite deck featuring built-in seating, integrated lighting, and a pergola for shade. The design seamlessly connects the indoor and outdoor living spaces, perfect for entertaining guests or enjoying quiet evenings outdoors.",
      image: "/portfolio/deck.png",
      gallery: ["/projects/deck-construction.jpg", "/projects/deck-construction-2.jpg", "/projects/deck-construction-3.jpg"],
      year: 2023,
      features: ["Composite Decking", "Built-in Seating", "LED Lighting", "Custom Pergola"],
    },
  ],

  // Testimonials
  testimonials: [
    {
      name: "Satisfied Homeowner",
      author: "Satisfied Homeowner",
      role: "Residential Client",
      company: "Bucks County",
      quote:
          "Neudecker Construction exceeded our expectations. Their attention to detail and professionalism made our remodel a seamless experience.",
      rating: 5,
    },
    {
      name: "Happy Customer",
      author: "Happy Customer",
      role: "Basement Renovation Client",
      company: "Montgomery County",
      quote:
          "From start to finish, the team communicated every step of the way. Our new basement is exactly what we envisioned.",
      rating: 5,
    },
    {
      name: "Repeat Client",
      author: "Repeat Client",
      role: "Kitchen Remodel Client",
      company: "Warrington",
      quote:
          "They truly treat every home like their own. The quality of workmanship is outstanding.",
      rating: 5,
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
    subheadline: "Schedule a consultation and let's bring your vision to life.",
    description:
        "Contact Neudecker Construction today to discuss your remodeling project and receive a personalized consultation.",
    buttonText: "Contact Us",
    buttonHref: "#contact",
    buttonLink: "#contact",
  },

  // Footer
  footer: {
    tagline: "Treating every customer like family since 1969.",
    description:
        "Neudecker Construction is a Pennsylvania-licensed contractor (PA007949) delivering premier remodeling services throughout Bucks County and Montgomery County since 1969.",
    copyright: `© ${new Date().getFullYear()} Neudecker Construction. All rights reserved.`,
    certifications: ["Licensed & Insured", "PA License #PA007949"],
  },
};

export type SiteConfig = typeof siteConfig;
