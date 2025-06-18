import ContentForm from "@/components/ContentForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ContentGenerator() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContentForm />
      <Footer />
    </main>
  );
}
