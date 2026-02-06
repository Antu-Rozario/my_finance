"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface DatePickerProps {
    value?: Date
    onChange?: (date: Date | undefined) => void
    placeholder?: string
    className?: string
    disabled?: boolean
}

export function DatePicker({ value, onChange, placeholder = "Pick a date", className, disabled }: DatePickerProps) {
    const [open, setOpen] = React.useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    disabled={disabled}
                    className={cn(
                        "justify-start text-left font-normal",
                        !value && "text-muted-foreground",
                        className
                    )}
                >
                    <CalendarIcon className="h-3.5 w-3.5 shrink-0 opacity-50" />
                    {value ? format(value, "MMM d, yyyy") : <span>{placeholder}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={value}
                    onSelect={(date) => {
                        onChange?.(date)
                        setOpen(false)
                    }}
                    defaultMonth={value}
                />
            </PopoverContent>
        </Popover>
    )
}
