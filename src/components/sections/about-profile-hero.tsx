import Link from "next/link";
import { ArrowUpRight, FileText, Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { profile } from "@/config/profile";

export function AboutProfileHero() {
  return (
    <section className="container-safe py-16 md:py-24">
      <FadeIn>
        <div className="max-w-4xl space-y-8">
          <p className="section-eyebrow">About</p>
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              {profile.name}
            </h1>
            <p className="text-lg text-[var(--primary)] md:text-xl">{profile.position}</p>
            <p className="max-w-3xl text-base leading-relaxed text-white/65 md:text-lg">
              {profile.summary}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/55">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[var(--primary)]" />
              {profile.location}
            </span>
            <a
              className="inline-flex items-center gap-2 transition hover:text-[var(--primary)]"
              href={`mailto:${profile.email}`}
            >
              <Mail className="h-4 w-4 text-[var(--primary)]" />
              {profile.email}
            </a>
            <a
              className="inline-flex items-center gap-2 transition hover:text-[var(--primary)]"
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
            >
              <Phone className="h-4 w-4 text-[var(--primary)]" />
              {profile.phone}
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/contact">
              <Button size="lg">Hire Me</Button>
            </Link>
            <a href={profile.resumeUrl} rel="noopener noreferrer" target="_blank">
              <Button size="lg" variant="secondary">
                <FileText className="mr-2 h-4 w-4" /> View Resume
              </Button>
            </a>
            <Link href="/projects?category=personal">
              <Button size="lg" variant="ghost">
                Personal Products
              </Button>
            </Link>
            <a href={profile.linkedin} rel="noopener noreferrer" target="_blank">
              <Button size="lg" variant="ghost">
                <FaLinkedinIn className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
            </a>
            <a href={profile.github} rel="noopener noreferrer" target="_blank">
              <Button size="lg" variant="ghost">
                <FaGithub className="mr-2 h-4 w-4" /> GitHub <ArrowUpRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 border-t border-[var(--primary)]/20 pt-8 sm:grid-cols-4">
            {profile.highlights.map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-bold text-[var(--primary)] md:text-3xl">{item.value}</p>
                <p className="mt-1 text-xs text-white/45">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
