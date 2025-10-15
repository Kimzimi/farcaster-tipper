import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Webhook received:', body);

    // Handle Farcaster miniapp events
    // Add your webhook logic here

    return NextResponse.json({
      success: true,
      message: 'Webhook received'
    });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Karma Tipper webhook endpoint'
  });
}
