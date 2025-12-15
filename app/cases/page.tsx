"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CasesPage() {
  const [showDecision, setShowDecision] = useState(false);

  return (
    <main className="min-h-screen px-6 py-20 flex justify-center">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-semibold">Decision Cases</h1>
          <p className="mt-3 text-gray-400 text-lg">
            Real business scenarios. Real signals. Real decisions.
          </p>
        </motion.div>

        {/* Case Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 border border-gray-700 rounded-2xl p-6"
        >
          <p className="text-sm text-gray-400 mb-2">Case 01</p>

          <h2 className="text-2xl font-semibold">
            Should we scale marketing in Jaipur?
          </h2>

          <p className="mt-3 text-gray-400">
            A skincare brand is considering aggressive marketing expansion in
            Jaipur. You are responsible for making the final decision.
          </p>

          {/* Signals */}
          <div className="mt-8 space-y-3 text-sm text-gray-300">
            <p>📈 Market Demand: Moderate acceleration detected</p>
            <p>💰 Financial Forecast: Profit margins under pressure</p>
            <p>😊 Customer Sentiment: Increase in negative feedback</p>
            <p>🚨 Risk Exposure: Elevated transaction risk</p>
          </div>

          {/* Reveal Button */}
          {!showDecision && (
            <button
              onClick={() => setShowDecision(true)}
              className="mt-8 px-5 py-2 rounded-xl border border-gray-600 hover:border-white transition"
            >
              View Executive Decision →
            </button>
          )}

          {/* Decision */}
          {showDecision && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-8 border-t border-gray-700 pt-6"
            >
              {/* Final Badge */}
              <span className="inline-block mb-2 text-xs px-3 py-1 rounded-full bg-red-900/40 text-red-400 tracking-wide">
                FINAL DECISION
              </span>

              <h3 className="text-xl font-semibold text-red-400">
                Decision: DO NOT SCALE
              </h3>

              <p className="mt-3 text-gray-300">
                While demand exists, multiple risk signals suggest that scaling
                at this stage would increase downside exposure.
              </p>

              <ul className="mt-4 list-disc list-inside text-gray-400 text-sm space-y-1">
                <li>Demand acceleration is not yet strong</li>
                <li>Profit forecasts indicate margin compression</li>
                <li>Customer trust is deteriorating</li>
                <li>Risk exposure is elevated</li>
              </ul>

              {/* What I'd Watch Next */}
              <div className="mt-6 text-sm text-gray-400">
                <p className="font-medium text-gray-300 mb-2">
                  What I’d monitor before revisiting this decision:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>CAC vs LTV trend (not point values)</li>
                  <li>Repeat purchase rate velocity</li>
                  <li>Sentiment momentum, not absolute sentiment</li>
                  <li>Margin recovery signals post-campaign</li>
                </ul>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
