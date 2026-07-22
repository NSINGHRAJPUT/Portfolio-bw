import { FadeIn } from "@/components/animation/fade-in";
import { profile } from "@/config/profile";

export function AboutExperienceSection() {
  return (
    <section className="container-safe py-16 md:py-20" id="experience">
      <FadeIn>
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="section-eyebrow">Experience</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Professional experience in detail.
          </h2>
          <p className="text-sm text-white/55">
            Roles across product teams and agencies — from junior developer to team lead —
            shipping MERN, React Native, and cloud platforms.
          </p>
        </div>

        <ol className="relative space-y-0">
          <div
            aria-hidden
            className="absolute top-3 bottom-3 left-[0.7rem] hidden w-px bg-gradient-to-b from-[var(--primary)]/45 via-[var(--primary)]/20 to-transparent md:block"
          />
          {profile.experience.map((job) => (
            <li className="relative grid gap-4 border-b border-white/8 py-10 first:pt-0 last:border-0 md:grid-cols-[2rem_1fr] md:gap-8" key={`${job.company}-${job.period}`}>
              <span className="relative z-10 mt-1 hidden h-6 w-6 items-center justify-center rounded-full border border-[var(--primary)]/50 bg-[#020810] md:flex">
                <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
              </span>
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="font-mono text-xs tracking-widest text-[var(--primary)]">
                    {job.period}
                  </p>
                  <h3 className="text-xl font-semibold text-white md:text-2xl">{job.role}</h3>
                  <p className="text-sm text-white/55">
                    {job.company} · {job.location}
                  </p>
                  <p className="max-w-3xl pt-2 text-sm leading-relaxed text-white/70">
                    {job.summary}
                  </p>
                </div>
                <ul className="space-y-2">
                  {job.highlights.map((item) => (
                    <li className="flex gap-3 text-sm text-white/60" key={item}>
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--primary)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </FadeIn>
    </section>
  );
}
