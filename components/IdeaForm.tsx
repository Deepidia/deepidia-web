"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import React, { FormEvent } from "react";

export default function IdeaGenerator() {
  const router = useRouter();

  const [niche, setNiche] = useState("");
  const [type, setType] = useState("All Topics");
  const [topic, setTopic] = useState("");
  const [keyword, setKeyword] = useState("");
  const [numIdeas, setNumIdeas] = useState(5);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      model_type: "openai",
      category: niche || topic || "General",
      scope: type,
      keyword: keyword,
      num_ideas: numIdeas,
    };

    try {
      const response = await fetch("https://api.deepidia.com/api/v1/generate_viral_ideas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      // console.log("Generated ideas:", data);

      // Simpan ke localStorage / state global atau redirect ke halaman hasil
      localStorage.setItem("generated_ideas", JSON.stringify(data));

      router.push("/idea/results");
    } catch (error) {
      console.error("Failed to generate ideas:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12 mt-14">
      <h1 className="text-4xl font-bold mb-2 text-center text-black">
        Content Idea Generator
      </h1>
      <p className="text-gray-800 mb-8 text-center text-xl">
        Generate endless content ideas with ease using our innovative content idea generator.
      </p>

      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/40">
          <div className="bg-white/90 rounded-xl shadow-lg p-8 flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00EFD0] mb-4"></div>
            <p className="text-lg font-semibold text-black">Generating your ideas...</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white w-full max-w-2xl p-6 rounded-xl border shadow">
        <label className="block mb-2 font-semibold text-black">Niche</label>
        <input
          type="text"
          placeholder="Search here"
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
          className="w-full border px-4 py-2 rounded mb-4 text-black"
        />

        <label className="block mb-2 font-semibold text-black">Type of Niche</label>
        <div className="flex flex-wrap gap-2 mb-4">
          {["All Topics", "Trending Now", "Most Researched", "Future Oriented"].map((t) => (
            <button
              type="button"
              key={t}
              onClick={() => setType(t)}
              className={`px-4 py-2 rounded-full border cursor-pointer text-sm whitespace-nowrap transition-all duration-200 ${
                type === t ? "bg-black text-white" : "bg-gray-100 text-black"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <label className="block mb-2 font-semibold text-black">Select Topics</label>
        <select
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full border px-4 py-2 rounded mb-4 text-black"
        >
          <option value="">Choose a field topic</option>
          <option value="Marketing">Marketing</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Education">Education</option>
        </select>

        <label className="block mb-2 font-semibold text-black">Additional Keywords (Optional)</label>
        <input
          type="text"
          placeholder="Enter specific keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full border px-4 py-2 rounded mb-4 text-black"
        />

        <label className="block mb-2 font-semibold text-black">Number of Ideas</label>
        <input
          type="number"
          value={numIdeas}
          min={1}
          max={10}
         onChange={(e) => setNumIdeas(parseInt(e.target.value))}

          className="w-full border px-4 py-2 rounded mb-6 text-black"
        />

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className="w-40 bg-[#1D1D1D] text-[#00EFD0] font-bold text-lg px-7 py-2 rounded-xl border-2 border-[#00EFD0] shadow-md hover:bg-[#00EFD0] hover:text-[#1D1D1D] hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer"
          >
            Go!
          </button>
        </div>
      </form>
    </div>
  );
}
