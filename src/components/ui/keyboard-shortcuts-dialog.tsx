'use client'

import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Keyboard } from 'lucide-react'

interface Shortcut {
  keys: string[]
  description: string
  section?: string
}

interface KeyboardShortcutsDialogProps {
  /**
   * List of available shortcuts
   */
  shortcuts?: Shortcut[]
}

const defaultShortcuts: Shortcut[] = [
  {
    section: 'General',
    keys: ['?'],
    description: 'Show keyboard shortcuts',
  },
  {
    section: 'Transactions',
    keys: ['N'],
    description: 'Add new transaction',
  },
  {
    section: 'Transactions',
    keys: ['Ctrl', 'F'],
    description: 'Focus search',
  },
  {
    section: 'Transactions',
    keys: ['Delete'],
    description: 'Delete selected',
  },
  {
    section: 'Transactions',
    keys: ['Escape'],
    description: 'Close dialog / Clear selection',
  },
]

export function KeyboardShortcutsDialog({
  shortcuts = defaultShortcuts,
}: KeyboardShortcutsDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Show dialog when '?' is pressed
      if (event.key === '?' && !event.ctrlKey && !event.altKey) {
        const target = event.target as HTMLElement
        const isFormTag = ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)

        if (!isFormTag) {
          event.preventDefault()
          setIsOpen(true)
        }
      }

      // Close dialog on Escape
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  // Group shortcuts by section
  const groupedShortcuts = shortcuts.reduce((acc, shortcut) => {
    const section = shortcut.section || 'Other'
    if (!acc[section]) {
      acc[section] = []
    }
    acc[section].push(shortcut)
    return acc
  }, {} as Record<string, Shortcut[]>)

  return (
    <>
      {/* Trigger Button (optional, can be placed in header/footer) */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
        title="Show keyboard shortcuts"
      >
        <Keyboard className="h-4 w-4" />
        <span className="hidden sm:inline">Keyboard Shortcuts</span>
        <Badge variant="outline" className="ml-1 hidden md:inline-flex">
          ?
        </Badge>
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Keyboard className="h-5 w-5" />
              Keyboard Shortcuts
            </DialogTitle>
            <DialogDescription>
              Navigate faster using these keyboard shortcuts
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            {Object.entries(groupedShortcuts).map(([section, sectionShortcuts]) => (
              <div key={section}>
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                  {section}
                </h3>
                <div className="space-y-2">
                  {sectionShortcuts.map((shortcut, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted/50 transition-colors"
                    >
                      <span className="text-sm">{shortcut.description}</span>
                      <div className="flex items-center gap-1">
                        {shortcut.keys.map((key, keyIndex) => (
                          <span key={keyIndex} className="flex items-center gap-1">
                            <kbd className="px-2 py-1 text-xs font-semibold bg-muted border border-border rounded">
                              {key}
                            </kbd>
                            {keyIndex < shortcut.keys.length - 1 && (
                              <span className="text-xs text-muted-foreground">+</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-muted rounded-md">
            <p className="text-xs text-muted-foreground">
              <strong>Tip:</strong> Press <kbd className="px-1 py-0.5 text-xs bg-background border border-border rounded">?</kbd> at any time to view this help dialog.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
