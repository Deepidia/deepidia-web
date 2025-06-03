"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSession } from "next-auth/react";

export default function Hero() {
  const { data: session } = useSession();

  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi 1 detik
      once: true, // animasi hanya sekali saat scroll pertama
    });
  }, []);

  return (
    <main className="bg-white">
      <section id="about" className="text-center py-12 px-4 md:py-44">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Logo */}
          <div className="flex justify-center mb-6 mt-10" data-aos="zoom-in">
            <Image
              src="/Logo.png"
              alt="Logo DeepIdea"
              width={140}
              height={140}
              className="rounded-lg w-24 sm:w-32 md:w-40 lg:w-44 h-auto"
            />
          </div>
        </div>

        {/* Headline */}
        <h1
          className="text-2xl sm:text-3xl md:text-5xl font-bold italic text-black mb-4 leading-snug"
          data-aos="fade-up"
        >
          Find your best Idea from the best
        </h1>

        {/* Description */}
        <p
          className="text-xl sm:text-base md:text-xl text-black max-w-5xl mx-auto mb-8 leading-relaxed px-2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          DeepIdea is an innovative AI-driven platform designed to help users
          discover and generate high-quality, creative ideas efficiently. It
          leverages cutting-edge AI and an advanced agentic system, enhancing
          user experience and ensuring that the ideas provided are relevant,
          actionable, and trend-aligned.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          data-aos="fade-up"
          data-aos-delay="600"
        // check session
        > {session ? (
          <Link href="/generator">
            <button className="bg-[#1D1D1D] text-[#00EFD0] font-bold  sm:text-2xl px-6 py-2 rounded-xl border-2 border-[#00EFD0] shadow-md hover:bg-[#00EFD0] hover:text-[#1D1D1D] hover:shadow-lg transition-all duration-300 ease-in-out">
              Lets try!
            </button>
          </Link>) : (
                    <Link href="/idea/generate">
                    <button className="bg-[#1D1D1D] text-[#00EFD0] font-bold sm:text-2xl px-6 py-2 rounded-xl border-2 border-[#00EFD0] shadow-md hover:bg-[#00EFD0] hover:text-[#1D1D1D] hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer">
                      Try for free
                    </button>
                  </Link>
          )}
          <button className="text-[#1D1D1D] text-2xl font-medium sm:font-semibold hover:underline transition duration-200 cursor-pointer">
            Watch Demo
          </button>
        </div>
      </section>

      <section
        id="solutions"
        className="bg-[url('/bg-dot.png')] bg-repeat py-40"
        data-aos="fade-up"
        data-aos-delay="900"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="mx-auto text-center">
            <h2 className="text-[#000000] text-3xl md:text-4xl font-bold mb-4">
              Find Your Cool Inspiration with Playbook
            </h2>
            <p className="text-[#000000] max-w-xl mx-auto m-2 text-xl sm:text-base md:text-xl">
              You can find your cool ideas with just one click and according to
              the Niche and topic fields you choose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="border rounded-lg p-6 m-4 text-left bg-white shadow-sm hover:shadow-md transition" data-aos="flip-left">
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
            <div className="border rounded-lg p-6 m-4 text-left bg-white shadow-sm hover:shadow-md transition" data-aos="flip-left">
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
            <div className="border rounded-lg p-6 m-4 text-left bg-white shadow-sm hover:shadow-md transition" data-aos="flip-left">
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
