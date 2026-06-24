import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, phone, email, program, message } = await req.json();

    await resend.emails.send({
      from: 'Contact System <onboarding@resend.dev>',
      to: 'balmofgilead059@gmail.com', // Replace with your actual receiving email
      subject: `New Inquiry from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nProgram: ${program}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}