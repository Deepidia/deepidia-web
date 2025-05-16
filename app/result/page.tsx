import IdeaResult from "@/components/IdeaResult";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function GeneratorPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="flex flex-col items-center px-4 py-12 mt-14">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">Results</h1>

        <div className="w-full max-w-3xl border rounded-xl p-6 bg-white shadow">
          <IdeaResult />
          <hr className="my-4 border-gray-300" />
          <IdeaResult />
        </div>

        <button
          type="button"
          className="mt-8 w-56 bg-[#1D1D1D] text-[#00EFD0] font-semibold py-2 rounded-xl border-2 border-[#00EFD0] hover:bg-[#00EFD0] hover:text-[#1D1D1D] transition-all duration-300"
        >
          Generate New Idea
        </button>
      </section>

      <Footer />
    </main>
  );
}
