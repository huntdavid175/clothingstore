import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Nav/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Online Boutique",
  description:
    "View all clothings being sold in Ghana and clothing sellers on instagram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
