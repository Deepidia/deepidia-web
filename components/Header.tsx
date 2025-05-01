"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-10 py-3 flex items-center justify-between bg-white shadow-md fixed top-0 z-50">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 text-[#1D1D1D] font-bold">
        <Link href="#solutions" className="hover:text-[#00BFA6] transition">
          Solutions
        </Link>
        <Link href="#about" className="hover:text-[#00BFA6] transition">
          About
        </Link>
        <Link href="#pricing" className="hover:text-[#00BFA6] transition">
          Pricing
        </Link>
      </nav>

      {/* Logo */}
      <Link href="/">
        <Image src="/Logo.png" alt="Logo DeepIdia" width={40} height={30} />
      </Link>

      {/* Actions */}
      <div className="hidden md:flex items-center space-x-4">
        <Link
          href="/login"
          className="text-[#1D1D1D] hover:text-[#00BFA6] transition font-bold"
        >
          Sign In
        </Link>
        <Link href="/generator">
          <button className="bg-[#1D1D1D] text-[#00EFD0] font-bold text-lg px-7 py-2 rounded-xl border-2 border-[#00EFD0] shadow-md hover:bg-[#00EFD0] hover:text-[#1D1D1D] hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer">
            Try for free
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link
            href="#solutions"
            className="hover:text-[#00BFA6] transition"
            onClick={() => setIsOpen(false)}
          >
            Solutions
          </Link>
          <Link
            href="#about"
            className="hover:text-[#00BFA6] transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#pricing"
            className="hover:text-[#00BFA6] transition"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link
            href="/login"
            className="hover:text-[#00BFA6] transition"
            onClick={() => setIsOpen(false)}
          >
            Sign In
          </Link>

          <Link href="/">
            <button
              className="bg-[#1D1D1D] text-[#00EFD0] font-bold text-lg px-7 py-2 rounded-xl border-2 border-[#00EFD0] shadow-md hover:shadow-lg transition cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Try for free
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
