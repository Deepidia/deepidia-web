import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ComingSoonPage() {
  return (
    <div>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
        <FontAwesomeIcon
          icon={faRocket}
          className="text-5xl text-[#00EFD0] mb-6 animate-bounce"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Coming Soon!
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md">
          We are working hard to bring this feature to you. Stay tuned for
          something amazing!
        </p>
        <Link href="/">
          <span className="border border-black px-4 py-3 rounded text-black hover:bg-black hover:text-white transition cursor-pointer">
            Go Back to Home
          </span>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
