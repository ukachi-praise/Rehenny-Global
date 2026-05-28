import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_TOKEN;

const client = createClient({
  projectId,
  dataset,
  token,
  useCdn: false,
});

export async function POST(req: NextRequest) {
  if (!projectId || !dataset || !token) {
    const missingVars = [
      !projectId && 'NEXT_PUBLIC_SANITY_PROJECT_ID',
      !dataset && 'NEXT_PUBLIC_SANITY_DATASET',
      !token && 'SANITY_API_TOKEN'
    ].filter(Boolean).join(', ');

    console.error(`Missing Sanity environment variables: ${missingVars}`);
    return NextResponse.json({ message: `Server configuration error: Missing environment variables (${missingVars})` }, { status: 500 });
  }

  try {
    const body = await req.json();

    await client.create({
      _type: 'contact',
      ...body,
    });

    return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error submitting form:', error);
    const sanityError = (error as any).response?.body?.error || error;
    return NextResponse.json({ message: 'Error submitting form', error: sanityError }, { status: 500 });
  }
}
