"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const courses = [
  {
    slug: "neet-biology-mastery",
    title: "NEET Biology Mastery Program",
    description:
      "Crack NEET Biology with in-depth concept clarity, NCERT-based MCQs, and chapter-wise tests.",
    duration: "12 Months",
    level: "Advanced",
    image: "/courses/neet-biology.jpg",
  },
  {
    slug: "class11-cbse-biology",
    title: "Class 11 CBSE Biology",
    description:
      "Learn every topic from the Class 11 CBSE syllabus with conceptual clarity and exam-based preparation.",
    duration: "12 Months",
    level: "Intermediate",
    image: "/courses/class11.jpg",
  },
  {
    slug: "class12-cbse-biology",
    title: "Class 12 CBSE Biology",
    description:
      "Score 90+ in Boards and strengthen your NEET foundation with concept-driven learning.",
    duration: "12 Months",
    level: "Advanced",
    image: "/courses/class12.jpg",
  },
];

export default function CourseDetails() {
  const { slug } = useParams();
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-gray-700">
        <div>
          <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
          <Link href="/courses" className="text-primary hover:underline">
            ← Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50 py-16 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center"
      >
        <img
          src={course.image}
          alt={course.title}
          className="rounded-2xl shadow-2xl w-full object-cover"
        />

        <div>
          <h1 className="text-4xl font-bold text-primary mb-4">{course.title}</h1>
          <p className="text-gray-700 mb-6">{course.description}</p>
          <div className="space-y-2 mb-6">
            <p>
              <strong>Duration:</strong> {course.duration}
            </p>
            <p>
              <strong>Level:</strong> {course.level}
            </p>
          </div>

          <Link
            href="https://wa.me/917980862920"
            target="_blank"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:scale-105 hover:bg-green-800 transition-all duration-300"
          >
            Enroll Now
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
