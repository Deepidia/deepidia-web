"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const errs: { email?: string; password?: string } = {};
    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.email) {
      errs.email = "Email is required.";
    } else if (!emailRegex.test(form.email)) {
      errs.email = "Email is not valid.";
    }

    if (!form.password) {
      errs.password = "Password is required.";
    } else if (form.password.length < 6) {
      errs.password = "Password must be at least 6 characters.";
    }

    setErrors(errs);

    // Return true jika tidak ada error
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" })); // reset error saat input berubah
    setMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    if (!validate()) {
      return;
    }

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Login failed");
        return;
      }

      setMessage("Login successful!");

      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/");
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Something went wrong");
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
        <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
          Sign in
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-md border border-gray-300 rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                placeholder="Enter your email"
                value={form.email}
                className={`mt-1 block w-full text-[#AFAFAF]  rounded-md border px-3 py-2 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-700"
              >
                Password
              </label>
              <div className="relative mt-1">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  value={form.password}
                  className={`mt-1 block w-full text-[#AFAFAF]  rounded-md border px-3 py-2 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className="h-5 w-5 flex mx-3 text-[#AFAFAF] "
                  />
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 bg-[#1D1D1D] text-[#00EFD0] font-bold rounded-xl border-2 border-[#00EFD0] shadow-md hover:bg-[#00EFD0] hover:text-[#1D1D1D] hover:shadow-lg transition-all duration-300 ease-in-out"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">or</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => signIn("google")}
            className="w-full flex items-center justify-center gap-3 py-2 px-4 rounded-lg shadow-md text-white font-medium cursor-pointer transition-colors duration-300"
            style={{ backgroundColor: "#4285F4" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#357ae8")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#4285F4")
            }
          >
            <img
              src="/logo-google.png"
              alt="Google Logo"
              className="h-6 w-6 bg-white rounded-sm"
            />
            Sign in with Google
          </button>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-black hover:underline"
            >
              Sign up
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
