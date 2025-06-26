"use client";

import ContentResult from "@/components/ContentResult";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function ContentPage() {
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
          <ContentResult />
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="mt-8 w-56 bg-[#1D1D1D] text-[#00EFD0] font-semibold py-2 rounded-xl border-2 border-[#00EFD0] hover:bg-[#00EFD0] hover:text-[#1D1D1D] transition-all duration-300 cursor-pointer"
        >
          Generate New Content
        </button>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 text-center border border-gray-200">
              <h2 className="text-2xl font-bold mb-4 text-[#1D1D1D]">Are you sure?</h2>
              <p className="mb-6 text-gray-700">Your current results will be deleted.</p>
              <div className="flex flex-col gap-4">
                <button
                  className="w-full font-semibold py-3 rounded-xl border-2 border-[#00EFD0] hover:bg-[#00EFD0] hover:text-[#1D1D1D] transition-all duration-300 cursor-pointer"
                  onClick={() => {
                    if (!session) {
                      setShowModal(false);
                      router.push('/login');
                      return;
                    }
                    localStorage.removeItem('generated_content');
                    setShowModal(false);
                    router.push('/content/generate');
                  }}
                >
                  Yes, generate new content
                </button>
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
