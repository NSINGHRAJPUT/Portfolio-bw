import { Suspense } from "react";

import { BlogPostTable } from "@/components/admin/blog-post-table";

export default function AdminBlogPage() {
  return (
    <Suspense fallback={<p className="text-white/50">Loading posts...</p>}>
      <BlogPostTable />
    </Suspense>
  );
}
