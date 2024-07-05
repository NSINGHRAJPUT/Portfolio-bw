import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME, // Your Gmail address
    pass: process.env.EMAIL_PASSWORD, // Your Gmail password or App password
  },
});

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, service, message } = data;
    console.log(data);
    // Email content for the user
    const userMailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: "Thank you for contacting us!",
      text: `Hi ${name},\n\nThank you for reaching out to us regarding ${service}. We have received your message and will get back to you shortly.\n\nBest regards,\nNeeraj Singh Rajput`,
    };

    // Email content for yourself
    const adminMailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: process.env.EMAIL_USERNAME,
      subject: "New contact form submission",
      text: `You have received a new message from your contact form:\n\nName: ${name}\nEmail: ${email}\nService: ${service}\nMessage: ${message}\n\nPlease respond promptly.`,
    };

    // Send emails
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("Error processing form submission:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit form" },
      { status: 500 }
    );
  }
}
