import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import AnimatedCursor from "@/components/AnimatedCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Infynno Solutions — Empowering Startups with Scalable Web and Mobile App Solutions",
  description:
    "Transform your ideas into powerful digital products with our expert development team. 6+ years of excellence in web development, mobile apps, UI/UX design, DevOps, and AI/ML development.",
  keywords:
    "web development, mobile app development, React Native, Laravel, NodeJS, UI/UX design, DevOps, AI/ML, startup solutions, Ahmedabad, India",
  icons: [
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    { rel: "icon", url: "/favicon.ico" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisProvider>
          {children}
          <AnimatedCursor />
        </LenisProvider>
      </body>
    </html>
  );
}
