import { siteConfig } from "@/lib/config/site";

export const profile = {
  name: "Neeraj Singh Rajput",
  position: "Full Stack Developer | MERN & React Native",
  location: siteConfig.contact.location,
  email: siteConfig.contact.email,
  phone: siteConfig.contact.phone,
  linkedin: siteConfig.contact.linkedin,
  github: siteConfig.contact.github,
  resumeUrl:
    "https://drive.google.com/file/d/1--6RFnZO_3DPRppXEh4V_MUyKVA_qNcH/view?usp=sharing",
  summary:
    "Full Stack Developer with 4+ years of experience building production web and mobile applications. I specialize in the MERN stack, React Native, Next.js, and cloud integrations — shipping clean architecture, secure APIs, and pixel-perfect interfaces for startups and enterprise teams.",
  highlights: [
    { value: "4+", label: "Years experience" },
    { value: "21+", label: "Projects shipped" },
    { value: "4", label: "Companies" },
    { value: "MCA", label: "GLA University" },
  ],
  experience: [
    {
      role: "Associate Software Engineer",
      company: "Luminoguru Pvt Ltd",
      period: "Mar 2026 – Aug 2026",
      location: "Mohali, India",
      summary:
        "Built full-stack applications with MERN and PostgreSQL across school management, patent, tattoo, and e-commerce platforms.",
      highlights: [
        "Developed full-stack applications using MERN Stack and PostgreSQL",
        "Built responsive React.js interfaces and scalable Node.js APIs",
        "Delivered School Management, Patent, Tattoo, and e-commerce platforms",
        "Integrated REST APIs, authentication, and third-party services",
        "Collaborated with teams to ship high-quality production software",
      ],
    },
    {
      role: "MERN Stack Developer (Team Lead)",
      company: "Webguruz Technologies Pvt. Ltd.",
      period: "Jul 2025 – Feb 2026",
      location: "Mohali, India",
      summary:
        "Led React Native and full-stack delivery with analytics, Auth0, Twilio, and RTL localization for international audiences.",
      highlights: [
        "Developed React Native apps with Google Analytics, Auth0, Twilio, and RTL (Hebrew) support",
        "Implemented pixel-perfect Figma designs with secure authentication",
        "Added real-time analytics while keeping performance and UX seamless",
        "Owned feature delivery end-to-end as team lead on MERN projects",
      ],
    },
    {
      role: "Full Stack Developer | Team Lead",
      company: "Anthem Infotech Pvt. Ltd.",
      period: "Nov 2024 – Jul 2025",
      location: "Zirakpur, India",
      summary:
        "Led MERN, React Native, and cloud delivery with payment gateways, Azure CI/CD, and production-ready architecture.",
      highlights: [
        "Led full-stack work with React, Next.js App Router, Node.js, and MongoDB",
        "Fortified apps with JWT authentication, bcrypt encryption, and REST APIs",
        "Automated CI/CD pipelines through Azure DevOps",
        "Integrated payment gateways processing real transactions",
        "Scaled cloud services and blob storage for sensitive data workloads",
      ],
    },
    {
      role: "Web Developer (Junior + Internship)",
      company: "Webreate",
      period: "Jan 2023 – Dec 2023",
      location: "Dehradun, India",
      summary:
        "Built foundational web apps with JWT auth, Redux Toolkit, React Router, and Express backends.",
      highlights: [
        "Developed web applications with secure JWT authentication and protected routes",
        "Integrated Node.js/Express backends for CRUD and auth flows",
        "Managed state with Redux Toolkit and navigation with React Router DOM",
        "Optimized frontend performance with lazy loading and faster API responses",
      ],
    },
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "GLA University",
      period: "Jul 2023 – Sep 2025",
      location: "Noida, India",
      details:
        "Postgraduate focus on software engineering, full-stack development, and applied computer science.",
    },
    {
      degree: "Bachelor of Science (B.Sc)",
      school: "Jiwaji University",
      period: "Jul 2015 – Aug 2018",
      location: "Gwalior, India",
      details:
        "Undergraduate foundation in science and analytical problem-solving that supports engineering work today.",
    },
  ],
  journey: [
    {
      year: "2023",
      title: "Started as a Web Developer",
      description:
        "Began at Webreate in Dehradun — learning production React, Node.js, JWT auth, and how real products ship.",
    },
    {
      year: "2024",
      title: "Stepped into Team Lead",
      description:
        "At Anthem Infotech, owned full-stack delivery with Next.js, payments, Azure CI/CD, and zero-margin-for-error releases.",
    },
    {
      year: "2025",
      title: "Led MERN & React Native",
      description:
        "At Webguruz, led mobile and web delivery with Auth0, Twilio, analytics, RTL support, and Figma-perfect UI.",
    },
    {
      year: "2026",
      title: "Shipping product platforms",
      description:
        "At Luminoguru and through NSRGFX personal products — building school, patent, marketplace, and consultancy platforms clients can use and buy.",
    },
  ],
  skills: [
    {
      label: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "React Native",
        "TypeScript / JavaScript (ES6+)",
        "Tailwind CSS",
        "Redux Toolkit",
        "Context API",
        "Formik & Yup",
      ],
    },
    {
      label: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "NestJS",
        "Fastify",
        "REST APIs",
        "JWT & bcrypt",
        "Multer / FTP",
        "Middleware & secure headers",
      ],
    },
    {
      label: "Cloud & DevOps",
      items: [
        "Azure App Services",
        "Azure Blob Storage",
        "Azure DevOps CI/CD",
        "GitHub Actions",
        "AWS EC2 / S3",
        "App Insights & logs",
      ],
    },
    {
      label: "Databases",
      items: [
        "MongoDB / Atlas",
        "PostgreSQL",
        "MySQL",
        "Microsoft SQL Server",
        "Mongoose",
        "Sequelize",
      ],
    },
    {
      label: "Payments",
      items: ["Stripe", "Razorpay", "PayPal", "PhonePe", "Acquired"],
    },
  ],
  principles: [
    {
      title: "Clean architecture",
      description:
        "Maintainable patterns — modular components, RESTful APIs, and scalable database design.",
    },
    {
      title: "Secure by default",
      description:
        "JWT authentication, bcrypt encryption, protected routes, and secure headers on every application.",
    },
    {
      title: "Pixel-perfect UI",
      description:
        "Figma designs translated into responsive React and React Native interfaces with attention to detail.",
    },
    {
      title: "Production delivery",
      description:
        "CI/CD pipelines, cloud deployment, and performance optimization so code ships reliably.",
    },
  ],
} as const;
