export default function PrivacyPolicyPage() {
  return (
    <div className="container-safe max-w-4xl py-12">
      <h1 className="mb-6 text-3xl font-semibold">Privacy Policy</h1>
      <p className="mb-4 text-white/70">Last updated: Jul 8, 2026</p>
      <div className="space-y-6 text-sm text-white/75">
        <section>
          <h2 className="mb-2 text-xl font-medium text-white">What we collect</h2>
          <p>
            We collect information you submit in forms, analytics usage events, and basic device metadata
            needed to operate and improve NSRGFX services.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-medium text-white">How we use data</h2>
          <p>
            Data is used to deliver services, communicate project updates, secure the platform, and improve
            product decisions. We do not sell personal data.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-medium text-white">Your rights</h2>
          <p>
            You can request access, correction, or deletion of your personal information by contacting
            hello@nsrgfx.in.
          </p>
        </section>
      </div>
    </div>
  );
}
