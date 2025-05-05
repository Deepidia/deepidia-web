"use client";

import { useState } from "react";

export default function RegisterPage() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                body: JSON.stringify(form),
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Something went wrong");

            setMessage(data.message);
        } catch (err: any) {
            setMessage(err.message);
            console.error("Register error:", err);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">Register</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    name="firstName"
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full p-2 border"
                />
                <input
                    name="lastName"
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full p-2 border"
                />
                <input
                    name="email"
                    type="email"
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-2 border"
                />
                <input
                    name="password"
                    type="password"
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full p-2 border"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2"
                >
                    Register
                </button>
            </form>
            {message && <p className="mt-4">{message}</p>}
        </div>
    );
}
