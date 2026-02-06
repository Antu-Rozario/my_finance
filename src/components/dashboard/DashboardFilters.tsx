"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { DateRangePicker, type DateRange } from "@/components/ui/date-range-picker"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { format } from "date-fns"

export function DashboardFilters() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const from = searchParams.get("from")
    const to = searchParams.get("to")

    const dateRange: DateRange | undefined = from && to ? {
        from: new Date(from),
        to: new Date(to)
    } : undefined

    const handleDateChange = (range: DateRange | undefined) => {
        const params = new URLSearchParams(searchParams.toString())
        if (range?.from) {
            params.set("from", range.from.toISOString())
        } else {
            params.delete("from")
        }
        if (range?.to) {
            params.set("to", range.to.toISOString())
        } else {
            params.delete("to")
        }
        router.push(`/?${params.toString()}`)
    }

    const clearFilters = () => {
        router.push("/")
    }

    return (
        <div className="flex items-center gap-2">
            <DateRangePicker
                value={dateRange}
                onChange={handleDateChange}
                className="w-[260px]"
            />
            {(from || to) && (
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={clearFilters}
                    className="h-9 w-9 text-muted-foreground hover:text-foreground"
                >
                    <X className="h-4 w-4" />
                </Button>
            )}
        </div>
    )
}
