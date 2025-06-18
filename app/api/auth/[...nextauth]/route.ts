import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/db";
import bcrypt from "bcryptjs";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

// Extend the built-in session types
declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name?: string | null;
            email?: string | null;
            image?: string | null;
        };
    }
}

// Extend the built-in JWT types
declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        picture?: string;
    }
}

const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: any): Promise<any> {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Missing email or password");
                }

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                });

                if (!user || !user.password) {
                    throw new Error("Incorrect email or password");
                }

                const isValid = await bcrypt.compare(
                    credentials.password,
                    user.password
                );

                if (!isValid) {
                    throw new Error("Incorrect email or password");
                }

                return {
                    id: user.id.toString(),
                    email: user.email,
                    name:
                        user.name ||
                        `${user.firstName} ${user.lastName}`.trim(),
                    image: user.avatar || null,
                };
            },
        }),
    ],
    callbacks: {
        async signIn({ profile, account, user }) {
            if (account?.provider === "google" && profile) {
                try {
                    // Check if user exists
                    const existingUser = await prisma.user.findUnique({
                        where: { email: profile.email! },
                    });

                    if (!existingUser) {
                        // Create new user if doesn't exist
                        await prisma.user.create({
                            data: {
                                email: profile.email!,
                                name: profile.name,
                                avatar: profile.image,
                                authProvider: "google",
                            },
                        });
                    } else if (existingUser.authProvider === "credentials") {
                        // Update existing user if they previously used credentials
                        await prisma.user.update({
                            where: { email: profile.email! },
                            data: {
                                name: profile.name,
                                avatar: profile.image,
                                authProvider: "google",
                            },
                        });
                    }
                    return true;
                } catch (error) {
                    console.error("Error during Google sign in:", error);
                    return false;
                }
            }
            return true;
        },

        async jwt({ token, profile, account, user }) {
            if (account && profile) {
                token.id = user.id;
                token.name = profile.name || user.name || null;
                //  token.name = user.name || null;
                token.email = profile.email || user.email;
                token.picture = profile.image || user.image || undefined;
            }
            return token;
        },

        async session({ session, token }: { session: Session; token: JWT }) {
            if (token && session.user) {
                session.user.id = token.id;
                session.user.name = token.name || null;
                session.user.email = token.email as string;
                session.user.image = token.picture as string;
            }
            return session;
        },

        async redirect({ baseUrl }) {
            return `${baseUrl}/`;
        },
    },
    pages: {
        signIn: "/login",
        error: "/login",
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
