// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { loginUser } from "@/lib/authentication";
import prisma from "@/lib/db"; // or wherever your singleton is

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log("Login request body:", body);
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json(
                { error: "Missing credentials" },
                { status: 400 }
            );
        }

        const result = await loginUser(email, password);
        console.log("Login result:", result);
        return NextResponse.json(result, { status: 200 });
    } catch (error: any) {
        console.error("Login API error:", error);
        return NextResponse.json(
            { error: error.message || "Server error" },
            { status: 500 }
        );
    }
}