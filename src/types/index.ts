export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  outcomes: string[];
}

export interface Project {
  slug: string;
  name: string;
  summary: string;
  tags: string[];
  company?: string;
  period?: string;
  url?: string;
  category?: "personal" | "company";
}
