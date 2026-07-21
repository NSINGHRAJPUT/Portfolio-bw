export default function TermsAndConditionsPage() {
  return (
    <div className="container-safe max-w-4xl py-12">
      <h1 className="mb-6 text-3xl font-semibold">Terms and Conditions</h1>
      <p className="mb-4 text-white/70">Last updated: Jul 8, 2026</p>
      <div className="space-y-6 text-sm text-white/75">
        <section>
          <h2 className="mb-2 text-xl font-medium text-white">Use of service</h2>
          <p>
            By using services offered through this website, you agree to lawful use, accurate project communication, and respect
            for intellectual property and platform security.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-medium text-white">Commercial terms</h2>
          <p>
            Scope, timelines, and billing terms are governed by individual project agreements. Deliverables
            are licensed as specified in signed contracts.
          </p>
        </section>
        <section>
          <h2 className="mb-2 text-xl font-medium text-white">Contact</h2>
          <p>For questions regarding these terms, contact nsinghrajputx@gmail.com.</p>
        </section>
      </div>
    </div>
  );
}
