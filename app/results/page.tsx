"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ResultsPage() {
  const toppers = [
    {
      name: "Aritra Dutta",
      score: "NEET 2024 – 685/720",
      quote: "BioCharya made every concept crystal clear. I actually enjoyed learning Biology!",
      image: "/results/aritra.jpg",
    },
    {
      name: "Riya Sen",
      score: "Class 12 CBSE – 97%",
      quote: "Ankit Sir’s guidance helped me stay confident throughout the boards.",
      image: "/results/riya.jpg",
    },
    {
      name: "Kunal Saha",
      score: "NEET 2023 – 672/720",
      quote: "Regular DPPs and conceptual teaching helped me stay consistent.",
      image: "/results/kunal.jpg",
    },
  ];

  return (
    <main className="pt-28 pb-20 bg-lightbg text-textdark">
      {/* ===== HERO SECTION ===== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6 md:px-20 py-16 bg-gradient-to-b from-green-50 to-white"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Proven Results. Real Students. Real Success.
        </motion.h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
          Every success story you see here started with one decision — joining BioCharya. 
          These students proved that with the right guidance, Biology can be mastered.
        </p>
      </motion.section>

      {/* ===== ACHIEVEMENT STATS ===== */}
      <section className="bg-primary text-white py-6 text-center text-sm sm:text-base font-medium tracking-wide">
        🌿 95% Board Success • 🧠 680+ Average NEET Scores • 🎓 500+ Happy Students
      </section>

      {/* ===== TOPPERS GRID ===== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 md:px-20 py-16 bg-white"
      >
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          Our Top Performers
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {toppers.map((student, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center border-t-4 border-primary"
            >
              <div className="w-32 h-32 relative rounded-full overflow-hidden border-4 border-green-600 mb-4">
                <Image
                  src={student.image}
                  alt={student.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-lg text-primary">{student.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{student.score}</p>
              <p className="text-gray-700 text-sm italic leading-relaxed">
                “{student.quote}”
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ===== TESTIMONIAL STRIP (OPTIONAL MINI BAND) ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-green-700 text-white text-center py-6 text-sm md:text-base"
      >
        “Clarity Creates Confidence.” — The BioCharya Promise 🌱
      </motion.div>

      {/* ===== CALL TO ACTION ===== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center py-20 px-6 bg-green-50"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Your Story Could Be Next 🌱
        </h2>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Join BioCharya today — where clarity turns into confidence, and students turn into achievers.
        </p>
        <Link
          href="/demo"
          className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:scale-105 hover:bg-green-800 transition-all duration-300"
        >
          🎓 Join Free Demo Class
        </Link>
      </motion.section>
    </main>
  );
}
