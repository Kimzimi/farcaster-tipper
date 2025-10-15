import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karma Tipper - Support Creators with Crypto Tips",
  description: "Tip your favorite Farcaster content creators with $DEGEN tokens on Base",
  openGraph: {
    title: "Karma Tipper",
    description: "Support great content with crypto tips",
    images: [`${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api/og`],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}/api/og`,
    "fc:frame:button:1": "✨ Tip 100 DEGEN",
    "fc:frame:button:1:action": "link",
    "fc:frame:button:1:target": `${process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'}`,
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
        {children}
      </body>
    </html>
  );
}
