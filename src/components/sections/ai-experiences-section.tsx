"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Sparkles } from "lucide-react";

import { aiExperiences } from "@/config/ai-experiences";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AiExperiencesSection() {
  return (
    <section className="container-safe py-16">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <p className="section-eyebrow">Technical Solutions</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Integrations and tools I work with.</h2>
        </div>
        <div className="glass flex items-center gap-2 rounded-[var(--radius-xl)] px-4 py-3 text-xs text-[var(--fg-muted)]">
          <BrainCircuit className="h-4 w-4 text-(--primary)" />
          Production-grade integrations with secure APIs
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {aiExperiences.map((exp, idx) => (
          <motion.div
            key={exp.key}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, ease: "easeOut", delay: idx * 0.03 }}
          >
            <Card className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="primary">
                  <Sparkles className="mr-1 h-3.5 w-3.5" />
                  {exp.title}
                </Badge>
              </div>
              <p className="text-sm text-muted">{exp.purpose}</p>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">Primary value</p>
                <p className="text-sm text-(--fg)">{exp.primaryValue}</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">Conversion goal</p>
                <p className="text-sm text-(--fg)">{exp.conversionGoal}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

