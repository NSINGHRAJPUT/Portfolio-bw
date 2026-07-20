import { z } from "zod";

const optionalImageUrl = z
  .string()
  .refine((value) => value === "" || value.startsWith("/") || z.string().url().safeParse(value).success, {
    message: "Must be a valid URL or site path",
  })
  .optional()
  .or(z.literal(""));

export const blogPostInputSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(200),
  slug: z
    .string()
    .min(3)
    .max(200)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase with hyphens only")
    .optional(),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters").max(500),
  body: z.string().default(""),
  tags: z.array(z.string().min(1).max(40)).default([]),
  status: z.enum(["draft", "published"]).default("draft"),
  featuredImage: optionalImageUrl,
  seoTitle: z.string().max(120).optional().or(z.literal("")),
  seoDescription: z.string().max(300).optional().or(z.literal("")),
  ogImage: optionalImageUrl,
  authorName: z.string().min(1).max(80).default("NSRGFX"),
  publishedAt: z.string().datetime().optional().or(z.literal("")),
});

export const blogListQuerySchema = z.object({
  status: z.enum(["draft", "published", "all"]).default("all"),
  search: z.string().optional(),
  tag: z.string().optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(20),
});

export type BlogPostInput = z.infer<typeof blogPostInputSchema>;
