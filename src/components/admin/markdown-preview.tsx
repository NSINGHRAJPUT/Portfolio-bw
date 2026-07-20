"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function MarkdownPreview({ content }: { content: string }) {
  return (
    <div className="prose prose-invert max-w-none prose-headings:text-white prose-a:text-[var(--primary)] prose-code:text-[var(--primary)]">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content || "*No content yet.*"}</ReactMarkdown>
    </div>
  );
}
