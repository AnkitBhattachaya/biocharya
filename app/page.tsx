"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, Users, ClipboardCheck, Brain } from "lucide-react";
import CourseGrid from "../components/CourseGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-lightbg text-textdark">
{/* ===== HERO SECTION ===== */}
<section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-green-50">
  {/* Background Layer */}
  <div className="absolute inset-0">
    <img
      src="/hero-banner.jpg"
      alt="BioCharya Biology Coaching Hero"
      className="w-full h-full object-cover opacity-70"
      loading="eager"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-green-800/70 to-green-700/40" />
  </div>

  {/* Content Layer */}
  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 py-20 px-6 md:px-20 text-white">
    {/* LEFT TEXT SECTION */}
    <div className="flex-1 space-y-6 text-center md:text-left">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg"
      >
        Master <span className="text-green-300">Biology</span> with India’s Most
        <br /> <span className="text-green-100">Practical Mentor</span>
      </motion.h1>

      <p className="text-green-100 text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed">
        Join <strong>500+ students</strong> learning Biology the smart, conceptual way
        with <strong>Ankit Bhattacharya</strong> — your trusted guide for
        <span className="text-green-200 font-semibold"> NEET & Board Success</span>.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2"
      >
        <Link
          href="/demo"
          className="bg-white text-green-900 px-8 py-3 rounded-xl font-semibold shadow-md hover:scale-105 hover:bg-green-100 transition-all duration-300"
        >
          🎓 Join Free Demo Class
        </Link>
        <Link
          href="/courses"
          className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/15 transition-all duration-300 hover:scale-105"
        >
          📘 Explore Courses
        </Link>
      </motion.div>

      {/* Trust Indicators */}
      <div className="flex flex-wrap gap-6 pt-6 justify-center md:justify-start text-sm text-green-100/90">
        <div>🌱 Concept-Driven Learning</div>
        <div>🏆 500+ Successful Students</div>
        <div>📍 Dum Dum, Kolkata</div>
      </div>
    </div>

    {/* RIGHT IMAGE SECTION */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="flex-1 flex justify-center md:justify-end"
    >
      <img
        src="/ankit-bhattacharya-portrait.png"
        alt="Ankit Bhattacharya"
        className="rounded-2xl shadow-2xl w-4/5 md:w-full max-w-sm md:max-w-md border-4 border-green-200 hover:scale-[1.02] transition-transform duration-500"
      />
    </motion.div>
  </div>
</section>

      {/* ===== COURSES SECTION ===== */}
      <section className="px-6 md:px-20 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">
          Courses Overview
        </h2>
        <CourseGrid />
      </section>

      {/* ===== WHY BIOCHARYA WORKS ===== */}
      <section className="bg-primary/5 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">
          Why BioCharya Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center border-t-4 border-primary">
            <Brain className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">
              Concept-First Teaching
            </h3>
            <p className="text-gray-600 text-sm">
              Understand every concept deeply before memorizing. Real-life
              examples for long-term clarity.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center border-t-4 border-primary">
            <Users className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">
              Small Batches & Doubt Clearing
            </h3>
            <p className="text-gray-600 text-sm">
              Personalized attention for every student. No question goes
              unanswered.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center border-t-4 border-primary">
            <ClipboardCheck className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-semibold text-lg mb-2">Exam-Oriented Practice</h3>
            <p className="text-gray-600 text-sm">
              Practice tests and questions designed to match NEET & ICSE/CBSE
              difficulty.
            </p>
          </div>
        </div>
      </section>

      {/* ===== MEET YOUR MENTOR ===== */}
      <section className="px-6 md:px-20 py-16 bg-white">
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
            <h2 className="text-3xl font-bold mb-4 text-primary">
              Meet Your Mentor
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hi, I’m <strong>Ankit Bhattacharya</strong> — a Biology educator
              helping students from Class 9 to NEET crack exams with clarity and
              confidence. BioCharya is built around one promise:
              <em> Concept. First. Always.</em>
            </p>
            <p className="text-gray-700 mb-6">
              Join our growing community of learners and experience biology like
              never before.
            </p>
            <Link
              href="https://wa.me/917980862920"
              target="_blank"
              className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Message on WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
