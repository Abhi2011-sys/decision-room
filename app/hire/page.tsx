"use client";

import { motion } from "framer-motion";

export default function HireMe() {
  return (
    <main className="min-h-screen px-6 py-20 max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6"
      >
        Why Hire Me
      </motion.h1>

      <p className="text-gray-400 mb-12">
        Not a resume. A value proposition.
      </p>

      {/* Section 1 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          I don’t just analyze data. I make decisions with it.
        </h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          Most candidates stop at dashboards or models. I go one step further —
          translating signals into clear ACT / WAIT / KILL decisions, with
          explicit trade-offs.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          What I bring to your team
        </h2>

        <ul className="list-disc list-inside text-gray-300 text-sm space-y-2">
          <li>Structured decision-making under uncertainty</li>
          <li>Strong product + business intuition (not just metrics)</li>
          <li>Ability to explain “why”, not just “what”</li>
          <li>Ownership mindset — from idea → execution → deployment</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-3">
          Why I’m worth 12–15 LPA
        </h2>

        <p className="text-gray-300 text-sm leading-relaxed mb-4">
          Compensation should reflect impact, not years. I bring the thinking
          maturity of someone who can support leadership decisions, reduce bad
          bets, and improve execution quality.
        </p>

        <p className="text-gray-300 text-sm leading-relaxed">
          You’re not hiring a fresher analyst. You’re hiring a decision partner
          who can grow into leadership.
        </p>
      </section>

      {/* CTA */}
      <section className="border border-gray-800 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-2">
          If this resonates
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          Explore my decision cases or reach out for a conversation.
        </p>

        <div className="flex gap-4">
          <a
            href="/cases"
            className="px-5 py-2 rounded-full border border-gray-700 text-sm hover:bg-white hover:text-black transition"
          >
            View Decision Cases
          </a>
          <a
            href="mailto:your@email.com"
            className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:opacity-90"
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}
