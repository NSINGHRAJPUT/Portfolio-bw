"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ImageUploadProps {
  label: string;
  value?: string;
  onChange: (url: string) => void;
}

export function ImageUpload({ label, value, onChange }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error ?? "Upload failed");
      }

      onChange(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-white/80">{label}</label>
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <Input onChange={(e) => onChange(e.target.value)} placeholder="https://..." value={value ?? ""} />
        <label className="inline-flex">
          <input accept="image/*" className="hidden" onChange={handleFileChange} type="file" />
          <Button disabled={uploading} type="button" variant="secondary">
            {uploading ? "Uploading..." : "Upload image"}
          </Button>
        </label>
      </div>
      {value ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img alt="" className="h-28 w-full max-w-sm rounded-lg border border-white/10 object-cover" src={value} />
      ) : null}
      {error ? <p className="text-sm text-red-400">{error}</p> : null}
    </div>
  );
}
