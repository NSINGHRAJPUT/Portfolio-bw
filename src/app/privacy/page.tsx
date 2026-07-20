import { InformationArchitecturePage } from "@/components/shared/information-architecture-page";
import { createIaMetadata, getIaPage } from "@/config/information-architecture";

export const metadata = createIaMetadata("privacy");

export default function PrivacyPage() {
  return <InformationArchitecturePage page={getIaPage("privacy")} />;
}
