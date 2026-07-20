import { InformationArchitecturePage } from "@/components/shared/information-architecture-page";
import { createIaMetadata, getIaPage } from "@/config/information-architecture";

export const metadata = createIaMetadata("terms");

export default function TermsPage() {
  return <InformationArchitecturePage page={getIaPage("terms")} />;
}
