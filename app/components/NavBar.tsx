"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full flex justify-between items-center py-6 text-sm">
      <Link href="/" className="text-white font-medium">
        Decision Room
      </Link>

      <div className="flex gap-6 text-gray-400">
        <Link href="/cases" className="hover:text-white transition">
          Cases
        </Link>
        <Link href="/simulator" className="hover:text-white transition">
          Simulator
        </Link>
        <a
          href="mailto:your@email.com"
          className="hover:text-white transition"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
