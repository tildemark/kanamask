import type { Metadata, Viewport } from "next"; // Import Viewport
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://kana.sanchez.ph'),
  title: "KANA-MASK",
  description: "Generate cryptic Japanese-style usernames.",
  manifest: "/manifest.json", // <-- Links the manifest
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "KANA-MASK",
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
