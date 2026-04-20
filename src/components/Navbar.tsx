"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = ["Home", "About", "Education", "Experience", "Projects", "Blog", "Contact"];

  if (!mounted) {
    return <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto h-[80px]"></nav>; // লেআউট শিফট এড়াতে
  }

  return (
    <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto h-[80px]">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
        Port<span className="text-primary">folio</span>
      </Link>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-900 dark:text-white">
        {navLinks.map((link) => (
          <Link key={link} href={`/#${link.toLowerCase()}`} className="hover:text-primary transition-colors">
            {link}
          </Link>
        ))}
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-primary hover:scale-110 transition-transform"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? <BsSun size={18} /> : <BsMoonStars size={18} />}
        </button>

        {/* Download CV */}
        <a
          href="/resume.pdf"
          download
          className="flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors"
        >
          <span>Download CV</span>
          <FiDownload />
        </a>
      </div>
    </nav>
  );
}