"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { type DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface DateRangePickerProps {
    value?: DateRange
    onChange?: (range: DateRange | undefined) => void
    placeholder?: string
    className?: string
    disabled?: boolean
}

export function DateRangePicker({ value, onChange, placeholder = "Pick date range", className, disabled }: DateRangePickerProps) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    disabled={disabled}
                    className={cn(
                        "justify-start text-left font-normal",
                        !value?.from && "text-muted-foreground",
                        className
                    )}
                >
                    <CalendarIcon className="h-3.5 w-3.5 shrink-0 opacity-50" />
                    {value?.from ? (
                        value.to ? (
                            <span>{format(value.from, "MMM d, yyyy")} - {format(value.to, "MMM d, yyyy")}</span>
                        ) : (
                            <span>{format(value.from, "MMM d, yyyy")}</span>
                        )
                    ) : (
                        <span>{placeholder}</span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="range"
                    selected={value}
                    onSelect={onChange}
                    numberOfMonths={2}
                    defaultMonth={value?.from}
                />
            </PopoverContent>
        </Popover>
    )
}

export type { DateRange }
