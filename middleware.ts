import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // Get the session token from cookies
  const sessionToken = request.cookies.get("session")?.value;
  
  // If no session token, redirect to sign-in
  if (!sessionToken) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sign-in|assets).*)"],
};


