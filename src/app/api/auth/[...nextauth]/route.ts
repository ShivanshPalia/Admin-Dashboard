
import NextAuth from "next-auth";
import { db } from "@/db";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";

const  { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
  // adapter: PrismaAdapter(db),
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.id = user.id;
      return session;
    },
  },
  debug:true,
});

export { signOut, signIn, GET, POST, auth };

    

