"use client";

import { useEffect, useState } from "react";

export default function IdeaResult() {
  const [ideas, setIdeas] = useState([]);
  const [category, setCategory] = useState("");
  const [scope, setScope] = useState("");
  const [username, setUsername] = useState("");
  const [spreadsheetUrl, setSpreadsheetUrl] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("generated_content");
    if (data) {
      const parsed = JSON.parse(data);
      setIdeas(parsed.ideas || []);
      setCategory(parsed.category || "");
      setScope(parsed.scope || "");
      setUsername(parsed.username || "");
      setSpreadsheetUrl(parsed.spreadsheet_url || "");
    }
  }, []);

  return (
    <div className="min-h-screen px-6 py-10 bg-white text-black">
      {ideas.length === 0 ? (
        <p className="text-center text-gray-600">No content generated yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
          {ideas.map((idea, index) => (
            <div key={index} className="border-b pb-6">
              <h3 className="font-semibold text-lg text-black">{idea.title}</h3>
              <p className="text-sm text-gray-800 mt-2">{idea.description}</p>

              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between mt-4 text-sm text-gray-900">
                <div>
                  <strong className="block text-xs text-gray-600 mb-1">
                    Topic Field
                  </strong>
                  <span>{category}</span>
                </div>

                {username && (
                  <div>
                    <strong className="block text-xs text-gray-600 mb-1">
                      Username
                    </strong>
                    <span>{username}</span>
                  </div>
                )}

                <span className="px-4 py-1 text-black text-sm font-semibold rounded-full border border-gray-300 mt-2 md:mt-0">
                  {scope}
                </span>
              </div>
            </div>
          ))}

          {/* Bagian tautan hasil Spreadsheet */}
          {spreadsheetUrl && (
            <div className="mt-10 p-6 bg-gray-100 rounded-xl shadow">
              <h4 className="font-semibold text-lg mb-4">Output Links</h4>

              <p>
                📄 Spreadsheet:{" "}
                <a
                  href={spreadsheetUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline break-all"
                >
                  {spreadsheetUrl}
                </a>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
