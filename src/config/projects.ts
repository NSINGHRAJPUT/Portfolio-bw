export interface ProjectHighlight {
  label: string;
  items: string[];
}

export interface PortfolioProject {
  slug: string;
  title: string;
  company: string;
  period: string;
  url?: string;
  summary: string;
  description: string;
  highlights: ProjectHighlight[];
  tags: string[];
  featured?: boolean;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "carbon-patent-group",
    title: "Carbon Patent Group",
    company: "Luminoguru Pvt Ltd",
    period: "2025 – Present",
    url: "https://carbon-patent.lusites.xyz/",
    summary:
      "Tier-1 Canadian patent prosecution boutique website with instant fee estimator, client login, service pages, and contact workflows.",
    description:
      "A professional web platform for Carbon Patent Group — a Canadian patent prosecution boutique trusted by innovative companies, research institutions, and foreign law firms worldwide.",
    highlights: [
      {
        label: "Platform",
        items: [
          "Marketing site for Canadian patent prosecution services",
          "Instant fee estimator for patent drafting & filing",
          "Secure client login portal",
          "Multi-section service pages (About, Team, Services, Foreign Agents)",
        ],
      },
      {
        label: "Features",
        items: [
          "Contact forms with service selection (Patent Drafting, Canadian Prosecution)",
          "FAQ section covering PCT filings, costs, and international patents",
          "Recognition badges and client segment showcases",
          "Mobile-responsive layout with SEO-optimized content",
        ],
      },
      {
        label: "Domain",
        items: [
          "Life sciences, pharmaceuticals, chemistry, medical devices",
          "Software, electrical, mechanical, and emerging technologies",
          "Universities, startups, multinationals, and foreign law firm partners",
        ],
      },
    ],
    tags: ["Next.js", "MERN Stack", "PostgreSQL", "SEO", "Auth"],
    featured: true,
  },
  {
    slug: "cartobike",
    title: "CartoBike",
    company: "Luminoguru Pvt Ltd",
    period: "2025 – Present",
    url: "https://cartobike.com/en",
    summary:
      "European vehicle marketplace for cars, motorcycles, bikes, and e-scooters — with auctions, pro sellers, Stripe payments, and mobile apps.",
    description:
      "CartoBike is one of the biggest vehicle marketplaces in Europe, enabling users to buy, sell, and auction vehicles with professional seller tools and a community of over 1 million people.",
    highlights: [
      {
        label: "Marketplace",
        items: [
          "Multi-category listings: cars, motorcycles, bikes, e-scooters",
          "Advanced search with brand, model, year, and price filters",
          "Professional seller profiles with ad counts and ratings",
          "Low-cost vehicle categories (€5K–€25K tiers)",
        ],
      },
      {
        label: "Commerce",
        items: [
          "Vehicle auctions for cars, motorcycles, bikes, and scooters",
          "Stripe-secured transactions",
          "Pro seller onboarding and partner program",
          "Favorites and event management",
        ],
      },
      {
        label: "Platform",
        items: [
          "Multi-language support (English and more)",
          "iOS and Android mobile apps",
          "Forum, FAQ, and support resources",
          "Social presence: 631K+ TikTok, 278K+ Instagram followers",
        ],
      },
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "Marketplace", "Mobile App"],
    featured: true,
  },
  {
    slug: "tattoo-generation-platform",
    title: "AI Tattoo Generation Platform",
    company: "Luminoguru Pvt Ltd",
    period: "2025 – Present",
    summary:
      "AI-powered tattoo design platform where users generate, preview, and save custom tattoo artwork with style controls and a personal design gallery.",
    description:
      "A full-stack tattoo generation application that helps users explore custom tattoo ideas using AI — select styles, refine prompts, preview designs on body placement, and save favorites for studio consultations.",
    highlights: [
      {
        label: "Frontend",
        items: [
          "React.js interface for style and prompt selection",
          "Real-time design preview and gallery views",
          "Responsive layout for mobile and desktop users",
        ],
      },
      {
        label: "Backend",
        items: [
          "Node.js + Express.js REST APIs",
          "PostgreSQL for users, designs, and generation history",
          "JWT authentication with role-based access",
        ],
      },
      {
        label: "AI & Features",
        items: [
          "AI-powered tattoo artwork generation from user prompts",
          "Style presets and design variation controls",
          "Save, organize, and revisit generated designs",
          "User dashboard for design history and exports",
        ],
      },
    ],
    tags: ["React", "Node.js", "PostgreSQL", "AI", "MERN Stack", "JWT"],
    featured: false,
  },
  {
    slug: "school-management-system",
    title: "School Management System",
    company: "Luminoguru Pvt Ltd",
    period: "2025 – Present",
    summary:
      "End-to-end school ERP with admin, teacher, student, and parent portals — attendance, grades, timetables, fees, and dashboard analytics.",
    description:
      "A comprehensive school management platform built to digitize daily school operations — from student enrollment and attendance tracking to grade management, fee collection, and parent-teacher communication.",
    highlights: [
      {
        label: "Portals & Roles",
        items: [
          "Admin dashboard for institution-wide oversight",
          "Teacher portal for classes, attendance, and grading",
          "Student and parent portals for schedules and progress",
          "Role-based access control across all modules",
        ],
      },
      {
        label: "Backend",
        items: [
          "Node.js + Express.js RESTful APIs",
          "PostgreSQL with structured relational schemas",
          "Secure JWT authentication and bcrypt encryption",
        ],
      },
      {
        label: "Modules",
        items: [
          "Attendance tracking and leave management",
          "Grade books, exams, and report generation",
          "Timetable and class scheduling",
          "Fee management and payment records",
          "Notices, announcements, and notifications",
        ],
      },
    ],
    tags: ["React", "Node.js", "PostgreSQL", "MERN Stack", "JWT", "ERP"],
    featured: false,
  },
  {
    slug: "raffily-business",
    title: "Raffily Business",
    company: "Anthem Infotech Pvt. Ltd.",
    period: "Mar 2025 – Present",
    summary:
      "SSR raffle portal with Stripe integration, CSV prize imports, SSO via NextAuth, and mobile-first responsive UI.",
    description:
      "A modernized version of Raffily, built with Next.js 15 for SSR and performance optimization — a customer retention raffle platform for businesses.",
    highlights: [
      {
        label: "Frontend",
        items: ["Next.js 15 App Router", "Tailwind CSS", "Dynamic routing & SEO"],
      },
      {
        label: "Backend",
        items: ["Node.js API routes", "MongoDB for scalable data storage"],
      },
      {
        label: "Payments & Auth",
        items: ["Stripe for subscriptions & instant prize purchases", "NextAuth SSO authentication"],
      },
      {
        label: "Cloud & DevOps",
        items: ["Azure Pipelines CI/CD", "Azure App Services hosting", "Azure Blob file storage"],
      },
      {
        label: "Features",
        items: [
          "CSV import for instant prize setup",
          "SendGrid email notifications",
          "Mobile-responsive design",
        ],
      },
    ],
    tags: ["Next.js 15", "SSR", "Stripe", "NextAuth", "MongoDB", "Azure"],
    featured: true,
  },
  {
    slug: "carplake",
    title: "Carplake",
    company: "Anthem Infotech Pvt. Ltd.",
    period: "Feb 2025 – Jun 2025",
    summary:
      "Fishing lake booking platform for admins, lake owners, and anglers with real-time booking, image uploads, and revenue tracking.",
    description:
      "A fishing lake booking system with three roles — Admin, Lake Owners, and Anglers — covering availability, bookings, earnings, and catch logging.",
    highlights: [
      {
        label: "Frontend",
        items: ["React.js SPA", "Axios & React Query for API caching"],
      },
      {
        label: "Backend",
        items: ["Node.js + Express.js REST APIs", "MongoDB database"],
      },
      {
        label: "Auth & Security",
        items: ["JWT-based authentication", "Role middleware", "bcrypt-encrypted passwords"],
      },
      {
        label: "Cloud & DevOps",
        items: ["Azure CI/CD auto-deployments", "Azure App Services", "Azure Blob for images & documents"],
      },
      {
        label: "Features",
        items: [
          "Real-time slot availability",
          "Booking management",
          "Earnings tracking for lake owners",
          "Fish catch logging system",
        ],
      },
    ],
    tags: ["React", "MERN Stack", "React Query", "JWT", "Azure", "MongoDB"],
    featured: true,
  },
  {
    slug: "raffily",
    title: "Raffily",
    company: "Anthem Infotech Pvt. Ltd.",
    period: "Mar 2025 – Jun 2025",
    summary:
      "Raffle system with admin, merchant, and user roles — raffle creation, instant wins, PayPal/Acquired payments, and email notifications.",
    description:
      "A raffle platform with Admin, Merchant, and User roles supporting live participation, instant win animations, and secure transactions.",
    highlights: [
      {
        label: "Frontend",
        items: ["React.js", "Redux Toolkit for global state management"],
      },
      {
        label: "Backend",
        items: ["Node.js & Express.js REST APIs", "MongoDB with Mongoose ODM"],
      },
      {
        label: "Auth & Security",
        items: ["JWT role-specific authentication", "bcrypt password security", "Secure route guarding"],
      },
      {
        label: "Cloud & Payments",
        items: [
          "Azure App Services deployment",
          "Azure Blob for raffle images & tickets",
          "PayPal & Acquired.com payment integration",
        ],
      },
      {
        label: "Features",
        items: [
          "Raffle creation & live participation",
          "Instant win animations",
          "Unique ticket tracking",
          "Email notifications",
        ],
      },
    ],
    tags: ["React", "Redux Toolkit", "MERN Stack", "PayPal", "Azure DevOps", "MongoDB"],
    featured: true,
  },
  {
    slug: "book-my-cold-store",
    title: "Book My Cold Store",
    company: "Anthem Infotech Pvt. Ltd.",
    period: "Jan 2025 – Mar 2025",
    summary:
      "B2B/B2C portal connecting cold store owners and consumers with booking, role-based access, Blob uploads, and PhonePe payments.",
    description:
      "A B2B/B2C portal connecting cold storage warehouse owners and product owners with dynamic booking and real-time order tracking.",
    highlights: [
      {
        label: "Frontend",
        items: ["React.js SPA", "React Router DOM navigation"],
      },
      {
        label: "Backend",
        items: ["Node.js + Express.js REST APIs", "MongoDB database"],
      },
      {
        label: "Auth & Payments",
        items: ["JWT authentication", "bcrypt password hashing", "PhonePe Payment Gateway"],
      },
      {
        label: "Cloud & DevOps",
        items: ["Azure App Services hosting", "Azure DevOps CI/CD", "Azure Blob for KYC & invoices"],
      },
      {
        label: "Features",
        items: [
          "Dynamic booking slots",
          "Role-based access control",
          "Dashboard analytics",
          "Real-time order status updates",
        ],
      },
    ],
    tags: ["React", "MERN Stack", "PhonePe", "JWT", "Azure", "MongoDB"],
    featured: true,
  },
  {
    slug: "employee-management-anthem",
    title: "Employee Management Portal",
    company: "Anthem Infotech Pvt. Ltd.",
    period: "Nov 2024 – Dec 2024",
    summary:
      "Internal tool for managing employee data, tasks, and documents with secure auth, FTP file handling, and role-based controls.",
    description:
      "An internal portal for managing employee profiles, tasks, and documents with HR/Admin role-based access.",
    highlights: [
      {
        label: "Frontend",
        items: ["React.js reusable components", "Formik & Yup form validation"],
      },
      {
        label: "Backend",
        items: ["Express.js with MongoDB", "JWT & refresh token authentication"],
      },
      {
        label: "Storage",
        items: ["FTP protocol for resumes, payslips, and official documents"],
      },
      {
        label: "Features",
        items: [
          "Role-based access (HR/Admin)",
          "Attendance tracking",
          "Leave requests",
          "Task management",
        ],
      },
    ],
    tags: ["React", "MERN Stack", "JWT", "Formik", "FTP", "MongoDB"],
    featured: false,
  },
  {
    slug: "condominium-portal",
    title: "Condominium Portal",
    company: "Tiny Script Soft Tech Pvt. Ltd.",
    period: "Jan 2024 – Nov 2024",
    summary:
      "Real estate platform connecting property owners with customers — dashboards, listings, JWT auth, booking workflows, and Azure CI/CD.",
    description:
      "Web platform connecting property owners with customers seeking real estate and related services with secure booking workflows and media management.",
    highlights: [
      {
        label: "Platform",
        items: [
          "User dashboards & property listing management",
          "Secure JWT authentication",
          "Service booking workflows",
        ],
      },
      {
        label: "Cloud & DevOps",
        items: [
          "Azure Web App & Static Web App",
          "Azure Blob for media storage",
          "CI/CD pipelines via Git/Bitbucket",
        ],
      },
      {
        label: "Stack",
        items: ["MERN Stack", "Microsoft SQL Server", "REST APIs"],
      },
    ],
    tags: ["MERN Stack", "Azure", "SQL Server", "JWT", "CI/CD"],
    featured: true,
  },
  {
    slug: "employee-management-desktop",
    title: "Employee Management Portal (Desktop)",
    company: "Tiny Script Soft Tech Pvt. Ltd.",
    period: "Apr 2024 – Jul 2024",
    summary:
      "Cross-platform Electron desktop app integrated with the MERN stack for employee management with offline-first support.",
    description:
      "A cross-platform desktop application using Electron.js integrated with the MERN stack, delivering a native desktop experience with full-stack architecture.",
    highlights: [
      {
        label: "Frontend",
        items: ["React + Electron UI", "Real-time interactive interface"],
      },
      {
        label: "Backend",
        items: ["Node.js + Express APIs", "MongoDB for scalable data storage"],
      },
      {
        label: "Desktop",
        items: [
          "Electron packaging for Windows, macOS, and Linux",
          "Offline-first support",
          "Real-time syncing",
        ],
      },
      {
        label: "Features",
        items: ["Authentication", "Data persistence", "Modular design"],
      },
    ],
    tags: ["Electron.js", "MERN Stack", "MongoDB", "Desktop App"],
    featured: false,
  },
  {
    slug: "prabhuseva-travels",
    title: "Prabhuseva Travels",
    company: "Webreate",
    period: "Oct 2023 – Dec 2023",
    summary:
      "Travel booking platform for customizable tour packages with JWT auth, dashboards, booking workflows, and Vercel deployment.",
    description:
      "Travel booking platform for customizable tour packages with package filtering, user dashboards, and document uploads.",
    highlights: [
      {
        label: "Stack",
        items: ["React frontend", "MERN stack backend", "JWT authentication"],
      },
      {
        label: "Features",
        items: [
          "Package filtering & booking workflows",
          "User dashboards",
          "Image & document uploads",
        ],
      },
      {
        label: "Deployment",
        items: ["Vercel for fast global frontend performance"],
      },
    ],
    tags: ["React", "MERN Stack", "JWT", "Vercel"],
    featured: false,
  },
  {
    slug: "riyo-rent",
    title: "Riyo Rent",
    company: "Webreate",
    period: "Jun 2023 – Dec 2023",
    summary:
      "Vehicle rental platform with identity verification (Aadhar, PAN, Voter ID), Azure Blob storage, JWT auth, and booking management.",
    description:
      "Vehicle rental platform enabling users to rent vehicles after identity verification with secure onboarding and admin controls.",
    highlights: [
      {
        label: "Auth & Verification",
        items: [
          "JWT authentication",
          "Aadhar, PAN, and Voter ID document uploads",
          "Role-based access for admins and users",
        ],
      },
      {
        label: "Cloud",
        items: ["Azure Blob Storage for document storage"],
      },
      {
        label: "Features",
        items: [
          "Real-time vehicle availability",
          "Booking management",
          "Dashboard analytics",
        ],
      },
    ],
    tags: ["React", "MERN Stack", "Azure Blob", "JWT", "MongoDB"],
    featured: false,
  },
];

export const featuredProjects = portfolioProjects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}
