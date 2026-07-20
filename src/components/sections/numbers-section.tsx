"use client";

import { motion } from "framer-motion";

import { numbers } from "@/components/sections/home-data";
import { Card } from "@/components/ui/card";

export function NumbersSection() {
  return (
    <section className="container-safe py-24">
      <div className="mb-8 max-w-2xl space-y-3">
        <p className="section-eyebrow">Numbers</p>
        <h2 className="text-3xl font-semibold md:text-5xl">Performance signals that matter.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {numbers.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            key={item.label}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Card className="h-full space-y-2">
              <p className="text-3xl font-semibold">{item.value}</p>
              <p className="text-xs text-muted">{item.label}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
