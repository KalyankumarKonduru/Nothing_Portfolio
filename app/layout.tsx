import type { Metadata } from "next";
import { Pixelify_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixel",
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Kalyan Kumar",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pixelify.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
