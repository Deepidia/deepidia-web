"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function IdeaGenerator() {
  const router = useRouter();
  const { data: session } = useSession();

  const [niche, setNiche] = useState("");
  const [type, setType] = useState("All Topics");
  const [topic, setTopic] = useState("");
  const [keyword, setKeyword] = useState("");
  const [numIdeas, setNumIdeas] = useState(5);
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!session?.user) {
      router.push('/auth/signin');
      return;
    }

    setLoading(true);
    setError(null);
    setLoadingStep("Preparing your content request...");

    const payload = {
      model_type: "openai",
      category: niche || topic || "General",
      scope: type,
      keyword: keyword || "string",
      num_ideas: parseInt(numIdeas),
      username: session.user.name || session.user.email
    };

    try {
      setLoadingStep("Connecting to AI service...");
      const apiUrl = process.env.NEXT_PUBLIC_AI_FASTAPI;
      if (!apiUrl) {
        throw new Error('API URL is not configured');
      }

      setLoadingStep("Generating creative content ideas...");
      const response = await fetch(
        `${apiUrl}/api/v1/content_creation`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setLoadingStep("Processing and organizing your content...");
      const data = await response.json();
      localStorage.setItem("generated_content", JSON.stringify(data));

      setLoadingStep("Almost done! Redirecting to results...");
      router.push("/content/results");
    } catch (err) {
      console.error("Failed to generate ideas:", err);
      setError(err.message || "Something went wrong. Please try again.");
      setLoadingStep("Oops! Something went wrong. Please try again.");
      setTimeout(() => {
        setLoading(false);
        setLoadingStep("");
        setError(null);
      }, 3000);
    } finally {
      if (!error) {
        setLoading(false);
        setLoadingStep("");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-12 mt-14">
      <h1 className="text-4xl font-bold mb-2 text-center text-black">
        Content Creation
      </h1>
      <p className="text-gray-800 mb-8 text-center text-xl">
        Generate endless content ideas with ease using our innovative content
        idea generator.
      </p>

      {error && (
        <div className="fixed inset-0 backdrop-blur-md bg-white/30 flex items-center justify-center z-50">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-2xl max-w-md w-full mx-4 text-center border border-red-100">
            <div className="text-red-500 text-4xl mb-4">⚠️</div>
            <h3 className="text-xl font-semibold mb-2 text-red-600">Error</h3>
            <p className="text-gray-600 mb-4">{error}</p>
          </div>
        </div>
      )}

      {loading && (
        <div className="fixed inset-0 backdrop-blur-md bg-white/30 flex items-center justify-center z-50">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-2xl max-w-md w-full mx-4 text-center border border-gray-100">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#00EFD0] mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2 text-black">Generating Your Content</h3>
            <p className="text-gray-600 mb-4">{loadingStep}</p>
            <div className="flex justify-center space-x-2">
              <div className="w-3 h-3 bg-[#00EFD0] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-3 h-3 bg-[#00EFD0] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-3 h-3 bg-[#00EFD0] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-2xl p-6 rounded-xl border shadow relative"
      >
        <label className="block mb-2 font-semibold text-black">Niche</label>
        <input
          type="text"
          placeholder="Search here"
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
          className="w-full border px-4 py-2 rounded mb-4 text-black"
        />

        <label className="block mb-2 font-semibold text-black">
          Type of Niche
        </label>
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
                type === t ? "bg-black text-white" : "bg-gray-100 text-black"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <label className="block mb-2 font-semibold text-black">
          Select Topics
        </label>
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

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={loading}
            className={`w-40 font-bold text-lg px-7 py-2 rounded-xl border-2 border-[#00EFD0] shadow-md transition-all duration-300 ease-in-out ${
              loading 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-[#1D1D1D] text-[#00EFD0] hover:bg-[#00EFD0] hover:text-[#1D1D1D] hover:shadow-lg cursor-pointer'
            }`}
          >
            {loading ? "Processing..." : "Generate"}
          </button>
        </div>
      </form>
    </div>
  );
}
