// src/middleware.ts

import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Middleware function to check authentication
export async function middleware(req: NextRequest) {
  // Retrieve the token from the request
  const token = await getToken({
      req,
      salt: "",
      secret: ""
  });

  // If no token is present, redirect to the login page
  if (!token) {
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }

  // If token exists, proceed with the request
  return NextResponse.next();
}

// Apply the middleware to specific routes
export const config = {
  matcher: ["/dashboard", "/profile", "/settings"],  // Protect these routes
};
