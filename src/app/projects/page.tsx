import { PageHero } from "@/components/sections/page-hero";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { WorkSection } from "@/components/sections/work-section";
import { JsonLd } from "@/components/shared/json-ld";
import { createIaMetadata } from "@/config/information-architecture";
import { personalProducts } from "@/config/projects";
import { seoConfig } from "@/config/seo";
import { getProjectImage } from "@/lib/projects/images";
import { getPersonalProductsItemListSchema } from "@/lib/seo/schema";

export const metadata = {
  ...createIaMetadata("projects"),
  title: `Projects & Personal Products | ${seoConfig.siteName}`,
  description:
    "Browse personal products available to buy or license, plus company and client delivery across marketplaces, edtech, healthcare, and SaaS.",
};

export default function ProjectsPage() {
  const itemList = getPersonalProductsItemListSchema(
    personalProducts.map((project) => ({
      title: project.title,
      description: project.summary,
      url: `${seoConfig.siteUrl}/projects/${project.slug}`,
      image: getProjectImage(project.slug),
    })),
  );

  return (
    <>
      <JsonLd data={itemList} />
      <PageHero
        kicker="Projects"
        title="Personal products and company delivery."
        subtitle="Filter personal products you can buy or license, or explore company work shipped for clients across marketplaces, edtech, healthcare, and SaaS."
        stats={["Personal products", "Company delivery", "Live demos"]}
        primaryCta={{ label: "Contact Me", href: "/contact", variant: "primary" }}
        secondaryCta={{
          label: "Personal Products",
          href: "/projects?category=personal",
          variant: "secondary",
        }}
      />
      <WorkSection />
      <TechStackSection />
    </>
  );
}
