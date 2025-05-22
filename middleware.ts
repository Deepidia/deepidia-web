import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Example: Check for a session cookie
  const isLoggedIn = request.cookies.get('next-auth.session-token') || request.cookies.get('__Secure-next-auth.session-token');

  // Protect /protected and /profile routes
  if (
    (request.nextUrl.pathname.startsWith('/protected'))
  ) {
    // Redirect to login page
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // // Protect /homepage routes
  // if (request.nextUrl.pathname.startsWith('/homepage') && !isLoggedIn) {
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }

  // Allow the request to continue
  return NextResponse.next();
}

// Optionally, limit middleware to certain paths
export const config = {
  matcher: ['/protected/:path*'],
};
