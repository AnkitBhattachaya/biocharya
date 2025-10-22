"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface CourseLayoutProps {
  title: string;
  tagline: string;
  image: string;
  videoUrl: string;
  points: string[];
  price: number;
  slug: string;
}

export default function CourseLayout({
  title,
  tagline,
  image,
  videoUrl,
  points,
  price,
  slug,
}: CourseLayoutProps) {
  return (
    <main className="bg-lightbg min-h-screen">
      {/* 🧬 Hero Section — Only Banner Image */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </section>

      {/* 🎥 Demo Video + Register Section */}
      <section className="px-6 md:px-20 py-12 bg-white">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-8">
          Watch a Demo & Register Now
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
          {/* Left — Video */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="280"
              src={videoUrl}
              title="Demo Class"
              className="rounded-xl"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Right — Register Form */}
          <div className="bg-green-50 p-6 rounded-xl shadow-inner border border-green-100">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              Register for Free 🚀
            </h3>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const whatsapp = (form.elements.namedItem("whatsapp") as HTMLInputElement).value;
                const className = (form.elements.namedItem("className") as HTMLInputElement).value;

                const data = { name, whatsapp, className, course: title };

                try {
                  await fetch(
                    "https://script.google.com/macros/s/AKfycbxgdohiqbTgM-kdicepIz2aQUcxDc8CwbxwA-8_pisl1RWRtrBBu5XQ9tqTj5aOYejh/exec",
                    {
                      method: "POST",
                      mode: "no-cors",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(data),
                    }
                  );

                  alert("✅ Registration successful! We'll contact you soon on WhatsApp.");
                  form.reset();
                } catch (error) {
                  alert("❌ Something went wrong! Please try again.");
                  console.error(error);
                }
              }}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
              />
              <input
                type="tel"
                name="whatsapp"
                placeholder="WhatsApp Number"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
              />
              <input
                type="text"
                name="className"
                placeholder="Class (e.g., Class 11)"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
              />

              <div className="flex flex-col sm:flex-row gap-3 mt-3">
                <button
                  type="submit"
                  className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-200"
                >
                  Submit
                </button>

                <a
                  href={`https://wa.me/917980862920?text=Hey%20Ankit!%20I%20want%20to%20join%20the%20${encodeURIComponent(
                    title
                  )}%20course.`}
                  target="_blank"
                  className="border border-green-700 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-100 text-center"
                >
                  💬 WhatsApp
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 📘 Course Insights Section */}
      <section className="px-6 md:px-20 py-16 bg-green-50">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-6">
          Course Insights
        </h2>

        <div className="max-w-5xl mx-auto space-y-5 text-gray-700 leading-relaxed">
          <p>
            This course is designed to take you from the basics to the highest
            level of understanding in <strong>Biology</strong>. Whether you’re
            preparing for <strong>Boards or NEET</strong>, our structured module
            system ensures complete coverage of the syllabus with clarity.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>🧠 Duration: Until syllabus completion or NEET 2026</li>
            <li>📚 Includes live + recorded sessions for flexible learning</li>
            <li>🧾 Regular topic-wise tests & full mock papers</li>
            <li>🤝 Weekly 1-on-1 mentorship & doubt-clearing sessions</li>
            <li>📘 Free notes, DPPs, and PYQ analysis included</li>
            <li>📱 Exclusive WhatsApp guidance & progress tracking</li>
          </ul>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/demo"
            className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:bg-green-800 transition"
          >
            Register for Free Now
          </Link>
        </div>
      </section>
    </main>
  );
}
