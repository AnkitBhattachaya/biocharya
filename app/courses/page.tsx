"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    title: "NEET Biology Mastery",
    description:
      "Comprehensive NEET Biology course covering every chapter with DPPs, PYQs, and live mentoring.",
    image: "/courses/neet-biology-course-biocharya.png",
    slug: "neet-biology-mastery",
  },
  {
    title: "Class 12 CBSE Biology",
    description:
      "Master Class 12 Biology with concept-first learning, practical clarity, and exam-ready notes.",
    image: "/courses/class12-biology-course-biocharya.png",
    slug: "class12-cbse-biology",
  },
  {
    title: "Class 11 CBSE Biology",
    description:
      "Build strong foundations in Class 11 Biology with weekly practice tests and concept-based teaching.",
    image: "/courses/class11-biology-course-biocharya.png",
    slug: "class11-cbse-biology",
  },
  {
  title: "CBSE/ICSE Board Biology",
  description:
    "Board-focused Biology course with conceptual depth, visuals, and question-based learning.",
  image: "/courses/cbse-icse-biology-course-biocharya.png",
  slug: "cbse-icse-biology", // ✅ updated slug
},
];

export default function CoursesPage() {
  const whatsappLink = (courseName: string) =>
    `https://wa.me/917980862920?text=Hi%20Ankit!%20I%27m%20interested%20in%20joining%20the%20${encodeURIComponent(
      courseName
    )}%20course%20from%20BioCharya.`;

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
              <Link href={`/courses/${course.slug}`}>
                <h2 className="text-xl font-semibold text-green-800 hover:text-green-600 transition">
                  {course.title}
                </h2>
              </Link>
              <p className="text-gray-600 text-sm">{course.description}</p>

              <div className="flex gap-3 pt-3">
                <Link
                  href={`/courses/${course.slug}`}
                  className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-800 transition"
                >
                  View Details
                </Link>
                <Link
                  href={whatsappLink(course.title)}
                  target="_blank"
                  className="border border-green-700 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-50 transition"
                >
                  WhatsApp
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
