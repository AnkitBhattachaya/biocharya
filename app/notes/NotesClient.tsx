"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Download,
  Youtube,
  Trophy,
  Users,
  ClipboardCheck,
} from "lucide-react";

// ===== NOTES DATA =====
const allNotes = [
  { title: "Fundamental Unit of Life", className: "Class 9 CBSE", driveLink: "#" },
  { title: "Tissues", className: "Class 9 CBSE", driveLink: "#" },
  { title: "Life Processes", className: "Class 10 CBSE", driveLink: "#" },
  { title: "Control and Coordination", className: "Class 10 CBSE", driveLink: "#" },
  { title: "Heredity and Evolution", className: "Class 10 CBSE", driveLink: "#" },
  { title: "Cell: The Structural and Functional Unit of Life", className: "Class 9 ICSE", driveLink: "#" },
  { title: "Plant Physiology", className: "Class 9 ICSE", driveLink: "#" },
  { title: "Endocrine System", className: "Class 10 ICSE", driveLink: "#" },
  { title: "Circulatory System", className: "Class 9 WB", driveLink: "#" },
  { title: "Photosynthesis", className: "Class 10 WB", driveLink: "#" },
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
    <main className="bg-lightbg text-textdark">
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-100 py-20 px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/pattern-bg.png')] bg-cover bg-center animate-pulse" />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4 leading-tight">
              Concept-Driven Biology Notes 🧠
            </h1>
            <p className="text-gray-700 text-lg mb-6">
              Master every chapter with <strong>BioCharya</strong>’s concise,
              exam-ready notes — crafted by <strong>Ankit Bhattacharya</strong>.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/demo"
                className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-800 transition"
              >
                🎓 Join Free Demo
              </Link>
              <Link
                href="https://youtube.com/@biocharya"
                target="_blank"
                className="border border-green-700 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
              >
                ▶ Watch Overview
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden md:block"
          >
            <Image
              src="/notes-banner.png"
              alt="Biology Notes Banner"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="bg-green-700 text-white grid grid-cols-2 md:grid-cols-4 text-center py-10">
        {[
          { icon: <Trophy className="w-6 h-6 mx-auto mb-2" />, title: "95%+", desc: "Board Results 2024" },
          { icon: <Users className="w-6 h-6 mx-auto mb-2" />, title: "500+", desc: "Active Students" },
          { icon: <ClipboardCheck className="w-6 h-6 mx-auto mb-2" />, title: "200+", desc: "Chapters Covered" },
          { icon: <BookOpen className="w-6 h-6 mx-auto mb-2" />, title: "Class 9–NEET", desc: "All Notes Ready" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="transition-all"
          >
            <div className="bg-white/20 p-3 rounded-full mb-2 mx-auto w-fit">
              {stat.icon}
            </div>
            <h3 className="text-xl font-bold">{stat.title}</h3>
            <p className="text-sm opacity-90">{stat.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* ===== FILTER CHIPS ===== */}
      <section className="flex overflow-x-auto gap-3 py-6 px-6 scrollbar-hide snap-x justify-center">
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
            className={`px-5 py-2 snap-center rounded-full whitespace-nowrap border transition font-medium ${
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
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-green-100 hover:-translate-y-2 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="h-28 bg-gradient-to-r from-green-100 to-green-50 flex items-center justify-center text-green-700 font-bold text-sm uppercase">
              {note.className}
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-green-800 mb-3">
                {note.title}
              </h3>
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
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Fill in your details to get exclusive access to{" "}
          <strong>handwritten notes, quizzes, and live sessions</strong> by
          Ankit Sir.
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
