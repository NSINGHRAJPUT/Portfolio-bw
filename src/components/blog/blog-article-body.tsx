export function BlogArticleBody({ content }: { content: string }) {
  return (
    <article
      className="prose prose-invert max-w-none prose-headings:text-white prose-a:text-[var(--primary)] prose-img:rounded-xl prose-img:border prose-img:border-white/10 prose-code:rounded prose-code:bg-white/10 prose-code:px-1 prose-code:py-0.5 prose-pre:bg-black/40"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
