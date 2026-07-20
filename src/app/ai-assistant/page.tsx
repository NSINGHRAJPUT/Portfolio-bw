import { InformationArchitecturePage } from "@/components/shared/information-architecture-page";
import { createIaMetadata, getIaPage } from "@/config/information-architecture";

export const metadata = createIaMetadata("aiAssistant");

export default function AiAssistantPage() {
  return <InformationArchitecturePage page={getIaPage("aiAssistant")} />;
}
