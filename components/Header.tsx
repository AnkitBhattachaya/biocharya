"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Notes", href: "/notes" },
    { name: "Results", href: "/results" },
    { name: "Demo", href: "/demo" },
  ];

  return (
    <motion.header
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO / BRAND */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-green-700 tracking-tight"
        >
          BioCharya
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-green-700"
                  : "text-white hover:text-green-200"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/demo"
            className="ml-4 bg-green-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            Join Now
          </Link>
        </nav>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden focus:outline-none ${
            isScrolled ? "text-gray-700" : "text-white"
          }`}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full"
        >
          <div className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 text-lg font-medium hover:text-green-700 transition"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/demo"
              className="bg-green-700 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-800 transition"
              onClick={() => setMenuOpen(false)}
            >
              Join Now
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
