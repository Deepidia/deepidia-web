"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="bg-white">
      <section className="text-center py-12 px-4 md:py-20">
        {/* Logo */}
        <div className="flex justify-center mb-6 mt-10">
          <Image
            src="/Logo.png"
            alt="Logo DeepIdea"
            width={140}
            height={140}
            className="rounded-lg w-[140px] h-auto md:w-[180px]" // Responsif
          />
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold italic text-black mb-4 leading-snug">
          Find your best Idea from the best
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-xl text-black max-w-5xl mx-auto mb-8 leading-relaxed px-2">
          DeepIdea is an innovative AI-driven platform designed to help users
          discover and generate high-quality, creative ideas efficiently. It
          leverages cutting-edge AI and an advanced agentic system, enhancing
          user experience and ensuring that the ideas provided are relevant,
          actionable, and trend-aligned.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/generator">
            <button className="bg-[#1D1D1D] text-[#00EFD0] font-bold text-base sm:text-lg px-6 py-2 rounded-xl border-2 border-[#00EFD0] shadow-md hover:bg-[#00EFD0] hover:text-[#1D1D1D] hover:shadow-lg transition-all duration-300 ease-in-out">
              Try for free
            </button>
          </Link>
          <button className="text-[#1D1D1D] font-medium sm:font-semibold hover:underline transition duration-200">
            Watch Demo
          </button>
        </div>
      </section>

      <section className="bg-[url('/bg-dot.png')] bg-repeat py-16">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mx-auto text-center">
            <h2 className="text-[#000000] text-2xl md:text-3xl font-bold mb-4">
              Find Your Cool Inspiration with Playbook
            </h2>
            <p className="text-[#000000] max-w-xl mx-auto m-2 text-xl">
              You can find your cool ideas with just one click and according to
              the Niche and topic fields you choose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="border rounded-lg p-6 m-4 text-left bg-white shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-black">
                Generate Idea
              </h3>
              <p className="text-gray-600 mb-4">
                Instantly generate ideas to overcome creative blocks or quickly
                kickstart new projects.
              </p>
              <button className="border border-black px-4 py-1 rounded text-black hover:bg-black hover:text-white transition cursor-pointer">
                Get Demo
              </button>
            </div>

            {/* Card 2 */}
            <div className="border rounded-lg p-6 m-4 text-left bg-white shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-black">
                Content Creation
              </h3>
              <p className="text-gray-600 mb-4">
                Directly connects generated ideas to spreadsheets for
                streamlined content management.
              </p>
              <button className="border border-black px-4 py-1 rounded text-black hover:bg-black hover:text-white transition cursor-pointer">
                Get Demo
              </button>
            </div>

            {/* Card 3 */}
            <div className="border rounded-lg p-6 m-4 text-left bg-white shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2 text-black">
                Blog Post
              </h3>
              <p className="text-gray-600 mb-4">
                Seamlessly connect and publish your ideas directly to Medium or
                other markdown-supported blog platforms.
              </p>
              <button className="border border-black px-4 py-1 rounded text-black hover:bg-black hover:text-white transition cursor-pointer">
                Get Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
