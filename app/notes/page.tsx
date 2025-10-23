"use client";

import NotesClient from "./NotesClient";
import { motion } from "framer-motion";
import Link from "next/link";

export const metadata = {
  title: "NEET Biology Notes | Class 11 & 12 | BioCharya by Ankit Bhattacharya",
  description:
    "Free NEET Biology Notes for Class 11 & 12 by Ankit Bhattacharya — clear, concise, and concept-driven notes for CBSE, ICSE, and NEET aspirants.",
  keywords: [
    "NEET Biology Notes",
    "Class 11 Biology Notes",
    "Class 12 Biology Notes",
    "NEET 2026 Notes PDF",
    "NEET Biology Handwritten Notes",
    "Ankit Bhattacharya Biology Notes",
    "BioCharya NEET Notes",
    "CBSE Biology Notes",
  ],
  openGraph: {
    title: "NEET Biology Notes | Class 11 & 12 | BioCharya",
    description:
      "Concept-based and exam-focused NEET Biology Notes for Classes 11 & 12 — created by Ankit Bhattacharya, Kolkata’s top biology mentor.",
    url: "https://biocharya.in/notes",
    siteName: "BioCharya",
    images: [
      {
        url: "https://biocharya.in/og-notes.jpg",
        width: 1200,
        height: 630,
        alt: "BioCharya NEET Notes",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download NEET Biology Notes | BioCharya",
    description:
      "Free NEET Biology Notes for Class 11 & 12 by Ankit Bhattacharya — Conceptual, crisp & exam-ready.",
    images: ["https://biocharya.in/og-notes.jpg"],
  },
};

export default function NotesPage() {
  return (
    <main className="pt-24 pb-20 bg-lightbg text-textdark">
      {/* ===== HERO SECTION ===== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6 md:px-20 py-16 bg-gradient-to-b from-green-50 to-white"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
          Free Biology Notes — Concept. First. Always. 📘
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
          Handwritten & structured NEET and CBSE notes by{" "}
          <strong>Ankit Bhattacharya</strong>. Clear, concise, and built to
          strengthen your concepts — because Biology should make sense.
        </p>
      </motion.section>

      {/* ===== QUICK STATS ===== */}
      <section className="bg-primary text-white py-6 text-center text-sm sm:text-base font-medium tracking-wide">
        🧠 200+ Chapters Covered • 📝 Class 11 & 12 • 🎯 NEET + Boards Focused
      </section>

      {/* ===== NOTES CONTENT (From NotesClient) ===== */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 md:px-20 py-16"
      >
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          Access Chapter-Wise Notes
        </h2>

        <div className="max-w-6xl mx-auto">
          <NotesClient />
        </div>
      </motion.section>

      {/* ===== CTA BANNER ===== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center py-16 bg-green-100 px-6"
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
          Want All Notes + DPPs + Video Classes?
        </h3>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Get complete NEET Biology preparation with structured notes, regular
          DPPs, mock tests, and mentor guidance — everything you need in one place.
        </p>
        <Link
          href="/demo"
          className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:scale-105 hover:bg-green-800 transition-all duration-300"
        >
          🎓 Join Free Demo Class
        </Link>
      </motion.section>

      {/* ===== MOTTO STRIP ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-green-700 text-white text-center py-6 text-sm md:text-base"
      >
        “Concept Clarity is the Shortcut to Success.” — BioCharya
      </motion.div>
    </main>
  );
}
