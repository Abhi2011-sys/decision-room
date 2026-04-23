"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ProjectGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-8">
      {/* Main Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full flex justify-center"
      >
        <div className="relative w-full max-w-4xl h-72 md:h-96 rounded-xl overflow-hidden border border-gray-800">
          <Image
            src={images[active]}
            alt="Chart"
            fill
            className="object-contain p-4"
          />
        </div>
      </motion.div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-3">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`border rounded-lg overflow-hidden ${
              active === index ? "border-white" : "border-gray-700"
            }`}
          >
            <Image
              src={src}
              alt={`thumb-${index}`}
              width={150}
              height={100}
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
