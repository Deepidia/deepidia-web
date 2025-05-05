"use client";

import { useState } from "react";

export default function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");

        const res = await fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify(form),
            headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();
        setMessage(data.message || data.error);
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                    className="w-full bg-green-600 text-white py-2"
                >
                    Login
                </button>
            </form>
            {message && <p className="mt-4">{message}</p>}
        </div>
    );
}
