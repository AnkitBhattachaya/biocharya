"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Download, Youtube } from "lucide-react";

const allNotes = [
  // ===== CLASS 9 CBSE =====
  {
    title: "Fundamental Unit of Life",
    className: "Class 9 CBSE",
    driveLink: "https://drive.google.com/file/d/your-link-here/view",
  },
  {
    title: "Tissues",
    className: "Class 9 CBSE",
    driveLink: "https://drive.google.com/file/d/your-link-here/view",
  },
  {
    title: "Diversity in Living Organisms",
    className: "Class 9 CBSE",
    driveLink: "https://drive.google.com/file/d/your-link-here/view",
  },

  // ===== CLASS 10 CBSE =====
  {
    title: "Life Processes",
    className: "Class 10 CBSE",
    driveLink: "https://drive.google.com/file/d/your-link-here/view",
  },
  {
    title: "Control and Coordination",
    className: "Class 10 CBSE",
    driveLink: "https://drive.google.com/file/d/your-link-here/view",
  },
  {
    title: "Heredity and Evolution",
    className: "Class 10 CBSE",
    driveLink: "https://drive.google.com/file/d/your-link-here/view",
  },

  // ===== CLASS 9 ICSE =====
  {
    title: "Cell: The Structural and Functional Unit of Life",
    className: "Class 9 ICSE",
    driveLink: "https://drive.google.com/file/d/your-link-here/view",
  },
  {
    title: "Plant Physiology",
    className: "Class 9 ICSE",
    driveLink: "https://drive.google.com/file/d/your-link-here/view",
  },

  // ===== CLASS 10 ICSE =====
  {
    title: "Excretory System",
    className: "Class 10 ICSE",
    driveLink: "https://drive.google.com/file/d/your-link-here/view",
  },
  {
    title: "Endocrine System",
    className: "Class 10 ICSE",
    driveLink: "https://drive.google.com/file/d/your-link-here/view",
  },

  // ===== WB Board =====
  {
    title: "Photosynthesis",
    className: "Class 10 WB",
    driveLink: "https://drive.google.com/file/d/your-link-here/view",
  },
  {
    title: "Circulatory System",
    className: "Class 9 WB",
    driveLink: "https://drive.google.com/file/d/your-link-here/view",
  },

  // ===== NEET / Higher Level =====
  {
    title: "Human Reproduction",
    className: "NEET Target",
    driveLink: "https://drive.google.com/file/d/your-link-here/view",
    videoLink: "https://www.youtube.com/watch?v=your-video",
  },
  {
    title: "Photosynthesis in Higher Plants",
    className: "NEET Target",
    driveLink: "https://drive.google.com/file/d/your-link-here/view",
  },
];

export default function NotesClient() {
  const [selectedClass, setSelectedClass] = useState("All");

  const filteredNotes =
    selectedClass === "All"
      ? allNotes
      : allNotes.filter((note) => note.className === selectedClass);

  // SEO Schema Injection
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Biology Notes | BioCharya",
      description:
        "Comprehensive Biology notes for Classes 9–12 (CBSE, ICSE, WB) and NEET, curated by Ankit Bhattacharya.",
      provider: {
        "@type": "Organization",
        name: "BioCharya",
        url: "https://biocharya.in",
      },
      hasPart: allNotes.map((n) => ({
        "@type": "CreativeWork",
        name: n.title,
        educationalLevel: n.className,
        url: n.driveLink,
      })),
    });
    document.head.appendChild(script);
  }, []);

  return (
    <main className="pt-28 pb-20 bg-lightbg text-textdark min-h-screen">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6 md:px-20 mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
          Free Biology Notes — Class 9 to NEET 📚
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Download detailed, concept-driven notes by{" "}
          <strong>Ankit Bhattacharya</strong> for{" "}
          <strong>CBSE, ICSE, WB & NEET</strong>. Updated regularly and fully exam-oriented.
        </p>
      </motion.section>

      {/* FILTER BUTTONS */}
      <section className="flex flex-wrap justify-center gap-4 mb-10 px-4">
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

      {/* NOTES GRID */}
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
    </main>
  );
}
