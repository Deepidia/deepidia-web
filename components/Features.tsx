"use client";

import Image from "next/image";
import Link from "next/link";

export default function Features() {
  return (
    <div className="bg-white mx-4 sm:mx-6 md:mx-10 lg:mx-20 px-4 sm:px-6 md:px-12 lg:px-24 py-10 sm:py-14 md:py-20 lg:py-28">
      {/* Section pertama */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 sm:px-4 md:px-10 lg:px-16 py-8 sm:py-10 md:py-12">
        {/* Kolom kiri */}
        <div className="flex flex-col justify-center text-gray-800">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Key Features</h1>
          <p className="mb-8 max-w-xl">
            You can find your cool ideas with just one click and according to
            the Niche and topic fields you choose.
          </p>

          <ul className="space-y-6 mb-12">
            <li className="flex items-start gap-3">
              <span className="mt-1">
                <Image
                  src="/magnifying-glass.png"
                  alt="Magnifying Glass Icon"
                  width={24}
                  height={24}
                />
              </span>
              <p>
                <strong>Instant Idea Search</strong> → Rapidly receive
                innovative ideas tailored to specific keywords.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1">
                <Image
                  src="/rocket.png"
                  alt="Rocket Icon"
                  width={32}
                  height={32}
                />
              </span>
              <p>
                <strong>AI-Powered Recommendations</strong> → Utilizes OpenAI,
                Gemini, Anthropic, and Deepseek to ensure idea relevance and
                trend alignment.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1">
                <Image
                  src="/handshake.png"
                  alt="Handshake Icon"
                  width={32}
                  height={32}
                />
              </span>
              <p>
                <strong>User-Friendly Interface</strong> → Designed to simplify
                the user experience, enabling fast and hassle-free idea
                exploration.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1">
                <Image
                  src="/thumbs-up.png"
                  alt="Thumbs Up Icon"
                  width={32}
                  height={32}
                />
              </span>
              <p>
                <strong>Advanced Filtering</strong> → Offers detailed
                category-based filtering, enabling precise and customized idea
                exploration.
              </p>
            </li>
          </ul>
        </div>

        {/* Kolom kanan */}
        <div className="flex justify-center items-center">
          <Image
            src="/Image1.png"
            alt="Gambar features"
            width={400}
            height={400}
            className="w-full max-w-[350px] md:max-w-[450px] h-auto"
          />
        </div>
      </div>

      {/* Section kedua */}
      <div className="bg-black text-white rounded-xl px-4 sm:px-6 md:px-12 lg:px-20 py-10 mt-16 mb-4 text-center">
        <h2 className="text-2xl sm:text-3xl mb-6 font-bold leading-snug">
          Speed Up Your Research
          <br />
          with Accuracy and Ease
        </h2>

        <Link href="/generator">
          <button className="bg-[#1D1D1D] text-[#00EFD0] font-bold text-base sm:text-lg px-6 py-2 rounded-xl border-2 border-[#00EFD0] shadow-md hover:bg-[#00EFD0] hover:text-[#1D1D1D] hover:shadow-lg transition-all duration-300 cursor-pointer">
            Try for free
          </button>
        </Link>

        <div className="bg-white text-black flex flex-wrap justify-center items-center gap-4 sm:gap-6 px-4 py-4 rounded-2xl mt-6 w-full max-w-[320px] sm:max-w-xl md:max-w-3xl mx-auto">
          <Image src="/openai.svg" alt="OpenAI" width={60} height={30} />
          <Image src="/logo-gemini.svg" alt="Gemini" width={60} height={30} />
          <Image
            src="/logo-anthropic.svg"
            alt="Anthropic"
            width={70}
            height={30}
          />
          <Image
            src="/logo-deepseek.svg"
            alt="DeepSeek"
            width={70}
            height={30}
          />
        </div>
      </div>

      <p className="text-center sm:text-right text-base sm:text-xl mt-2 text-black px-2">
        For every page in your playbook, “There’s a workflow for that.”
      </p>
    </div>
  );
}
