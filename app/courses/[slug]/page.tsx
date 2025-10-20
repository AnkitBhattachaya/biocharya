"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, XCircle } from "lucide-react";

export default function CourseDetailsPage({ params }: any) {
  const courseSlug = params.slug;

  // Example data – you can expand these later
  const course = {
    title:
      courseSlug === "neet-biology-mastery"
        ? "NEET Biology Mastery"
        : courseSlug === "class12-cbse-biology"
        ? "Class 12 CBSE Biology"
        : courseSlug === "class11-cbse-biology"
        ? "Class 11 CBSE Biology"
        : "ICSE/WB Biology",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // replace later
    price: "₹4999",
    features: [
      "NCERT exemplar practice",
      "Test series & revision notes",
      "Doubt-clearing sessions",
    ],
  };

  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    className: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Form submission handler
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxgdohiqbTgM-kdicepIz2aQUcxDc8CwbxwA-8_pisl1RWRtrBBu5XQ9tqTj5aOYejh/exec",
        {
          method: "POST",
          mode: "no-cors",
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
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong!");
    }
  };

  // ✅ WhatsApp redirect
  const handleWhatsApp = () => {
    const text = `Hey Ankit! I’m interested in the ${course.title} course.`;
    const link = `https://wa.me/917980862920?text=${encodeURIComponent(text)}`;
    window.open(link, "_blank");
  };

  return (
    <main className="pt-28 pb-20 px-6 md:px-20 bg-lightbg min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-center text-green-800 mb-10"
      >
        {course.title}
      </motion.h1>

      {/* ===== VIDEO PREVIEW ===== */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-[400px] rounded-xl"
            src={course.videoUrl}
            title="Course Preview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* ===== COURSE DETAILS ===== */}
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md border border-gray-100 space-y-6">
        <h2 className="text-2xl font-semibold text-green-800">Course Includes:</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {course.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        <p className="text-lg font-semibold text-green-800 flex items-center gap-2">
          💰 Course Fee: <span className="text-black">{course.price}</span>
        </p>

        {/* ===== ENROLLMENT FORM ===== */}
        <div className="bg-green-50 p-6 rounded-xl shadow-inner">
          <h3 className="text-lg font-semibold text-green-800 mb-3">
            Interested? Fill in your details below 👇
          </h3>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 flex flex-col max-w-md"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
            />
            <input
              type="tel"
              name="whatsapp"
              placeholder="WhatsApp Number"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
            />
            <input
              type="text"
              name="className"
              placeholder="Class (e.g., Class 11)"
              value={formData.className}
              onChange={handleChange}
              required
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
            />

            <div className="flex flex-col sm:flex-row gap-3 mt-3">
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-200"
              >
                Submit Details
              </button>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="border border-green-700 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-200"
              >
                💬 Chat on WhatsApp
              </button>
            </div>
          </form>

          {/* Status message */}
          {status && (
            <div className="flex items-center gap-2 mt-4 text-sm font-medium">
              {status.startsWith("✅") && (
                <CheckCircle className="text-green-600 w-5 h-5" />
              )}
              {status.startsWith("❌") && (
                <XCircle className="text-red-500 w-5 h-5" />
              )}
              <span>{status}</span>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
