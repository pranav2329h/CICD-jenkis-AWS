import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Launchpad | Next.js Starter",
  description: "A simple Next.js application ready for development and deployment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
