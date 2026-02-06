"use client"

import { useState, useEffect, useMemo, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { formatCurrency, formatDate, formatDateForInput, getTransactionTypeBadge } from "@/lib/utils"
import { Plus, Pencil, Trash2, Loader2, ChevronLeft, ChevronRight, Search, ArrowUpDown, ArrowUp, ArrowDown, X } from "lucide-react"
import { createTransaction, updateTransaction, deleteTransaction, deleteMultipleTransactions, getTransactions, getTransactionsCursor, TransactionFilters, CursorPaginationParams, TransactionWithRelations } from "@/actions/transactions"
import { toast } from "sonner"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"

interface Account {
    id: number
    name: string
    currentBalance: number
}

interface Category {
    id: number
    name: string
    type: 'INCOME' | 'EXPENSE'
}

interface PayeePayer {
    id: number
    name: string
    type: 'PAYEE' | 'PAYER'
}

interface PaymentMethod {
    id: number
    name: string
}

interface Transaction {
    id: number
    accountId: number
    date: Date
    type: 'INCOME' | 'EXPENSE' | 'TRANSFER'
    categoryId: number | null
    amount: number
    payerId: number | null
    payeeId: number | null
    paymentMethodId: number | null
    reference: string | null
    note: string | null
    transferToAccountId: number | null
    account: { name: string }
    category: { name: string } | null
    payer: { name: string } | null
    payee: { name: string } | null
    paymentMethod: { name: string } | null
    transferToAccount: { name: string } | null
}

interface TransactionsData {
    transactions: Transaction[]
    total: number
    page: number
    limit: number
    totalPages: number
}

// Cursor-based pagination data structure
interface CursorPaginationData {
    transactions: Transaction[]
    nextCursor: string | null
    prevCursor: string | null
    hasMore: boolean
    total: number
}

interface TransactionsClientProps {
    initialTransactions: TransactionsData
    accounts: Account[]
    categories: Category[]
    payeesPayers: PayeePayer[]
    paymentMethods: PaymentMethod[]
    currencySymbol: string
}

export function TransactionsClient({
    initialTransactions,
    accounts,
    categories,
    payeesPayers,
    paymentMethods,
    currencySymbol,
}: TransactionsClientProps) {
    // State for cursor-based pagination
    const [cursorData, setCursorData] = useState<CursorPaginationData>({
        transactions: initialTransactions.transactions,
        nextCursor: null,
        prevCursor: null,
        hasMore: initialTransactions.page < initialTransactions.totalPages,
        total: initialTransactions.total,
    })
    const [isAddOpen, setIsAddOpen] = useState(false)
    const [editTransaction, setEditTransaction] = useState<Transaction | null>(null)
    const [deleteId, setDeleteId] = useState<number | null>(null)
    const [selectedIds, setSelectedIds] = useState<number[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [transactionType, setTransactionType] = useState<'INCOME' | 'EXPENSE' | 'TRANSFER'>('EXPENSE')
    const [searchQuery, setSearchQuery] = useState('')
    const [sortField, setSortField] = useState<'date' | 'amount' | 'type'>('date')
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc')
    const [typeFilter, setTypeFilter] = useState<'ALL' | 'INCOME' | 'EXPENSE' | 'TRANSFER'>('ALL')
    const [accountFilter, setAccountFilter] = useState<number | null>(null)
    const [categoryFilter, setCategoryFilter] = useState<number | null>(null)
    const [startDate, setStartDate] = useState<string>('')
    const [endDate, setEndDate] = useState<string>('')

    // Cursor pagination params
    const [cursorParams, setCursorParams] = useState<CursorPaginationParams>({
        limit: 20,
        cursor: null,
        direction: 'next',
    })

    // Track filter changes separately from cursor
    const [activeFilters, setActiveFilters] = useState<Omit<TransactionFilters, 'page' | 'limit'>>({})

    // Memoize filtered lists to prevent unnecessary re-filtering
    const incomeCategories = useMemo(() => categories.filter(c => c.type === 'INCOME'), [categories])
    const expenseCategories = useMemo(() => categories.filter(c => c.type === 'EXPENSE'), [categories])
    const payers = useMemo(() => payeesPayers.filter(p => p.type === 'PAYER'), [payeesPayers])
    const payees = useMemo(() => payeesPayers.filter(p => p.type === 'PAYEE'), [payeesPayers])

    // Handle search with debounce
    const handleSearch = useCallback((query: string) => {
        setSearchQuery(query)
        setActiveFilters(prev => ({
            ...prev,
            search: query || undefined,
        }))
    }, [])

    // Handle type filter
    const handleTypeFilter = useCallback((type: 'ALL' | 'INCOME' | 'EXPENSE' | 'TRANSFER') => {
        setTypeFilter(type)
        setActiveFilters(prev => ({
            ...prev,
            type: type === 'ALL' ? undefined : (type as 'INCOME' | 'EXPENSE' | 'TRANSFER'),
        }))
    }, [])

    // Handle account filter
    const handleAccountFilter = useCallback((accountId: number | null) => {
        setAccountFilter(accountId)
        setActiveFilters(prev => ({
            ...prev,
            accountId: accountId || undefined,
        }))
    }, [])

    // Handle category filter
    const handleCategoryFilter = useCallback((categoryId: number | null) => {
        setCategoryFilter(categoryId)
        setActiveFilters(prev => ({
            ...prev,
            categoryId: categoryId || undefined,
        }))
    }, [])

    // Handle date range filter
    const handleStartDate = useCallback((date: string) => {
        setStartDate(date)
        setActiveFilters(prev => ({
            ...prev,
            startDate: date ? new Date(date) : undefined,
        }))
    }, [])

    const handleEndDate = useCallback((date: string) => {
        setEndDate(date)
        setActiveFilters(prev => ({
            ...prev,
            endDate: date ? new Date(date + 'T23:59:59') : undefined,
        }))
    }, [])

    // Clear all filters
    const handleClearFilters = useCallback(() => {
        setSearchQuery('')
        setTypeFilter('ALL')
        setAccountFilter(null)
        setCategoryFilter(null)
        setStartDate('')
        setEndDate('')
        setActiveFilters({})
    }, [])

    // Handle column sort
    const handleSort = useCallback((field: 'date' | 'amount' | 'type') => {
        if (sortField === field) {
            // Toggle direction
            setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc')
        } else {
            // New field, default to desc
            setSortField(field)
            setSortDirection('desc')
        }
    }, [sortField])

    // Update filters when sort changes
    useEffect(() => {
        // For now, we'll handle sorting client-side since cursor pagination with dynamic sorting is complex
        // In a production app, you'd want to extend the backend to support this
    }, [sortField, sortDirection])

    // Fetch transactions with cursor-based pagination
    const fetchTransactions = useCallback(async (params: CursorPaginationParams) => {
        setIsLoading(true)
        try {
            const result = await getTransactionsCursor({
                ...activeFilters,
                ...params,
            })
            
            setCursorData({
                transactions: result.data as Transaction[],
                nextCursor: result.nextCursor,
                prevCursor: result.prevCursor,
                hasMore: result.hasMore,
                total: result.total || 0,
            })
        } catch (error) {
            console.error('Failed to fetch transactions:', error)
            toast.error('Failed to load transactions')
        } finally {
            setIsLoading(false)
        }
    }, [activeFilters])

    // Initial load and filter changes
    useEffect(() => {
        fetchTransactions({ limit: 20, cursor: null, direction: 'next' })
    }, [activeFilters, fetchTransactions])

    // Handle next page
    const handleNextPage = useCallback(() => {
        if (cursorData.nextCursor) {
            fetchTransactions({
                ...cursorParams,
                cursor: cursorData.nextCursor,
                direction: 'next',
            })
        }
    }, [cursorData.nextCursor, cursorParams, fetchTransactions])

    // Handle previous page
    const handlePrevPage = useCallback(() => {
        if (cursorData.prevCursor) {
            fetchTransactions({
                ...cursorParams,
                cursor: cursorData.prevCursor,
                direction: 'prev',
            })
        }
    }, [cursorData.prevCursor, cursorParams, fetchTransactions])

    async function handleCreate(formData: FormData) {
        setIsLoading(true)
        try {
            const result = await createTransaction({
                accountId: parseInt(formData.get('accountId') as string),
                date: new Date(formData.get('date') as string),
                type: formData.get('type') as 'INCOME' | 'EXPENSE' | 'TRANSFER',
                categoryId: formData.get('categoryId') ? parseInt(formData.get('categoryId') as string) : null,
                amount: parseFloat(formData.get('amount') as string),
                payerId: formData.get('payerId') ? parseInt(formData.get('payerId') as string) : null,
                payeeId: formData.get('payeeId') ? parseInt(formData.get('payeeId') as string) : null,
                paymentMethodId: formData.get('paymentMethodId') ? parseInt(formData.get('paymentMethodId') as string) : null,
                reference: formData.get('reference') as string || null,
                note: formData.get('note') as string || null,
                transferToAccountId: formData.get('transferToAccountId') ? parseInt(formData.get('transferToAccountId') as string) : null,
            })

            if (result.success) {
                toast.success('Transaction created successfully')
                setIsAddOpen(false)
                setTransactionType('EXPENSE')
                // Refresh current page with cursor pagination
                await fetchTransactions({ limit: 20, cursor: null, direction: 'next' })
            } else {
                toast.error(result.error || 'Failed to create transaction')
            }
        } catch (error) {
            toast.error('An error occurred')
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    async function handleUpdate(formData: FormData) {
        if (!editTransaction) return
        setIsLoading(true)
        try {
            const type = formData.get('type') as 'INCOME' | 'EXPENSE' | 'TRANSFER'
            const result = await updateTransaction(editTransaction.id, {
                accountId: parseInt(formData.get('accountId') as string),
                date: new Date(formData.get('date') as string),
                type,
                categoryId: formData.get('categoryId') ? parseInt(formData.get('categoryId') as string) : null,
                amount: parseFloat(formData.get('amount') as string),
                payerId: formData.get('payerId') ? parseInt(formData.get('payerId') as string) : null,
                payeeId: formData.get('payeeId') ? parseInt(formData.get('payeeId') as string) : null,
                paymentMethodId: formData.get('paymentMethodId') ? parseInt(formData.get('paymentMethodId') as string) : null,
                reference: formData.get('reference') as string || null,
                note: formData.get('note') as string || null,
                transferToAccountId: formData.get('transferToAccountId') ? parseInt(formData.get('transferToAccountId') as string) : null,
            })

            if (result.success) {
                toast.success('Transaction updated successfully')
                setEditTransaction(null)
                // Refresh current page
                await fetchTransactions({ limit: 20, cursor: null, direction: 'next' })
            } else {
                toast.error(result.error || 'Failed to update transaction')
            }
        } catch (error) {
            toast.error('An error occurred')
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    async function handleDelete() {
        if (!deleteId) return
        setIsLoading(true)
        try {
            const result = await deleteTransaction(deleteId)
            if (result.success) {
                toast.success('Transaction deleted successfully')
                // Refresh current page
                await fetchTransactions({ limit: 20, cursor: null, direction: 'next' })
            } else {
                toast.error(result.error || 'Failed to delete transaction')
            }
        } catch (error) {
            toast.error('An error occurred')
            console.error(error)
        } finally {
            setIsLoading(false)
            setDeleteId(null)
        }
    }

    async function handleBulkDelete() {
        if (selectedIds.length === 0) return
        setIsLoading(true)
        try {
            await deleteMultipleTransactions(selectedIds)
            toast.success(`Deleted ${selectedIds.length} transaction(s)`)
            setSelectedIds([])
            // Refresh current page
            await fetchTransactions({ limit: 20, cursor: null, direction: 'next' })
        } catch (error) {
            toast.error('An error occurred')
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    function toggleSelect(id: number) {
        setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        )
    }

    function toggleSelectAll() {
        if (selectedIds.length === sortedTransactions.length) {
            setSelectedIds([])
        } else {
            setSelectedIds(sortedTransactions.map((t: Transaction) => t.id))
        }
    }

    const TransactionForm = ({
        onSubmit,
        defaultValues,
        submitLabel
    }: {
        onSubmit: (formData: FormData) => void
        defaultValues?: Transaction
        submitLabel: string
    }) => {
        const [type, setType] = useState<'INCOME' | 'EXPENSE' | 'TRANSFER'>(
            defaultValues?.type || transactionType
        )

        const handleFormSubmit = (formData: FormData) => {
            // Validate required fields
            const accountId = formData.get('accountId')
            const date = formData.get('date')
            const amount = formData.get('amount')

            if (!accountId) {
                toast.error('Please select an account')
                return
            }

            if (!date) {
                toast.error('Please select a date')
                return
            }

            if (!amount || parseFloat(amount as string) <= 0) {
                toast.error('Please enter a valid amount')
                return
            }

            if (type === 'TRANSFER') {
                const transferToAccountId = formData.get('transferToAccountId')
                if (!transferToAccountId) {
                    toast.error('Please select a destination account for the transfer')
                    return
                }
                if (accountId === transferToAccountId) {
                    toast.error('Source and destination accounts must be different')
                    return
                }
            }

            // All validations passed, submit the form
            onSubmit(formData)
        }

        return (
            <form action={handleFormSubmit} className="space-y-4">
                <input type="hidden" name="type" value={type} />

                <div className="space-y-2">
                    <Label>Transaction Type</Label>
                    <RadioGroup
                        value={type}
                        onValueChange={(v) => setType(v as typeof type)}
                        className="flex gap-4"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="INCOME" id="income" />
                            <Label htmlFor="income" className="text-green-600 dark:text-green-400 cursor-pointer">Income</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="EXPENSE" id="expense" />
                            <Label htmlFor="expense" className="text-red-600 dark:text-red-400 cursor-pointer">Expense</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="TRANSFER" id="transfer" />
                            <Label htmlFor="transfer" className="text-blue-600 dark:text-blue-400 cursor-pointer">Transfer</Label>
                        </div>
                    </RadioGroup>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="accountId">Account *</Label>
                    <Select name="accountId" defaultValue={defaultValues?.accountId?.toString()} required>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select account" />
                        </SelectTrigger>
                        <SelectContent>
                            {accounts.map(account => (
                                <SelectItem key={account.id} value={account.id.toString()}>
                                    {account.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="date">Date *</Label>
                    <Input
                        type="date"
                        name="date"
                        required
                        defaultValue={defaultValues ? formatDateForInput(defaultValues.date) : formatDateForInput(new Date())}
                    />
                </div>

                {type === 'TRANSFER' ? (
                    <div className="space-y-2">
                        <Label htmlFor="transferToAccountId">To Account *</Label>
                        <Select name="transferToAccountId" defaultValue={defaultValues?.transferToAccountId?.toString()} required>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select destination account" />
                            </SelectTrigger>
                            <SelectContent>
                                {accounts.map(account => (
                                    <SelectItem key={account.id} value={account.id.toString()}>
                                        {account.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                ) : (
                    <>
                        <div className="space-y-2">
                            <Label htmlFor="categoryId">Category</Label>
                            <Select name="categoryId" defaultValue={defaultValues?.categoryId?.toString()}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {(type === 'INCOME' ? incomeCategories : expenseCategories).map(category => (
                                        <SelectItem key={category.id} value={category.id.toString()}>
                                            {category.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor={type === 'INCOME' ? 'payerId' : 'payeeId'}>
                                {type === 'INCOME' ? 'Payer' : 'Payee'}
                            </Label>
                            <Select
                                name={type === 'INCOME' ? 'payerId' : 'payeeId'}
                                defaultValue={type === 'INCOME' ? defaultValues?.payerId?.toString() : defaultValues?.payeeId?.toString()}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder={type === 'INCOME' ? 'Select payer' : 'Select payee'} />
                                </SelectTrigger>
                                <SelectContent>
                                    {(type === 'INCOME' ? payers : payees).map(pp => (
                                        <SelectItem key={pp.id} value={pp.id.toString()}>
                                            {pp.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="paymentMethodId">Payment Method</Label>
                            <Select name="paymentMethodId" defaultValue={defaultValues?.paymentMethodId?.toString()}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select payment method" />
                                </SelectTrigger>
                                <SelectContent>
                                    {paymentMethods.map(method => (
                                        <SelectItem key={method.id} value={method.id.toString()}>
                                            {method.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </>
                )}

                <div className="space-y-2">
                    <Label htmlFor="amount">Amount *</Label>
                    <Input
                        type="number"
                        name="amount"
                        step="0.01"
                        min="0.01"
                        required
                        defaultValue={defaultValues?.amount}
                        placeholder="0.00"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="reference">Reference</Label>
                    <Input
                        name="reference"
                        defaultValue={defaultValues?.reference || ''}
                        placeholder="Check #, Invoice #, etc."
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="note">Note</Label>
                    <Textarea
                        name="note"
                        defaultValue={defaultValues?.note || ''}
                        placeholder="Optional description"
                    />
                </div>

                <div className="flex justify-end gap-2">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => defaultValues ? setEditTransaction(null) : setIsAddOpen(false)}
                    >
                        Cancel
                    </Button>
                    <Button type="submit" disabled={isLoading}>
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {submitLabel}
                    </Button>
                </div>
            </form>
        )
    }

    // Sort transactions client-side
    const sortedTransactions = useMemo(() => {
        const sorted = [...cursorData.transactions]

        sorted.sort((a, b) => {
            let comparison = 0

            switch (sortField) {
                case 'date':
                    comparison = new Date(a.date).getTime() - new Date(b.date).getTime()
                    break
                case 'amount':
                    comparison = a.amount - b.amount
                    break
                case 'type':
                    comparison = a.type.localeCompare(b.type)
                    break
            }

            return sortDirection === 'asc' ? comparison : -comparison
        })

        return sorted
    }, [cursorData.transactions, sortField, sortDirection])

    const SortIcon = ({ field }: { field: 'date' | 'amount' | 'type' }) => {
        if (sortField !== field) return <ArrowUpDown className="ml-2 h-4 w-4" />
        return sortDirection === 'asc'
            ? <ArrowUp className="ml-2 h-4 w-4" />
            : <ArrowDown className="ml-2 h-4 w-4" />
    }

    return (
        <Card className="overflow-hidden">
            <CardHeader className="px-3 sm:px-6 space-y-3">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Transactions</CardTitle>
                    <div className="flex gap-2 shrink-0">
                        {selectedIds.length > 0 && (
                            <Button variant="destructive" size="sm" onClick={handleBulkDelete}>
                                <Trash2 className="h-4 w-4 sm:mr-2" />
                                <span className="hidden sm:inline">Delete ({selectedIds.length})</span>
                            </Button>
                        )}
                        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                            <DialogTrigger asChild>
                                <Button size="sm">
                                    <Plus className="h-4 w-4 mr-1 sm:mr-2" />
                                    <span className="sm:hidden">Add</span>
                                    <span className="hidden sm:inline">Add Transaction</span>
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                                <DialogHeader>
                                    <DialogTitle>Add New Transaction</DialogTitle>
                                </DialogHeader>
                                <TransactionForm onSubmit={handleCreate} submitLabel="Create Transaction" />
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>

                {/* Filters */}
                <div className="space-y-2">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => handleSearch(e.target.value)}
                            className="pl-8 h-8 text-sm"
                        />
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                        <Select
                            value={typeFilter}
                            onValueChange={(value) => handleTypeFilter(value as typeof typeFilter)}
                        >
                            <SelectTrigger className="h-8 text-xs sm:text-sm">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="ALL">All Types</SelectItem>
                                <SelectItem value="INCOME">Income</SelectItem>
                                <SelectItem value="EXPENSE">Expense</SelectItem>
                                <SelectItem value="TRANSFER">Transfer</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select
                            value={accountFilter?.toString() || 'all'}
                            onValueChange={(value) => handleAccountFilter(value === 'all' ? null : parseInt(value))}
                        >
                            <SelectTrigger className="h-8 text-xs sm:text-sm">
                                <SelectValue placeholder="Account" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Accounts</SelectItem>
                                {accounts.map(account => (
                                    <SelectItem key={account.id} value={account.id.toString()}>
                                        {account.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select
                            value={categoryFilter?.toString() || 'all'}
                            onValueChange={(value) => handleCategoryFilter(value === 'all' ? null : parseInt(value))}
                        >
                            <SelectTrigger className="h-8 text-xs sm:text-sm">
                                <SelectValue placeholder="Category" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Categories</SelectItem>
                                {categories.map(category => (
                                    <SelectItem key={category.id} value={category.id.toString()}>
                                        {category.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex items-center gap-2">
                        <Input
                            type="date"
                            value={startDate}
                            onChange={(e) => handleStartDate(e.target.value)}
                            className="h-8 text-xs sm:text-sm flex-1 min-w-0"
                        />
                        <span className="text-muted-foreground text-xs shrink-0">to</span>
                        <Input
                            type="date"
                            value={endDate}
                            onChange={(e) => handleEndDate(e.target.value)}
                            className="h-8 text-xs sm:text-sm flex-1 min-w-0"
                        />
                        {(searchQuery || typeFilter !== 'ALL' || accountFilter || categoryFilter || startDate || endDate) && (
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={handleClearFilters}
                                className="h-8 w-8 shrink-0 text-muted-foreground hover:text-foreground"
                                title="Clear all filters"
                            >
                                <X className="h-3.5 w-3.5" />
                            </Button>
                        )}
                    </div>
                </div>
            </CardHeader>
            <CardContent className="px-3 sm:px-6">
                {cursorData.transactions.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                        <p className="mb-4">No transactions yet. Add your first transaction to get started.</p>
                        <Button onClick={() => setIsAddOpen(true)}>
                            <Plus className="mr-2 h-4 w-4" /> Add Transaction
                        </Button>
                    </div>
                ) : (
                    <>
                        {/* Mobile Card View */}
                        <div className="md:hidden space-y-2">
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        checked={selectedIds.length === sortedTransactions.length && sortedTransactions.length > 0}
                                        onCheckedChange={toggleSelectAll}
                                    />
                                    <span className="text-xs text-muted-foreground">Select all</span>
                                </div>
                                <div className="flex gap-1">
                                    <Button variant="ghost" size="sm" onClick={() => handleSort('date')} className="h-7 text-xs px-2">
                                        Date{sortField === 'date' && (sortDirection === 'asc' ? <ArrowUp className="ml-1 h-3 w-3" /> : <ArrowDown className="ml-1 h-3 w-3" />)}
                                    </Button>
                                    <Button variant="ghost" size="sm" onClick={() => handleSort('amount')} className="h-7 text-xs px-2">
                                        Amt{sortField === 'amount' && (sortDirection === 'asc' ? <ArrowUp className="ml-1 h-3 w-3" /> : <ArrowDown className="ml-1 h-3 w-3" />)}
                                    </Button>
                                </div>
                            </div>
                            {sortedTransactions.map((transaction: Transaction) => (
                                <div key={transaction.id} className="border rounded-lg p-2.5">
                                    <div className="flex items-center justify-between gap-1">
                                        <div className="flex items-center gap-1.5 min-w-0 overflow-hidden">
                                            <Checkbox
                                                checked={selectedIds.includes(transaction.id)}
                                                onCheckedChange={() => toggleSelect(transaction.id)}
                                                className="shrink-0"
                                            />
                                            <Badge className={`${getTransactionTypeBadge(transaction.type)} text-[10px] px-1.5 py-0 shrink-0`} variant="secondary">
                                                {transaction.type}
                                            </Badge>
                                            <span className="text-[11px] text-muted-foreground truncate">{formatDate(transaction.date)}</span>
                                        </div>
                                        <p className={`font-semibold text-sm shrink-0 ${transaction.type === 'INCOME'
                                            ? 'text-green-600 dark:text-green-400'
                                            : transaction.type === 'EXPENSE'
                                                ? 'text-red-600 dark:text-red-400'
                                                : 'text-blue-600 dark:text-blue-400'
                                            }`}>
                                            {transaction.type === 'EXPENSE' ? '-' : ''}
                                            {formatCurrency(transaction.amount, currencySymbol)}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between mt-1 pl-7">
                                        <div className="min-w-0 overflow-hidden">
                                            <p className="text-sm truncate">
                                                {transaction.account.name}
                                                <span className="text-muted-foreground"> · {transaction.type === 'TRANSFER'
                                                    ? `→ ${transaction.transferToAccount?.name || '?'}`
                                                    : transaction.category?.name || '-'}</span>
                                            </p>
                                            {transaction.note && (
                                                <p className="text-xs text-muted-foreground truncate">{transaction.note}</p>
                                            )}
                                        </div>
                                        <div className="flex shrink-0">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-7 w-7"
                                                onClick={() => {
                                                    setTransactionType(transaction.type)
                                                    setEditTransaction(transaction)
                                                }}
                                            >
                                                <Pencil className="h-3 w-3" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-7 w-7"
                                                onClick={() => setDeleteId(transaction.id)}
                                            >
                                                <Trash2 className="h-3 w-3 text-destructive" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Desktop Table View */}
                        <div className="hidden md:block overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[50px]">
                                            <Checkbox
                                                checked={selectedIds.length === sortedTransactions.length && sortedTransactions.length > 0}
                                                onCheckedChange={toggleSelectAll}
                                            />
                                        </TableHead>
                                        <TableHead>
                                            <Button
                                                variant="ghost"
                                                onClick={() => handleSort('date')}
                                                className="h-8 px-2 lg:px-3"
                                            >
                                                Date
                                                <SortIcon field="date" />
                                            </Button>
                                        </TableHead>
                                        <TableHead>Account</TableHead>
                                        <TableHead>
                                            <Button
                                                variant="ghost"
                                                onClick={() => handleSort('type')}
                                                className="h-8 px-2 lg:px-3"
                                            >
                                                Type
                                                <SortIcon field="type" />
                                            </Button>
                                        </TableHead>
                                        <TableHead className="hidden lg:table-cell">Category</TableHead>
                                        <TableHead className="text-right">
                                            <Button
                                                variant="ghost"
                                                onClick={() => handleSort('amount')}
                                                className="h-8 px-2 lg:px-3"
                                            >
                                                Amount
                                                <SortIcon field="amount" />
                                            </Button>
                                        </TableHead>
                                        <TableHead className="hidden xl:table-cell">Note</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {sortedTransactions.map((transaction: Transaction) => (
                                        <TableRow key={transaction.id}>
                                            <TableCell>
                                                <Checkbox
                                                    checked={selectedIds.includes(transaction.id)}
                                                    onCheckedChange={() => toggleSelect(transaction.id)}
                                                />
                                            </TableCell>
                                            <TableCell className="whitespace-nowrap">
                                                {formatDate(transaction.date)}
                                            </TableCell>
                                            <TableCell>{transaction.account.name}</TableCell>
                                            <TableCell>
                                                <Badge className={getTransactionTypeBadge(transaction.type)} variant="secondary">
                                                    {transaction.type}
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="hidden lg:table-cell">
                                                {transaction.type === 'TRANSFER'
                                                    ? `→ ${transaction.transferToAccount?.name || 'Unknown'}`
                                                    : transaction.category?.name || '-'}
                                            </TableCell>
                                            <TableCell className={`text-right font-medium ${transaction.type === 'INCOME'
                                                ? 'text-green-600 dark:text-green-400'
                                                : transaction.type === 'EXPENSE'
                                                    ? 'text-red-600 dark:text-red-400'
                                                    : 'text-blue-600 dark:text-blue-400'
                                                }`}>
                                                {transaction.type === 'EXPENSE' ? '-' : ''}
                                                {formatCurrency(transaction.amount, currencySymbol)}
                                            </TableCell>
                                            <TableCell className="hidden xl:table-cell max-w-[200px] truncate">
                                                {transaction.note || '-'}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex justify-end gap-1">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => {
                                                            setTransactionType(transaction.type)
                                                            setEditTransaction(transaction)
                                                        }}
                                                    >
                                                        <Pencil className="h-4 w-4" />
                                                    </Button>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        onClick={() => setDeleteId(transaction.id)}
                                                    >
                                                        <Trash2 className="h-4 w-4 text-destructive" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center justify-between mt-4">
                            <p className="text-xs sm:text-sm text-muted-foreground">
                                {cursorData.total > 0 ? (
                                    <><span className="hidden sm:inline">Showing </span>{cursorData.transactions.length} of {cursorData.total}<span className="hidden sm:inline"> transactions</span></>
                                ) : (
                                    'No transactions'
                                )}
                            </p>
                            <div className="flex gap-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8"
                                    disabled={!cursorData.prevCursor}
                                    onClick={handlePrevPage}
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8"
                                    disabled={!cursorData.hasMore}
                                    onClick={handleNextPage}
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </CardContent>

            {/* Edit Dialog */}
            <Dialog open={!!editTransaction} onOpenChange={(open) => !open && setEditTransaction(null)}>
                <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>Edit Transaction</DialogTitle>
                    </DialogHeader>
                    {editTransaction && (
                        <TransactionForm
                            onSubmit={handleUpdate}
                            defaultValues={editTransaction}
                            submitLabel="Update Transaction"
                        />
                    )}
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation */}
            <AlertDialog open={!!deleteId} onOpenChange={(open) => !open && setDeleteId(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete Transaction?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the transaction
                            and update account balances.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleDelete} className="bg-destructive text-destructive-foreground">
                            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            Delete
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </Card>
    )
}
