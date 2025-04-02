// middleware.ts
import {auth} from "@/components/auth/auth";
import { NextResponse } from "next/server";


export default auth(async (req: { auth: any; nextUrl: { pathname: string; }; url: string | URL | undefined; }) => {
    const isLoggedIn = !!req.auth;
    const isAuthPage = req.nextUrl.pathname.startsWith("/login");

    // Redirect logged-in users away from auth pages
    if (isAuthPage && isLoggedIn) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    // Protect all routes except public ones
    if (!isLoggedIn && !isAuthPage) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
});

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
};