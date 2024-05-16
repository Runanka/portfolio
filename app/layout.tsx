import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";

const assistant = Assistant({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Runanka Roy | Portfolio",
  description: "Runanka Roy's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={assistant.className}>{children}</body>
    </html>
  );
}


