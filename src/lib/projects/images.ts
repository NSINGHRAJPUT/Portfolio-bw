import fs from "node:fs";
import path from "node:path";

const IMAGE_EXTENSIONS = [".webp", ".png", ".jpg", ".jpeg"] as const;

/**
 * Resolves a project hero image from public/projects/{slug}.{ext}.
 * Returns undefined when no image file exists for that slug.
 */
export function getProjectImage(slug: string): string | undefined {
  const dir = path.join(process.cwd(), "public", "projects");

  for (const ext of IMAGE_EXTENSIONS) {
    const absolutePath = path.join(dir, `${slug}${ext}`);
    if (fs.existsSync(absolutePath)) {
      return `/projects/${slug}${ext}`;
    }
  }

  return undefined;
}
