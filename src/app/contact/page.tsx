import { createIaMetadata } from "@/config/information-architecture";
import { PremiumContactForm } from "@/components/sections/premium-contact-form";

export const metadata = createIaMetadata("contact");

export default function ContactPage() {
  return (
    <>
      <PremiumContactForm showServiceSelect showResume />
    </>
  );
}
