"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";

type Decision = "ACT" | "WAIT" | "KILL";

const scenarios = [
  {
    title: "Scale Marketing in Jaipur?",
    context:
      "A D2C skincare brand sees rising demand in Jaipur, but margins are under pressure.",
    signals: [
      "Google Trends up 2.3× in 90 days",
      "CAC increased by 18%",
      "Repeat rate steady at 32%",
      "Inventory constrained for 6 weeks",
    ],
    reasoning: {
      ACT: "Momentum is strong and delaying could allow competitors to capture demand.",
      WAIT:
        "Demand exists, but CAC and supply constraints make scaling risky right now.",
      KILL:
        "Scaling without fixing execution risks long-term brand damage.",
    },
    myDecision: "WAIT",
    myLogic:
      "WAIT preserves upside while fixing CAC and inventory. Acting now increases burn without improving ROI.",
  },
  {
    title: "Launch Premium Serum Variant?",
    context:
      "A niacinamide serum performs strongly among high-LTV Tier-1 customers.",
    signals: [
      "Top 20% users generate 48% revenue",
      "Price sensitivity low in Tier-1",
      "Manufacturing cost +22%",
      "Brand awareness still mid-level",
    ],
    reasoning: {
      ACT:
        "High-LTV users justify a controlled premium launch without mass rollout.",
      WAIT:
        "Brand pull may not yet support premium positioning at scale.",
      KILL:
        "Premium launch could confuse value-focused users.",
    },
    myDecision: "ACT",
    myLogic:
      "ACT allows targeted premium testing to maximize LTV without brand dilution.",
  },
  {
    title: "Enter Quick Commerce (10-min delivery)?",
    context:
      "Competitors are moving to Blinkit and Zepto for faster delivery.",
    signals: [
      "Demand spikes during flash sales",
      "Margins drop 12–15%",
      "Returns increase 9%",
      "Brand visibility improves",
    ],
    reasoning: {
      ACT: "Speed and visibility could unlock new demand pools.",
      WAIT:
        "Pilot in one city to validate economics before full commitment.",
      KILL:
        "Quick commerce undermines premium brand positioning.",
    },
    myDecision: "WAIT",
    myLogic:
      "WAIT enables learning without permanent margin damage or brand erosion.",
  },
];

export default function DecisionSimulator() {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<Decision | null>(null);
  const [recruiterMode, setRecruiterMode] = useState(false);

  const scenario = scenarios[index];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 max-w-4xl mx-auto">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-4"
      >
        Executive Decision Simulator
      </motion.h1>

      <p className="text-gray-400 mb-10">
        There are no right answers — only better reasoning.
      </p>

      {/* Recruiter Mode */}
      <div className="flex items-center gap-3 mb-8">
        <input
          type="checkbox"
          checked={recruiterMode}
          onChange={() => setRecruiterMode(!recruiterMode)}
        />
        <span className="text-sm text-gray-400">
          Recruiter Mode (show my preferred decision)
        </span>
      </div>

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
        {(["ACT", "WAIT", "KILL"] as Decision[]).map((action) => (
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

          <p className="text-gray-300 text-sm mb-4">
            <b>Executive reasoning:</b>{" "}
            {scenario.reasoning[choice]}
          </p>

          {recruiterMode && (
            <>
              <p className="text-sm text-gray-400">
                My decision: <b>{scenario.myDecision}</b>
              </p>
              <p className="text-gray-300 text-sm mt-2">
                {scenario.myLogic}
              </p>
            </>
          )}
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
          ← Previous
        </button>

        <button
          disabled={index === scenarios.length - 1}
          onClick={() => {
            setChoice(null);
            setIndex(index + 1);
          }}
          className="text-sm text-gray-400 hover:text-white disabled:opacity-30"
        >
          Next →
          <p className="text-xs text-gray-500 mb-3">
  Choose the action you would take as the decision owner.
</p>

        </button>
      </div>
      <NavBar />
    </main>
  );
}
