import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // CRITICAL: This fixes the "Inferred Property" warning
  metadataBase: new URL('https://kana.sanchez.ph'),

  title: "KANA-MASK | Identity Obfuscation",
  description: "Generate cryptic Japanese-style usernames.",
  
  // Explicit Open Graph metadata to satisfy the debugger
  openGraph: {
    title: "KANA-MASK | Identity Obfuscation",
    description: "Generate cryptic Japanese-style usernames.",
    url: 'https://kana.sanchez.ph',
    siteName: 'KANA-MASK',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
