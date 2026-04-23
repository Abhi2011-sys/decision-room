"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const certificates = [
  {
    title: "Accenture North America – Data Analytics Job Simulation",
    issuer: "Accenture (Forage)",
    file: "/certificates/accenture.pdf",
  },
  {
    title: "Strategy Consulting Job Simulation",
    issuer: "Boston Consulting Group",
    file: "/certificates/bcg-strategy-1.pdf",
  },
  {
    title: "Data Science Job Simulation",
    issuer: "Boston Consulting Group",
    file: "/certificates/bcg-strategy-2.pdf",
  },
  {
    title: "GenAI Job Simulation",
    issuer: "Boston Consulting Group",
    file: "/certificates/bcg-analytics.pdf",
  },
  {
    title: "Creative Designing in Power BI",
    issuer: "Coursera",
    file: "/certificates/powerbi.pdf",
  },
  {
    title: "Deploy and Maintain Power BI Assets and Capstoneproject",
    issuer: "Coursera",
    file: "/certificates/excel.pdf",
  },
  {
    title: "Data Analysis and Visualization with Power BI",
    issuer: "Coursera",
    file: "/certificates/sql.pdf",
  },
  {
    title: "Extract, Transform and Load Data in Power BI",
    issuer: "Coursera",
    file: "/certificates/google.pdf",
  },
  {
    title: "Harnessing the Power of Data with Power BI",
    issuer: "Coursera",
    file: "/certificates/Coursera.pdf",
  },
  {
    title: "Preparing Data for Analysis with Microsoft Excel",
    issuer: "Coursera",
    file: "/certificates/11.pdf",
  },
  {
    title: "Data Modeling in Power BI",
    issuer: "Coursera",
    file: "/certificates/12.pdf",
  },
];

export default function CredentialsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-2"
      >
        Credentials & Certifications
      </motion.h1>

      <p className="text-gray-400 mb-12 text-lg">
        A curated record of my professional learning, achievements, and verified certifications.
      </p>

      {/* CERTIFICATE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="border border-gray-800 rounded-xl p-6 hover:border-gray-500 transition cursor-pointer bg-black/40"
          >
            <h3 className="font-semibold text-lg">{cert.title}</h3>
            <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>

            <Link href={cert.file} target="_blank">
              <button className="mt-4 px-4 py-2 rounded-full border border-gray-600 hover:border-white text-sm transition">
                View Certificate →
              </button>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* RESUME DOWNLOAD */}
      <div className="mt-16 text-center">
        <Link href="/certificates/resume.pdf" target="_blank">
          <button className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition">
            Download My Resume →
          </button>
        </Link>
      </div>
    </main>
  );
}
