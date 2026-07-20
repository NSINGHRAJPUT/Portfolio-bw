export type IaPageKey =
  | "home"
  | "about"
  | "services"
  | "projects"
  | "caseStudies"
  | "aiSolutions"
  | "blog"
  | "resources"
  | "testimonials"
  | "pricing"
  | "contact"
  | "bookMeeting"
  | "faq"
  | "privacy"
  | "terms"
  | "dashboard"
  | "admin"
  | "projectDetail"
  | "blogDetail"
  | "serviceDetail"
  | "estimateProject"
  | "aiAssistant";

export interface IaPageDefinition {
  key: IaPageKey;
  title: string;
  path: string;
  purpose: string;
  targetAudience: string;
  conversionGoal: string;
  components: string[];
  seoStrategy: string;
}
