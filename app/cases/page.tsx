"use client";

import { motion } from "framer-motion";

const cases = [
  {
    title: "Should we scale marketing in Jaipur?",
    context:
      "A skincare brand saw rising search demand in Jaipur but had limited marketing budget.",
    signals: [
      "Google Trends showed 2.3× rise in Vitamin C searches",
      "Conversion rate stable but CAC rising",
      "Competitors increasing ad spend",
    ],
    decision: "WAIT",
    rationale:
      "Demand was real, but unit economics were fragile. Scaling would burn cash before supply-side readiness.",
  },
  {
    title: "Which product should launch next?",
    context:
      "Post-success of a rice-based cleanser, the brand had to choose the next SKU.",
    signals: [
      "High repeat rate for cleanser buyers",
      "Search interest in sunscreen > serum",
      "Manufacturing MOQ constraints",
    ],
    decision: "ACT",
    rationale:
      "Sunscreen had higher seasonal pull and better bundling potential with cleanser.",
  },
  {
    title: "Should discounts be increased during sale week?",
    context:
      "Sales plateaued during a major sale event despite traffic spike.",
    signals: [
      "Bounce rate increased on PDP",
      "Cart abandonment up 18%",
      "Competitors already at 40–50% off",
    ],
    decision: "KILL",
    rationale:
      "Deeper discounts would erode brand positioning without fixing conversion bottlenecks.",
  },
];

export default function CasesPage() {
  return (
    <main className="min-h-screen px-6 py-20 max-w-5xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-4"
      >
        Decision Cases
      </motion.h1>

      <p className="text-gray-400 mb-12">
        Real business decisions. Real trade-offs. No hindsight bias.
      </p>

      <div className="space-y-10">
        {cases.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="border border-gray-800 rounded-xl p-6"
          >
            <h2 className="text-2xl font-semibold mb-2">{c.title}</h2>

            <p className="text-sm text-gray-400 mb-4">{c.context}</p>

            <ul className="list-disc list-inside text-sm text-gray-300 mb-4">
              {c.signals.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">
                Decision:
                <span
                  className={`ml-2 px-3 py-1 rounded-full text-xs ${
                    c.decision === "ACT"
                      ? "bg-green-600/20 text-green-400"
                      : c.decision === "WAIT"
                      ? "bg-yellow-600/20 text-yellow-400"
                      : "bg-red-600/20 text-red-400"
                  }`}
                >
                  {c.decision}
                </span>
              </span>
            </div>

            <p className="mt-4 text-sm text-gray-400">
              <span className="font-medium text-gray-300">Why:</span>{" "}
              {c.rationale}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
