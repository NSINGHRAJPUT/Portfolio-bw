import { InformationArchitecturePage } from "@/components/shared/information-architecture-page";
import { createIaMetadata, getIaPage } from "@/config/information-architecture";

export const metadata = createIaMetadata("estimateProject");

export default function EstimateProjectPage() {
  return <InformationArchitecturePage page={getIaPage("estimateProject")} />;
}
