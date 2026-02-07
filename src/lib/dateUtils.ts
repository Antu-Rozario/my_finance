import { format } from 'date-fns'

/**
 * Convert "YYYY-MM-DD" to midnight in the given timezone, expressed as UTC.
 * e.g., "2026-02-07" in "America/Toronto" (EST, UTC-5) → 2026-02-07T05:00:00Z
 */
export function toMidnightUTC(dateStr: string, tz: string): Date {
    const [year, month, day] = dateStr.split('-').map(Number)
    const utcMidnight = new Date(Date.UTC(year, month - 1, day, 0, 0, 0))

    const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
    }).formatToParts(utcMidnight)

    const get = (type: string) => parseInt(parts.find(p => p.type === type)?.value || '0')
    let tzHour = get('hour')
    if (tzHour === 24) tzHour = 0

    const tzLocal = new Date(get('year'), get('month') - 1, get('day'), tzHour, get('minute'), get('second')).getTime()
    const utcLocal = new Date(year, month - 1, day, 0, 0, 0).getTime()

    const offset = utcLocal - tzLocal
    return new Date(utcMidnight.getTime() + offset)
}

/**
 * Convert "YYYY-MM-DD" to end of day (23:59:59.999) in the given timezone, as UTC.
 */
export function toEndOfDayUTC(dateStr: string, tz: string): Date {
    return new Date(toMidnightUTC(dateStr, tz).getTime() + 24 * 60 * 60 * 1000 - 1)
}

/**
 * Extract "YYYY-MM-DD" from a Date object using its local calendar fields.
 * Used for DatePicker dates which are midnight in browser's local timezone.
 */
export function extractDateStr(date: Date): string {
    const y = date.getFullYear()
    const m = String(date.getMonth() + 1).padStart(2, '0')
    const d = String(date.getDate()).padStart(2, '0')
    return `${y}-${m}-${d}`
}

/**
 * Convert a UTC Date to a shifted Date whose local calendar fields match
 * the wall-clock time in the target timezone. This allows using date-fns
 * format() and getting timezone-correct output.
 *
 * Uses formatToParts() for consistent behavior across Node.js and browsers.
 *
 * e.g., 2026-02-07T05:00:00Z in "America/Toronto" → Date that formats as "Feb 07, 2026"
 */
export function utcToTzDate(date: Date, tz: string): Date {
    const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: tz,
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
    }).formatToParts(date)

    const get = (type: string) => parseInt(parts.find(p => p.type === type)?.value || '0')
    let hour = get('hour')
    if (hour === 24) hour = 0

    return new Date(get('year'), get('month') - 1, get('day'), hour, get('minute'), get('second'))
}

/**
 * Format a UTC date for display in the user's timezone.
 */
export function formatInTz(date: Date, tz: string, fmt: string = 'MMM dd, yyyy'): string {
    return format(utcToTzDate(date, tz), fmt)
}

/**
 * Format a UTC date to "YYYY-MM-DD" in the user's timezone (for form input fields).
 */
export function formatDateForInputInTz(date: Date, tz: string): string {
    return formatInTz(date, tz, 'yyyy-MM-dd')
}

/**
 * Get "YYYY-MM" month key for a UTC date in the user's timezone.
 * Used for grouping transactions by month in reports.
 */
export function getMonthKeyInTz(date: Date, tz: string): string {
    return formatInTz(date, tz, 'yyyy-MM')
}

/**
 * Get day of week (0=Sun..6=Sat) for a UTC date in the user's timezone.
 */
export function getDayOfWeekInTz(date: Date, tz: string): number {
    return utcToTzDate(date, tz).getDay()
}

/**
 * Get month index (0-11) for a UTC date in the user's timezone.
 */
export function getMonthInTz(date: Date, tz: string): number {
    return utcToTzDate(date, tz).getMonth()
}

/**
 * Get year for a UTC date in the user's timezone.
 */
export function getYearInTz(date: Date, tz: string): number {
    return utcToTzDate(date, tz).getFullYear()
}

/**
 * Calculate the next occurrence date for a recurring transaction, timezone-safe.
 * Uses string-based date arithmetic to avoid JavaScript Date mutation issues.
 */
export function getNextOccurrenceTz(
    currentDate: Date,
    frequency: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY',
    tz: string
): Date {
    const dateStr = formatDateForInputInTz(currentDate, tz)
    const [year, month, day] = dateStr.split('-').map(Number)

    let nextYear = year
    let nextMonth = month
    let nextDay = day

    switch (frequency) {
        case 'DAILY':
            nextDay += 1
            break
        case 'WEEKLY':
            nextDay += 7
            break
        case 'MONTHLY':
            nextMonth += 1
            break
        case 'YEARLY':
            nextYear += 1
            break
    }

    // Handle month overflow (e.g., day 32 → next month)
    // Create a temp date to normalize
    const temp = new Date(nextYear, nextMonth - 1, nextDay)
    const normalizedStr = `${temp.getFullYear()}-${String(temp.getMonth() + 1).padStart(2, '0')}-${String(temp.getDate()).padStart(2, '0')}`

    return toMidnightUTC(normalizedStr, tz)
}
