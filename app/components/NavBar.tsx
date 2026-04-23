"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `transition ${
      pathname === path
        ? "text-white"
        : "text-gray-400 hover:text-white"
    }`;

  return (
    <nav className="w-full flex justify-between items-center py-6 text-sm">
      {/* Logo / Name */}
      <Link href="/" className="text-white font-medium">
        Decision Room
      </Link>

      {/* Navigation Links */}
     <div className="flex gap-6">
  <Link href="/" className={linkClass("/")}>
    Home
  </Link>

  <Link href="/experience" className={linkClass("/experience")}>
    Experience
  </Link>

  <Link href="/projects" className={linkClass("/projects")}>
    Projects
  </Link>

  <Link href="/cases" className={linkClass("/cases")}>
    Cases
  </Link>

  <Link href="/simulator" className={linkClass("/simulator")}>
    Simulator
  </Link>

  <Link href="/credentials" className={linkClass("/credentials")}>
    Credentials
  </Link>
  <Link href="/contact" className={linkClass("/contact")}>
  Contact
  </Link><Link href="/resume" className={linkClass("/resume")}>
  Resume
  </Link>
</div>
    </nav>
  );
}