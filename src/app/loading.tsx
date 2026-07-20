export default function RootLoading() {
  return (
    <section className="container-safe flex min-h-[70vh] items-center justify-center py-16">
      <div className="glass flex w-full max-w-md items-center gap-3 rounded-2xl p-5">
        <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-(--primary)" />
        <p className="text-sm text-muted">Loading premium experience...</p>
      </div>
    </section>
  );
}
