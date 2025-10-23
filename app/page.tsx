"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, ClipboardCheck, Brain } from "lucide-react";
import CourseGrid from "../components/CourseGrid";

export default function Home() {
  return (
    <main className="min-h-screen bg-lightbg text-textdark">
      {/* ===== HERO SECTION ===== */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-16 px-6 md:px-20 bg-gradient-to-b from-white to-green-50 overflow-hidden">
        {/* LEFT TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold leading-tight"
          >
            Crack <span className="text-primary">NEET</span> & Board Exams with
            <br />
            <span className="text-accent"> Concept-Driven Biology</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-700 text-lg max-w-xl mx-auto md:mx-0"
          >
            Led by <strong>Ankit Bhattacharya</strong>, BioCharya trains{" "}
            <strong>500+ students</strong> through small batches, conceptual
            clarity, and exam-proven strategies.
          </motion.p>

          {/* ===== BUTTONS ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link
              href="/demo"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:scale-105 hover:bg-green-800 transition-all duration-300"
            >
              🎓 Join Free Demo Class
            </Link>
            <Link
              href="/courses"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-green-50 hover:scale-105 transition-all duration-300"
            >
              📘 Explore Courses
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <Image
            src="/hero-banner.png"
            alt="BioCharya | Hate Memorising Biology? NOT Anymore"
            width={1000}
            height={600}
            priority
            className="rounded-2xl shadow-2xl w-full max-w-lg md:max-w-2xl object-cover hover:scale-[1.02] transition-transform duration-500"
          />
        </motion.div>
      </section>

      {/* ===== SCROLLING ANNOUNCEMENTS / OFFERS ===== */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative overflow-hidden border-t border-b border-green-200 py-2 bg-green-50/30"
      >
        {/* Gradient Edges */}
        <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-white via-green-50/60 to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white via-green-50/60 to-transparent z-10" />

        {/* Seamless Continuous Marquee — fully clickable + spaced */}
<div className="marquee">
  <div className="marquee__content">
    <a
      href="https://wa.me/917980862920?text=Hi%20Ankit!%20Tell%20me%20more%20about%20NEET%202026%20batches!"
      target="_blank"
      className="offer-link"
    >
      🎉 New NEET 2026 Batch Starting Soon!
    </a>

    <a
      href="https://wa.me/917980862920?text=Hi%20Ankit!%20I%20want%20to%20register%20and%20know%20about%20offers!"
      target="_blank"
      className="offer-link"
    >
      💰 Register Now & Get ₹500 OFF on First Month!
    </a>

    <a
      href="https://wa.me/917980862920?text=Hi%20Ankit!%20Can%20I%20book%20my%20Free%20Demo%20Class%20this%20Sunday?"
      target="_blank"
      className="offer-link"
    >
      🔥 Free Demo Class Every Sunday — Limited Seats!
    </a>

    <a
      href="https://wa.me/917980862920?text=Hi%20Ankit!%20I%20want%20to%20know%20your%20board%20results!"
      target="_blank"
      className="offer-link"
    >
      🌟 95%+ Board Results in 2024 — Join the Success!
    </a>

    <div className="whatsapp-btn">
      <a
        href="https://wa.me/917980862920"
        target="_blank"
        className="bg-green-700 hover:bg-green-800 text-white px-3 py-1 rounded-md text-xs sm:text-sm font-semibold shadow-sm transition-all duration-200"
      >
        💬 Chat on WhatsApp
      </a>
    </div>
  </div>

  {/* duplicate for smooth infinite loop */}
  <div className="marquee__content" aria-hidden="true">
    <a
      href="https://wa.me/917980862920?text=Hi%20Ankit!%20Tell%20me%20more%20about%20NEET%202026%20batches!"
      target="_blank"
      className="offer-link"
    >
      🎉 New NEET 2026 Batch Starting Soon!
    </a>

    <a
      href="https://wa.me/917980862920?text=Hi%20Ankit!%20I%20want%20to%20register%20and%20know%20about%20offers!"
      target="_blank"
      className="offer-link"
    >
      💰 Register Now & Get ₹500 OFF on First Month!
    </a>

    <a
      href="https://wa.me/917980862920?text=Hi%20Ankit!%20Can%20I%20book%20my%20Free%20Demo%20Class%20this%20Sunday?"
      target="_blank"
      className="offer-link"
    >
      🔥 Free Demo Class Every Sunday — Limited Seats!
    </a>

    <a
      href="https://wa.me/917980862920?text=Hi%20Ankit!%20I%20want%20to%20know%20your%20board%20results!"
      target="_blank"
      className="offer-link"
    >
      🌟 95%+ Board Results in 2024 — Join the Success!
    </a>

    <div className="whatsapp-btn">
      <a
        href="https://wa.me/917980862920"
        target="_blank"
        className="bg-green-700 hover:bg-green-800 text-white px-3 py-1 rounded-md text-xs sm:text-sm font-semibold shadow-sm transition-all duration-200"
      >
        💬 Chat on WhatsApp
      </a>
    </div>
  </div>
</div>

<style jsx>{`
  .marquee {
    position: relative;
    display: flex;
    overflow: hidden;
    white-space: nowrap;
  }
  .marquee__content {
    display: inline-flex;
    align-items: center;
    gap: 2rem; /* ✅ adds space between each offer */
    animation: scroll-left 15s linear infinite;
  }
  .offer-link {
    color: #166534; /* green-800 */
    font-weight: 500;
    font-size: 0.9rem;
    text-decoration: none;
    transition: color 0.2s ease-in-out;
  }
  .offer-link:hover {
    color: #15803d; /* hover green-700 */
  }
  .whatsapp-btn {
    margin-left: 1.5rem; /* ✅ spacing before WhatsApp button */
  }
  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  @media (max-width: 640px) {
    .marquee__content {
      animation-duration: 25s;
      gap: 1rem;
    }
    .offer-link {
      font-size: 0.8rem;
    }
  }
`}</style>

      {/* ===== COURSES SECTION ===== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 md:px-20 mb-16"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">
          Courses Overview
        </h2>
        <CourseGrid />
      </motion.section>

      {/* ===== WHY BIOCHARYA WORKS ===== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-primary/5 py-16 px-6 md:px-20"
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">
          Why BioCharya Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Brain className="w-10 h-10 text-primary mb-4" />,
              title: "Concept-First Teaching",
              desc: "Understand every concept deeply with real-life examples for long-term clarity.",
            },
            {
              icon: <Users className="w-10 h-10 text-primary mb-4" />,
              title: "Small Batches & Doubt Clearing",
              desc: "Personalized attention for every student — no question goes unanswered.",
            },
            {
              icon: <ClipboardCheck className="w-10 h-10 text-primary mb-4" />,
              title: "Exam-Oriented Practice",
              desc: "Practice tests and mock papers designed for NEET & ICSE/CBSE standards.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center border-t-4 border-primary hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {item.icon}
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== MEET YOUR MENTOR ===== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 md:px-20 py-16 bg-white"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src="/ankit-sir-biocharya.png"
            alt="Ankit Bhattacharya"
            className="rounded-2xl shadow-lg w-full object-cover"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
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
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
