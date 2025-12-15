"use client";

import { useState } from "react";
import { motion } from "framer-motion";
<div className="flex items-center gap-3 mb-6">
  <input
    type="checkbox"
    checked={recruiterMode}
    onChange={() => setRecruiterMode(!recruiterMode)}
  />
  <span className="text-sm text-gray-400">
    Recruiter Mode (show my preferred decision)
  </span>
</div>

const scenarios = [
  {
    title: "Scale Marketing in Jaipur?",
    context: "D2C skincare brand sees rising demand but thin margins.",
    signals: [
      "Google Trends up 2.3× in 90 days",
      "CAC increased by 18%",
      "Repeat rate steady at 32%",
      "Inventory constrained for 6 weeks",
    ],
    preferredDecision: "WAIT",
    reasoning: {
      ACT: "Momentum is strong and delay risks losing the market.",
      WAIT:
        "Demand is real, but supply and CAC constraints make scaling premature.",
      KILL:
        "Marketing spend without fulfillment readiness damages brand trust.",
    },
    myLogic:
      "I chose WAIT because it preserves upside while fixing execution bottlenecks. Acting now increases burn without improving long-term ROI.",
  },
  {
    title: "Launch Premium Serum Variant?",
    context: "Existing niacinamide serum performs well in Tier-1 cities.",
    signals: [
      "Top 20% users generate 48% revenue",
      "Price elasticity low in Tier-1",
      "Manufacturing cost +22%",
      "Brand awareness still mid-level",
    ],
    preferredDecision: "ACT",
    reasoning: {
      ACT:
        "High-LTV users justify premium expansion with controlled positioning.",
      WAIT:
        "Brand pull isn’t strong enough yet for mass premium perception.",
      KILL:
        "Premium too early risks confusing value-conscious users.",
    },
    myLogic:
      "I chose ACT because the data supports a targeted premium launch, not mass rollout. This maximizes LTV without brand dilution.",
  },
  {
    title: "Enter Quick Commerce (10-min delivery)?",
    context: "Competitors moving to Blinkit / Zepto.",
    signals: [
      "Demand spikes during flash sales",
      "Margins drop by 12–15%",
      "Returns increase 9%",
      "Brand visibility improves",
    ],
    preferredDecision: "WAIT",
    reasoning: {
      ACT:
        "Speed and visibility could unlock new demand pools.",
      WAIT:
        "Pilot in one city to validate economics before committing.",
      KILL:
        "Quick commerce undermines premium brand positioning.",
    },
    myLogic:
      "WAIT allows learning without permanent margin damage. Speed is valuable, but brand equity is harder to rebuild.",
  },
];

export default function DecisionSimulator() {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<string | null>(null);
  const [recruiterMode, setRecruiterMode] = useState(false);

  const scenario = scenarios[index];

  return (
    <main className="min-h-screen px-6 py-20 max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-4"
      >
        Executive Decision Simulator
      </motion.h1>

      <p className="text-gray-400 mb-10">
        Real business trade-offs. No right answers. Only reasoning.
      </p>

      {/* Scenario */}
      <div className="border border-gray-800 rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          {scenario.title}
        </h2>

        <p className="text-gray-400 text-sm mb-4">
          {scenario.context}
        </p>

        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
          {scenario.signals.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="flex gap-4 mb-6">
        {["ACT", "WAIT", "KILL"].map((action) => (
          <button
            key={action}
            onClick={() => setChoice(action)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition
              ${
                action === "ACT"
                  ? "bg-green-600/20 text-green-400"
                  : action === "WAIT"
                  ? "bg-yellow-600/20 text-yellow-400"
                  : "bg-red-600/20 text-red-400"
              }`}
          >
            {action}
          </button>
        ))}
      </div>

      {/* Explanation */}
      {choice && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border border-gray-800 rounded-xl p-6 mb-8"
        >
          <p className="text-sm text-gray-400 mb-2">
            Your decision: <b>{choice}</b>
          </p>
          <p className="text-gray-300 text-sm">
            <b>Executive Reasoning:</b>{" "}
            {scenario.reasoning[choice as keyof typeof scenario.reasoning]}
          </p>
        </motion.div>
      )}

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          disabled={index === 0}
          onClick={() => {
            setChoice(null);
            setIndex(index - 1);
          }}
          className="text-sm text-gray-400 hover:text-white disabled:opacity-30"
        >
          ← Previous Case
        </button>

        <button
          disabled={index === scenarios.length - 1}
          onClick={() => {
            setChoice(null);
            setIndex(index + 1);
          }}
          className="text-sm text-gray-400 hover:text-white disabled:opacity-30"
        >
          Next Case →
        </button>
      </div>
    </main>
  );
}
