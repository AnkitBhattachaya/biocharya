"use client";

import { motion } from "framer-motion";

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-lightbg flex flex-col items-center justify-center text-center px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-primary mb-6"
      >
        Join Our Demo Class
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-700 text-lg mb-8 max-w-2xl"
      >
        Experience concept-driven Biology learning with{" "}
        <strong>BioCharya</strong>.  
        Scan the QR below or message us directly to enroll.
      </motion.p>

      <motion.img
        src="/Upi-QR.png"
        alt="Scan to Pay BioCharya"
        className="w-64 h-64 rounded-xl shadow-lg border-4 border-green-200 mb-6 hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      />

      <motion.a
        href="https://wa.me/917980862920?text=Hey%20Ankit,%20I%20want%20to%20enroll%20for%20the%20course.%20How%20can%20I%20pay?"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="inline-block bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md hover:bg-green-700 hover:scale-105 transition-all duration-300"
      >
        🟢 Enroll Now on WhatsApp
      </motion.a>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-gray-500 text-sm mt-6"
      >
        After payment, you’ll receive confirmation and class access via WhatsApp.
      </motion.p>
    </main>
  );
}
