"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Send, CheckCircle2, PlayCircle } from "lucide-react";

export default function DemoPage() {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    className: "",
  });
  const [registered, setRegistered] = useState(false);

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

  const handleSubmitQuiz = () => {
    setSubmitted(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
    // 🔗 (optional) connect this to Google Sheets / webhook later
  };

  const score = Object.keys(answers).filter(
    (id) =>
      questions.find((q) => q.id === Number(id))?.correct ===
      answers[Number(id)]
  ).length;

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50 text-textdark">
      {/* ===== HERO SECTION ===== */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 bg-gradient-to-b from-green-50 to-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4"
        >
          🎓 Free Biology Demo Class
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-700 max-w-2xl text-lg"
        >
          Learn how <strong>Ankit Bhattacharya</strong> makes Biology easy to
          understand — no rote memorization, just pure clarity.
        </motion.p>
      </section>

      {/* ===== DEMO VIDEO ===== */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 mb-16"
      >
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-green-100">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="BioCharya Demo Class"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <p className="text-center mt-4 text-sm text-gray-600">
          <PlayCircle className="inline-block w-4 h-4 mr-1 text-green-700" />
          Watch this short demo & experience BioCharya’s concept-first approach.
        </p>
      </motion.section>

      {/* ===== TEST YOURSELF QUIZ ===== */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl mx-auto mb-16 border-t-4 border-green-600"
      >
        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
          🧠 Test Yourself Before Joining!
        </h2>
        {questions.map((q) => (
          <div key={q.id} className="mb-6 text-left">
            <p className="font-semibold mb-3 text-gray-800">
              {q.id}. {q.question}
            </p>
            <div className="grid grid-cols-2 gap-3">
              {q.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelect(q.id, opt)}
                  className={`px-4 py-2 rounded-lg border text-sm transition-all duration-300 ${
                    answers[q.id] === opt
                      ? "bg-green-100 border-green-600 text-green-800"
                      : "border-gray-300 hover:border-green-400"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center">
          <button
            onClick={handleSubmitQuiz}
            className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-all"
          >
            Submit Answers
          </button>

          {submitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 text-lg font-semibold"
            >
              🎉 You got <span className="text-green-700">{score}</span> /{" "}
              {questions.length} correct!
              <p className="text-green-700 mt-2">
                {score === 3
                  ? "Excellent! You’re ready for NEET Biology!"
                  : "Good try! You’ll master these topics with BioCharya."}
              </p>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* ===== REGISTRATION FORM ===== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 md:px-20 mb-20"
      >
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-8 border-t-4 border-green-700">
          {!registered ? (
            <>
              <h2 className="text-2xl font-bold text-center mb-6 text-green-800">
                Register for Free Demo Class
              </h2>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-green-700"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="WhatsApp Number"
                  required
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-green-700"
                />
                <select
                  name="className"
                  required
                  value={formData.className}
                  onChange={handleFormChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-green-700"
                >
                  <option value="">Select Your Class</option>
                  <option>Class 9</option>
                  <option>Class 10</option>
                  <option>Class 11</option>
                  <option>Class 12</option>
                  <option>NEET Target Batch</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-md font-semibold flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <Send className="w-5 h-5" /> Submit & Book My Seat
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-10">
              <CheckCircle2 className="text-green-700 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-green-800">
                You’re Registered! 🎉
              </h3>
              <p className="text-gray-600 mb-4">
                We’ll contact you via WhatsApp within 24 hours.
              </p>
              <Link
                href="https://wa.me/917980862920?text=Hi%20Ankit!%20I%27ve%20registered%20for%20the%20demo%20class!"
                target="_blank"
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md font-semibold transition-all duration-200 inline-flex items-center gap-2"
              >
                💬 Message on WhatsApp
              </Link>
            </div>
          )}
        </div>
      </motion.section>

      {/* ===== CTA BANNER ===== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center bg-green-50 py-16 px-6"
      >
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          Start Learning Smart with BioCharya 🧬
        </h2>
        <p className="text-gray-700 mb-6">
          Join thousands of students who turned Biology fear into fascination.
        </p>
        <Link
          href="https://wa.me/917980862920"
          target="_blank"
          className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition-all duration-300"
        >
          💬 Chat with Ankit Sir
        </Link>
      </motion.section>
    </main>
  );
}
