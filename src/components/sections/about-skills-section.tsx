import Link from "next/link";

import { FadeIn } from "@/components/animation/fade-in";
import { Button } from "@/components/ui/button";
import { profile } from "@/config/profile";

export function AboutSkillsSection() {
  return (
    <section className="container-safe py-16 md:py-20" id="skills">
      <FadeIn>
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="section-eyebrow">Skills</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Stack I use in production.
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((group) => (
            <div className="space-y-4" key={group.label}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--primary)]">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/70"
                    key={skill}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {profile.principles.map((item) => (
            <div className="space-y-2 border-t border-white/10 pt-5" key={item.title}>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/55">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-3 border-t border-[var(--primary)]/20 pt-10">
          <Link href="/contact">
            <Button size="lg">Start a project</Button>
          </Link>
          <a href={profile.resumeUrl} rel="noopener noreferrer" target="_blank">
            <Button size="lg" variant="secondary">
              View Resume
            </Button>
          </a>
          <Link href="/projects">
            <Button size="lg" variant="ghost">
              View projects
            </Button>
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
