'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Search, X, Filter } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { TransactionFilters as TFilters } from '@/actions/transactions'

interface Account {
    id: number
    name: string
}

interface Category {
    id: number
    name: string
    type: 'INCOME' | 'EXPENSE'
}

interface TransactionFiltersProps {
    filters: TFilters
    onFiltersChange: (filters: TFilters) => void
    accounts: Account[]
    categories: Category[]
}

export function TransactionFilters({
    filters,
    onFiltersChange,
    accounts,
    categories,
}: TransactionFiltersProps) {
    const [isExpanded, setIsExpanded] = useState(false)

    const handleSearchChange = (search: string) => {
        onFiltersChange({ ...filters, search, page: 1 })
    }

    const handleAccountChange = (accountId: string) => {
        onFiltersChange({
            ...filters,
            accountId: accountId === 'all' ? undefined : parseInt(accountId),
            page: 1,
        })
    }

    const handleCategoryChange = (categoryId: string) => {
        onFiltersChange({
            ...filters,
            categoryId: categoryId === 'all' ? undefined : parseInt(categoryId),
            page: 1,
        })
    }

    const handleTypeChange = (type: string) => {
        onFiltersChange({
            ...filters,
            type: type === 'all' ? undefined : (type as 'INCOME' | 'EXPENSE' | 'TRANSFER'),
            page: 1,
        })
    }

    const handleStartDateChange = (date: string) => {
        onFiltersChange({
            ...filters,
            startDate: date ? new Date(date) : undefined,
            page: 1,
        })
    }

    const handleEndDateChange = (date: string) => {
        onFiltersChange({
            ...filters,
            endDate: date ? new Date(date) : undefined,
            page: 1,
        })
    }

    const clearFilters = () => {
        onFiltersChange({ page: 1, limit: filters.limit })
        setIsExpanded(false)
    }

    const activeFilterCount = [
        filters.search,
        filters.accountId,
        filters.categoryId,
        filters.type,
        filters.startDate,
        filters.endDate,
    ].filter(Boolean).length

    const hasActiveFilters = activeFilterCount > 0

    return (
        <Card className="mb-4">
            <CardContent className="pt-6">
                <div className="space-y-4">
                    {/* Search Bar and Toggle */}
                    <div className="flex items-center gap-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <Input
                                placeholder="Search transactions (note, reference)..."
                                value={filters.search || ''}
                                onChange={(e) => handleSearchChange(e.target.value)}
                                className="pl-9"
                            />
                        </div>
                        <Button
                            variant={isExpanded ? 'default' : 'outline'}
                            size="icon"
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="relative"
                        >
                            <Filter className="h-4 w-4" />
                            {activeFilterCount > 0 && !isExpanded && (
                                <Badge
                                    variant="destructive"
                                    className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs"
                                >
                                    {activeFilterCount}
                                </Badge>
                            )}
                        </Button>
                        {hasActiveFilters && (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={clearFilters}
                                title="Clear all filters"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        )}
                    </div>

                    {/* Active Filter Chips */}
                    {hasActiveFilters && !isExpanded && (
                        <div className="flex flex-wrap gap-2">
                            {filters.search && (
                                <Badge variant="secondary" className="gap-1">
                                    Search: {filters.search}
                                    <X
                                        className="h-3 w-3 cursor-pointer"
                                        onClick={() => handleSearchChange('')}
                                    />
                                </Badge>
                            )}
                            {filters.accountId && (
                                <Badge variant="secondary" className="gap-1">
                                    Account: {accounts.find(a => a.id === filters.accountId)?.name}
                                    <X
                                        className="h-3 w-3 cursor-pointer"
                                        onClick={() => handleAccountChange('all')}
                                    />
                                </Badge>
                            )}
                            {filters.categoryId && (
                                <Badge variant="secondary" className="gap-1">
                                    Category: {categories.find(c => c.id === filters.categoryId)?.name}
                                    <X
                                        className="h-3 w-3 cursor-pointer"
                                        onClick={() => handleCategoryChange('all')}
                                    />
                                </Badge>
                            )}
                            {filters.type && (
                                <Badge variant="secondary" className="gap-1">
                                    Type: {filters.type}
                                    <X
                                        className="h-3 w-3 cursor-pointer"
                                        onClick={() => handleTypeChange('all')}
                                    />
                                </Badge>
                            )}
                            {(filters.startDate || filters.endDate) && (
                                <Badge variant="secondary" className="gap-1">
                                    Date Range
                                    <X
                                        className="h-3 w-3 cursor-pointer"
                                        onClick={() => {
                                            handleStartDateChange('')
                                            handleEndDateChange('')
                                        }}
                                    />
                                </Badge>
                            )}
                        </div>
                    )}

                    {/* Expanded Filters */}
                    {isExpanded && (
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 pt-2 border-t">
                            {/* Account Filter */}
                            <div className="space-y-2">
                                <Label htmlFor="account-filter">Account</Label>
                                <Select
                                    value={filters.accountId?.toString() || 'all'}
                                    onValueChange={handleAccountChange}
                                >
                                    <SelectTrigger id="account-filter">
                                        <SelectValue placeholder="All accounts" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All accounts</SelectItem>
                                        {accounts.map((account) => (
                                            <SelectItem key={account.id} value={account.id.toString()}>
                                                {account.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Category Filter */}
                            <div className="space-y-2">
                                <Label htmlFor="category-filter">Category</Label>
                                <Select
                                    value={filters.categoryId?.toString() || 'all'}
                                    onValueChange={handleCategoryChange}
                                >
                                    <SelectTrigger id="category-filter">
                                        <SelectValue placeholder="All categories" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All categories</SelectItem>
                                        {categories.map((category) => (
                                            <SelectItem key={category.id} value={category.id.toString()}>
                                                {category.name} ({category.type})
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Type Filter */}
                            <div className="space-y-2">
                                <Label htmlFor="type-filter">Transaction Type</Label>
                                <Select
                                    value={filters.type || 'all'}
                                    onValueChange={handleTypeChange}
                                >
                                    <SelectTrigger id="type-filter">
                                        <SelectValue placeholder="All types" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All types</SelectItem>
                                        <SelectItem value="INCOME">Income</SelectItem>
                                        <SelectItem value="EXPENSE">Expense</SelectItem>
                                        <SelectItem value="TRANSFER">Transfer</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Start Date Filter */}
                            <div className="space-y-2">
                                <Label htmlFor="start-date-filter">Start Date</Label>
                                <Input
                                    id="start-date-filter"
                                    type="date"
                                    value={
                                        filters.startDate
                                            ? new Date(filters.startDate).toISOString().split('T')[0]
                                            : ''
                                    }
                                    onChange={(e) => handleStartDateChange(e.target.value)}
                                />
                            </div>

                            {/* End Date Filter */}
                            <div className="space-y-2">
                                <Label htmlFor="end-date-filter">End Date</Label>
                                <Input
                                    id="end-date-filter"
                                    type="date"
                                    value={
                                        filters.endDate
                                            ? new Date(filters.endDate).toISOString().split('T')[0]
                                            : ''
                                    }
                                    onChange={(e) => handleEndDateChange(e.target.value)}
                                />
                            </div>

                            {/* Clear Filters Button */}
                            <div className="flex items-end">
                                <Button
                                    variant="outline"
                                    onClick={clearFilters}
                                    className="w-full"
                                    disabled={!hasActiveFilters}
                                >
                                    <X className="h-4 w-4 mr-2" />
                                    Clear All Filters
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
