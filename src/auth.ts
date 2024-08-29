// import NextAuth, { CredentialsSignin } from "next-auth"
// import google from 'next-auth/providers/google'
// import twitter from 'next-auth/providers/twitter'
// import credentials from 'next-auth/providers/credentials'
// import Github from 'next-auth/providers/github'
// import {compare} from 'bcryptjs'
// import { db } from "./db"
// import { PrismaAdapter } from "@auth/prisma-adapter"
// export const { handlers:{GET,POST}, signIn, signOut, auth } = NextAuth({
//     adapter:PrismaAdapter(db),
//   providers: [
// Github({
//     clientId:process.env.AUTH_GITHUB_ID as string,
//     clientSecret:process.env.AUTH_GITHUB_SECRET as string
// }),
// google({
//     clientId:process.env.AUTH_GOOGLE_ID,
//     clientSecret:process.env.AUTH_GOOGLE_SECRET,
//     authorization:{
//         params:{
//             prompt:"consent",
//             access_type:"offline",
//             response_type:"code"
//         }
//     }
// })],
// secret: process.env.NEXTAUTH_SECRET,
// debug: true, 
// })


import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import TwitterProvider from 'next-auth/providers/twitter';
import CredentialsProvider from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import { compare } from 'bcryptjs';
import { db } from "./db";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  // Add callbacks for additional logging and error handling
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        console.log('SignIn Callback:', { user, account, profile });
        return true;
      } catch (error) {
        console.error('Error in signIn callback:', error);
        return false;
      }
    },
    async redirect({ url, baseUrl }) {
      console.log('Redirect Callback:', { url, baseUrl });
      return baseUrl; // Ensures redirect to the base URL
    },
    async session({ session, token, user }) {
      console.log('Session Callback:', { session, token, user });
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log('JWT Callback:', { token, user, account, profile, isNewUser });
      return token;
    },
  }, 
});

