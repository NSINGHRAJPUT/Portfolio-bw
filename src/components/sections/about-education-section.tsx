import { FadeIn } from "@/components/animation/fade-in";
import { profile } from "@/config/profile";

export function AboutEducationSection() {
  return (
    <section className="container-safe py-16 md:py-20" id="education">
      <FadeIn>
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="section-eyebrow">Education</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Academic foundation.</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {profile.education.map((edu) => (
            <article className="space-y-3 border-t border-[var(--primary)]/25 pt-6" key={edu.degree}>
              <p className="font-mono text-xs tracking-widest text-[var(--primary)]">{edu.period}</p>
              <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
              <p className="text-sm text-white/55">
                {edu.school} · {edu.location}
              </p>
              <p className="text-sm leading-relaxed text-white/65">{edu.details}</p>
            </article>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
