import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin | NSRGFX",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  redirect("/admin/blog");
}
