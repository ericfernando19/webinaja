import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WebinAja - Jasa Pembuatan Website Profesional untuk UMKM & Bisnis",
  description:
    "Tingkatkan kredibilitas bisnis Anda dengan website modern dari WebinAja. Jasa pembuatan website profesional untuk UMKM, bisnis lokal, personal branding, dan perusahaan. Konsultasi gratis!",
  keywords: [
    "jasa pembuatan website",
    "website UMKM",
    "website bisnis",
    "web developer",
    "website profesional",
    "WebinAja",
    "pembuatan website murah",
  ],
  openGraph: {
    title: "WebinAja - Jasa Pembuatan Website Profesional",
    description:
      "Tingkatkan kredibilitas bisnis Anda dengan website modern dari WebinAja.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
