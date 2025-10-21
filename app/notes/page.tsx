"use client";

import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Download, Youtube } from "lucide-react";

// ✅ SEO METADATA — Helps rank for NEET Notes keywords
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

// 🔹 NOTES DATA
const allNotes = [
  {
    title: "The Living World",
    className: "Class 11 CBSE",
    category: "Notes",
    driveLink: "https://drive.google.com/file/d/your-link-here/view",
    videoLink: "https://www.youtube.com/watch?v=your-video",
  },
  {
    title: "Biological Classification",
    className: "Class 11 CBSE",
    category: "Notes",
    driveLink: "https://drive.google.com/file/d/your-link-here/view",
  },
  {
    title: "Plant Kingdom",
    className: "Class 11 CBSE",
    category: "Notes",
    driveLink: "https://drive.google.com/file/d/your-link-here/view",
  },
  {
    title: "Human Physiology",
    className: "Class 12 CBSE",
    category: "Notes",
    driveLink: "https://drive.google.com/file/d/your-link-here/view",
  },
  {
    title: "Reproduction in Organisms",
    className: "Class 12 CBSE",
    category: "Notes",
    driveLink: "https://drive.google.com/file/d/your-link-here/view",
  },
  {
    title: "Photosynthesis in Higher Plants",
    className: "NEET Target",
    category: "Notes",
    driveLink: "https://drive.google.com/file/d/your-link-here/view",
    videoLink: "https://www.youtube.com/watch?v=your-video",
  },
];

export default function NotesPage() {
  const [selectedClass, setSelectedClass] = useState("All");

  // ✅ JSON-LD Schema Injection for Google
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOccupationalProgram",
      name: "NEET Biology Notes by BioCharya",
      description:
        "Concept-based Biology notes for NEET, Class 11 & 12 — created by Ankit Bhattacharya at BioCharya, Kolkata.",
      educationalCredentialAwarded: "NEET Preparation, Board Mastery",
      hasCourse: allNotes.map((note) => ({
        "@type": "Course",
        name: note.title,
        provider: {
          "@type": "Person",
          name: "Ankit Bhattacharya",
          sameAs: "https://biocharya.in",
        },
      })),
      provider: {
        "@type": "Organization",
        name: "BioCharya",
        url: "https://biocharya.in",
        logo: "https://biocharya.in/logo.png",
      },
    });
    document.head.appendChild(script);
  }, []);

  const filteredNotes =
    selectedClass === "All"
      ? allNotes
      : allNotes.filter((note) => note.className === selectedClass);

  return (
    <main className="pt-28 pb-20 bg-lightbg text-textdark min-h-screen">
      {/* ===== HERO ===== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6 md:px-20 mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
          NEET & Board Biology Notes — Concept, Not Cramming 📘
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Download high-quality Biology notes prepared by{" "}
          <strong>Ankit Bhattacharya</strong> from BioCharya. Perfect for{" "}
          <strong>NEET, Class 11 & 12</strong> students who want clarity and speed.
        </p>
        <div className="mt-6">
          <Link
            href="/demo"
            className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:scale-105 hover:bg-green-800 transition-all duration-300"
          >
            🎓 Join Free Demo Class
          </Link>
        </div>
      </motion.section>

      {/* ===== FILTER BAR ===== */}
      <section className="flex flex-wrap justify-center gap-4 mb-10 px-4">
        {["All", "Class 11 CBSE", "Class 12 CBSE", "ICSE", "NEET Target"].map(
          (cls) => (
            <button
              key={cls}
              onClick={() => setSelectedClass(cls)}
              className={`px-4 py-2 rounded-full border-2 font-medium transition-all duration-300 ${
                selectedClass === cls
                  ? "bg-green-700 text-white border-green-700"
                  : "border-green-700 text-green-700 hover:bg-green-50"
              }`}
            >
              {cls}
            </button>
          )
        )}
      </section>

      {/* ===== NOTES GRID ===== */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20 max-w-7xl mx-auto"
      >
        {filteredNotes.map((note, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 border-t-4 border-green-600 hover:-translate-y-2 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-green-800">{note.title}</h3>
              <BookOpen className="text-green-700 w-5 h-5" />
            </div>
            <p className="text-sm text-gray-600 mb-4">{note.className}</p>
            <div className="flex gap-3">
              <Link
                href={note.driveLink}
                target="_blank"
                className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-800 transition"
              >
                <Download className="w-4 h-4" /> Download Notes
              </Link>
              {note.videoLink && (
                <Link
                  href={note.videoLink}
                  target="_blank"
                  className="flex items-center gap-2 border border-green-700 text-green-700 px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-50 transition"
                >
                  <Youtube className="w-4 h-4" /> Watch Video
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* ===== CTA SECTION ===== */}
      <motion.section
        className="text-center py-20 mt-20 px-6 bg-green-50"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Loved the Notes? Learn Directly from Me 🌿
        </h2>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Join my NEET and Board batches where every concept is broken down to the core
          — and nothing is left to luck.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/courses"
            className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:scale-105 hover:bg-green-800 transition-all duration-300"
          >
            📘 Explore Courses
          </Link>
          <Link
            href="https://wa.me/917980862920?text=Hi%20Ankit!%20I%27m%20loving%20your%20Biology%20notes%20and%20want%20to%20learn%20from%20you."
            target="_blank"
            className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 hover:scale-105 transition-all duration-300"
          >
            💬 Chat on WhatsApp
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
