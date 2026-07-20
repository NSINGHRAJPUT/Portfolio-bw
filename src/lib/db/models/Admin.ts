import mongoose, { InferSchemaType, Model, Schema } from "mongoose";

const adminSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    passwordHash: { type: String, required: true },
    name: { type: String, required: true, trim: true, default: "Admin" },
    role: { type: String, enum: ["admin"], default: "admin" },
  },
  { timestamps: true },
);

export type AdminDocument = InferSchemaType<typeof adminSchema> & {
  _id: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

export const AdminModel: Model<AdminDocument> =
  mongoose.models.Admin ?? mongoose.model<AdminDocument>("Admin", adminSchema);
