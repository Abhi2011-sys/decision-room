"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Decision = "ACT" | "WAIT" | "KILL";

/* =========================
   Decision Quality Logic
========================= */
function evaluateDecision(
  userChoice: Decision,
  preferred: Decision
) {
  if (userChoice === preferred) {
    return {
      score: 92,
      feedback:
        "Strong alignment with key signals and risk profile. This decision balances upside with execution readiness.",
    };
  }

  if (
    (preferred === "WAIT" && userChoice === "ACT") ||
    (preferred === "ACT" && userChoice === "WAIT")
  ) {
    return {
      score: 68,
      feedback:
        "You identified opportunity, but timing and execution risks may be underestimated.",
    };
  }

  return {
    score: 48,
    feedback:
      "This decision prioritizes conviction over signal balance, increasing downside exposure.",
  };
}

/* =========================
   Scenarios
========================= */
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
    preferredDecision: "WAIT" as Decision,
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
    preferredDecision: "ACT" as Decision,
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
    context: "Competitors are moving to Blinkit / Zepto.",
    signals: [
      "Demand spikes during flash sales",
      "Margins drop by 12–15%",
      "Returns increase 9%",
      "Brand visibility improves",
    ],
    preferredDecision: "WAIT" as Decision,
    reasoning: {
      ACT: "Speed and visibility could unlock new demand pools.",
      WAIT:
        "Pilot in one city to validate economics before committing.",
      KILL:
        "Quick commerce undermines premium brand positioning.",
    },
    myLogic:
      "WAIT allows learning without permanent margin damage. Speed is valuable, but brand equity is harder to rebuild.",
  },
];

/* =========================
   Component
========================= */
export default function DecisionSimulator() {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<Decision | null>(null);
  const [recruiterMode, setRecruiterMode] = useState(false);
  const [score, setScore] = useState<{
    score: number;
    feedback: string;
  } | null>(null);

  const scenario = scenarios[index];

  return (
    <main className="min-h-screen px-6 py-20 max-w-4xl mx-auto">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-4"
      >
        Executive Decision Simulator
      </motion.h1>

      <p className="text-gray-400 mb-8">
        Real business trade-offs. No right answers. Only reasoning.
      </p>

      {/* Recruiter Mode */}
      <div className="flex items-center gap-3 mb-10">
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
          {scenario.signals.map((signal, i) => (
            <li key={i}>{signal}</li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="flex gap-4 mb-6">
        {(["ACT", "WAIT", "KILL"] as Decision[]).map((action) => (
          <button
            key={action}
            onClick={() => {
              setChoice(action);
              setScore(
                evaluateDecision(
                  action,
                  scenario.preferredDecision
                )
              );
            }}
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

          <p className="text-gray-300 text-sm mb-3">
            <b>Executive reasoning:</b>{" "}
            {scenario.reasoning[choice]}
          </p>

          {/* Score */}
          {score && (
            <div className="mt-6 border-t border-gray-700 pt-4">
              <p className="text-sm text-gray-400 mb-1">
                Decision Quality Score
              </p>

              <div className="flex items-center gap-3">
                <span className="text-3xl font-semibold">
                  {score.score}
                </span>
                <span className="text-sm text-gray-400">
                  / 100
                </span>
              </div>

              <p className="mt-2 text-sm text-gray-300">
                {score.feedback}
              </p>
            </div>
          )}

          {/* Recruiter Mode Insight */}
          {recruiterMode && (
            <div className="mt-6 text-sm text-gray-400">
              <p className="mb-1">
                <b>My preferred decision:</b>{" "}
                {scenario.preferredDecision}
              </p>
              <p>{scenario.myLogic}</p>
            </div>
          )}
        </motion.div>
      )}

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          disabled={index === 0}
          onClick={() => {
            setChoice(null);
            setScore(null);
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
            setScore(null);
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
