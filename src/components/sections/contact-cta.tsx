import Link from "next/link";

import { HomeSection } from "@/components/layout/home-section";
import { Button } from "@/components/ui/button";
import { CyberCard } from "@/components/ui/cyber-card";
import { landingCopy } from "@/lib/config/brand";

export function ContactCta() {
  const { cta } = landingCopy;

  return (
    <HomeSection id="contact">
      <CyberCard className="w-full px-10 py-20 text-center md:px-16 md:py-24" glow reflected>
        <div className="relative mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-white md:text-5xl">{cta.headline}</h2>
          <p className="mx-auto max-w-3xl text-white/55">{cta.subheadline}</p>
          <Link href="/book-meeting">
            <Button size="lg">{cta.button}</Button>
          </Link>
        </div>
      </CyberCard>
    </HomeSection>
  );
}
