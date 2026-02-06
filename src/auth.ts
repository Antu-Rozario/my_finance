import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { compare } from 'bcryptjs'
import prisma from '@/lib/prisma'
import type { UserRole } from '@/generated/prisma/client'
import { authConfig } from './auth.config'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      email: string
      name: string | null
      role: UserRole
      image?: string | null
    }
  }

  interface User {
    id: string
    email: string
    name: string | null
    role: UserRole
    image?: string | null
  }
}

declare module '@auth/core/jwt' {
  interface JWT {
    id: string
    role: UserRole
    email: string
    name: string | null
    picture?: string | null
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  session: {
    strategy: 'jwt',
  },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'email@example.com',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password are required')
        }

        const email = credentials.email as string
        const password = credentials.password as string

        // Find user by email
        const user = await prisma.user.findUnique({
          where: { email },
          select: {
            id: true,
            email: true,
            name: true,
            password: true,
            role: true,
            image: true,
          },
        })

        if (!user) {
          throw new Error('Invalid email or password')
        }

        // Verify password
        const isPasswordValid = await compare(password, user.password)

        if (!isPasswordValid) {
          throw new Error('Invalid email or password')
        }

        console.log('User authenticated:', { id: user.id, email: user.email, role: user.role })

        // Return user without password
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          image: user.image,
        }
      },
    }),
  ],
  callbacks: {
    ...authConfig.callbacks,
    async jwt({ token, user }) {
      // Add user info to token on sign in
      if (user) {
        token.id = user.id
        token.role = user.role
        token.email = user.email
        token.name = user.name
        token.picture = user.image
        console.log('JWT callback - adding to token:', { id: user.id, role: user.role })
      }
      return token
    },
    async session({ session, token }) {
      // Add user info from token to session
      if (token && session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as UserRole
        session.user.email = token.email as string
        session.user.name = token.name as string | null
        session.user.image = token.picture as string | null | undefined
      }
      return session
    },
  },
  debug: true,
})
