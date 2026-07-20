import type {
  AiArchitectureLayer,
  AiExperienceDefinition,
  AiExperienceKey,
} from "@/types/ai-experiences";

const experienceDefinitions: Record<AiExperienceKey, AiExperienceDefinition> = {
  aiChat: {
    key: "aiChat",
    title: "AI Chat",
    path: "/ai/ai-chat",
    purpose: "Provide conversational guidance, discovery support, and routing to the right services.",
    input: ["User query", "Business context", "Optional project details"],
    output: ["Actionable response", "Recommended next steps", "CTA handoff"],
    primaryValue: "Fast personalized direction for unclear user intent.",
    conversionGoal: "Route users to Estimate Project or Book Meeting.",
    architectureNotes: [
      "Uses shared prompt orchestration and context assembly.",
      "Stores session history for continuity and analytics.",
      "Applies response normalization for predictable UI rendering.",
    ],
    guardrails: [
      "Prompt injection checks",
      "Output schema validation",
      "Fallback response for low confidence",
    ],
  },
  projectEstimator: {
    key: "projectEstimator",
    title: "Project Estimator",
    path: "/ai/project-estimator",
    purpose: "Convert high-level requirements into realistic budget and timeline ranges.",
    input: ["Scope summary", "Feature set", "Integrations", "Deadline and budget constraints"],
    output: ["Effort range", "Cost range", "Assumptions and risk flags"],
    primaryValue: "Improves lead qualification and sales speed.",
    conversionGoal: "Submit estimate artifact and schedule discovery.",
    architectureNotes: [
      "Uses structured step payloads and weighted scoring.",
      "Supports recalculation with changed assumptions.",
      "Persists estimate artifacts for CRM and follow-up workflows.",
    ],
    guardrails: [
      "Mandatory assumptions section",
      "Uncertainty bands in all numeric outputs",
      "Business logic constraints for unrealistic combinations",
    ],
  },
  proposalGenerator: {
    key: "proposalGenerator",
    title: "Proposal Generator",
    path: "/ai/proposal-generator",
    purpose: "Generate polished proposal drafts from discovery inputs.",
    input: ["Client brief", "Scope", "Pricing model", "Timeline constraints"],
    output: ["Problem statement", "Execution plan", "Milestones", "Commercial terms draft"],
    primaryValue: "Reduces proposal turnaround from days to minutes.",
    conversionGoal: "Export proposal and trigger client review workflow.",
    architectureNotes: [
      "Template-aware prompt routing by engagement type.",
      "Chunked generation for predictable section quality.",
      "Artifact versioning for edit history and approvals.",
    ],
    guardrails: [
      "Section-level schema validation",
      "Legal disclaimer insertion",
      "Pricing consistency checks",
    ],
  },
  resumeReview: {
    key: "resumeReview",
    title: "Resume Review",
    path: "/ai/resume-review",
    purpose: "Assess resumes for role fit, clarity, and ATS compatibility.",
    input: ["Resume text/file", "Target role", "Optional job description"],
    output: ["Score summary", "Keyword gap analysis", "Rewrite suggestions"],
    primaryValue: "Creates a high-value utility experience that attracts qualified leads.",
    conversionGoal: "Capture email and route users to paid consulting options.",
    architectureNotes: [
      "File ingestion pipeline with text extraction stage.",
      "Role-specific rubric scoring before generation.",
      "Reusable recommendation blocks mapped to common issues.",
    ],
    guardrails: [
      "PII-safe processing rules",
      "No fabricated achievements policy",
      "Strict formatting and readability checks",
    ],
  },
  businessIdeaValidator: {
    key: "businessIdeaValidator",
    title: "Business Idea Validator",
    path: "/ai/business-idea-validator",
    purpose: "Evaluate startup ideas across market viability and execution risk.",
    input: ["Idea summary", "Target user", "Distribution assumptions", "Pricing hypothesis"],
    output: ["Validation score", "Risk map", "Differentiation opportunities", "Next experiments"],
    primaryValue: "Turns abstract ideas into testable strategic plans.",
    conversionGoal: "Book a strategic validation workshop.",
    architectureNotes: [
      "Scoring rubric combines market, value prop, and execution complexity.",
      "Supports scenario comparison for idea variants.",
      "Emits an action plan artifact for follow-up.",
    ],
    guardrails: [
      "Explicit uncertainty disclosure",
      "No guaranteed outcome language",
      "Assumption-first recommendations",
    ],
  },
  websiteAudit: {
    key: "websiteAudit",
    title: "Website Audit",
    path: "/ai/website-audit",
    purpose: "Audit website quality across UX, messaging, performance, and conversion.",
    input: ["Site URL", "Business goal", "Primary audience", "Optional benchmark URLs"],
    output: ["Prioritized findings", "Severity scoring", "Fix roadmap", "Quick wins"],
    primaryValue: "Provides immediate value and creates redesign demand.",
    conversionGoal: "Start redesign consultation or optimization sprint.",
    architectureNotes: [
      "Crawler/extractor stage captures key page content.",
      "Heuristic checks run before model synthesis.",
      "Findings grouped by impact and implementation effort.",
    ],
    guardrails: [
      "Source-backed claims only",
      "Accessibility and performance checklist enforcement",
      "No sensitive data retention from crawled pages",
    ],
  },
  promptGenerator: {
    key: "promptGenerator",
    title: "Prompt Generator",
    path: "/ai/prompt-generator",
    purpose: "Generate high-quality prompts optimized for specific tasks and models.",
    input: ["Task objective", "Target model", "Context", "Desired output format"],
    output: ["System prompt", "User prompt", "Few-shot variants", "Optimization tips"],
    primaryValue: "Accelerates AI productivity with reusable prompt assets.",
    conversionGoal: "Drive repeat usage and upsell prompt operations support.",
    architectureNotes: [
      "Prompt assembly engine composes role, constraints, and style.",
      "Variant generation supports A/B comparison.",
      "Prompt assets are exportable and versioned.",
    ],
    guardrails: [
      "Safety filters for harmful intent",
      "Instruction hierarchy preservation",
      "Model-specific token and format constraints",
    ],
  },
  contentGenerator: {
    key: "contentGenerator",
    title: "Content Generator",
    path: "/ai/content-generator",
    purpose: "Produce conversion-ready content aligned with brand voice and channel strategy.",
    input: ["Content type", "Audience", "Tone", "Offer details", "Distribution channel"],
    output: ["Primary draft", "Alternative variants", "CTA options", "Channel adaptation notes"],
    primaryValue: "Delivers scalable content velocity with consistent quality.",
    conversionGoal: "Convert users into monthly content or growth retainers.",
    architectureNotes: [
      "Voice profile layer ensures brand consistency.",
      "Channel adapters tailor format and length.",
      "Editorial scoring ranks outputs before final delivery.",
    ],
    guardrails: [
      "Fact-check prompts for claim-heavy content",
      "Policy checks for regulated categories",
      "No plagiarism and originality constraints",
    ],
  },
};

export const aiExperiences = Object.values(experienceDefinitions);

export function getAiExperience(key: AiExperienceKey): AiExperienceDefinition {
  return experienceDefinitions[key];
}

export const aiArchitectureLayers: AiArchitectureLayer[] = [
  {
    name: "Experience Layer",
    responsibility: "Feature-specific UX flows, forms, and output rendering per AI capability.",
    modules: ["features/ai-assistant", "features/estimate-project", "features/resources"],
  },
  {
    name: "Orchestration Layer",
    responsibility: "Prompt assembly, model routing, tool selection, and workflow execution.",
    modules: ["ai/chains", "ai/prompts", "ai/tools"],
  },
  {
    name: "Guardrails Layer",
    responsibility: "Input validation, schema enforcement, safety filtering, and confidence handling.",
    modules: ["ai/schemas", "ai/evaluators", "lib/validators"],
  },
  {
    name: "Service Layer",
    responsibility: "External integrations for LLM calls, persistence, and analytics.",
    modules: ["services/openai", "services/supabase", "services/analytics"],
  },
  {
    name: "Data Layer",
    responsibility: "Store sessions, outputs, feedback, and event telemetry for continuous optimization.",
    modules: ["lib/db", "lib/telemetry", "config"],
  },
];
