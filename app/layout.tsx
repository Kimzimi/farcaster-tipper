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
    "fc:frame:button:1": "✨ Open App",
    "fc:frame:button:1:action": "launch_frame",
    "fc:frame:button:1:target": baseUrl,
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
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content={`${baseUrl}/api/og`} />
        <meta property="fc:frame:image:aspect_ratio" content="1.91:1" />
        <meta property="fc:frame:button:1" content="✨ Open App" />
        <meta property="fc:frame:button:1:action" content="launch_frame" />
        <meta property="fc:frame:button:1:target" content={baseUrl} />
        <meta property="og:image" content={`${baseUrl}/api/og`} />
        <meta property="og:title" content="Karma Tipper" />
        <meta property="og:description" content="Support great content with crypto tips" />
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
