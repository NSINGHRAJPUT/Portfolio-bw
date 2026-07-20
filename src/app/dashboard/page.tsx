import { InformationArchitecturePage } from "@/components/shared/information-architecture-page";
import { createIaMetadata, getIaPage } from "@/config/information-architecture";

export const metadata = createIaMetadata("dashboard");

export default function DashboardPage() {
  return <InformationArchitecturePage page={getIaPage("dashboard")} />;
}
