"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const experiences = [
  {
    company: "Olrice (D2C Skincare Brand)",
    role: "Data Analyst / Business Analyst",
    duration: "Nov 2023 – Present",
    highlights: [
      "Analyzed sales, marketing, and customer data to guide growth decisions",
      "Evaluated Jaipur & Tier-2 expansion using demand, CAC, and margin signals",
      "Built dashboards for leadership covering revenue, funnels, and cohorts",
      "Influenced decisions on marketing scale, inventory planning, and pricing",
    ],
  },
  {
    company: "Differ Home (Real Estate Analytics)",
    role: "Data Analyst Intern",
    duration: "Apr 2023 – Oct 2023",
    highlights: [
      "Analyzed 10+ years of property price data across micro-markets",
      "Recommended broker commission strategy based on ROI simulations",
      "Identified underpriced zones using trend and variance analysis",
      "Supported leadership with data-backed negotiation insights",
    ],
  },
  {
    company: "Conskid",
    role: "Data Analyst Intern",
    duration: "Sep 2022 – Mar 2023",
    highlights: [
      "Worked on sales & user data to identify growth opportunities",
      "Built Power BI dashboards for internal reporting",
      "Performed EDA on customer behavior datasets",
      "Helped improve reporting accuracy and visibility",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-semibold">Experience</h1>
          <p className="mt-3 text-gray-400 text-lg">
            Where data met real business decisions.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border border-gray-800 rounded-2xl p-6"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h2 className="text-2xl font-semibold">{exp.company}</h2>
                <p className="text-sm text-gray-500 mt-1 md:mt-0">
                  {exp.duration}
                </p>
              </div>

              <p className="mt-2 text-gray-400 font-medium">
                {exp.role}
              </p>

              <ul className="mt-4 list-disc list-inside text-sm text-gray-300 space-y-1">
                {exp.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Back Navigation */}
        <div className="mt-12">
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
