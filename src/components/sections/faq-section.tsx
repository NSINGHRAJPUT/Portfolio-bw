"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { faqs } from "@/components/sections/home-data";
import { HomeSection } from "@/components/layout/home-section";
import { CyberCard } from "@/components/ui/cyber-card";

export function FaqSection() {
  const [openQuestion, setOpenQuestion] = useState(faqs[0]?.question);

  return (
    <HomeSection id="faq">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white md:text-5xl">Frequently Asked Questions</h2>
      </div>

      <CyberCard className="w-full divide-y divide-[var(--primary)]/10 p-2 md:p-4" glow>
        {faqs.map((faq) => {
          const isOpen = faq.question === openQuestion;
          return (
            <div className="px-6 md:px-8" key={faq.question}>
              <button
                className="flex w-full items-center justify-between py-5 text-left transition hover:text-[var(--primary)]"
                onClick={() => setOpenQuestion(isOpen ? "" : faq.question)}
                type="button"
              >
                <span className="pr-4 text-sm font-medium text-white/90 md:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-[var(--primary)]" : "text-white/40"}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    animate={{ height: "auto", opacity: 1 }}
                    className="overflow-hidden"
                    exit={{ height: 0, opacity: 0 }}
                    initial={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <p className="pb-5 text-sm text-white/55">{faq.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </CyberCard>
    </HomeSection>
  );
}
