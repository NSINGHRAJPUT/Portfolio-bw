import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

import { createSession } from "@/lib/auth/session";
import { connectToDatabase } from "@/lib/db/connect";
import { AdminModel } from "@/lib/db/models/Admin";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body.email ?? "")
      .trim()
      .toLowerCase();
    const password = String(body.password ?? "");

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 },
      );
    }
    // const generatedHash = await bcrypt.hash(password, 10);
    // console.log("Generated bcrypt hash for this password:", generatedHash);
    await connectToDatabase();

    let admin = await AdminModel.findOne({ email });

    if (!admin) {
      return NextResponse.json(
        { error: "Invalid credentials." },
        { status: 401 },
      );
    }

    const valid = await bcrypt.compare(password, admin.passwordHash);
    if (!valid) {
      return NextResponse.json(
        { error: "Invalid credentials." },
        { status: 401 },
      );
    }

    await createSession({
      id: admin._id.toString(),
      email: admin.email,
      name: admin.name,
      role: "admin",
    });

    return NextResponse.json({
      ok: true,
      admin: {
        id: admin._id.toString(),
        email: admin.email,
        name: admin.name,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("Login failed", error);
    return NextResponse.json({ error: "Login failed." }, { status: 500 });
  }
}
