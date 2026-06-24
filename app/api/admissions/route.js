import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    // Parse the request body
    const body = await req.json();
    console.log("Received application data:", body);
    
    const { fullName, email, phone, program, level, message } = body;

    // Trigger the email
    const data = await resend.emails.send({
      from: 'Admissions Portal <onboarding@resend.dev>', 
      // Changed to match your registered Resend account email exactly:
      to: 'balmofgilead059@gmail.com',
      subject: `New Application: ${fullName}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #0b3160;">New Application Received</h2>
          <p>You have received a new application via the Balm of Gilead website.</p>
          <div style="border-left: 4px solid #d91e27; padding-left: 15px;">
            <p><strong>Full Name:</strong> ${fullName}</p>
            <p><strong>Email Address:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <p><strong>Desired Program:</strong> ${program}</p>
            <p><strong>Highest Qualification:</strong> ${level}</p>
            <p><strong>Additional Message:</strong><br />${message || "No additional message."}</p>
          </div>
          <p style="font-size: 12px; color: #777; margin-top: 20px;">This is an automated notification from your admission portal.</p>
        </div>
      `,
    });

    console.log("Email sent successfully to Resend:", data);
    return NextResponse.json({ success: true, data });

  } catch (error) {
    // Log the error to your server terminal so you can see why it failed
    console.error("Resend Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}