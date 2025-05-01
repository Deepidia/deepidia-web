"use client";

import { useState } from 'react';

export default function IdeaGenerator() {
  const [niche, setNiche] = useState("");
  const [type, setType] = useState("All Topics");
  const [topic, setTopic] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Niche: ${niche}\nType: ${type}\nTopic: ${topic}\nKeyword: ${keyword}`
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12 mt-14">
      <h1 className="text-4xl font-bold mb-2 text-center">
        Content Idea Generator
      </h1>
      <p className="text-gray-600 mb-8 text-center">
        Generate endless content ideas with ease using our innovative content
        idea generator.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-2xl p-6 rounded-xl border shadow"
      >
        <label className="block mb-2 font-semibold">NICHE</label>
        <input
          type="text"
          placeholder="Search here"
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
          className="w-full border px-4 py-2 rounded mb-4"
        />

        <label className="block mb-2 font-semibold">Type of Niche</label>
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            "All Topics",
            "Trending Now",
            "Most Researched",
            "Future Oriented",
          ].map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setType(t)}
              className={`px-4 py-2 rounded-full border cursor-pointer text-sm whitespace-nowrap transition-all duration-200 ${
                type === t
                  ? "bg-[#2AFFE3] text-black"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <label className="block mb-2 font-semibold">Select Topics</label>
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full border px-4 py-2 rounded mb-4"
        >
          <option value="">Choose a field topics</option>
          <option value="marketing">Marketing</option>
          <option value="technology">Technology</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="education">Education</option>
        </select>

        <label className="block mb-2 font-semibold">
          Additional Keywords (Optional)
        </label>
        <input
          type="text"
          placeholder="Enter specific keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full border px-4 py-2 rounded mb-6"
        />

          <div className='flex justify-center'>
          <button
          type="submit"
          className=" w-40 bg-[#1D1D1D] text-[#00EFD0] font-bold text-lg px-7 py-2 rounded-xl border-2 border-[#00EFD0] shadow-md hover:bg-[#00EFD0] hover:text-[#1D1D1D] hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer"
        >
          Go!
        </button>
          </div>

      </form>
    </div>
  );
}
