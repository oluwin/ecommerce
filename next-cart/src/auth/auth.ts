import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const user = { id: "1", email: "daniels@example.com" } // Mock user
                return user || null
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.user = user
            return token
        },
        async session({ session, token }) {
            session.user = token.user as any
            return session
        }
    },
    pages: {
        signIn: "/login"
    }
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);