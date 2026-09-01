import ecommerceProjectImage from "./assets/e-commerce.png";
import factoryProjectImage from "./assets/employees.png";
import moviesSubscription from "./assets/movies-subscription.png";

export const data = {
  name: "Yitzhak Binyamin",
  title: "Full Stack Developer",
  tagline: "JavaScript · React · Node.js · Java",
  summary:
    "Full Stack Developer with 3 years of professional experience as a Java Developer in a large-scale production environment. Strong focus on clean architecture, real-world data modeling, and production-ready code.",
  contact: {
    email: "Yitzhakbin9@gmail.com",
    phone: "052-585-8770",
    location: "Rishon Lezion",
    github: "https://github.com/Yitzhakbin9",
    linkedin: "https://www.linkedin.com/in/yitzhak-binyamin/",
  },
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Node.js",
    "Express",
    "Java",
    "MongoDB",
    "Firebase",
    "SQL",
    "REST APIs",
    "JWT",
    "Docker",
    "Git",
    "CI/CD",
  ],
  experience: [
    {
      role: "Java Developer",
      company: "Bank Hapoalim",
      period: "2022 - 2025",
      bullets: [
        "Led a phased migration of frontend integrations across 4 core internal banking screens used by employees nationwide.",
        "Replaced legacy Mainframe calls with Java-based microservices while preserving existing UI and workflows.",
        "Reverse-engineered complex legacy integrations, uncovering hidden business logic and edge cases.",
        "Refactored client-side service layer to support RESTful microservices through an incremental rollout strategy.",
      ],
    },
  ],
  projects: [
    {
      title: "Movies Subscription Management System",
      eyebrow: "Customer + Admin Experience (still in development)",
      description:
        "Full-stack subscription management system for a movies, featuring separate admin and customer journeys, dynamic catalog management.",
      highlight: "",
      tech: ["React", "Redux", "Firebase", "TypeScript", "ClaudeCode"],
      github: "https://github.com/Yitzhakbin9/movies-subscription-management-system",
      live: "https://movies-subscription-management-syst.vercel.app/main",
      liveLabel: "",
      image: moviesSubscription,
      imageAlt: "Preview illustration for the E-Commerce Web App project",
    },
    {
      title: "E-Commerce Web App",
      eyebrow: "Customer + Admin Experience",
      description:
        "Full-stack commerce platform with separate admin and customer journeys, a dynamic catalog, cart flow, and authenticated access control.",
      highlight:
        "Built to show product thinking as well as frontend state management: protected routes, role-based behavior, and a complete shopping experience from browsing to order flow.",
      credentials: [
        { role: "Admin", email: "admin@gmail.com", password: "admin1234" },
        { role: "Customer", email: "test@gmail.com", password: "123456" },
      ], 
      tech: ["React", "Redux", "Firebase", "JavaScript"],
      github: "https://github.com/Yitzhakbin9/e-Commerce-Web-Site",
      live: "https://e-commerce-web-site-sooty.vercel.app/login",
      liveLabel: "Live Demo Soon",
      image: ecommerceProjectImage,
      imageAlt: "Preview illustration for the E-Commerce Web App project",
    },
    {
      title: "Factory Management System",
      eyebrow: "Operations + API Design",
      description:
        "Backend-focused management system for factory operations with REST APIs, JWT authentication, and structured relationships between employees, departments, and shifts.",
      highlight:
        "This project highlights data modeling and system design: organizing permissions, enforcing role-aware behavior, and keeping complex business entities consistent across the API.",
      credentials: [{ role: "Admin", email: "admin", password: "admin@gmail.com" }],
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/Yitzhakbin9/employees-management-system",
      live: "https://employees-management-system-roan.vercel.app/login",
      liveLabel: "Code Walkthrough Ready",
      image: factoryProjectImage,
      imageAlt: "Preview illustration for the Factory Management System project",
    },
  ],
  education: [
    {
      title: "B.Sc Computer Science & Mathematics",
      place: "Ariel University",
      year: "2016 - 2020",
    },
    {
      title: "Java & Spring Back-end Bootcamp",
      place: "Blue-Tech education",
      year: "2022",
    },
    {
      title: "Full Stack Development Program",
      place: "Yaniv Arad",
      year: "2025",
    },
  ],
};
