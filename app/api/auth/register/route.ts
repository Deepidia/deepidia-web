import { NextResponse } from "next/server";
import { registerUser } from "@/lib/authentication";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, password } = body;

        if (!firstName || !lastName || !email || !password) {
            return NextResponse.json(
                { error: "Missing fields" },
                { status: 400 }
            );
        }

        const result = await registerUser(firstName, lastName, email, password);
        return NextResponse.json(result, { status: 201 });
    } catch (error: any) {
        console.error("Register API error:", error);
        return NextResponse.json(
            { error: error.message || "Server error" },
            { status: 500 }
        );
    }
}
