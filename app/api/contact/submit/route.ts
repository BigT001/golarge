import { NextResponse } from 'next/server';

const SHEETS_API_URL = process.env.GOOGLE_SHEETS_API_URL;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, topic, message } = body;

    console.log('Received form submission:', { name, email, topic, message });
    console.log('Google Sheets URL:', SHEETS_API_URL);

    if (!SHEETS_API_URL) {
      return NextResponse.json(
        { error: "Spreadsheet API not configured" },
        { status: 500 }
      );
    }

    // Send data to Google Sheets
    const response = await fetch(SHEETS_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        subject: '', // Empty subject column
        message,
        timestamp: new Date().toISOString(),
      }),
    });

    const responseData = await response.text();
    console.log('Google Sheets response:', responseData);

    if (!response.ok) {
      throw new Error(`Failed to submit to Google Sheets: ${responseData}`);
    }

    if (!response.ok) {
      throw new Error('Failed to submit to spreadsheet');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}