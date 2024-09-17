// import NextAuth from "next-auth"
// import Github from "next-auth/providers/github"
// import { db } from "./db"
// import bcrypt from "bcryptjs"
// import credentials from "next-auth/providers/credentials"
// import {PrismaAdapter} from "@auth/prisma-adapter"

// if (!process.env.AUTH_GITHUB_ID || !process.env.AUTH_GITHUB_SECRET) {
//   throw new Error("Missing GitHub OAuth environment variables. Ensure AUTH_GITHUB_ID and AUTH_GITHUB_SECRET are defined.")
// }else{
//   console.log(process.env.AUTH_GITHUB_SECRET , process.env.AUTH_GITHUB_ID);
  
// }

// export const { handlers :{GET,POST}, signIn, signOut, auth } = NextAuth({
//   adapter :PrismaAdapter(db) ,
//   session : {strategy:"jwt"},
//   providers: [
//     Github({
//         clientId:process.env.AUTH_GITHUB_ID,
//         clientSecret:process.env.AUTH_GITHUB_SECRET
//     }),
   
//   ],
  

//   debug: true,
// })


// auth.ts
// import NextAuth from "next-auth";
// import Github from "next-auth/providers/github";
// import { db } from "./db";
// import bcrypt from "bcryptjs";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { log } from "console";

// // Ensure GitHub OAuth credentials are available
// if (!process.env.AUTH_GITHUB_ID || !process.env.AUTH_GITHUB_SECRET) {
//   throw new Error("Missing GitHub OAuth environment variables.");
// } else {
//   console.log("GitHub Credentials:", process.env.AUTH_GITHUB_ID, process.env.AUTH_GITHUB_SECRET);
// }

// // Function to log errors in PrismaAdapter
// function prismaAdapterWithErrorLogging() {
//   try {
//     console.log("Initializing PrismaAdapter...");
//     const adapter = PrismaAdapter(db);
//     console.log("PrismaAdapter initialized successfully.");
//     return adapter;
//   } catch (error) {
//     console.error("Error with PrismaAdapter:", error);
//     throw new Error("PrismaAdapter configuration failed.");
//   }
// }

// // NextAuth Configuration
// export const { handlers: { GET, POST }, signIn, signOut, auth } = NextAuth({
//   adapter: prismaAdapterWithErrorLogging(), // Wrapping the PrismaAdapter with error handling
//   session: { strategy: "jwt" }, // Using JWT-based sessions
//   providers: [
//     // GitHub provider
//     Github({
//       clientId: process.env.AUTH_GITHUB_ID!,
//       clientSecret: process.env.AUTH_GITHUB_SECRET!,
//     }),
    
//   ],
//   secret: process.env.AUTH_SECRET,
//   debug: true, // Enable debug mode for more detailed logs
// });

// // Enable more verbose logging in the environment
// // In your .env file, add: NEXTAUTH_DEBUG=true
