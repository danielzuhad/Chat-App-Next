import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";
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
    error: "/login",
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
        const validatedCredentials = loginSchema.safeParse(credentials);

        if (validatedCredentials.success) {
          const { email } = validatedCredentials.data;

          const user = await db.user.findUnique({
            where: {
              email,
            },
          });

          if (!user) {
            throw new Error("You are not registered");
          }

          return user;
        } else {
          throw new Error("Missing email or password");
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account && account.provider === "google") {
        return true;
      }
      return true; // Allow sign in
    },
  },
};
