'use client'

import { useState, useCallback } from 'react'
import { toast } from 'sonner'
import { handleApiError } from '@/lib/error-handler'

interface UseAsyncActionOptions<T> {
  /**
   * Callback to run on successful completion
   */
  onSuccess?: (data: T) => void | Promise<void>

  /**
   * Callback to run on error
   */
  onError?: (error: unknown) => void

  /**
   * Success message to show in toast
   */
  successMessage?: string

  /**
   * Context description for error messages (e.g., "creating transaction")
   */
  errorContext: string

  /**
   * Additional context data for logging
   */
  logContext?: Record<string, unknown>
}

type AsyncAction<TArgs extends unknown[], TReturn> = (
  ...args: TArgs
) => Promise<TReturn>

type AsyncActionResult<TArgs extends unknown[]> = [
  execute: (...args: TArgs) => Promise<void>,
  isLoading: boolean
]

/**
 * Hook for handling async actions with automatic loading state, error handling, and toast notifications
 *
 * @example
 * const [executeCreate, isCreating] = useAsyncAction(
 *   createTransaction,
 *   {
 *     successMessage: 'Transaction created successfully',
 *     errorContext: 'creating transaction',
 *     onSuccess: () => {
 *       setIsDialogOpen(false)
 *       refetchTransactions()
 *     }
 *   }
 * )
 *
 * function handleSubmit(data: FormData) {
 *   executeCreate(parseFormData(data))
 * }
 */
export function useAsyncAction<TArgs extends unknown[], TReturn>(
  action: AsyncAction<TArgs, TReturn>,
  options: UseAsyncActionOptions<TReturn>
): AsyncActionResult<TArgs> {
  const [isLoading, setIsLoading] = useState(false)

  const execute = useCallback(
    async (...args: TArgs): Promise<void> => {
      setIsLoading(true)
      try {
        const result = await action(...args)

        // Show success toast if message provided
        if (options.successMessage) {
          toast.success(options.successMessage)
        }

        // Call success callback
        if (options.onSuccess) {
          await options.onSuccess(result)
        }
      } catch (error) {
        // Get user-friendly error message
        const errorMessage = handleApiError(
          error,
          options.errorContext,
          options.logContext
        )

        // Show error toast
        toast.error(errorMessage)

        // Call error callback
        if (options.onError) {
          options.onError(error)
        }
      } finally {
        setIsLoading(false)
      }
    },
    [action, options]
  )

  return [execute, isLoading]
}
