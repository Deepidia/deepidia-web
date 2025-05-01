import IdeaGenerator from "@/components/IdeaForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function GeneratorPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <IdeaGenerator />
      <Footer />
    </main>
  );
}
