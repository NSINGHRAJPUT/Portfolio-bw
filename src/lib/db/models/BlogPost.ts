import mongoose, { InferSchemaType, Model, Schema } from "mongoose";

const blogPostSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
    excerpt: { type: String, required: true, trim: true, maxlength: 500 },
    body: { type: String, default: "" },
    tags: { type: [String], default: [] },
    status: { type: String, enum: ["draft", "published"], default: "draft" },
    featuredImage: { type: String },
    seoTitle: { type: String },
    seoDescription: { type: String, maxlength: 300 },
    ogImage: { type: String },
    authorName: { type: String, default: "Neeraj Singh Rajput", trim: true },
    publishedAt: { type: Date },
  },
  { timestamps: true },
);

blogPostSchema.index({ status: 1, publishedAt: -1 });
blogPostSchema.index({ tags: 1 });
blogPostSchema.index({ title: "text", excerpt: "text" });

export type BlogPostDocument = InferSchemaType<typeof blogPostSchema> & {
  _id: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

export const BlogPostModel: Model<BlogPostDocument> =
  mongoose.models.Blog ?? mongoose.model<BlogPostDocument>("Blog", blogPostSchema);
