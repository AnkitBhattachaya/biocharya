import { Poppins } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "BioCharya – Crack NEET & Ace Biology",
  description:
    "BioCharya by Ankit Bhattacharya — NEET & Board coaching in Dum Dum, Kolkata.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
