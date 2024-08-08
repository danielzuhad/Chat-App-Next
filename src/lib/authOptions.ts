import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./prisma";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginSchema } from "@/schemas";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials) {
        try {
          const validatedCredentials = loginSchema.safeParse(credentials);

          if (validatedCredentials.success) {
            const { email } = validatedCredentials.data;

            const user = await db.user.findUnique({
              where: { email },
            });

            if (!user) {
              throw new Error("You are not registered");
            }

            return user;
          } else {
            throw new Error("Missing email or password");
          }
        } catch (error) {
          console.error("Authorization error:", error);
          throw new Error("Authorization failed");
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        return true; // Allow Google sign-in
      }
      return true; // Allow other sign-ins
    },
  },
};
