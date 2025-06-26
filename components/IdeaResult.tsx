"use client";

import { useEffect, useState } from "react";

interface Idea {
  title: string;
  description: string;
}

export default function IdeaResult() {
  const [ideas, setIdeas] = useState<Idea[]>([]);
  const [category, setCategory] = useState("");
  const [scope, setScope] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("generated_ideas");
    if (data) {
      const parsed = JSON.parse(data);
      setIdeas(parsed.ideas || []);
      setCategory(parsed.category || "");
      setScope(parsed.scope || "");
    }
  }, []);

  return (
    <div className="min-h-screen px-6 py-10 bg-white text-black">
      {ideas.length === 0 ? (
        <p className="text-center text-gray-600">No ideas generated yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
          {ideas.map((idea, index) => (
            <div key={index} className="border-b pb-6">
              <h3 className="font-semibold text-lg text-black">{idea.title}</h3>
              <p className="text-sm text-gray-800 mt-2">{idea.description}</p>

              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between mt-4 text-sm text-gray-900">
                {/* Kiri: Topic Field */}
                <div>
                  <span className="inline-block bg-[#E0F7FA] text-[#00BFA6] font-semibold px-3 py-1 rounded-full text-xs mt-1">
                    {category}
                  </span>
                </div>

                {/* Kanan: Scope Badge */}
                {scope === 'Future Oriented' && (
                  <span className="px-4 py-1 text-white text-sm font-semibold rounded-full bg-gradient-to-r from-[#00BFA6] to-[#00EFD0] shadow-md mt-2 md:mt-0 flex items-center gap-1">
                    <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {scope}
                  </span>
                )}
                {scope === 'Trending Now' && (
                  <span className="px-4 py-1 text-white text-sm font-semibold rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8E8E] shadow-md mt-2 md:mt-0">
                    {scope}
                  </span>
                )}
                {scope === 'Most Researched' && (
                  <span className="px-4 py-1 text-white text-sm font-semibold rounded-full bg-gradient-to-r from-[#4ECDC4] to-[#6EE7DF] shadow-md mt-2 md:mt-0">
                    {scope}
                  </span>
                )}
                {scope === 'All Topics' && (
                  <span className="px-4 py-1 text-black text-sm font-semibold rounded-full bg-gradient-to-r from-[#A8E6CF] to-[#C8F7C5] shadow-md mt-2 md:mt-0">
                    {scope}
                  </span>
                )}
                {!['Future Oriented', 'Trending Now', 'Most Researched', 'All Topics'].includes(scope) && (
                  <span className="px-4 py-1 text-black text-sm font-semibold rounded-full border border-gray-300 mt-2 md:mt-0">
                    {scope}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
