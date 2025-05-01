"use client";

import Image from "next/image";
import Link from "next/link";

export default function Features() {
  return (
    <div className="px-4 md:px-12 lg:px-24 py-10">
      {/* Section pertama */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Kolom kiri */}
        <div className="flex flex-col justify-center px-6 py-12 md:px-20 bg-white text-gray-800">
          <h1 className="text-2xl font-bold mb-4">Key Features</h1>
          <p className="mb-8 max-w-xl">
            You can find your cool ideas with just one click and according to
            the Niche and topic fields you choose.
          </p>

          <ul className="space-y-6 mb-12">
            <li className="flex items-start gap-3">
              <span>
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
              <span>
                <Image
                  src="/rocket.png"
                  alt="Rocket Icon"
                  width={40}
                  height={40}
                />
              </span>
              <p>
                <strong>AI-Powered Recommendations</strong> → Utilizes OpenAI,
                Gemini, Anthropic, and Deepseek to ensure idea relevance and
                trend alignment.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span>
                <Image
                  src="/handshake.png"
                  alt="Handshake Icon"
                  width={40}
                  height={40}
                />
              </span>
              <p>
                <strong>User-Friendly Interface</strong> → Designed to simplify
                the user experience, enabling fast and hassle-free idea
                exploration.
              </p>
            </li>

            <li className="flex items-start gap-3">
              <span>
                <Image
                  src="/thumbs-up.png"
                  alt="Thumbs Up Icon"
                  width={35}
                  height={35}
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
            width={450}
            height={450}
          />
        </div>
      </div>

      {/* Section kedua */}
      <div className="bg-black text-white rounded-xl px-6 md:px-12 py-10 mt-16 text-center">
        <h2 className="text-3xl md:text-3xl mb-6 font-bold">
          Speed Up Your Research
          <br />
          with Accuracy and Ease
        </h2>
        <Link href="/generator">
          <button className="bg-[#1D1D1D] text-[#00EFD0] font-bold text-lg px-7 py-2 rounded-xl border-2 border-[#00EFD0] shadow-md hover:bg-[#00EFD0] hover:text-[#1D1D1D] hover:shadow-lg transition-all duration-300 cursor-pointer">
            Try for free
          </button>
        </Link>
        <div className="bg-white text-black flex flex-wrap justify-center items-center gap-4 sm:gap-6 px-4 py-3 rounded-full mt-6 w-full max-w-3xl mx-auto">
          <Image src="/openai.svg" alt="OpenAI" width={80} height={30} />
          <Image src="/logo-gemini.svg" alt="Gemini" width={70} height={30} />
          <Image
            src="/logo-anthropic.svg"
            alt="Anthropic"
            width={80}
            height={30}
          />
          <Image
            src="/logo-deepseek.svg"
            alt="DeepSeek"
            width={80}
            height={30}
          />
        </div>
      </div>

      <p className="text-right text-xl mt-4">
        For every page in your playbook, “There’s a workflow for that.”
      </p>
    </div>
  );
}
