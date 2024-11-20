import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // Protect all routes under /admin except /admin/signin
  if (path.startsWith('/admin') && path !== '/admin/signin') {
    // Check for the auth session
    const session = request.cookies.get('session');

    if (!session) {
      // Redirect to the signin page if there's no session
      return NextResponse.redirect(new URL('/admin/signin', request.url));
    }
  }

  return NextResponse.next();
}