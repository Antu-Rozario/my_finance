type LogLevel = 'debug' | 'info' | 'warn' | 'error'

interface LogContext {
  [key: string]: unknown
}

interface LogEntry {
  level: LogLevel
  message: string
  timestamp: string
  context?: LogContext
}

const isDevelopment = process.env.NODE_ENV === 'development'

// Sensitive keys that should be sanitized from logs
const SENSITIVE_KEYS = ['password', 'token', 'secret', 'apiKey', 'accessToken', 'refreshToken']

function sanitizeContext(context?: LogContext): LogContext | undefined {
  if (!context) return undefined

  const sanitized: LogContext = {}
  for (const [key, value] of Object.entries(context)) {
    if (SENSITIVE_KEYS.some(sensitive => key.toLowerCase().includes(sensitive.toLowerCase()))) {
      sanitized[key] = '[REDACTED]'
    } else if (value && typeof value === 'object') {
      sanitized[key] = sanitizeContext(value as LogContext)
    } else {
      sanitized[key] = value
    }
  }
  return sanitized
}

function formatLog(entry: LogEntry): string {
  const { level, message, timestamp, context } = entry
  const levelUpper = level.toUpperCase().padEnd(5)

  let formatted = `[${timestamp}] ${levelUpper} ${message}`

  if (context && Object.keys(context).length > 0) {
    formatted += `\n  Context: ${JSON.stringify(context, null, 2)}`
  }

  return formatted
}

function log(level: LogLevel, message: string, context?: LogContext) {
  const entry: LogEntry = {
    level,
    message,
    timestamp: new Date().toISOString(),
    context: sanitizeContext(context),
  }

  if (isDevelopment) {
    // In development, log to console with colors
    const formatted = formatLog(entry)

    switch (level) {
      case 'debug':
        console.debug(formatted)
        break
      case 'info':
        console.info(formatted)
        break
      case 'warn':
        console.warn(formatted)
        break
      case 'error':
        console.error(formatted)
        break
    }
  } else {
    // In production, you can send to external service (e.g., Sentry, LogRocket, DataDog)
    // For now, we'll still log errors to console but in a structured format
    if (level === 'error' || level === 'warn') {
      console.log(JSON.stringify(entry))
    }

    // TODO: Send to external logging service
    // Example:
    // sendToExternalService(entry)
  }
}

export const logger = {
  debug: (message: string, context?: LogContext) => {
    // Only log debug in development
    if (isDevelopment) {
      log('debug', message, context)
    }
  },

  info: (message: string, context?: LogContext) => {
    log('info', message, context)
  },

  warn: (message: string, context?: LogContext) => {
    log('warn', message, context)
  },

  error: (message: string, context?: LogContext) => {
    log('error', message, context)
  },
}

// Export for testing
export { sanitizeContext, formatLog }
