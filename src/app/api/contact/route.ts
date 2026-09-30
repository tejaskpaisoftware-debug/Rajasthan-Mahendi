import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const recipientEmail = "rajasthanmahendiandpiercing@gmail.com";

    // Forward form data to FormSubmit server-side (bypasses browser CORS & ad-blockers)
    const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        _subject: data._subject || `New Inquiry for Rajasthan Mahendi Art`,
        _captcha: "false",
        ...data
      })
    });

    const result = await response.json();

    return NextResponse.json({ success: true, result });
  } catch (error: any) {
    console.error("API contact error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
