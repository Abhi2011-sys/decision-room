"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HRCaseStudy() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold"
        >
          HR Analytics – Employee Attrition & Performance Insights
        </motion.h1>

        <p className="text-gray-400 mt-4 text-lg">
          A structured HR dataset analyzed to understand attrition patterns,
          identify key churn drivers, and help leadership plan better workforce strategies.
        </p>

        {/* PROBLEM */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Business Problem</h2>
          <p className="text-gray-400">
            The organization struggled with high employee turnover in certain departments.
            Leadership needed clarity on what factors were influencing exit decisions.
          </p>
        </section>

        {/* APPROACH */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Approach</h2>
          <ul className="text-gray-300 space-y-2 list-disc list-inside">
            <li>Performed EDA on employee demographics, performance, and tenure</li>
            <li>Created attrition risk scoring model (logistic regression)</li>
            <li>Analyzed job satisfaction and role-level patterns</li>
            <li>Built interactive Power BI dashboards for HR leaders</li>
            <li>Suggested actionable retention strategies</li>
          </ul>
        </section>

        {/* INSIGHTS */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Key Insights</h2>
          <ul className="text-gray-300 space-y-2 list-disc list-inside">
            <li>Employees with low job satisfaction were 3.2× more likely to leave</li>
            <li>Work-life imbalance was a major churn driver in mid-level roles</li>
            <li>Higher-performing teams experienced lower attrition rates</li>
            <li>Tenure < 1 year had the highest exit probability</li>
          </ul>
        </section>

        {/* IMPACT */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Business Impact</h2>
          <p className="text-gray-400">
            Helped HR identify high-risk segments, refine recruitment planning,
            and implement retention strategies reducing predicted churn by 12–18%.
          </p>
        </section>

        {/* TOOLS */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-3">Tools Used</h2>
          <div className="flex flex-wrap gap-3">
            {["Power BI", "Excel", "Python", "Logistic Regression"].map(tool => (
              <span key={tool} className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm">
                {tool}
              </span>
            ))}
          </div>
        </section>

        <Link href="/case-studies">
          <button className="mt-12 px-6 py-2 border border-gray-600 rounded-full hover:border-white transition">
            ← Back to Case Studies
          </button>
        </Link>
      </div>
    </main>
  );
}
