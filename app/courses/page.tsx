"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    title: "NEET Biology Mastery",
    description:
      "Comprehensive NEET Biology course covering every chapter with PYQs, DPPs, and live mentoring.",
    image: "/courses/neet-biology.jpg",
    link: "/demo",
  },
  {
    title: "Class 12 CBSE Biology",
    description:
      "Master Class 12 Biology with concept-first learning, practical clarity, and exam-ready notes.",
    image: "/courses/class12.jpg",
    link: "/demo",
  },
  {
    title: "Class 11 CBSE Biology",
    description:
      "Build strong foundations in Class 11 Biology with weekly practice tests and concept-based teaching.",
    image: "/courses/class11.jpg",
    link: "/demo",
  },
  {
    title: "ICSE / WB Board Biology",
    description:
      "Board-focused Biology course with conceptual depth, visuals, and question-based learning.",
    image: "/courses/icse-board.jpg",
    link: "/demo",
  },
];

export default function CoursesPage() {
  return (
    <main className="pt-32 pb-20 px-6 md:px-20 bg-lightbg min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-green-800 mb-12"
      >
        Our Courses
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {courses.map((course, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-gray-100"
          >
            <div className="relative h-56 w-full">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 space-y-3">
              <h2 className="text-xl font-semibold text-green-800">
                {course.title}
              </h2>
              <p className="text-gray-600 text-sm">{course.description}</p>
              <Link
                href={course.link}
                className="inline-block mt-4 bg-green-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-800 transition"
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
