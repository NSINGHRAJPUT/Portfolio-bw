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
    badge: "Trusted by founders and product teams",
    cardTitle: "AI Product Build",
    cardDescription:
      "A premium engagement to align your team on strategy, design, and engineering — from discovery through launch.",
    milestoneFooter:
      "Milestones update as your project progresses. Complete each phase to advance.",
    headline: ["Automate", "Intelligence.", "Accelerate Growth."],
    subheadline:
      "NSRGFX combines AI product strategy, cinematic UX, and production engineering to turn ambitious ideas into premium digital experiences.",
    primaryCta: "Start a Project",
    secondaryCta: "View Case Studies",
    stats: [
      { value: "42+", label: "Products Enhanced" },
      { value: "3.4x", label: "Faster launches" },
      { value: "98%", label: "Client satisfaction" },
    ],
    milestones: [
      {
        id: "01",
        label: "Discovery",
        status: "Active",
        icon: "discover" as const,
      },
      { id: "02", label: "Design", status: "Pending", icon: "design" as const },
      { id: "03", label: "Build", status: "Pending", icon: "build" as const },
      { id: "04", label: "Scale", status: "Pending", icon: "scale" as const },
      { id: "05", label: "Launch", status: "Pending", icon: "launch" as const },
    ],
  },
  features: {
    eyebrow: "Capabilities",
    headline: ["Built for Founders.", "Powered by AI."],
    subheadline:
      "Every engagement blends product strategy, premium interface craft, and AI-native engineering.",
    items: [
      {
        title: "Agentic Workflows",
        description:
          "Orchestrate multi-step AI processes with guarded decision points and human handoff.",
      },
      {
        title: "Premium UI Systems",
        description:
          "Pixel-precise interfaces with world-class motion, accessibility, and scalable architecture.",
      },
      {
        title: "Automation Layer",
        description:
          "Connect product, growth, and support tools to remove repetitive operational load.",
      },
      {
        title: "Performance Engineering",
        description:
          "Ship with observability, quality gates, and interaction latency targets under 120ms.",
      },
    ],
  },
  milestones: [
    { value: "2019", label: "NSRGFX founded" },
    { value: "42+", label: "Products launched" },
    { value: "28+", label: "Clients served" },
    { value: "6", label: "Active engagements" },
  ],
  pricing: {
    headline: "Engagement models built for premium outcomes",
    plans: [
      {
        key: "foundation",
        name: "Foundation",
        monthly: 1500,
        yearly: 1200,
        description: "AI + UX discovery and a premium execution plan.",
        features: [
          "Product diagnostics",
          "AI opportunity mapping",
          "UX wireframes",
          "Execution roadmap",
        ],
        cta: "Estimate Project",
        highlighted: false,
      },
      {
        key: "launch",
        name: "Launch",
        monthly: 4800,
        yearly: 4000,
        description: "Design and build a production-grade premium experience.",
        features: [
          "High-conversion UI",
          "Scalable architecture",
          "Motion + 3D accents",
          "Quality gates",
          "Launch support",
          "Performance budgets",
        ],
        cta: "Book Meeting",
        highlighted: true,
      },
      {
        key: "systems",
        name: "Systems",
        monthly: 9500,
        yearly: 8000,
        description: "Ongoing AI-native product optimization and engineering.",
        features: [
          "Everything in Launch",
          "Iteration loop",
          "Automation + integrations",
          "Analytics setup",
          "Dedicated support",
        ],
        cta: "Talk to NSRGFX",
        highlighted: false,
      },
    ],
  },
  cta: {
    headline: "Ready to build something premium?",
    subheadline:
      "Partner with NSRGFX for AI strategy, cinematic UX, and production engineering that ships.",
    button: "Book Discovery Call",
  },
} as const;
