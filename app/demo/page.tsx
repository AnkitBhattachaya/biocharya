"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DemoPage() {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "If ANF is released from the heart, it will cause —",
      options: [
        "Increase blood pressure",
        "Increase heart beat",
        "Increase urinary output",
        "None of the above",
      ],
      correct: "Increase urinary output",
    },
    {
      id: 2,
      question: "Normal systolic blood pressure of an individual is —",
      options: ["80 mmHg", "120 mmHg", "140 mmHg", "100 mmHg"],
      correct: "120 mmHg",
    },
    {
      id: 3,
      question: "Counter current mechanism allows —",
      options: [
        "Reabsorption of minerals and hormones",
        "Water reabsorption",
        "Blood pressure to increase",
        "Both b and c",
      ],
      correct: "Both b and c",
    },
  ];

  const handleSelect = (id: number, option: string) => {
    setAnswers({ ...answers, [id]: option });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const score = Object.keys(answers).filter(
    (id) =>
      questions.find((q) => q.id === Number(id))?.correct ===
      answers[Number(id)]
  ).length;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-green-50 px-6 py-16 text-center">
      {/* ===== HERO HEADING ===== */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-primary mb-6"
      >
        Join Our Free Demo Class
      </motion.h1>

      {/* ===== DESCRIPTION ===== */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-700 text-lg max-w-2xl mb-10"
      >
        Experience concept-driven Biology learning with{" "}
        <strong>BioCharya</strong>. Watch our demo class below and see how
        complex topics become simple and exciting to learn!
      </motion.p>

      {/* ===== DEMO VIDEO SECTION ===== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="w-full max-w-3xl mb-12 rounded-2xl overflow-hidden shadow-xl border border-green-100"
      >
        <div className="relative aspect-video">
          <iframe
            className="w-full h-full rounded-2xl"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="BioCharya Demo Class"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>

      {/* ===== TEST YOURSELF SECTION ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full mb-10 border border-green-100"
      >
        <h2 className="text-2xl font-bold text-primary mb-6">
          🧠 Test Yourself Before Joining!
        </h2>
        {questions.map((q) => (
          <div key={q.id} className="mb-6 text-left">
            <p className="font-semibold mb-3">{q.id}. {q.question}</p>
            <div className="grid grid-cols-2 gap-3">
              {q.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelect(q.id, opt)}
                  className={`px-4 py-2 rounded-lg border text-sm transition-all duration-300 ${
                    answers[q.id] === opt
                      ? "bg-green-100 border-green-500 text-green-800"
                      : "border-gray-300 hover:border-green-400"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}

        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
        >
          Submit Answers
        </button>

        {submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-6 text-lg font-semibold"
          >
            🎉 You got <span className="text-primary">{score}</span> / {questions.length} correct!
            <p className="text-green-700 mt-2">
              {score === 3
                ? "Excellent! You’re ready to rock NEET Biology!"
                : "Good try! You’ll master these concepts with BioCharya."}
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* ===== CTA SECTION ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <p className="text-gray-800 text-lg mb-4">
          Loved the demo? Join the full session now and start learning with{" "}
          <strong>Ankit Sir</strong>!
        </p>
        <Link
          href="https://wa.me/917980862920?text=Hey%20Ankit%2C%20I%20want%20to%20join%20the%20free%20demo%20class!"
          target="_blank"
          className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold shadow-md hover:bg-green-700 hover:scale-105 transition-transform duration-300"
        >
          💬 Join Free Demo on WhatsApp
        </Link>
      </motion.div>
    </main>
  );
}
