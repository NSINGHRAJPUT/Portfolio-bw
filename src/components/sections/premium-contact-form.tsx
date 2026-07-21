"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { siteConfig } from "@/lib/config/site";

interface PremiumContactFormProps {
  defaultService?: string;
  showServiceSelect?: boolean;
  showResume?: boolean;
}

export function PremiumContactForm({
  defaultService = "",
  showServiceSelect = true,
  showResume = false,
}: PremiumContactFormProps) {
  const serviceOptions = useMemo(
    () => siteConfig.services.map((s) => s.title),
    [],
  );

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: defaultService,
    message: "",
    resume: null as File | null,
  });

  function setField<K extends keyof typeof form>(
    key: K,
    value: (typeof form)[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill name, email, and message.");
      return;
    }

    try {
      setLoading(true);
      const payload = new FormData();
      payload.append("name", form.name);
      payload.append("email", form.email);
      payload.append(
        "service",
        form.service || defaultService || "General inquiry",
      );
      payload.append("message", form.message);
      if (form.resume) payload.append("resume", form.resume);

      const res = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      });

      const json = (await res.json()) as {
        success?: boolean;
        message?: string;
        error?: string;
      };

      if (json.success) {
        toast.success(json.message ?? "Message sent successfully.");
        setForm({
          name: "",
          email: "",
          service: defaultService,
          message: "",
          resume: null,
        });
      } else {
        toast.error(json.error ?? "Failed to submit form.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="container-safe py-16">
      <Toaster position="top-right" />
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold md:text-5xl">
            Let&apos;s build your next product.
          </h1>
          <p className="text-sm text-muted md:text-base">
            Send a project brief. I&apos;ll reply with next steps, timeline
            guidance, and a clear path to delivery.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Fast response",
              "Clear scoping",
              "MERN stack delivery",
              "Production-ready code",
            ].map((item) => (
              <div
                key={item}
                className="glass rounded-[var(--radius-xl)] px-4 py-3 text-xs text-[var(--fg-muted)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-[var(--radius-2xl)] p-5 md:p-7">
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="grid gap-3 md:grid-cols-2">
              <Input
                aria-label="Name"
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setField("name", e.target.value)}
              />
              <Input
                aria-label="Email"
                required
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => setField("email", e.target.value)}
              />
            </div>

            {showServiceSelect ? (
              <label className="space-y-2">
                <span className="section-eyebrow">Service</span>
                <select
                  aria-label="Service"
                  className="h-10 w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-surface px-3 text-sm text-(--fg) shadow-[var(--shadow-sm)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]"
                  value={form.service}
                  onChange={(e) => setField("service", e.target.value)}
                >
                  <option value="">Select service</option>
                  {serviceOptions.map((title) => (
                    <option value={title} key={title}>
                      {title}
                    </option>
                  ))}
                </select>
              </label>
            ) : (
              <input type="hidden" name="service" value={form.service} />
            )}

            <label className="space-y-2">
              <span className="section-eyebrow">Message</span>
              <Textarea
                required
                placeholder="What are you building? Timeline, goals, and constraints…"
                value={form.message}
                onChange={(e) => setField("message", e.target.value)}
              />
            </label>

            {showResume ? (
              <label className="space-y-2">
                <span className="section-eyebrow">Resume (optional)</span>
                <Input
                  aria-label="Resume upload"
                  type="file"
                  onChange={(e) =>
                    setField(
                      "resume",
                      (e.target.files?.[0] ?? null) as File | null,
                    )
                  }
                />
              </label>
            ) : null}

            <Button size="lg" disabled={loading} type="submit">
              {loading ? "Sending..." : "Send Message"}
            </Button>

            <p className="text-xs text-muted">
              By submitting, you agree I may contact you about this inquiry. No
              spam.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
