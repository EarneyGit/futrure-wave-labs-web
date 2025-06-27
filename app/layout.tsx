import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Future Wave Labs - Accelerating India's Future Through Innovation",
  description: "We incubate and operate businesses reshaping India's tech, energy, media, and infrastructure future.",
  keywords: "Future Wave Labs, AI, Tech Services, SaaS, Solar Energy, Construction, News Media, India",
  authors: [{ name: "Future Wave Labs" }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased min-h-screen bg-black text-white font-sans`}>
        {children}
      </body>
    </html>
  );
}
