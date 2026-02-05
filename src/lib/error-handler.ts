import { logger } from './logger'
import { ZodError } from 'zod'

/**
 * Extracts a user-friendly error message from various error types
 */
export function getErrorMessage(error: unknown): string {
  // Handle null/undefined
  if (!error) {
    return 'An unexpected error occurred'
  }

  // Handle string errors
  if (typeof error === 'string') {
    return error
  }

  // Handle Zod validation errors
  if (error instanceof ZodError || (error && typeof error === 'object' && 'issues' in error)) {
    const zodError = error as ZodError<unknown>
    const firstIssue = zodError.issues?.[0]
    if (firstIssue) {
      return `${firstIssue.path.join('.')}: ${firstIssue.message}`
    }
    return 'Please check the form fields'
  }

  // Handle standard Error objects
  if (error instanceof Error) {
    // Handle Prisma errors
    if ('code' in error) {
      return parsePrismaError(error as PrismaError)
    }

    // Handle fetch/network errors
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      return 'Network error. Please check your connection and try again'
    }

    // Return the error message
    return error.message || 'An unexpected error occurred'
  }

  // Handle objects with error property
  if (typeof error === 'object' && error !== null) {
    if ('error' in error && typeof error.error === 'string') {
      return error.error
    }
    if ('message' in error && typeof error.message === 'string') {
      return error.message
    }
  }

  return 'An unexpected error occurred'
}

interface PrismaError extends Error {
  code: string
  meta?: {
    target?: string[]
    cause?: string
  }
}

function parsePrismaError(error: PrismaError): string {
  const code = error.code

  switch (code) {
    case 'P2002':
      // Unique constraint violation
      const target = error.meta?.target?.[0] || 'field'
      return `A record with this ${target} already exists`

    case 'P2003':
      // Foreign key constraint violation
      return 'This item is referenced by other records and cannot be deleted'

    case 'P2025':
      // Record not found
      return 'The requested item was not found or has been deleted'

    case 'P2014':
      // Required relation violation
      return 'This operation would violate a required relationship'

    case 'P2000':
      // Value too long
      return 'One or more values are too long'

    case 'P2001':
      // Record does not exist
      return 'The requested record does not exist'

    case 'P2015':
      // Related record not found
      return 'A related record could not be found'

    case 'P2018':
      // Required connected records not found
      return 'Required connected records were not found'

    default:
      // Generic database error
      return error.message || 'A database error occurred'
  }
}

/**
 * Handles API errors with logging and returns a user-friendly message
 *
 * @param error - The error that occurred
 * @param context - Description of what was being done when the error occurred
 * @param additionalContext - Additional context data for logging
 * @returns User-friendly error message
 */
export function handleApiError(
  error: unknown,
  context: string,
  additionalContext?: Record<string, unknown>
): string {
  const userMessage = getErrorMessage(error)

  // Log the error with context
  logger.error(`Error ${context}`, {
    error: error instanceof Error ? {
      name: error.name,
      message: error.message,
      stack: error.stack,
    } : error,
    context,
    ...additionalContext,
  })

  return userMessage
}

/**
 * Creates a contextual error message for CRUD operations
 *
 * @param operation - The operation being performed (create, update, delete)
 * @param entity - The type of entity (transaction, account, category)
 * @param entityName - Optional name of the specific entity
 * @returns Formatted error message
 */
export function getCrudErrorMessage(
  operation: 'create' | 'update' | 'delete',
  entity: string,
  entityName?: string
): string {
  const article = ['a', 'e', 'i', 'o', 'u'].includes(entity[0]?.toLowerCase()) ? 'an' : 'a'
  const entityDisplay = entityName ? `${entity} "${entityName}"` : `${article} ${entity}`

  switch (operation) {
    case 'create':
      return `Failed to create ${entityDisplay}`
    case 'update':
      return `Failed to update ${entityDisplay}`
    case 'delete':
      return `Failed to delete ${entityDisplay}. It may be in use by other records`
    default:
      return `Failed to ${operation} ${entityDisplay}`
  }
}

/**
 * Validates that required environment variables are present
 * Throws an error if any are missing
 */
export function validateEnvVariables(required: string[]): void {
  const missing = required.filter(key => !process.env[key])

  if (missing.length > 0) {
    const message = `Missing required environment variables: ${missing.join(', ')}`
    logger.error(message)
    throw new Error(message)
  }
}
