export type AnimationEngine = "framer-motion" | "gsap" | "three.js" | "css";

export interface AnimationPlanItem {
  key: string;
  title: string;
  objective: string;
  preferredEngine: AnimationEngine;
  implementationNotes: string[];
  timing: string;
  trigger: string;
}

export interface AnimationGuideline {
  title: string;
  detail: string;
}
