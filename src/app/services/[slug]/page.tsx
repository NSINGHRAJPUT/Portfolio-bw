import { InformationArchitecturePage } from "@/components/shared/information-architecture-page";
import { createIaMetadata, getIaPage } from "@/config/information-architecture";

export const metadata = createIaMetadata("serviceDetail");

export default function ServiceDetailPage() {
  return <InformationArchitecturePage page={getIaPage("serviceDetail")} />;
}
