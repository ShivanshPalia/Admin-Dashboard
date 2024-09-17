// "use server"
// import { signOut,signIn } from "@/app/api/auth/[...nextauth]/route";
// import { revalidatePath } from "next/cache";

// export const login = async (provider: string)=>{
//     await signIn(provider, {redirectTo:"/"});
//     revalidatePath("/")
// }

// export const logout = async () =>{
//     await signOut({redirectTo:"/"});
//     revalidatePath("/")
// }

// "use client";  // Add this to ensure it's run on the client side

// import { signIn, signOut } from "next-auth/react";
// import { revalidatePath } from "next/cache";

// // Function to handle login
// export const login = async (provider: string) => {
//     await signIn(provider, { callbackUrl: "/" });  // Use callbackUrl to redirect after login
//     revalidatePath("/");  // Revalidate the cache for the path
// }

// export const loginWithCredentials = async (email: string, password: string) => {
//     const response = await signIn("credentials", {
//         redirect: false, // Prevent automatic redirect
//         email,
//         password,
//     });

//     if (response?.error) {
//         console.error("Login failed:", response.error);
//         return false;
//     }

//     revalidatePath("/"); // Revalidate cache
//     return true; // Return true if login was successful
// };

// // Function to handle logout
// export const logout = async () => {
//     await signOut({ callbackUrl: "/" });  // Use callbackUrl to redirect after logout
//     revalidatePath("/");  // Revalidate the cache for the path
// }

"use client";  // Ensure this is a client-side only code

import { signIn, signOut } from "next-auth/react";
import { revalidatePath } from "next/cache";

// Function to handle login
export const login = async (provider: string) => {
    try {
        const response = await signIn(provider, { callbackUrl: "/" });
        if (response?.error) {
            console.error("OAuth login failed:", response.error);
            return false;
        }
        revalidatePath("/");  // Revalidate cache for the current path
        return true;
    } catch (error) {
        console.error("Login error:", error);
        return false;
    }
};

// Function for credentials login
export const loginWithCredentials = async (email: string, password: string) => {
    try {
        const response = await signIn("credentials", {
            redirect: false, // Prevent automatic redirect
            email,
            password,
        });

        if (response?.error) {
            console.error("Login failed:", response.error);
            return false;
        }

        revalidatePath("/"); // Revalidate cache after login
        return true; // Return true if login was successful
    } catch (error) {
        console.error("Login error:", error);
        return false;
    }
};

// Function to handle logout
export const logout = async () => {
    try {
        await signOut({ callbackUrl: "/" });
        revalidatePath("/");  // Revalidate cache after logout
    } catch (error) {
        console.error("Logout error:", error);
    }
};


