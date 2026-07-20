import { createIaMetadata } from "@/config/information-architecture";
import { PremiumContactForm } from "@/components/sections/premium-contact-form";

export const metadata = createIaMetadata("bookMeeting");

export default function BookMeetingPage() {
  return (
    <>
      <PremiumContactForm
        defaultService="Discovery Call"
        showServiceSelect={false}
        showResume={false}
      />
    </>
  );
}
