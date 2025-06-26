"use client";

import IdeaResult from "@/components/IdeaResult";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function IdeaPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="flex flex-col items-center px-4 py-12 mt-14">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">
          Results
        </h1>

        <div className="w-full max-w-3xl border rounded-xl p-6 bg-white shadow">
          <IdeaResult />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 w-full">
          <button
            onClick={() => setShowModal(true)}
            className="w-56 bg-[#1D1D1D] text-[#00EFD0] font-semibold py-2 rounded-xl border-2 border-[#00EFD0] hover:bg-[#00EFD0] hover:text-[#1D1D1D] transition-all duration-300 cursor-pointer"
          >
            Generate New Idea
          </button>

        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 text-center border border-gray-200">
              <h2 className="text-2xl font-bold mb-4 text-[#1D1D1D]">What would you like to do?</h2>
              <p className="mb-6 text-gray-700">Your current results will be deleted when you proceed.</p>
              
              <div className="flex flex-col gap-4">
                <button
                  className="w-full font-semibold py-3 rounded-xl border-2 border-[#00EFD0] hover:bg-[#00EFD0] hover:text-[#1D1D1D] transition-all duration-300 cursor-pointer"
                  onClick={() => {
                    if (!session) {
                      setShowModal(false);
                      router.push('/login');
                      return;
                    }
                    localStorage.removeItem('generated_ideas');
                    setShowModal(false);
                    router.push('/idea/generate');
                  }}
                >
                  Generate New Ideas
                </button>
                
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-gray-300"></div>
                  <span className="text-gray-500 text-sm font-medium">OR</span>
                  <div className="flex-1 h-px bg-gray-300"></div>
                </div>
                
                <div>
                  <p className="text-gray-700 mb-3">Save your ideas to a <strong>spreadsheet</strong>?</p>
                  <button
                    className="w-full bg-[#1D1D1D] text-[#00EFD0] font-semibold py-3 rounded-xl border-2 border-[#00EFD0] hover:bg-[#00EFD0] hover:text-[#1D1D1D] transition-all duration-300 cursor-pointer"
                    onClick={() => {
                      if (!session) {
                        setShowModal(false);
                        router.push('/login');
                        return;
                      }
                      localStorage.removeItem('generated_ideas');
                      setShowModal(false);
                      router.push('/content/generate');
                    }}
                  >
                    Go to Content Creation
                  </button>
                </div>
                
                <button
                  className="w-full bg-gray-100 text-gray-600 font-semibold py-2 rounded-xl border hover:bg-gray-200 transition-all duration-200 cursor-pointer mt-2"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
