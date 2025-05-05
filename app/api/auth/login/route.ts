// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import { loginUser } from "@/lib/authentication";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json(
                { error: "Missing credentials" },
                { status: 400 }
            );
        }

        const result = await loginUser(email, password);
        return NextResponse.json(result, { status: 200 });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 401 });
    }
}
