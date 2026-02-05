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

      // Allow unauthenticated access to auth pages
      if (isOnAuthPage) {
        if (isLoggedIn) {
          // Redirect logged-in users away from auth pages
          return Response.redirect(new URL('/', nextUrl))
        }
        return true
      }

      // Require login for all other pages
      // Don't check roles here - let pages handle their own authorization with requireAdmin()
      if (!isLoggedIn) {
        return false
      }

      // Allow all logged-in users to access any page
      // Pages will handle role-based access control themselves
      return true
    },
  },
  providers: [], // Providers will be added in auth.ts
} satisfies NextAuthConfig
