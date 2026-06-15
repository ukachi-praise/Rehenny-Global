import { Resend } from 'resend';
import {NextResponse} from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { referrerName, referrerEmail, studentName, studentEmail, studentPhone, destination } = await req.json();

    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'info@rhinnyglobal.com',
            subject: 'New Referral from Rhinny Global',
            html: `
                <p><strong>Referrer Name:</strong> ${referrerName}</p>
                <p><strong>Referrer Email:</strong> ${referrerEmail}</p>
                <p><strong>Student Name:</strong> ${studentName}</p>
                <p><strong>Student Email:</strong> ${studentEmail}</p>
                <p><strong>Student Phone:</strong> ${studentPhone}</p>
                <p><strong>Destination:</strong> ${destination}</p>
            `
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}