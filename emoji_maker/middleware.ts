import { NextResponse } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/"]);

export default clerkMiddleware(async (auth, req) => {
    const { userId, redirectToSignIn } = await auth();

  if (!userId && isProtectedRoute(req)){
    return redirectToSignIn({returnBackUrl: "/"});
  } 

  if(userId && isProtectedRoute(req)){
    return NextResponse.next();
  }
});



export const config = {
  matcher: ["/((?!_next|[^?]*\\.(?:html?|css|js)).*)","/","/(api|trpc)(.*)"]
};