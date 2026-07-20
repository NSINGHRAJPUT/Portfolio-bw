"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { caseStudySeoEntries } from "@/config/seo-content";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CaseStudiesListSection() {
  return (
    <section className="container-safe py-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <p className="section-eyebrow">Case Studies</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Outcome-first delivery proof.</h2>
        </div>
        <Link href="/book-meeting">
          <Button variant="secondary">
            Book strategy <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {caseStudySeoEntries.map((item) => (
          <motion.div
            key={item.slug}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <Card className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="primary">{item.industry}</Badge>
                <Badge variant="neutral">Impact</Badge>
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-muted">{item.summary}</p>
              <div>
                <Link className="text-sm text-(--primary) hover:underline" href={`/case-studies/${item.slug}`}>
                  Read case study
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

