import { Poppins } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Load Google Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// SEO metadata
export const metadata = {
  title: "BioCharya | NEET & Board Biology Coaching by Ankit Bhattacharya",
  description:
    "BioCharya – Crack NEET and Board Exams with Concept-Driven Biology by Ankit Bhattacharya. Trusted by 500+ students in Dum Dum, Kolkata.",
  keywords: [
    "NEET Coaching Kolkata",
    "Biology Tuition Dum Dum",
    "Class 11 12 Biology",
    "BioCharya",
    "Ankit Bhattacharya",
    "NEET Biology",
  ],
  openGraph: {
    title: "BioCharya – Crack NEET & Ace Biology",
    description:
      "Learn Biology conceptually with Ankit Bhattacharya. BioCharya helps you master NEET & Board Biology in a practical, fun way.",
    url: "https://www.biocharya.in",
    siteName: "BioCharya",
    images: [
      {
        url: "/biocharya-og.png", // optional OG image
        width: 1200,
        height: 630,
        alt: "BioCharya NEET & Board Coaching",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-lightbg text-textdark flex flex-col min-h-screen`}
      >
        {/* ====== HEADER ====== */}
        <Header />

        {/* ====== PAGE CONTENT ====== */}
        <main className="flex-1 w-full">{children}</main>

        {/* ====== FOOTER ====== */}
        <Footer />
      </body>
    </html>
  );
}
