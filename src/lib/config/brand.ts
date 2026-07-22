/** Cybernetic HUD palette — electric cyan on deep navy */
export const brandColors = {
  primary: "#00d4ff",
  primaryStrong: "#0099cc",
  accent: "#38bdf8",
  glow: "#22d3ee",
  cyan: "#06b6d4",
  navy: "#020810",
  ribbon: [
    "#00d4ff",
    "#22d3ee",
    "#38bdf8",
    "#0ea5e9",
    "#06b6d4",
    "#67e8f9",
  ] as const,
} as const;

export const landingCopy = {
  hero: {
    badge: "Full Stack Developer · MERN & React Native",
    cardTitle: "Full Stack Build",
    cardDescription:
      "A focused engagement to architect, build, and deploy your web or mobile product — from API design through production launch.",
    milestoneFooter:
      "Milestones update as your project progresses. Complete each phase to advance.",
    headline: ["Build", "Scalable.", "Ship Production."],
    subheadline:
      "I build full-stack web and mobile applications with the MERN stack, Next.js, React Native, NestJS, Fastify, Bun, and cloud services — delivering clean architecture and production-ready code.",
    primaryCta: "Hire Me",
    secondaryCta: "View Products",
    stats: [
      { value: "4+", label: "Years experience" },
      { value: "21+", label: "Projects delivered" },
      { value: "4", label: "Companies served" },
    ],
    milestones: [
      {
        id: "01",
        label: "Discovery",
        icon: "discover" as const,
        description:
          "Understand your requirements, user flows, and technical constraints — scoping features, stack choices, and timeline before a single line of code is written.",
      },
      {
        id: "02",
        label: "Design",
        icon: "design" as const,
        description:
          "Translate Figma designs into responsive React and React Native interfaces with clean component architecture, accessibility, and pixel-perfect attention to detail.",
      },
      {
        id: "03",
        label: "Build",
        icon: "build" as const,
        description:
          "Develop full-stack features with Node.js, NestJS, or Fastify REST APIs, MongoDB or PostgreSQL models, JWT authentication, and third-party integrations like payments and Auth0.",
      },
      {
        id: "04",
        label: "Deploy",
        icon: "scale" as const,
        description:
          "Ship to production with Azure or AWS hosting, CI/CD pipelines via Azure DevOps or GitHub Actions, and performance monitoring for a reliable release.",
      },
      {
        id: "05",
        label: "Launch",
        icon: "launch" as const,
        description:
          "Go live with thorough testing, handoff documentation, and post-launch support — ensuring a smooth release and a product ready for real users.",
      },
    ],
  },
  features: {
    eyebrow: "Capabilities",
    headline: ["Built for Scale.", "Powered by MERN."],
    subheadline:
      "Every project combines clean frontend craft, robust backend APIs, and reliable cloud infrastructure.",
    items: [
      {
        title: "MERN Stack Apps",
        description:
          "MongoDB, Express, React, and Node.js — plus NestJS, Fastify, and Bun for high-performance APIs with JWT auth and scalable architecture.",
      },
      {
        title: "React Native Mobile",
        description:
          "Cross-platform apps with Figma-perfect UI, Auth0, Twilio, Google Analytics, and multi-language RTL support.",
      },
      {
        title: "Cloud & DevOps",
        description:
          "Azure App Services, AWS EC2/S3, CI/CD via Azure DevOps and GitHub Actions, and blob storage at scale.",
      },
      {
        title: "Payment Integrations",
        description:
          "Stripe, Razorpay, PayPal, PhonePe, and Acquired — secure payment flows that process real transactions.",
      },
    ],
  },
  milestones: [
    { value: "2023", label: "Web Developer at Webreate" },
    { value: "2024", label: "Team Lead at Anthem Infotech" },
    { value: "2025", label: "MERN Lead at Webguruz" },
    { value: "2026", label: "Engineer at Luminoguru" },
  ],
  pricing: {
    headline: "Engagement models for every project stage",
    plans: [
      {
        key: "foundation",
        name: "MVP Build",
        monthly: 160,
        yearly: 130,
        description: "Scope, wireframe, and build a minimum viable product.",
        features: [
          "Requirements analysis",
          "UI wireframes",
          "Core MERN features",
          "Deployment setup",
        ],
        cta: "Estimate Project",
        highlighted: false,
      },
      {
        key: "launch",
        name: "Full Stack",
        monthly: 500,
        yearly: 400,
        description: "Design and build a production-grade web or mobile application.",
        features: [
          "Responsive React UI",
          "Node.js REST APIs",
          "Database design",
          "Auth & security",
          "Cloud deployment",
          "Payment integration",
        ],
        cta: "Book Meeting",
        highlighted: true,
      },
      {
        key: "systems",
        name: "Team Lead",
        monthly: 900,
        yearly: 760,
        description: "Lead full-stack delivery with CI/CD, code reviews, and team coordination.",
        features: [
          "Everything in Full Stack",
          "Architecture decisions",
          "CI/CD pipelines",
          "Code review & mentoring",
          "Ongoing support",
        ],
        cta: "Get in Touch",
        highlighted: false,
      },
    ],
  },
  cta: {
    headline: "Ready to build your next product?",
    subheadline:
      "Let's discuss your web or mobile project — MERN stack, React Native, cloud integrations, and production-ready delivery.",
    button: "Contact Me",
  },
} as const;
