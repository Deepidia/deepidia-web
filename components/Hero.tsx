"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main>
      <section className="text-center py-16 px-4">
        {/* Logo */}
        <div className="flex justify-center mb-6 mt-16">
          <Image
            src="/Logo.png"
            alt="Logo DeepIdea"
            width={80}
            height={80}
            className="rounded-lg"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-4xl font-bold italic text-[#000000] mb-4">
          Find your best Idea from the best
        </h1>

        {/* Description */}
        <p className="text-[#000000] max-w-2xl mx-auto text-sm md:text-base mb-8 leading-relaxed">
          DeepIdea is an innovative AI-driven platform designed to help users
          discover and generate high-quality, creative ideas efficiently. It
          leverages cutting-edge AI and an advanced agentic system, enhancing
          user experience and ensuring that the ideas provided are relevant,
          actionable, and trend-aligned.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Link href="/generator">
            <button className="bg-[#1D1D1D] text-[#00EFD0] font-bold text-lg px-7 py-2 rounded-xl border-2 border-[#00EFD0] shadow-md hover:bg-[#00EFD0] hover:text-[#1D1D1D] hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer">
              Try for free
            </button>
          </Link>
          <button className="text-[#1D1D1D] font-semibold hover:underline transition duration-200 cursor-pointer">
            Watch Demo
          </button>
        </div>
      </section>

      <section className="bg-[url('/bg-dot.png')] bg-repeat py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-[#000000] text-2xl md:text-3xl font-bold mb-4">
            Find Your Cool Inspiration with Playbook
          </h2>
          <p className="text-[#000000] max-w-xl mx-auto mb-12">
            You can find your cool ideas with just one click and according to
            the Niche and topic fields you choose.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="border rounded-lg p-6 m-4 text-left bg-white shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Generate Idea</h3>
              <p className="text-gray-600 mb-4">
                Instantly generate ideas to overcome creative blocks or quickly
                kickstart new projects.
              </p>
              <button className="border border-black px-4 py-1 rounded hover:bg-black hover:text-white transition cursor-pointer">
                Get Demo
              </button>
            </div>

            {/* Card 2 */}
            <div className="border rounded-lg p-6 m-4 text-left bg-white shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Content Creation</h3>
              <p className="text-gray-600 mb-4">
                Directly connects generated ideas to spreadsheets for
                streamlined content management.
              </p>
              <button className="border border-black px-4 py-1 rounded hover:bg-black hover:text-white transition cursor-pointer">
                Get Demo
              </button>
            </div>

            {/* Card 3 */}
            <div className="border rounded-lg p-6 m-4 text-left bg-white shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-2">Blog Post</h3>
              <p className="text-gray-600 mb-4">
                Seamlessly connect and publish your ideas directly to Medium or
                other markdown-supported blog platforms.
              </p>
              <button className="border border-black px-4 py-1 rounded hover:bg-black hover:text-white transition cursor-pointer">
                Get Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
