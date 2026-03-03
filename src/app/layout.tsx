import type { Metadata } from "next";
import { Playfair_Display, Raleway } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ascher Designs | Luxury Interior Design",
  description:
    "Transform your spaces into extraordinary living experiences. Ascher Designs offers bespoke interior design services for residential and commercial projects — crafting elegant, functional, and timeless interiors.",
  keywords: [
    "interior design",
    "luxury interiors",
    "residential design",
    "commercial design",
    "Ascher Designs",
    "home design",
    "interior decorator",
    "bedroom design",
    "living room design",
    "kitchen design",
    "modern interiors",
  ],
  authors: [{ name: "Ascher Designs" }],
  openGraph: {
    title: "Ascher Designs | Luxury Interior Design",
    description:
      "Transform your spaces into extraordinary living experiences. Bespoke interior design for residential and commercial projects.",
    type: "website",
    locale: "en_US",
    siteName: "Ascher Designs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ascher Designs | Luxury Interior Design",
    description:
      "Transform your spaces into extraordinary living experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${playfair.variable} ${raleway.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
