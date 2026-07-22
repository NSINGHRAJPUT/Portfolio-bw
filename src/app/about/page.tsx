import type { Metadata } from "next";

import { AboutEducationSection } from "@/components/sections/about-education-section";
import { AboutExperienceSection } from "@/components/sections/about-experience-section";
import { AboutJourneySection } from "@/components/sections/about-journey-section";
import { AboutProfileHero } from "@/components/sections/about-profile-hero";
import { AboutSkillsSection } from "@/components/sections/about-skills-section";
import { JsonLd } from "@/components/shared/json-ld";
import { profile } from "@/config/profile";
import { seoConfig } from "@/config/seo";
import { getPersonSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: `About ${profile.name} | ${seoConfig.siteName}`,
  description: profile.summary,
  alternates: { canonical: "/about" },
  keywords: [
    profile.name,
    "Full Stack Developer",
    "MERN stack developer",
    "React Native developer",
    "Mohali",
    "MCA GLA University",
  ],
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={getPersonSchema()} />
      <AboutProfileHero />
      <AboutExperienceSection />
      <AboutEducationSection />
      <AboutJourneySection />
      <AboutSkillsSection />
    </>
  );
}
