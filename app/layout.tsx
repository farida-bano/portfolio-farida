import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "@/components/ui/toaster";
import DevIndicator from "@/components/DevIndicator";
import React from "react";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Farida Bano | Portfolio",
    template: "%s | Farida Bano"
  },
  description: "Farida Bano's professional portfolio showcasing web development skills, projects, and services.",
  keywords: ["portfolio", "web development", "frontend developer", "react", "nextjs", "javascript", "typescript"],
  authors: [{ name: "Farida Bano" }],
  creator: "Farida Bano",
  publisher: "Farida Bano",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://faridabano.com",
    title: "Farida Bano | Portfolio",
    description: "Farida Bano's professional portfolio showcasing web development skills, projects, and services.",
    siteName: "Farida Bano Portfolio",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add an og image
        width: 1200,
        height: 630,
        alt: "Farida Bano Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Farida Bano | Portfolio",
    description: "Farida Bano's professional portfolio showcasing web development skills, projects, and services.",
    images: ["/og-image.jpg"], // You'll need to add an og image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://faridabano.com",
  },
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL('https://faridabano.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.className}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Toaster />
        <DevIndicator />
      </body>
    </html>
  );
}
