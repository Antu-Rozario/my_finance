import type { NextAuthConfig } from 'next-auth'

// Edge-compatible auth configuration (no Prisma, no bcrypt)
export const authConfig = {
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/auth/login',
    error: '/auth/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user
      const isOnAuthPage = nextUrl.pathname.startsWith('/auth/')
      const isOnAdminPage = nextUrl.pathname.startsWith('/admin')

      // Redirect authenticated users away from auth pages to home
      if (isOnAuthPage && isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl))
      }

      // Allow unauthenticated access to auth pages
      if (isOnAuthPage) {
        return true
      }

      // Require login for protected pages
      if (!isLoggedIn) {
        return false
      }

      // Check admin access (user must be logged in AND have ADMIN role)
      if (isOnAdminPage) {
        const isAdmin = auth.user?.role === 'ADMIN'
        console.log('Admin check:', { role: auth.user?.role, isAdmin })
        return isAdmin
      }

      // Allow access to all other pages for logged-in users
      return true
    },
  },
  providers: [], // Providers will be added in auth.ts
} satisfies NextAuthConfig
