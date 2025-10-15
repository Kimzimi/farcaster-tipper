import { NextResponse } from 'next/server';

const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://farcaster-tipperbs.vercel.app';

export async function GET() {
  const manifest = {
    accountAssociation: {
      header: "eyJmaWQiOjczMTM5NCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweGJhYUZDNDg5RTc5YjgzQjNiMzg2Y2EzNDM1ZmNBMDQ1NkUwMGNBRWQifQ",
      payload: "eyJkb21haW4iOiJmYXJjYXN0ZXItdGlwcGVyYnMudmVyY2VsLmFwcCJ9",
      signature: "8S+QrmLuanZ0jVnJWkzp570Px9l0XUU6ADuIIJ8uPuwrEmEORn2r/mM6lbLz7Pry5rs3pPYB/83UOXGm4tVDOxw="
    },
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
