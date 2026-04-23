"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CaseStudiesPage() {
  const studies = [
    {
      title: "Sales Data Analysis – Improving Forecast Accuracy",
      company: "Independent Project",
      summary:
        "Analyzed multi-year sales data, identified seasonal patterns, improved forecasting accuracy, and highlighted high-performing product segments.",
      skills: ["Power BI", "Excel", "Python", "Time Series"],
      link: "/projects/sales",
    },
    {
      title: "E-commerce Data Strategy – Conversion & Inventory Optimization",
      company: "Independent Project",
      summary:
        "Performed customer segmentation, funnel drop-off analysis, and demand clustering. Improved conversion rate and optimized inventory.",
      skills: ["Python", "SQL", "RFM", "Segmentation"],
      link: "/projects/ecommerce",
    },
    {
      title: "HR Analytics – Reducing Employee Attrition",
      company: "Independent Project",
      summary:
        "Identified key attrition drivers, improved HR reporting, built dashboards, and supported strategic retention planning.",
      skills: ["Power BI", "Logistic Regression", "Excel"],
      link: "/projects/hr",
    },
    {
      title: "Supermarket Sales Analysis – Category Optimization",
      company: "Independent Project",
      summary:
        "Analyzed product category performance, pricing behavior, and customer buying patterns to improve store-level profitability.",
      skills: ["Excel", "Power BI", "Visualization"],
      link: "/projects/supermarket",
    },
    {
      title: "Titanic Dataset — Exploratory Data Analysis",
      company: "Independent Project",
      summary:
        "Performed structured EDA to understand survival factors and strengthened foundational data storytelling.",
      skills: ["Pandas", "Matplotlib", "EDA"],
      link: "/projects/titanic",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-semibold mb-4"
        >
          Case Studies
        </motion.h1>

        <p className="text-gray-400 mb-10 text-lg">
          Deep dives into real data projects where I combined analytics,
          business sense, and decision-making to drive insights.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {studies.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="border border-gray-800 rounded-xl p-6 hover:border-gray-600 transition"
            >
              <h2 className="text-xl font-semibold">{study.title}</h2>
              <p className="text-gray-400 text-sm mt-1">{study.company}</p>

              <p className="text-gray-300 text-sm mt-3">{study.summary}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {study.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs bg-gray-800 rounded-full text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <Link href={study.link}>
                <button className="mt-5 px-4 py-2 border border-gray-600 rounded-full text-sm hover:border-white transition">
                  Read Case Study →
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
