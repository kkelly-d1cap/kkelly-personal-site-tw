import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const MAILCHIMP_API_SERVER = process.env.MAILCHIMP_API_SERVER; // e.g., 'us1', 'us21'

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID || !MAILCHIMP_API_SERVER) {
      console.error('MailChimp credentials not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Add subscriber to MailChimp list
    const response = await fetch(
      `https://${MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      // Handle specific MailChimp errors
      if (data.title === 'Member Exists') {
        return NextResponse.json(
          { error: 'This email is already subscribed' },
          { status: 400 }
        );
      }

      console.error('MailChimp error:', data);
      return NextResponse.json(
        { error: data.detail || 'Failed to subscribe' },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: 'Successfully subscribed!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'An error occurred during subscription' },
      { status: 500 }
    );
  }
}
