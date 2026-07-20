"use client";

import { motion } from "framer-motion";

import { trustLogos } from "@/components/sections/home-data";

export function TrustLogosSection() {
  const logos = [...trustLogos, ...trustLogos];

  return (
    <section className="py-10">
      <div className="container-safe">
        <div className="glass overflow-hidden rounded-[var(--radius-2xl)] py-4">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            className="flex w-max gap-12 px-6"
            transition={{ duration: 18, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
          >
            {logos.map((logo, idx) => (
              <p className="text-sm tracking-[0.14em] text-[var(--fg-muted)] uppercase" key={`${logo}-${idx}`}>
                {logo}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
