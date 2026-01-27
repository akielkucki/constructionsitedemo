import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/components/index";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.company.name} | ${siteConfig.company.tagline}`,
  description: siteConfig.company.description,
  keywords: [
    "construction",
    "building",
    "commercial construction",
    "residential construction",
    "renovation",
    "architecture",
  ],
  authors: [{ name: siteConfig.company.name }],
  openGraph: {
    title: `${siteConfig.company.name} | ${siteConfig.company.tagline}`,
    description: siteConfig.company.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
