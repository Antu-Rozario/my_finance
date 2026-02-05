import NextAuth from 'next-auth'
import { authConfig } from './src/auth.config'

// Use NextAuth middleware with edge-compatible config
export default NextAuth(authConfig).auth

// Configure which routes to run middleware on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - public folder
     * - api/auth (NextAuth API routes)
     */
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*|api/auth).*)',
  ],
}
