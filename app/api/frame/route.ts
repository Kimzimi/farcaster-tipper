import { NextRequest, NextResponse } from 'next/server';

const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://farcaster-tipperbs.vercel.app';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { untrustedData } = body;
    const buttonIndex = untrustedData?.buttonIndex;

    // Button 1: Show tip options
    if (buttonIndex === 1) {
      return new NextResponse(
        `<!DOCTYPE html>
<html>
<head>
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="${baseUrl}/api/frame/tip-options" />
  <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
  <meta property="fc:frame:button:1" content="💜 Tip 100 DEGEN" />
  <meta property="fc:frame:button:1:action" content="tx" />
  <meta property="fc:frame:button:1:target" content="${baseUrl}/api/frame/tx/100" />
  <meta property="fc:frame:button:2" content="✨ Tip 250 DEGEN" />
  <meta property="fc:frame:button:2:action" content="tx" />
  <meta property="fc:frame:button:2:target" content="${baseUrl}/api/frame/tx/250" />
  <meta property="fc:frame:button:3" content="🚀 Tip 500 DEGEN" />
  <meta property="fc:frame:button:3:action" content="tx" />
  <meta property="fc:frame:button:3:target" content="${baseUrl}/api/frame/tx/500" />
  <meta property="fc:frame:button:4" content="🔙 Back" />
  <meta property="fc:frame:button:4:action" content="post" />
  <meta property="fc:frame:button:4:target" content="${baseUrl}/api/frame" />
</head>
</html>`,
        {
          status: 200,
          headers: { 'Content-Type': 'text/html' },
        }
      );
    }

    // Default: Show initial frame
    return new NextResponse(
      `<!DOCTYPE html>
<html>
<head>
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="${baseUrl}/api/og" />
  <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
  <meta property="fc:frame:button:1" content="✨ Send Tip" />
  <meta property="fc:frame:button:1:action" content="post" />
  <meta property="fc:frame:button:1:target" content="${baseUrl}/api/frame" />
  <meta property="fc:frame:button:2" content="🌐 Open Full App" />
  <meta property="fc:frame:button:2:action" content="launch_frame" />
  <meta property="fc:frame:button:2:target" content="${baseUrl}" />
</head>
</html>`,
      {
        status: 200,
        headers: { 'Content-Type': 'text/html' },
      }
    );
  } catch (error) {
    console.error('Frame error:', error);
    return NextResponse.json({ error: 'Frame processing failed' }, { status: 500 });
  }
}

export async function GET() {
  return new NextResponse(
    `<!DOCTYPE html>
<html>
<head>
  <meta property="fc:frame" content="vNext" />
  <meta property="fc:frame:image" content="${baseUrl}/api/og" />
  <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
  <meta property="fc:frame:button:1" content="✨ Send Tip" />
  <meta property="fc:frame:button:1:action" content="post" />
  <meta property="fc:frame:button:1:target" content="${baseUrl}/api/frame" />
  <meta property="fc:frame:button:2" content="🌐 Open Full App" />
  <meta property="fc:frame:button:2:action" content="launch_frame" />
  <meta property="fc:frame:button:2:target" content="${baseUrl}" />
</head>
</html>`,
    {
      status: 200,
      headers: { 'Content-Type': 'text/html' },
    }
  );
}
