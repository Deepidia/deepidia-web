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
                  <span className="inline-block bg-[#E0F7FA] text-[#00BFA6] font-semibold px-3 py-1 rounded-full text-xs mt-1">{category}</span>
                </div>

                {username && (
                  <div>
                    <strong className="block text-xs text-gray-600 mb-1">
                      Username
                    </strong>
                    <span>{username}</span>
                  </div>
                )}

                <span className="inline-block bg-[#1D1D1D] text-[#00EFD0] text-xs font-bold px-3 py-1 rounded-full mt-2 md:mt-0">{scope}</span>
              </div>
            </div>
          ))}

          {/* Bagian tautan hasil Spreadsheet */}
          {spreadsheetUrl && (
            <div className="mt-10 p-6 bg-gradient-to-r from-[#e0f7fa] to-[#f1f8e9] rounded-2xl shadow-lg border border-[#00BFA6]/30 flex flex-col items-center">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-6 h-6 text-[#00BFA6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 4h6a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <h4 className="font-bold text-lg text-[#00BFA6]">Spreadsheet Output</h4>
              </div>
              <a
                href={spreadsheetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline break-all text-base font-semibold hover:text-blue-800 transition"
              >
                {spreadsheetUrl}
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
