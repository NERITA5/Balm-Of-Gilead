import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  // Extract all the fields from your updated form
  const { fullName, email, phone, program, level, message } = await req.json();

  try {
    await resend.emails.send({
      from: 'Admissions <onboarding@resend.dev>', 
      to: 'balmofgilead059@gmail.com', // <--- REPLACE THIS WITH YOUR EMAIL
      subject: `New Admission Application: ${fullName}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h1 style="color: #0b3160;">New Application Received</h1>
          <p>You have received a new application via the Balm of Gilead website.</p>
          <hr />
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Email Address:</strong> ${email}</p>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Desired Program:</strong> ${program}</p>
          <p><strong>Highest Qualification:</strong> ${level}</p>
          <p><strong>Additional Message:</strong><br />${message || "No additional message."}</p>
          <hr />
          <p style="font-size: 12px; color: #777;">This is an automated notification from your admission portal.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}