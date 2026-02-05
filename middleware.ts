import { auth } from './src/auth'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { UserRole } from './generated/prisma/client'

// Public routes that don't require authentication
const publicRoutes = ['/auth/login', '/auth/register', '/unauthorized']

// Admin-only routes
const adminRoutes = ['/admin']

export default auth(async function middleware(req) {
  const session = req.auth
  const { pathname } = req.nextUrl

  // Check if route is public
  const isPublicRoute = publicRoutes.some((route) => pathname.startsWith(route))

  // Check if route is admin-only
  const isAdminRoute = adminRoutes.some((route) => pathname.startsWith(route))

  // If user is authenticated and trying to access auth pages, redirect to home
  if (session?.user && isPublicRoute && pathname.startsWith('/auth/')) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  // If user is not authenticated and trying to access protected routes
  if (!session?.user && !isPublicRoute) {
    const loginUrl = new URL('/auth/login', req.url)
    loginUrl.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(loginUrl)
  }

  // If user is not admin and trying to access admin routes
  if (session?.user && isAdminRoute && session.user.role !== UserRole.ADMIN) {
    return NextResponse.redirect(new URL('/unauthorized', req.url))
  }

  return NextResponse.next()
})

// Configure which routes to run middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*|api/auth).*)',
  ],
}
