"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

type CaseType = {
  id: string;
  type: string;
  title: string;
  context: string;
  signals: string[];
  decision: string;
  color: string;
  reasoning: string[];
};

const cases: CaseType[] = [
  {
    id: "01",
    type: "D2C — Growth Decision",
    title: "Should we scale marketing in a Tier-2 city (Jaipur case)?",
    context:
      "A D2C skincare brand considers aggressive marketing expansion in a Tier-2 market.",
    signals: [
      "📈 Market demand accelerating moderately",
      "💰 Profit margins under pressure",
      "😊 Negative customer sentiment increasing",
      "🚨 Operational risk elevated",
    ],
    decision: "DO NOT SCALE",
    color: "text-red-400",
    reasoning: [
      "Demand acceleration is not strong enough",
      "Margins indicate near-term losses",
      "Customer trust signals are deteriorating",
      "Risk outweighs upside at current stage",
    ],
  },
  {
    id: "02",
    type: "D2C — Product Strategy",
    title: "Should we launch a premium serum variant?",
    context:
      "Core niacinamide serum performs strongly among high-LTV Tier-1 users.",
    signals: [
      "📊 Top 20% users generate 48% of revenue",
      "💎 Low price sensitivity in Tier-1 cities",
      "🏭 Manufacturing cost increases by 22%",
      "📣 Brand awareness improving steadily",
    ],
    decision: "ACT — LAUNCH CONTROLLED PILOT",
    color: "text-green-400",
    reasoning: [
      "High-LTV users justify premium experimentation",
      "Pilot limits downside while testing demand",
      "Pricing power exists in Tier-1 segment",
      "Brand positioning can be strengthened",
    ],
  },
  {
    id: "03",
    type: "D2C — Channel Strategy",
    title: "Should we enter quick commerce (10-minute delivery)?",
    context:
      "Competitors are expanding aggressively on Blinkit and Zepto.",
    signals: [
      "⚡ Demand spikes during flash sales",
      "📉 Margins drop 12–15%",
      "🔄 Return rates increase by 9%",
      "👀 Brand visibility improves short term",
    ],
    decision: "WAIT — RUN LIMITED EXPERIMENT",
    color: "text-yellow-400",
    reasoning: [
      "Economics not proven at scale",
      "Brand positioning risk exists",
      "Learning is valuable before commitment",
      "Pilot approach preserves optionality",
    ],
  },
  {
    id: "04",
    type: "D2C — Pricing Decision",
    title: "Should we increase prices by 10%?",
    context:
      "Input costs have risen and margins are shrinking across SKUs.",
    signals: [
      "📈 Demand remains stable after small price tests",
      "📉 Price elasticity low for top SKUs",
      "💰 Gross margins compressed by 6%",
      "🧠 Competitors quietly raising prices",
    ],
    decision: "ACT — GRADUAL PRICE INCREASE",
    color: "text-green-400",
    reasoning: [
      "Low elasticity supports price adjustment",
      "Gradual rollout minimizes churn risk",
      "Protects margins without brand shock",
      "Competitive landscape allows move",
    ],
  },
  {
    id: "05",
    type: "D2C — Retention Strategy",
    title: "Should we double down on retention campaigns?",
    context:
      "New user acquisition is slowing, but repeat purchase behavior is strong.",
    signals: [
      "🔁 Repeat rate above industry average",
      "📊 LTV increases sharply after 3rd order",
      "💸 Retention CAC lower than acquisition CAC",
      "📉 Acquisition efficiency declining",
    ],
    decision: "ACT — INVEST IN RETENTION",
    color: "text-green-400",
    reasoning: [
      "Higher ROI than new acquisition",
      "Retention compounds long-term value",
      "Improves predictability of revenue",
      "Reduces dependency on paid channels",
    ],
  },
  {
    id: "06",
    type: "D2C — Expansion Risk",
    title: "Should we expand into Tier-3 markets?",
    context:
      "Leadership considers geographic expansion to unlock new growth.",
    signals: [
      "📦 Logistics costs significantly higher",
      "📉 Lower average order value",
      "📊 Demand signals unclear",
      "🚨 Support and return risk elevated",
    ],
    decision: "KILL — DO NOT EXPAND",
    color: "text-red-400",
    reasoning: [
      "Unit economics unattractive",
      "Operational complexity too high",
      "Management focus better used elsewhere",
      "Downside risk outweighs learning",
    ],
  },
  {
    id: "07",
    type: "Fintech — Credit Risk",
    title: "Should we increase credit limits for mid-tier users?",
    context:
      "A fintech platform considers raising credit limits to drive transaction volume.",
    signals: [
      "📊 Default rates stable for top-tier users",
      "⚠️ Mid-tier users show higher delinquency",
      "💳 Higher limits increase transaction volume",
      "📉 Recovery rates weaken at higher exposure",
    ],
    decision: "WAIT — IMPROVE SEGMENTATION FIRST",
    color: "text-yellow-400",
    reasoning: [
      "Risk uneven across user segments",
      "Recovery performance limits upside",
      "Better segmentation reduces downside",
      "Capital protection prioritized",
    ],
  },
  {
    id: "08",
    type: "SaaS — Product Growth",
    title: "Should we remove the free tier to improve revenue?",
    context:
      "A SaaS company debates removing its free tier to push paid conversions.",
    signals: [
      "📈 Free users convert at low rates",
      "💰 Paid users show strong retention",
      "📉 Churn spikes after pricing changes",
      "🧠 Free tier drives top-of-funnel growth",
    ],
    decision: "WAIT — RESTRUCTURE FREE TIER",
    color: "text-yellow-400",
    reasoning: [
      "Free tier supports acquisition",
      "Removal risks funnel collapse",
      "Restructuring balances cost and growth",
      "Protects long-term revenue engine",
    ],
  },
];

export default function CasesPage() {
  const [openCases, setOpenCases] = useState<string[]>([]);

  const toggleCase = (id: string) => {
    setOpenCases((prev) =>
      prev.includes(id)
        ? prev.filter((c) => c !== id)
        : [...prev, id]
    );
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-10">
      <NavBar />

      <div className="max-w-4xl mx-auto py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-semibold">Decision Cases</h1>
          <p className="mt-3 text-gray-400 text-lg">
            Domain-agnostic decision making across growth, pricing, retention, and risk.
          </p>
        </motion.div>

        <div className="mt-12 space-y-10">
          {cases.map((c) => (
            <div
              key={c.id}
              className="border border-gray-700 rounded-2xl p-6"
            >
              <span className="inline-block mb-2 text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300">
                {c.type}
              </span>

              <h2 className="text-2xl font-semibold">{c.title}</h2>

              <p className="mt-3 text-gray-400">{c.context}</p>

              <div className="mt-6 space-y-2 text-sm text-gray-300">
                {c.signals.map((s, i) => (
                  <p key={i}>{s}</p>
                ))}
              </div>

              <button
                onClick={() => toggleCase(c.id)}
                className="mt-6 px-5 py-2 rounded-xl border border-gray-600 hover:border-white transition"
              >
                {openCases.includes(c.id)
                  ? "Hide Executive Decision"
                  : "View Executive Decision →"}
              </button>

              {openCases.includes(c.id) && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 border-t border-gray-700 pt-6"
                >
                  <span className="inline-block mb-2 text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-300">
                    FINAL DECISION
                  </span>

                  <h3 className={`text-xl font-semibold ${c.color}`}>
                    {c.decision}
                  </h3>

                  <ul className="mt-4 list-disc list-inside text-gray-400 text-sm space-y-1">
                    {c.reasoning.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
