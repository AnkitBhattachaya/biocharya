"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Users, ClipboardCheck, Brain } from "lucide-react";
import CourseGrid from "../components/CourseGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#ecfdf5] to-white text-gray-900">
      {/* ===== HERO SECTION ===== */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-16 px-6 md:px-20">
        <div className="flex-1 space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Crack <span className="text-green-700">NEET</span> & Board Exams with
            <span className="text-green-700"> Concept-Driven Biology</span>
          </motion.h1>
          <p className="text-gray-700 text-lg max-w-xl">
            Led by <strong>Ankit Bhattacharya</strong>, BioCharya trains 500+ students
            with small batches, clear concepts, and exam-proven strategies.
          </p>

          <div className="flex gap-4">
            <Link
              href="/demo"
              className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
            >
              Join Free Demo Class
            </Link>
            <Link
              href="/courses"
              className="border border-green-700 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
            >
              Explore Courses
            </Link>
          </div>

          <div className="flex gap-6 pt-4 text-sm text-gray-600">
            <div>🎓 500+ Students</div>
            <div>🏆 Small Batches</div>
            <div>📍 Kolkata, India</div>
          </div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <img
            src="/hero-image.png"
            alt="BioCharya Biology Coaching"
            className="rounded-2xl shadow-lg w-4/5 md:w-full"
          />
        </motion.div>
      </section>

      {/* ===== COURSES SECTION ===== */}
      <section className="px-6 md:px-20 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Courses Overview</h2>
        <CourseGrid />
      </section>

      {/* ===== WHY BIOCHARYA WORKS ===== */}
      <section className="bg-green-50 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Why BioCharya Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center">
            <Brain className="w-10 h-10 text-green-700 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Concept-First Teaching</h3>
            <p className="text-gray-600 text-sm">
              Understand every concept deeply before memorizing. Real-life examples for
              long-term clarity.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center">
            <Users className="w-10 h-10 text-green-700 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Small Batches & Doubt Clearing</h3>
            <p className="text-gray-600 text-sm">
              Personalized attention for every student. No question goes unanswered.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center">
            <ClipboardCheck className="w-10 h-10 text-green-700 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Exam-Oriented Practice</h3>
            <p className="text-gray-600 text-sm">
              Practice tests and questions designed to match NEET & ICSE/CBSE difficulty.
            </p>
          </div>
        </div>
      </section>

      {/* ===== MEET YOUR MENTOR ===== */}
      <section className="px-6 md:px-20 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="/ankit-bhattacharya.png"
            alt="Ankit Bhattacharya"
            className="rounded-2xl shadow-lg w-full object-cover"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Meet Your Mentor</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hi, I’m <strong>Ankit Bhattacharya</strong> — a Biology educator helping
              students from Class 9 to NEET crack exams with clarity and confidence.  
              BioCharya is built around one promise: <em>Concept. First. Always.</em>
            </p>
            <p className="text-gray-700 mb-6">
              Join our growing community of learners and experience biology like never
              before.
            </p>
            <Link
              href="https://wa.me/917980862920"
              target="_blank"
              className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
            >
              Message on WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
