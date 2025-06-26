"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";  // Import style AOS

export default function Features() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // durasi animasi dalam ms
      easing: "ease-in-out",
      once: true, // animasi hanya sekali saat scroll pertama
    });
  }, []);

  return (
    <div className="bg-white mx-4 sm:mx-6 md:mx-10 lg:mx-20 px-4 sm:px-6 md:px-12 lg:px-24 py-10 sm:py-14 md:py-20 lg:py-28">
      {/* Section pertama */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 sm:px-4 md:px-10 lg:px-16 py-8 sm:py-10 md:py-12">
        {/* Kolom kiri */}
        <div className="flex flex-col justify-center text-gray-800" data-aos="fade-right">
          <h1 className="text-2xl sm:text-4xl font-extrabold mb-4 text-[#00BFA6]">Unlock Limitless Creativity</h1>
          <p className="mb-8 max-w-xl text-lg text-black">
            Supercharge your workflow with AI that inspires, organizes, and accelerates your best ideas. Whether you're a creator, marketer, or entrepreneur, DeepIdia is your launchpad for innovation.
          </p>

          <ul className="space-y-6 mb-12">
            <li className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="100">
              <span className="mt-1">
                <Image
                  src="/magnifying-glass.png"
                  alt="Magnifying Glass Icon"
                  width={24}
                  height={24}
                />
              </span>
              <p>
                <strong>Lightning-Fast Idea Discovery</strong> — Instantly spark new concepts tailored to your passions and goals—no more creative blocks.
              </p>
            </li>
            <li className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="200">
              <span className="mt-1">
                <Image
                  src="/rocket.png"
                  alt="Rocket Icon"
                  width={32}
                  height={32}
                />
              </span>
              <p>
                <strong>AI That's Always Ahead</strong> — Tap into the latest trends and insights with cutting-edge models like OpenAI, Gemini, Anthropic, and Deepseek.
              </p>
            </li>
            <li className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="300">
              <span className="mt-1">
                <Image
                  src="/handshake.png"
                  alt="Handshake Icon"
                  width={32}
                  height={32}
                />
              </span>
              <p>
                <strong>Seamless, Joyful Experience</strong> — Enjoy a beautifully simple interface that makes brainstorming and organizing ideas effortless and fun.
              </p>
            </li>
            <li className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="400">
              <span className="mt-1">
                <Image
                  src="/thumbs-up.png"
                  alt="Thumbs Up Icon"
                  width={32}
                  height={32}
                />
              </span>
              <p>
                <strong>Pinpoint Precision</strong> — Find exactly what you need with smart, intuitive filters—so every idea is relevant and actionable.
              </p>
            </li>
          </ul>
        </div>

        {/* Kolom kanan */}
        <div className="flex justify-center items-center" data-aos="fade-left" data-aos-delay="500">
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
      <div
        className="bg-black text-white rounded-xl px-4 sm:px-6 md:px-12 lg:px-20 py-10 mt-16 mb-4 text-center"
        data-aos="zoom-in"
      >
        <h2 className="text-2xl sm:text-4xl mb-6 font-extrabold leading-snug text-[#00BFA6]">
          Turn Inspiration Into Action
        </h2>
        <p className="mb-8 text-lg text-white max-w-2xl mx-auto">
          Go from idea to execution in record time. DeepIdia delivers the speed, accuracy, and flexibility you need to stay ahead.
        </p>

        <Link href="/idea/generate">
          <button className="bg-[#1D1D1D] text-[#00EFD0] font-bold text-base sm:text-2xl px-6 py-2 rounded-xl border-2 border-[#00EFD0] shadow-md hover:bg-[#00EFD0] hover:text-[#1D1D1D] hover:shadow-lg transition-all duration-300 cursor-pointer">
            Try for Free
          </button>
        </Link>

        <div className="flex flex-col items-center mt-6 w-full max-w-[320px] sm:max-w-xl md:max-w-3xl mx-auto">
          <p className="mb-2 text-base sm:text-lg font-semibold text-[#00BFA6]">Powered by the World's Leading AI Models</p>
          <div className="bg-gradient-to-r from-[#e0f7fa] to-[#f1f8e9] border border-[#00BFA6]/30 rounded-2xl flex flex-wrap justify-center items-center gap-4 sm:gap-6 px-4 py-4 w-full">
            <span className="transition-transform duration-200 hover:scale-110 hover:shadow-lg rounded-xl p-2">
              <Image
                src="/openai.svg"
                alt="OpenAI"
                title="OpenAI"
                width={100}
                height={30}
                className="w-12 sm:w-20 md:w-24 h-auto mx-auto"
              />
            </span>
            <span className="transition-transform duration-200 hover:scale-110 hover:shadow-lg rounded-xl p-2">
              <Image
                src="/logo-gemini.svg"
                alt="Gemini"
                title="Gemini"
                width={100}
                height={30}
                className="w-12 sm:w-20 md:w-24 h-auto mx-auto"
              />
            </span>
            <span className="transition-transform duration-200 hover:scale-110 hover:shadow-lg rounded-xl p-2">
              <Image
                src="/logo-anthropic.svg"
                alt="Anthropic"
                title="Anthropic"
                width={100}
                height={30}
                className="w-12 sm:w-20 md:w-24 h-auto mx-auto"
              />
            </span>
            <span className="transition-transform duration-200 hover:scale-110 hover:shadow-lg rounded-xl p-2">
              <Image
                src="/logo-deepseek.svg"
                alt="DeepSeek"
                title="DeepSeek"
                width={100}
                height={30}
                className="w-12 sm:w-20 md:w-24 h-auto mx-auto"
              />
            </span>
          </div>
        </div>
      </div>

      <p className="text-center sm:text-right text-base sm:text-xl mt-2 text-black px-2" data-aos="fade-up" data-aos-delay="600">
        Your next breakthrough starts here—explore, create, and achieve with DeepIdia.
      </p>
    </div>
  );
}
