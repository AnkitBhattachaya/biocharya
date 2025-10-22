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
      {/* 🧬 Hero Section */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-3"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl italic text-green-200"
          >
            {tagline}
          </motion.p>
        </div>
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
        height="300"
        src={videoUrl}
        title="Demo Class"
        className="rounded-xl"
        allowFullScreen
      ></iframe>
    </div>

    {/* Right — Register Form */}
    <div className="bg-green-50 p-6 rounded-xl shadow-inner border border-green-100">
      <h3 className="text-xl font-semibold text-green-800 mb-3">
        Register Now 🚀
      </h3>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
        />
        <input
          type="tel"
          placeholder="WhatsApp Number"
          className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-600 outline-none"
        />
        <input
          type="text"
          placeholder="Class (e.g., Class 12)"
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
            href="https://wa.me/917980862920?text=Hey%20Ankit!%20I%20want%20to%20join%20your%20Biology%20course."
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

      {/* 📘 Course Includes */}
      <section className="px-6 md:px-20 py-12 bg-lightbg">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-6">
          What You’ll Learn
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-gray-700">
          {points.map((point, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              • {point}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* 💬 CTA Section */}
      <section className="text-center py-12 bg-green-50 rounded-xl mx-6 md:mx-20 my-16">
        <h2 className="text-3xl font-bold text-green-800 mb-4">
          Ready to Begin Your Journey?
        </h2>
        <p className="text-gray-700 mb-6">
          Join <strong>Ankit Bhattacharya’s</strong> Biology classes and master
          the subject with clarity and confidence.
        </p>
        <p className="text-xl font-semibold text-green-700 mb-6">
          Course Fee: ₹{price}
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href={`https://wa.me/917980862920?text=Hi%20Ankit!%20I'm%20interested%20in%20joining%20the%20${encodeURIComponent(
              title
            )}%20course.`}
            target="_blank"
            className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            Join Now
          </Link>
          <Link
            href="/demo"
            className="border border-green-700 text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
          >
            Watch More Demos
          </Link>
        </div>
      </section>
    </main>
  );
}
