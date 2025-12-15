"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import NavBar from "./components/NavBar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-10">
      {/* NAVBAR */}
      <NavBar />

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            I build systems that
            <br />
            <span className="text-gray-400">
              turn data into decisions
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Data Analyst with strong product and business judgment.
            I focus on helping teams decide when to ACT, WAIT, or KILL —
            not just what the numbers say.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cases">
              <button className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-200 hover:-translate-y-0.5 transition">
                View Decision Cases →
              </button>
            </Link>

            <Link href="/simulator">
              <button className="px-8 py-3 rounded-full border border-gray-600 hover:border-white hover:-translate-y-0.5 transition">
                Try Decision Simulator →
              </button>
            </Link>
          </div>

          <p className="mt-10 text-sm text-gray-600">
            Built by Abhishek • Decision Intelligence Portfolio
          </p>
        </motion.div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="max-w-4xl mx-auto pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">
            Why this is different
          </h2>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li>
              • Most portfolios show dashboards. This one shows decisions.
            </li>
            <li>
              • I focus on trade-offs, risk, and timing — not vanity metrics.
            </li>
            <li>
              • Every project answers a real business question.
            </li>
            <li>
              • You can simulate how I think, not just read about it.
            </li>
          </ul>
        </motion.div>
      </section>
    </main>
  );
}
