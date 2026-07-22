import { FadeIn } from "@/components/animation/fade-in";
import { profile } from "@/config/profile";

export function AboutJourneySection() {
  return (
    <section className="container-safe py-16 md:py-20" id="journey">
      <FadeIn>
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="section-eyebrow">Journey</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            How the path unfolded.
          </h2>
          <p className="text-sm text-white/55">
            A year-by-year view of growth — from first production apps to leading teams and
            shipping personal products.
          </p>
        </div>

        <div className="relative hidden md:block">
          <div
            aria-hidden
            className="absolute top-[1.15rem] right-0 left-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/40 to-transparent"
          />
          <ol className="grid grid-cols-4 gap-6">
            {profile.journey.map((step) => (
              <li className="relative pt-2" key={step.year}>
                <div className="mb-6 flex justify-start">
                  <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--primary)]/50 bg-[#020810] shadow-[0_0_20px_rgba(0,212,255,0.35)]">
                    <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                  </span>
                </div>
                <p className="font-mono text-sm tracking-widest text-[var(--primary)]">{step.year}</p>
                <h3 className="mt-3 text-lg font-medium leading-snug text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>

        <ol className="space-y-8 md:hidden">
          {profile.journey.map((step) => (
            <li className="border-l border-[var(--primary)]/30 pl-5" key={step.year}>
              <p className="font-mono text-sm tracking-widest text-[var(--primary)]">{step.year}</p>
              <h3 className="mt-2 text-lg font-medium text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{step.description}</p>
            </li>
          ))}
        </ol>
      </FadeIn>
    </section>
  );
}
