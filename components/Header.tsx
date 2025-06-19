"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

Modal.setAppElement("body");

export default function Header() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false); 
  const [userManual, setUserManual] = useState<{ firstName: string } | null>(
    null
  );
  const [modalIsOpen, setModalIsOpen] = useState(false); 

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserManual(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    if (session) {
      signOut();
    }
    localStorage.removeItem("user");
    setUserManual(null);
    setModalIsOpen(false);
    setIsOpen(false); 
  };

  const firstName =
    session?.user?.name?.split(" ")[0] ?? userManual?.firstName ?? "";

  const isLoggedIn = Boolean(session || userManual);

  return (
    <header className="w-full px-4 sm:px-10 py-3 flex items-center justify-between bg-white shadow-md fixed top-0 z-50">
      {/* --- Desktop Navigation --- */}
      <div className="hidden md:flex flex-grow items-center">
        <Link href="/">
          <Image src="/Logo.png" alt="Logo DeepIdia" width={40} height={30} />
        </Link>
        <nav className="flex items-center space-x-8 text-[#1D1D1D] font-bold ml-8">
          <Link href="#about" className="hover:text-[#00BFA6] transition text-lg">
            About
          </Link>
          <Link
            href="#solutions"
            className="hover:text-[#00BFA6] transition text-lg"
          >
            Solutions
          </Link>
          <Link
            href="#pricing"
            className="hover:text-[#00BFA6] transition text-lg"
          >
            Pricing
          </Link>
        </nav>
      </div>

      {/* --- Desktop Actions --- */}
      <div className="hidden md:flex items-center space-x-4">
        {isLoggedIn ? (
          <>
            <p className="text-[#1D1D1D] font-bold text-xl">Hi, {firstName}</p>
            <button
              onClick={() => setModalIsOpen(true)}
              className="flex items-center gap-2 px-4 py-2 text-[#1D1D1D] font-bold border border-[#1D1D1D] rounded-xl hover:bg-[#1D1D1D] hover:text-white transition-all duration-300 cursor-pointer"
            >
              <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="text-[#1D1D1D] hover:text-[#00BFA6] transition font-bold text-lg"
            >
              Sign In
            </Link>
            <Link href="/idea/generate">
              <button className="bg-[#1D1D1D] text-[#00EFD0] font-bold text-lg px-7 py-2 rounded-xl border-2 border-[#00EFD0] shadow-md hover:bg-[#00EFD0] hover:text-[#1D1D1D] hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer">
                Try for free
              </button>
            </Link>
          </>
        )}
      </div>

      {/* --- Mobile Header --- */}
      <div className="md:hidden flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image src="/Logo.png" alt="Logo DeepIdia" width={35} height={25} />
          </Link>
          {isLoggedIn && (
            <p className="text-[#1D1D1D] font-bold text-lg">Hi, {firstName}</p>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* --- Mobile Navigation Dropdown --- */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link
            href="#about"
            className="hover:text-[#00BFA6] transition text-lg"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#solutions"
            className="hover:text-[#00BFA6] transition text-lg"
            onClick={() => setIsOpen(false)}
          >
            Solutions
          </Link>
          <Link
            href="#pricing"
            className="hover:text-[#00BFA6] transition text-lg"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>


          {isLoggedIn ? (
            <button
              onClick={() => {
                setIsOpen(false);
                setModalIsOpen(true);
              }}
              className="flex items-center gap-2 text-lg text-[#1D1D1D] font-bold hover:bg-[#1D1D1D] hover:text-white transition-all duration-300 cursor-pointer"
            >
              <FontAwesomeIcon icon={faRightFromBracket} />
              Logout
            </button>
          ) : (
            <>
              <Link
                href="/login"
                className="hover:text-[#00BFA6] transition text-lg font-bold"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link href="/idea/generate">
                <button
                  className="bg-[#1D1D1D] text-[#00EFD0] font-bold text-lg px-7 py-2 rounded-xl border-2 border-[#00EFD0] shadow-md hover:shadow-lg transition cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Try for free
                </button>
              </Link>
            </>
          )}
        </div>
      )}

      {/* --- Logout Confirmation Modal (No changes needed here) --- */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Confirm Logout"
        className="bg-white rounded-xl max-w-sm mx-auto mt-48 p-6 shadow-lg border border-gray-200 focus:outline-none"
        overlayClassName="fixed inset-0 bg-transparent backdrop-blur-sm z-50 flex justify-center items-start"
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <FontAwesomeIcon
            icon={faRightFromBracket}
            size="lg"
            className="text-gray-600"
          />
          <h2 className="text-lg font-semibold text-gray-900">
            Logout Confirmation
          </h2>
          <p className="text-gray-500 text-sm">
            Are you sure you want to log out?
          </p>
          <div className="flex gap-3 w-full">
            <button
              onClick={() => setModalIsOpen(false)}
              className="flex-1 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleLogout}
              className="flex-1 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 font-semibold transition cursor-pointer"
            >
              Logout
            </button>
          </div>
        </div>
      </Modal>
    </header>
  );
}