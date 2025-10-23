"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Download, Youtube, Trophy, Users, ClipboardCheck } from "lucide-react";

// ===== NOTES DATA (unchanged) =====
const allNotes = [
  { title: "Fundamental Unit of Life", className: "Class 9 CBSE", driveLink: "#" },
  { title: "Tissues", className: "Class 9 CBSE", driveLink: "#" },
  { title: "Diversity in Living Organisms", className: "Class 9 CBSE", driveLink: "#" },
  { title: "Life Processes", className: "Class 10 CBSE", driveLink: "#" },
  { title: "Control and Coordination", className: "Class 10 CBSE", driveLink: "#" },
  { title: "Heredity and Evolution", className: "Class 10 CBSE", driveLink: "#" },
  { title: "Cell: The Structural and Functional Unit of Life", className: "Class 9 ICSE", driveLink: "#" },
  { title: "Plant Physiology", className: "Class 9 ICSE", driveLink: "#" },
  { title: "Excretory System", className: "Class 10 ICSE", driveLink: "#" },
  { title: "Endocrine System", className: "Class 10 ICSE", driveLink: "#" },
  { title: "Photosynthesis", className: "Class 10 WB", driveLink: "#" },
  { title: "Circulatory System", className: "Class 9 WB", driveLink: "#" },
  { title: "Human Reproduction", className: "NEET Target", driveLink: "#", videoLink: "#" },
  { title: "Photosynthesis in Higher Plants", className: "NEET Target", driveLink: "#" },
];

export default function NotesPageClient() {
  const [selectedClass, setSelectedClass] = useState("All");

  const filteredNotes =
    selectedClass === "All"
      ? allNotes
      : allNotes.filter((note) => note.className === selectedClass);

  // SEO Schema
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Biology Notes | BioCharya",
      description:
        "Comprehensive Biology notes for Classes 9–12 (CBSE, ICSE, WB) and NEET, curated by Ankit Bhattacharya.",
    });
    document.head.appendChild(script);
  }, []);

  return (
    <main className="pt-20 bg-lightbg text-textdark">
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-100 py-20 px-6 md:px-20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/pattern-bg.png')] bg-cover bg-center" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
            Master NEET & Boards with Clear Notes 📘
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Concept-based Biology Notes by <strong>Ankit Bhattacharya</strong> — handwritten,
            concise, and built for retention. Trusted by 500+ toppers from Kolkata and beyond.
          </p>
          <Link
            href="/demo"
            className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 shadow-md transition"
          >
            🎓 Join Free Demo Class
          </Link>
        </motion.div>
      </section>

      {/* ===== ACHIEVEMENT STATS ===== */}
      <section className="bg-green-700 text-white grid grid-cols-2 md:grid-cols-4 text-center py-8">
        {[
          { icon: <Trophy className="w-6 h-6 mx-auto mb-2" />, title: "95%+", desc: "Board Results 2024" },
          { icon: <Users className="w-6 h-6 mx-auto mb-2" />, title: "500+", desc: "Active Students" },
          { icon: <ClipboardCheck className="w-6 h-6 mx-auto mb-2" />, title: "200+", desc: "Chapters Covered" },
          { icon: <BookOpen className="w-6 h-6 mx-auto mb-2" />, title: "Class 9–NEET", desc: "All Notes Available" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {stat.icon}
            <h3 className="text-xl font-bold">{stat.title}</h3>
            <p className="text-sm opacity-90">{stat.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* ===== FILTER BUTTONS ===== */}
      <section className="flex flex-wrap justify-center gap-4 py-10 px-4">
        {[
          "All",
          "Class 9 CBSE",
          "Class 10 CBSE",
          "Class 9 ICSE",
          "Class 10 ICSE",
          "Class 9 WB",
          "Class 10 WB",
          "NEET Target",
        ].map((cls) => (
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
        ))}
      </section>

      {/* ===== NOTES GRID ===== */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-20 max-w-7xl mx-auto mb-16"
      >
        {filteredNotes.map((note, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 border-t-4 border-green-600 hover:-translate-y-2 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
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
                <Download className="w-4 h-4" /> Download
              </Link>
              {note.videoLink && (
                <Link
                  href={note.videoLink}
                  target="_blank"
                  className="flex items-center gap-2 border border-green-700 text-green-700 px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-50 transition"
                >
                  <Youtube className="w-4 h-4" /> Watch
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* ===== CTA FORM BANNER ===== */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-green-100 to-white py-16 px-6 md:px-20 text-center"
      >
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          Want Personalized Notes + DPP Access?
        </h2>
        <p className="text-gray-700 mb-8">
          Fill out your details below to get early access to exclusive BioCharya
          learning resources and mentorship.
        </p>

        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
            required
          />
          <input
            type="tel"
            placeholder="WhatsApp Number"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600"
            required
          />
          <button
            type="submit"
            className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            Register
          </button>
        </form>
      </motion.section>

      {/* ===== FOOT STRIP ===== */}
      <div className="bg-green-700 text-white text-center py-6 text-sm md:text-base">
        “Concepts Make Toppers — Notes Just Help You Revise.” — BioCharya
      </div>
    </main>
  );
}
