"use client";

import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Heading2,
  Heading3,
  ImageIcon,
  Italic,
  Link2,
  List,
  ListOrdered,
  Minus,
  Quote,
  Redo,
  Underline as UnderlineIcon,
  Undo,
} from "lucide-react";
import { useCallback, useRef } from "react";

import { Button } from "@/components/ui/button";

interface RichEditorProps {
  value: string;
  onChange: (html: string) => void;
}

export function RichEditor({ value, onChange }: RichEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image.configure({ inline: false, allowBase64: false }),
      Link.configure({ openOnClick: false }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Placeholder.configure({ placeholder: "Write your blog post here…" }),
    ],
    content: value,
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-invert max-w-none min-h-[400px] p-4 focus:outline-none",
      },
    },
  });

  const uploadImage = useCallback(
    async (file: File) => {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (data.url && editor) {
        editor.chain().focus().setImage({ src: data.url }).run();
      }
    },
    [editor],
  );

  const setLink = useCallback(() => {
    if (!editor) return;
    const prev = editor.getAttributes("link").href ?? "";
    const url = window.prompt("URL", prev);
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
    } else {
      editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    }
  }, [editor]);

  if (!editor) return null;

  const tb = "p-1.5 rounded hover:bg-white/10 disabled:opacity-30 transition";
  const active = "bg-white/15 text-white";

  return (
    <div className="rounded-xl border border-[var(--border)] bg-surface overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-0.5 border-b border-[var(--border)] bg-black/30 p-2">
        <button className={`${tb} ${editor.isActive("bold") ? active : ""}`} onClick={() => editor.chain().focus().toggleBold().run()} title="Bold" type="button">
          <Bold size={15} />
        </button>
        <button className={`${tb} ${editor.isActive("italic") ? active : ""}`} onClick={() => editor.chain().focus().toggleItalic().run()} title="Italic" type="button">
          <Italic size={15} />
        </button>
        <button className={`${tb} ${editor.isActive("underline") ? active : ""}`} onClick={() => editor.chain().focus().toggleUnderline().run()} title="Underline" type="button">
          <UnderlineIcon size={15} />
        </button>

        <span className="mx-1 w-px bg-white/10" />

        <button className={`${tb} ${editor.isActive("heading", { level: 2 }) ? active : ""}`} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} title="H2" type="button">
          <Heading2 size={15} />
        </button>
        <button className={`${tb} ${editor.isActive("heading", { level: 3 }) ? active : ""}`} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} title="H3" type="button">
          <Heading3 size={15} />
        </button>

        <span className="mx-1 w-px bg-white/10" />

        <button className={`${tb} ${editor.isActive({ textAlign: "left" }) ? active : ""}`} onClick={() => editor.chain().focus().setTextAlign("left").run()} title="Align left" type="button">
          <AlignLeft size={15} />
        </button>
        <button className={`${tb} ${editor.isActive({ textAlign: "center" }) ? active : ""}`} onClick={() => editor.chain().focus().setTextAlign("center").run()} title="Align center" type="button">
          <AlignCenter size={15} />
        </button>
        <button className={`${tb} ${editor.isActive({ textAlign: "right" }) ? active : ""}`} onClick={() => editor.chain().focus().setTextAlign("right").run()} title="Align right" type="button">
          <AlignRight size={15} />
        </button>

        <span className="mx-1 w-px bg-white/10" />

        <button className={`${tb} ${editor.isActive("bulletList") ? active : ""}`} onClick={() => editor.chain().focus().toggleBulletList().run()} title="Bullet list" type="button">
          <List size={15} />
        </button>
        <button className={`${tb} ${editor.isActive("orderedList") ? active : ""}`} onClick={() => editor.chain().focus().toggleOrderedList().run()} title="Ordered list" type="button">
          <ListOrdered size={15} />
        </button>
        <button className={`${tb} ${editor.isActive("blockquote") ? active : ""}`} onClick={() => editor.chain().focus().toggleBlockquote().run()} title="Blockquote" type="button">
          <Quote size={15} />
        </button>
        <button className={tb} onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Divider" type="button">
          <Minus size={15} />
        </button>

        <span className="mx-1 w-px bg-white/10" />

        <button className={`${tb} ${editor.isActive("link") ? active : ""}`} onClick={setLink} title="Link" type="button">
          <Link2 size={15} />
        </button>
        <button
          className={tb}
          onClick={() => fileInputRef.current?.click()}
          title="Upload image"
          type="button"
        >
          <ImageIcon size={15} />
        </button>
        <input
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) uploadImage(file);
            e.target.value = "";
          }}
          ref={fileInputRef}
          type="file"
        />

        <span className="mx-1 w-px bg-white/10" />

        <button className={tb} disabled={!editor.can().undo()} onClick={() => editor.chain().focus().undo().run()} title="Undo" type="button">
          <Undo size={15} />
        </button>
        <button className={tb} disabled={!editor.can().redo()} onClick={() => editor.chain().focus().redo().run()} title="Redo" type="button">
          <Redo size={15} />
        </button>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}
