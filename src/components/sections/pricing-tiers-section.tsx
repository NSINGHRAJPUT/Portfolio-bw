"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { pricingTiers } from "@/config/pricing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function PricingTiersSection() {
  return (
    <section className="container-safe py-16">
      <div className="mb-10 max-w-2xl space-y-3">
        <p className="section-eyebrow">Pricing</p>
        <h2 className="text-3xl font-semibold md:text-4xl">Transparent engagement models.</h2>
        <p className="text-sm text-muted">
          Pricing reflects real project scope: MVP builds, full-stack delivery, and team lead engagements.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {pricingTiers.map((tier, idx) => (
          <motion.div
            key={tier.key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.06 }}
          >
            <Card className="space-y-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold">{tier.name}</h3>
                  <p className="text-xs text-muted">Project tier</p>
                </div>
                <Badge variant={tier.key === "launch" ? "primary" : "neutral"}>
                  {tier.key === "launch" ? "Most Popular" : "Tier"}
                </Badge>
              </div>

              <p className="text-4xl font-semibold">{tier.price}</p>
              <p className="text-sm text-muted">{tier.description}</p>

              <ul className="space-y-2 text-sm text-(--fg-muted)">
                {tier.bestFor.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-(--primary)" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                {tier.ctaLabel === "Estimate Project" ? (
                  <Link href="/estimate-project">
                    <Button className="w-full">
                      {tier.ctaLabel} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                ) : (
                  <Link href="/book-meeting">
                    <Button variant="secondary" className="w-full">
                      {tier.ctaLabel} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

