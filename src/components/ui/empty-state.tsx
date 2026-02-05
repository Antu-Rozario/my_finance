import { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface EmptyStateProps {
  /**
   * Icon component to display
   */
  icon?: LucideIcon

  /**
   * Title text
   */
  title: string

  /**
   * Description text (optional)
   */
  description?: string

  /**
   * Call-to-action button (optional)
   */
  action?: {
    label: string
    onClick: () => void
    icon?: LucideIcon
  }

  /**
   * Additional CSS classes
   */
  className?: string
}

export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center p-8 text-center',
        className
      )}
    >
      {Icon && (
        <div className="mb-4 rounded-full bg-muted p-3">
          <Icon className="h-6 w-6 text-muted-foreground" />
        </div>
      )}

      <h3 className="text-lg font-semibold">{title}</h3>

      {description && (
        <p className="mt-2 text-sm text-muted-foreground max-w-md">
          {description}
        </p>
      )}

      {action && (
        <Button onClick={action.onClick} className="mt-4">
          {action.icon && <action.icon className="mr-2 h-4 w-4" />}
          {action.label}
        </Button>
      )}
    </div>
  )
}
