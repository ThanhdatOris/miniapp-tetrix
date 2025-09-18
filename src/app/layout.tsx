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
  title: "Tetrix - Not wrong spelling",
  description: "A beautiful, mobile-first Tetris game built with Next.js and Tailwind CSS. Enjoy classic gameplay with modern, touch-friendly interface.",
  authors: [{ name: "Oris" }],
  creator: "Oris",
  publisher: "Oris",
  keywords: ["tetris", "tetrix", "game", "puzzle", "mobile", "touch", "glassmorphism", "dark mode"],
  robots: "index, follow",
  openGraph: {
    title: "Tetrix - Not wrong spelling",
    description: "A beautiful, mobile-first Tetris game with glassmorphism design and dark mode support.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tetrix - Not wrong spelling",
    description: "A beautiful, mobile-first Tetris game with glassmorphism design and dark mode support.",
    creator: "@Oris",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#4f46e5" },
    { media: "(prefers-color-scheme: dark)", color: "#1e1b4b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
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
