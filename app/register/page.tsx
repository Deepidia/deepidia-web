"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Reset error saat mengetik
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };

    // Client-side validation
    if (!form.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(form.email)) newErrors.email = "Invalid email format.";
    if (!form.password.trim()) newErrors.password = "Password is required.";
    else if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    // Jika ada error, tampilkan dan hentikan submit
    if (Object.values(newErrors).some((error) => error !== "")) {
      setErrors(newErrors);
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (!res.ok) {
        // Jika server mengirim error spesifik ke field
        if (data.field && data.error) {
          setErrors((prev) => ({ ...prev, [data.field]: data.error }));
        } else {
          throw new Error(data.error || "Something went wrong");
        }
        return;
      }

      setMessage(data.message);
      router.push("/login");
    } catch (err: any) {
      setMessage(err.message);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-4 py-8 sm:px-6 lg:px-8 bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link href="/">
          <Image
            src="/Logo.png"
            alt="Logo DeepIdia"
            width={70}
            height={50}
            className="mx-auto"
          />
        </Link>
        <h2 className="mt-6 text-2xl font-bold text-gray-900">Sign up</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
        <div className="bg-white py-8 px-6 shadow-md border border-gray-300 rounded-xl sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  First Name
                </label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="mt-1 block w-full text-sm rounded-md border text-[#AFAFAF] border-gray-300 py-2 px-3 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Last Name
                </label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className="mt-1 block w-full text-sm rounded-md border text-[#AFAFAF] border-gray-300 py-2 px-3 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-1 block w-full text-sm rounded-md border text-[#AFAFAF] border-gray-300 py-2 px-3 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="mt-1 block w-full rounded-md text-sm border text-[#AFAFAF] border-gray-300 py-2 px-3 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className="h-5 w-5 flex mx-3"
                  />
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-40 py-2 px-4 mt-4 bg-[#1D1D1D] text-[#00EFD0] font-bold rounded-xl border-2 border-[#00EFD0] shadow-md hover:bg-[#00EFD0] hover:text-[#1D1D1D] hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-700">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-black hover:underline"
            >
              Sign in
            </Link>
          </p>

          {message && (
            <p className="mt-4 text-center text-sm text-red-600">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
