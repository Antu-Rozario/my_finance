import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import { UserRole } from '@/generated/prisma/client'

/**
 * Get the current authenticated user session
 * Returns null if not authenticated
 */
export async function getCurrentUser() {
  const session = await auth()
  return session?.user ?? null
}

/**
 * Require authentication - redirects to login if not authenticated
 * Returns the authenticated user
 */
export async function requireAuth() {
  const user = await getCurrentUser()

  if (!user) {
    redirect('/auth/login')
  }

  return user
}

/**
 * Require admin role - redirects to unauthorized if not admin
 * Returns the authenticated admin user
 */
export async function requireAdmin() {
  const user = await requireAuth()

  if (user.role !== UserRole.ADMIN) {
    redirect('/unauthorized')
  }

  return user
}

/**
 * Check if the current user is an admin
 * Returns false if not authenticated or not admin
 */
export async function checkIsAdmin() {
  const user = await getCurrentUser()
  return user?.role === UserRole.ADMIN
}

/**
 * Check if the current user is authenticated
 */
export async function checkIsAuthenticated() {
  const user = await getCurrentUser()
  return user !== null
}
