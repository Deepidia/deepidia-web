import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "./authentication"; // Your custom login function

type CustomUser = {
    id: string;
    firstName?: string | null;
    lastName?: string | null;
    email: string;
    name?: string | null;
};

type CustomSession = {
    user: {
        id: string;
        email?: string | null;
        name?: string | null;
        firstName?: string | null;
        lastName?: string | null;
    };
};

type CustomToken = {
    id: string;
    email?: string | null;
    name?: string | null;
    firstName?: string | null;
    lastName?: string | null;
};

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "email@example.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password required");
                }
                try {
                    // Use your custom login logic
                    const user = await loginUser(
                        credentials.email,
                        credentials.password
                    );
                    // Return user object if login is successful
                    return user.user as CustomUser;
                } catch (error: any) {
                    throw new Error(error.message || "Login failed");
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                const customUser = user as CustomUser;
                token.id = customUser.id;
                token.email = customUser.email;
                token.firstName = customUser.firstName || "";
                token.lastName = customUser.lastName || "";
                token.name = `${customUser.firstName} ${customUser.lastName}`;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                const customToken = token as CustomToken;
                (session as CustomSession).user = {
                    id: customToken.id,
                    email: customToken.email,
                    firstName: customToken.firstName,
                    lastName: customToken.lastName,
                    name: customToken.name,
                };
            }
            return session;
        },
    },
};
