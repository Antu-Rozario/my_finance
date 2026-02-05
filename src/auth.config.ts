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

      // Allow access to auth pages
      if (isOnAuthPage) {
        return true
      }

      // Require login for all other pages
      if (!isLoggedIn) {
        return false
      }

      // Check admin access
      if (isOnAdminPage) {
        return auth.user.role === 'ADMIN'
      }

      return true
    },
  },
  providers: [], // Providers will be added in auth.ts
} satisfies NextAuthConfig
