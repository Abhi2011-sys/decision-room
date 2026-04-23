"use client";

import { motion } from "framer-motion";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-4">Resume</h1>
        <p className="text-gray-400 mb-6 text-lg">
          A complete overview of my experience, skills, education, and
          accomplishments.
        </p>

        {/* Download Button */}
        <a
          href="/resume.pdf"
          download
          className="inline-block px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition mb-10"
        >
          Download Resume →
        </a>

        {/* EXPERIENCE */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-3">Experience</h2>

          <div className="space-y-6">

            <div className="p-5 border border-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold">Data Analyst — Olrice.com</h3>
              <p className="text-gray-400 text-sm mb-2">Nov 2023 — Present</p>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Analyzed pricing, ingredients, and competition for new products.</li>
                <li>• Provided insights for new batch formulations and cost optimization.</li>
                <li>• Set pricing strategy for e-commerce channels.</li>
              </ul>
            </div>

            <div className="p-5 border border-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold">Data Analyst Intern — Differ Home</h3>
              <p className="text-gray-400 text-sm mb-2">Apr 2023 — Oct 2023</p>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Analyzed 10-year property rate trends.</li>
                <li>• Provided pricing suggestions for property broker deals.</li>
              </ul>
            </div>

            <div className="p-5 border border-gray-800 rounded-xl">
              <h3 className="text-xl font-semibold">Data Analyst Intern — Conskid</h3>
              <p className="text-gray-400 text-sm mb-2">Sep 2022 — Mar 2023</p>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Created dashboards for student placements & performance.</li>
                <li>• Managed internship applications and analytics.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-3">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Python",
              "SQL",
              "Power BI",
              "Excel",
              "Dashboard Design",
              "Data Cleaning",
              "Data Visualization",
              "Statistical Analysis",
              "ETL Pipelines",
              "Product Analytics",
              "Business Research",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm bg-gray-800 rounded-full text-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* TOOLS */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-3">Tools</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Power BI",
              "Jupyter Notebook",
              "VS Code",
              "Tableau",
              "Notion",
              "Git & GitHub",
              "Firebase",
              "Figma",
            ].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 text-sm bg-gray-800 rounded-full text-gray-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold mb-3">Education</h2>
          <div className="p-5 border border-gray-800 rounded-xl">
            <h3 className="text-xl font-semibold">B.Tech in Computer Science</h3>
            <p className="text-gray-400 text-sm">Completed 2023</p>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-3">Key Certifications</h2>
          <p className="text-gray-400 text-sm mb-4">
            Full certificate list available on the Credentials page.
          </p>
          <ul className="text-gray-300 text-sm space-y-2">
            <li>• Google Data Analytics — Coursera</li>
            <li>• SQL for Data Analysis — Coursera</li>
            <li>• Accenture North America — Job Simulation</li>
            <li>• BCG Strategy & Consulting — Job Simulation</li>
          </ul>
        </section>
      </motion.div>
    </main>
  );
}
