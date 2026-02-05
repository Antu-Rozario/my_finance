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

      // In middleware, role might be at auth.role (from JWT) or auth.user.role (from session)
      const role = (auth as any)?.role || auth?.user?.role

      console.log('Middleware check:', {
        path: nextUrl.pathname,
        isLoggedIn,
        fullAuth: JSON.stringify(auth),
        role,
        userRole: auth?.user?.role,
        authRole: (auth as any)?.role,
        isAdmin: role === 'ADMIN'
      })

      // Allow unauthenticated access to auth pages
      if (isOnAuthPage) {
        if (isLoggedIn) {
          // Redirect logged-in users away from auth pages
          return Response.redirect(new URL('/', nextUrl))
        }
        return true
      }

      // Require login for all protected pages
      if (!isLoggedIn) {
        return false
      }

      // Check admin access
      if (isOnAdminPage) {
        const isAdmin = role === 'ADMIN'
        if (!isAdmin) {
          // Redirect non-admin users to home
          return Response.redirect(new URL('/', nextUrl))
        }
        return true
      }

      // Allow access to all other pages for logged-in users
      return true
    },
  },
  providers: [], // Providers will be added in auth.ts
} satisfies NextAuthConfig
