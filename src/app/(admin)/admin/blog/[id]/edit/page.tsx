import { notFound } from "next/navigation";

import { BlogForm } from "@/components/admin/blog-form";
import { getAdminPostById } from "@/lib/blog/queries";

interface EditBlogPostPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditBlogPostPage({ params }: EditBlogPostPageProps) {
  const { id } = await params;
  const post = await getAdminPostById(id);

  if (!post) {
    notFound();
  }

  return <BlogForm initial={post} mode="edit" />;
}
