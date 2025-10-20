"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const courseData: any = {
  "neet-biology-mastery": {
    title: "NEET Biology Mastery",
    videoUrl: "https://www.youtube.com/embed/MVPTGNGiI-4",
    price: "₹ 7999",
    highlights: [
      "Complete NCERT coverage",
      "Topic-wise DPPs & PYQs",
      "Live + Recorded classes",
      "Weekly tests & progress tracking",
    ],
    whatsappMsg:
      "Hey Ankit, I want to enroll for the NEET Biology Mastery course.",
  },
  "class12-cbse-biology": {
    title: "Class 12 CBSE Biology",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    price: "₹ 4999",
    highlights: [
      "Board syllabus mastery",
      "NCERT exemplar practice",
      "Test series & revision notes",
      "Doubt-clearing sessions",
    ],
    whatsappMsg:
      "Hey Ankit, I want to join the Class 12 CBSE Biology course.",
  },
  "class11-cbse-biology": {
    title: "Class 11 CBSE Biology",
    videoUrl: "https://www.youtube.com/embed/nlT8P9KC3s0",
    price: "₹ 4499",
    highlights: [
      "Strong NEET foundations",
      "Concept-driven modules",
      "Weekly assignments",
      "One-on-one doubt solving",
    ],
    whatsappMsg:
      "Hey Ankit, I want to join the Class 11 CBSE Biology course.",
  },
  "icse-wb-biology": {
    title: "ICSE / WB Board Biology",
    videoUrl: "https://www.youtube.com/embed/NpEaa2P7qZI",
    price: "₹ 3999",
    highlights: [
      "Chapter-wise visual explanations",
      "Board pattern questions",
      "Practical concept clarity",
      "Weekly mock tests",
    ],
    whatsappMsg: "Hey Ankit, I want to join the ICSE/WB Biology course.",
  },
};

export default function CourseDetailPage() {
  const { slug } = useParams();
  const course = courseData[slug as string];
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    className: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxgdohiqbTgM-kdicepIz2aQUcxDc8CwbxwA-8_pisl1RWRtrBBu5XQ9tqTj5aOYejh/exec",
        {
          method: "POST",
          body: JSON.stringify({
            ...formData,
            course: course.title,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setStatus("✅ Submitted successfully!");
      setFormData({ name: "", whatsapp: "", className: "" });
      setTimeout(() => {
        window.open(
          `https://wa.me/917980862920?text=${encodeURIComponent(
            course.whatsappMsg
          )}`,
          "_blank"
        );
      }, 800);
    } catch (err) {
      setStatus("❌ Something went wrong!");
    }
  };

  if (!course)
    return <div className="p-20 text-center text-gray-600">Course not found.</div>;

  return (
    <main className="min-h-screen bg-white py-20 px-6 md:px-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-green-800 text-center mb-8"
      >
        {course.title}
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
        <motion.iframe
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src={course.videoUrl}
          title="Course Demo Video"
          allowFullScreen
          className="rounded-2xl shadow-lg w-full aspect-video"
        ></motion.iframe>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-700">
            What You’ll Learn
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {course.highlights.map((h: string, i: number) => (
              <li key={i}>{h}</li>
            ))}
          </ul>

          <p className="text-lg font-semibold">
            💰 <span className="text-green-700">Course Fee:</span> {course.price}
          </p>

          {/* --- Lead Capture Form --- */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-green-50 p-5 rounded-lg shadow-md"
          >
            <h3 className="font-semibold text-lg text-green-700">
              Interested? Fill in your details below 👇
            </h3>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
            <input
              type="tel"
              name="whatsapp"
              placeholder="WhatsApp Number"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
            <input
              type="text"
              name="className"
              placeholder="Class (e.g. 11 CBSE, NEET)"
              value={formData.className}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2"
            />
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-800 transition"
            >
              Submit & Chat on WhatsApp
            </button>
            {status && <p className="text-sm text-center text-gray-700">{status}</p>}
          </form>
        </div>
      </div>
    </main>
  );
}
