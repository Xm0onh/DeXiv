import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from '@/components/layout/Footer';
import HexagonGrid from '@/components/layout/HexagonGrid';
import BlockchainSpinner from '@/components/ui/BlockchainSpinner';
import NavIndicator from '@/components/layout/NavIndicator';
import FloatingActionButton from '@/components/ui/FloatingActionButton';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DeXiv Research",
  description: "DeXiv Research",
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
        <HexagonGrid />
        <div className="fixed top-4 right-4 z-[100]">
          <BlockchainSpinner />
        </div>
        <NavIndicator />
        <FloatingActionButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
