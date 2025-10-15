import { NextResponse } from 'next/server';

const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://farcaster-tipperbs.vercel.app';

export async function GET() {
  const manifest = {
    accountAssociation: {
      header: "eyJmaWQiOjEsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwIn0",
      payload: "eyJkb21haW4iOiJmYXJjYXN0ZXItdGlwcGVyYnMudmVyY2VsLmFwcCJ9",
      signature: "MHg..."
    },
    frame: {
      version: "next",
      name: "Karma Tipper",
      iconUrl: `${baseUrl}/api/og`,
      homeUrl: `${baseUrl}/`,
      imageUrl: `${baseUrl}/api/og`,
      buttonTitle: "Open Karma Tipper",
      splashImageUrl: `${baseUrl}/api/og`,
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
