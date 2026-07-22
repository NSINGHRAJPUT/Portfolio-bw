import { personalProducts } from "@/config/projects";
import { NavItem, Service } from "@/types";

export const siteConfig = {
  name: "Neeraj Singh Rajput",
  title: "Neeraj Singh Rajput - Full Stack Developer | MERN & React Native",
  description:
    "Full Stack Developer specializing in MERN stack, React Native, Next.js, and cloud integrations. Building scalable web and mobile applications from Mohali, India.",
  url: "https://www.nsrgfx.in",
  contact: {
    email: "nsinghrajputx@gmail.com",
    phone: "+91 9752661779",
    location: "Mohali, India",
    linkedin: "https://www.linkedin.com/in/n-s-r/",
    github: "https://github.com/NSINGHRAJPUT",
    resume:
      "https://drive.google.com/file/d/1--6RFnZO_3DPRppXEh4V_MUyKVA_qNcH/view?usp=sharing",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],
  services: [
    {
      title: "Full Stack Web Development",
      description:
        "End-to-end MERN and Next.js applications with responsive React interfaces, scalable Node.js, NestJS, and Fastify APIs, and MongoDB or PostgreSQL backends.",
      outcomes: ["Production-ready apps", "REST API integration"],
    },
    {
      title: "React Native Mobile Apps",
      description:
        "Cross-platform mobile apps with pixel-perfect Figma implementations, Auth0 authentication, Twilio integration, and RTL language support.",
      outcomes: ["iOS & Android delivery", "Real-time analytics"],
    },
    {
      title: "Cloud & Payment Integration",
      description:
        "Azure and AWS deployments, CI/CD pipelines, blob storage, and payment gateways including Stripe, Razorpay, PayPal, and PhonePe.",
      outcomes: ["Automated deployments", "Secure transactions"],
    },
  ] satisfies Service[],
  projects: personalProducts.map((project) => ({
    slug: project.slug,
    name: project.title,
    summary: project.summary,
    tags: project.tags.slice(0, 4),
    company: project.company,
    period: project.period,
    url: project.url,
    category: project.category,
  })),
};
