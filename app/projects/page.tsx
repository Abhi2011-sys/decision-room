"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProjectsIndex() {
  const [thumbs, setThumbs] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch("/api/thumbnails")
      .then((r) => r.json())
      .then((data) => setThumbs(data));
  }, []);

  const projects = [
    {
      folder: "sales",
      title: "Sales Data Analysis",
      desc: "Trend analysis, forecasting & revenue insights.",
      path: "/projects/sales",
    },
    {
      folder: "ecommerce",
      title: "E-commerce Analytics",
      desc: "Customer behavior, RFM, product demand patterns.",
      path: "/projects/ecommerce",
    },
    {
      folder: "hr",
      title: "HR Analytics",
      desc: "Employee performance, attrition, workforce insights.",
      path: "/projects/hr",
    },
    {
      folder: "supermarket",
      title: "Supermarket Sales Analysis",
      desc: "Branch performance, customer patterns, gross income trends.",
      path: "/projects/supermarket",
    },
    {
      folder: "titanic",
      title: "Titanic EDA",
      desc: "Survival factors, class/gender patterns, predictive insights.",
      path: "/projects/titanic",
    },
    {
      folder: "COVID-19-Data-Analytics-Project-main",
      title: "COVID-19 Data Analytics",
      desc: "Global cases, spread curves, fatality insights.",
      path: "/projects/COVID-19-Data-Analytics-Project-main",
    },
  ];

  return (
    <main className="px-6 py-16 max-w-6xl mx-auto text-white">
      <h1 className="text-4xl font-bold text-center mb-10">My Data Projects</h1>

      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
        A portfolio of real analytics projects with dashboards, notebooks,
        datasets, and insights.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              href={proj.path}
              className="block border border-gray-800 rounded-2xl hover:border-white transition p-3 bg-black/20 backdrop-blur-sm"
            >
              {/* THUMBNAIL */}
              <div className="rounded-xl overflow-hidden w-full h-40 mb-4 border border-gray-700 relative">
                {thumbs[proj.folder] ? (
                  <img
                    src={thumbs[proj.folder]}
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-900 animate-pulse" />
                )}
              </div>

              {/* TEXT */}
              <h2 className="text-xl font-semibold mb-2">{proj.title}</h2>
              <p className="text-gray-400 text-sm mb-3">{proj.desc}</p>
              <span className="text-blue-400 text-sm font-medium">
                View project →
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
