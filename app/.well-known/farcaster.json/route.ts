import { NextResponse } from 'next/server';

const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://farcaster-tipperbs.vercel.app';

export async function GET() {
  const manifest = {
    frame: {
      version: "next",
      name: "Karma Tipper",
      iconUrl: `${baseUrl}/icon.png`,
      homeUrl: `${baseUrl}/`,
      imageUrl: `${baseUrl}/api/og`,
      buttonTitle: "Open Karma Tipper",
      splashImageUrl: `${baseUrl}/splash.png`,
      splashBackgroundColor: "#9333ea",
      webhookUrl: `${baseUrl}/api/webhook`
    }
  };

  return NextResponse.json(manifest, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
