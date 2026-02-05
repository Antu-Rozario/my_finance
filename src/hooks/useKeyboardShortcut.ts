'use client'

import { useEffect, useCallback } from 'react'

interface KeyboardShortcutOptions {
  /**
   * Require Ctrl/Cmd key
   */
  ctrl?: boolean

  /**
   * Require Alt/Option key
   */
  alt?: boolean

  /**
   * Require Shift key
   */
  shift?: boolean

  /**
   * Prevent default browser behavior
   */
  preventDefault?: boolean

  /**
   * Allow shortcut when typing in input fields
   */
  enableOnFormTags?: boolean
}

/**
 * Hook for registering keyboard shortcuts
 *
 * @example
 * useKeyboardShortcut('n', () => {
 *   setIsDialogOpen(true)
 * }, { ctrl: true })
 *
 * useKeyboardShortcut('?', () => {
 *   setShowHelp(true)
 * })
 */
export function useKeyboardShortcut(
  key: string,
  callback: (event: KeyboardEvent) => void,
  options: KeyboardShortcutOptions = {}
): void {
  const {
    ctrl = false,
    alt = false,
    shift = false,
    preventDefault = true,
    enableOnFormTags = false,
  } = options

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      // Check if we're in an input field
      const target = event.target as HTMLElement
      const isFormTag = ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)

      // Skip if in form field and not explicitly enabled
      if (isFormTag && !enableOnFormTags) {
        return
      }

      // Check modifier keys
      const ctrlPressed = event.ctrlKey || event.metaKey // Support both Ctrl and Cmd
      const altPressed = event.altKey
      const shiftPressed = event.shiftKey

      // Normalize key for comparison (case-insensitive)
      const pressedKey = event.key.toLowerCase()
      const targetKey = key.toLowerCase()

      // Check if all conditions match
      const modifiersMatch =
        (ctrl ? ctrlPressed : !ctrlPressed || pressedKey === targetKey) &&
        (alt ? altPressed : !altPressed || pressedKey === targetKey) &&
        (shift ? shiftPressed : !shiftPressed || pressedKey === targetKey)

      if (pressedKey === targetKey && modifiersMatch) {
        if (preventDefault) {
          event.preventDefault()
        }
        callback(event)
      }
    },
    [key, callback, ctrl, alt, shift, preventDefault, enableOnFormTags]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])
}

/**
 * Hook for registering multiple keyboard shortcuts
 *
 * @example
 * useKeyboardShortcuts({
 *   'n': () => openDialog(),
 *   'ctrl+s': () => save(),
 *   '?': () => showHelp()
 * })
 */
export function useKeyboardShortcuts(
  shortcuts: Record<string, () => void>
): void {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const target = event.target as HTMLElement
      const isFormTag = ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)

      // Build shortcut string
      const modifiers: string[] = []
      if (event.ctrlKey || event.metaKey) modifiers.push('ctrl')
      if (event.altKey) modifiers.push('alt')
      if (event.shiftKey) modifiers.push('shift')

      const key = event.key.toLowerCase()
      const shortcutStr = [...modifiers, key].join('+')

      // Check if this shortcut is registered
      if (shortcuts[shortcutStr] || shortcuts[key]) {
        // Don't trigger if in form field, unless it's a special combo
        if (isFormTag && modifiers.length === 0) {
          return
        }

        event.preventDefault()
        const handler = shortcuts[shortcutStr] || shortcuts[key]
        handler()
      }
    },
    [shortcuts]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])
}
