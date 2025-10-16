import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://farcaster-tipperbs.vercel.app';

export const metadata: Metadata = {
  title: "Karma Tipper - Support Creators with Crypto Tips",
  description: "Tip your favorite Farcaster content creators with $DEGEN tokens on Base",
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "Karma Tipper",
    description: "Support great content with crypto tips",
    images: [`${baseUrl}/api/og`],
    url: baseUrl,
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": `${baseUrl}/api/og`,
    "fc:frame:image:aspect_ratio": "1.91:1",
    "fc:frame:button:1": "✨ Send Tip",
    "fc:frame:button:1:action": "post",
    "fc:frame:button:1:target": `${baseUrl}/api/frame`,
    "fc:frame:button:2": "🌐 Open Full App",
    "fc:frame:button:2:action": "launch_frame",
    "fc:frame:button:2:target": baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('message', function(event) {
                console.log('Received message:', event.data);
              });
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
