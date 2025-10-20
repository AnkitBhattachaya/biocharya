"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// 🎬 Video Testimonials (editable later)
const videoTestimonials = [
  {
    title: "From Doubt to Ranker 💪",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace later with your actual video
  },
  {
    title: "I Finally Understood Biology 🔬",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Boards & NEET, Both Cracked 🔥",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  // Add up to 12 items or more
];

// 💬 Text Testimonials
const textTestimonials = [
  {
    name: "Riya Mandal",
    image: "/students/riya.jpg", // Add actual image later
    text: "Before BioCharya, I memorized blindly. Now I understand biology deeply — I topped my school exams!",
  },
  {
    name: "Aritra Sen",
    image: "/students/aritra.jpg",
    text: "Ankit sir made NEET Biology feel logical. His way of explaining genetics changed everything.",
  },
  {
    name: "Sohini Das",
    image: "/students/sohini.jpg",
    text: "Every concept became crystal clear. BioCharya is not just classes — it’s mentorship.",
  },
];

export default function ResultsPage() {
  return (
    <main className="pt-28 pb-20 bg-lightbg text-textdark">
      {/* ===== HERO SECTION ===== */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6 md:px-20 mb-16"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          They Made Me a God-Tier Teacher 🔥
        </motion.h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Let’s hear directly from them — unfiltered stories, straight from my students.
        </p>
      </motion.section>

      {/* ===== VIDEO GALLERY ===== */}
      <section className="px-6 md:px-20 mb-20">
        <motion.h2
          className="text-3xl font-bold text-center text-green-700 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          They Changed Their Own Game — I Was Lucky to Be Part of It 🔥
        </motion.h2>
        <p className="text-center text-gray-600 mb-10">
          Real stories. Real transformations. Watch what happens when clarity meets consistency.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videoTestimonials.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video w-full bg-black">
                <iframe
                  src={item.video}
                  title={item.title}
                  allowFullScreen
                  className="w-full h-full object-cover"
                ></iframe>
              </div>
              <div className="p-4 text-center font-medium text-gray-700">
                {item.title}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== TEXT TESTIMONIALS ===== */}
      <section className="bg-green-50 py-16 px-6 md:px-20">
        <motion.h2
          className="text-3xl font-bold text-center text-green-800 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          If You Still Need Proof, Read This 👇
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {textTestimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 border-t-4 border-green-700 transition-all duration-300 hover:-translate-y-2 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 mx-auto mb-4 relative rounded-full overflow-hidden border-2 border-green-600">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">{t.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <motion.section
        className="text-center py-20 px-6 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
          Your Story Could Be Next 🌱
        </h2>
        <p className="text-gray-700 mb-6">
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
