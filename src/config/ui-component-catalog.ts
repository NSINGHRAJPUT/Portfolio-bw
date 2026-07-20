import type { UiComponentDefinition, UiIndependenceRule } from "@/types/ui-components";

export const uiComponentCatalog: UiComponentDefinition[] = [
  { name: "Navbar", description: "Top-level navigation and route discovery.", category: "Navigation" },
  { name: "Dock", description: "Compact floating shortcut launcher.", category: "Navigation" },
  { name: "Command Menu", description: "Keyboard-driven command/search surface.", category: "Navigation" },
  { name: "Spotlight", description: "Global search and navigation spotlight.", category: "Navigation" },
  { name: "Animated Grid", description: "Decorative motion-based layout background.", category: "Visual System" },
  { name: "Timeline", description: "Chronological storytelling and process steps.", category: "Storytelling" },
  { name: "Magic Cards", description: "Interactive spotlight cards with glow behavior.", category: "Cards" },
  { name: "Gradient Button", description: "Primary CTA with premium gradient styling.", category: "Buttons" },
  { name: "Magnetic Button", description: "Cursor-reactive CTA micro-interaction.", category: "Buttons" },
  { name: "Infinite Marquee", description: "Continuously scrolling logos or messages.", category: "Motion" },
  { name: "Project Card", description: "Project preview with tags and outcomes.", category: "Cards" },
  { name: "Case Study Card", description: "Impact-oriented case study preview.", category: "Cards" },
  { name: "AI Chat Bubble", description: "Message bubble for AI/user chat roles.", category: "AI UI" },
  { name: "Pricing Card", description: "Plan details with scope and CTA.", category: "Commercial" },
  { name: "Animated Counter", description: "Metric count-up display for KPI proof.", category: "Data Display" },
  { name: "Theme Switch", description: "Light/dark theme toggling control.", category: "Utility" },
  { name: "Glass Card", description: "Reusable glassmorphism container.", category: "Cards" },
  { name: "Code Block", description: "Formatted code presentation with actions.", category: "Editorial" },
  { name: "Blog Card", description: "Article preview card with metadata.", category: "Editorial" },
  { name: "Footer", description: "Global footer with links and legal navigation.", category: "Layout" },
];

export const uiIndependenceRules: UiIndependenceRule[] = [
  {
    title: "No Page Coupling",
    detail: "Components must not import feature/page modules directly; all content enters through props.",
  },
  {
    title: "No Data Fetching in Primitives",
    detail: "Reusable UI components do not call APIs; data orchestration belongs to feature containers.",
  },
  {
    title: "Typed Public API",
    detail: "Each component exposes typed props for variants, size, state, and accessibility labels.",
  },
  {
    title: "No Hardcoded Routes",
    detail: "Navigation actions are passed as handlers or href props to avoid business-specific assumptions.",
  },
  {
    title: "Token-Driven Styling",
    detail: "Visual output must rely on design tokens and semantic classes instead of literal values.",
  },
];

export const uiComponentCategories = Array.from(
  new Set(uiComponentCatalog.map((component) => component.category)),
);
