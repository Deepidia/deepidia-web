import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      return !!profile?.email;
    },

    async jwt({ token, profile, account }) {
      // Tambahkan informasi user saat pertama kali login
      if (account && profile) {
        token.name = profile.name;
        token.email = profile.email;
      }
      return token;
    },
    
    async session({ session, token }) {
      if (token) {
        if (!session.user) {
          session.user = {}; // inisialisasi objek kosong kalau belum ada
        }

        session.user.name = token.name as string;
        session.user.email = token.email as string;
      }

      return session;
    },
    async redirect({ baseUrl }) {
      return `${baseUrl}/`;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
