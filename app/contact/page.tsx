"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-gray-400 mb-10 text-lg">
          Whether you're a recruiter, hiring manager, or collaborator —
          feel free to reach out. I usually reply within a few hours.
        </p>

        {/* Contact Cards */}
        <div className="space-y-6">
          {/* EMAIL */}
          <div className="p-6 border border-gray-800 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p className="text-gray-400 mb-3">saloraabhishek@gmail.com</p>
            <a
              href="mailto:saloraabhishek@gmail.com"
              className="text-blue-400 hover:underline"
            >
              Send Email →
            </a>
          </div>

          {/* LINKEDIN */}
          <div className="p-6 border border-gray-800 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">LinkedIn</h2>
            <p className="text-gray-400 mb-3">Professional Profile</p>
            <a
              href="https://www.linkedin.com/in/abhishek-salora-390439199"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              Visit LinkedIn →
            </a>
          </div>

          {/* WHATSAPP */}
          <div className="p-6 border border-gray-800 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">WhatsApp</h2>
            <p className="text-gray-400 mb-3">Message me directly</p>
            <a
              href="https://wa.me/91935246599"
              target="_blank"
              className="text-green-400 hover:underline"
            >
              Chat on WhatsApp →
            </a>
          </div>

          {/* RESUME DOWNLOAD */}
          <div className="p-6 border border-gray-800 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">Resume</h2>
            <p className="text-gray-400 mb-3">Download my updated resume</p>
            <a
              href="/resume.pdf"
              download
              className="inline-block px-5 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
            >
              Download Resume →
            </a>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
