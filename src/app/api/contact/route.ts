import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactPayload {
  name: string;
  email: string;
  service: string;
  message: string;
  resumeName?: string;
  resumeType?: string;
  resumeBuffer?: Buffer;
}

async function parseContactForm(request: Request): Promise<ContactPayload> {
  const formData = await request.formData();

  const name = String(formData.get("name") ?? "");
  const email = String(formData.get("email") ?? "");
  const service = String(formData.get("service") ?? "");
  const message = String(formData.get("message") ?? "");
  const resume = formData.get("resume");

  const base: ContactPayload = {
    name,
    email,
    service,
    message,
  };

  if (resume instanceof File && resume.size > 0) {
    return {
      ...base,
      resumeName: resume.name,
      resumeType: resume.type,
      resumeBuffer: Buffer.from(await resume.arrayBuffer()),
    };
  }

  return base;
}

export async function POST(request: Request) {
  try {
    const {
      name,
      email,
      service,
      message,
      resumeName,
      resumeType,
      resumeBuffer,
    } = await parseContactForm(request);

    // Send confirmation email to customer
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: email,
      subject: "Thank you for contacting Neeraj Singh Rajput!",
      text: `Hi ${name},

Thanks for reaching out about ${service}.

I received your message and will get back to you shortly.

Regards,
Neeraj Singh Rajput`,
    });

    // Send notification email to yourself
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: process.env.EMAIL_TO!,
      subject: "New Contact Form Submission - Neeraj Singh Rajput",
      text: `Name: ${name}
Email: ${email}
Service: ${service}

Message:
${message}`,
      attachments:
        resumeBuffer && resumeName
          ? [
              {
                filename: resumeName,
                content: resumeBuffer.toString("base64"),
              },
            ]
          : undefined,
    });

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit form.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
