import slugify from "slugify";

import { BlogPostModel } from "@/lib/db/models/BlogPost";

export function slugifyTitle(title: string) {
  return slugify(title, { lower: true, strict: true, trim: true });
}

export async function ensureUniqueSlug(baseSlug: string, excludeId?: string) {
  let slug = baseSlug;
  let suffix = 2;

  while (true) {
    const query: Record<string, unknown> = { slug };
    if (excludeId) {
      query._id = { $ne: excludeId };
    }

    const existing = await BlogPostModel.findOne(query).select("_id").lean();
    if (!existing) {
      return slug;
    }

    slug = `${baseSlug}-${suffix}`;
    suffix += 1;
  }
}
