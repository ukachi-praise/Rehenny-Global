import { type NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Make sure to set the RESEND_API_KEY environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { email, firstName, lastName, phone, nationality, residence, education, gpa, destination, program, intake, source, message } = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // This will be replaced with your verified domain
      to: process.env.NODEMAILER_EMAIL || 'your-email@example.com', // Change this to your desired recipient email
      subject: `Contact form submission from ${firstName} ${lastName}`,
      html: `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Nationality:</strong> ${nationality}</p>
        <p><strong>Country of Residence:</strong> ${residence}</p>
        <p><strong>Level of Education:</strong> ${education}</p>
        <p><strong>GPA/Grades:</strong> ${gpa}</p>
        <p><strong>Preferred Study Destination:</strong> ${destination}</p>
        <p><strong>Program of Interest:</strong> ${program}</p>
        <p><strong>Preferred Intake:</strong> ${intake}</p>
        <p><strong>How did you hear about us?:</strong> ${source}</p>
        <p><strong>Message:</strong> ${message}</p>
    `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!', data });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
