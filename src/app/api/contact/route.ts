import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { email, firstName, lastName, phone, nationality, residence, education, gpa, destination, program, intake, source, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL,
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
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
