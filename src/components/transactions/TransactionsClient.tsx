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
import { Plus, Pencil, Trash2, Loader2, ChevronLeft, ChevronRight } from "lucide-react"
import { createTransaction, updateTransaction, deleteTransaction, deleteMultipleTransactions, getTransactions, TransactionFilters } from "@/actions/transactions"
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
    const [transactionsData, setTransactionsData] = useState(initialTransactions)
    const [isAddOpen, setIsAddOpen] = useState(false)
    const [editTransaction, setEditTransaction] = useState<Transaction | null>(null)
    const [deleteId, setDeleteId] = useState<number | null>(null)
    const [selectedIds, setSelectedIds] = useState<number[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [transactionType, setTransactionType] = useState<'INCOME' | 'EXPENSE' | 'TRANSFER'>('EXPENSE')
    const [filters, setFilters] = useState<TransactionFilters>({ page: 1, limit: 20 })

    // Memoize filtered lists to prevent unnecessary re-filtering
    const incomeCategories = useMemo(() => categories.filter(c => c.type === 'INCOME'), [categories])
    const expenseCategories = useMemo(() => categories.filter(c => c.type === 'EXPENSE'), [categories])
    const payers = useMemo(() => payeesPayers.filter(p => p.type === 'PAYER'), [payeesPayers])
    const payees = useMemo(() => payeesPayers.filter(p => p.type === 'PAYEE'), [payeesPayers])

    useEffect(() => {
        async function fetchTransactions() {
            setIsLoading(true)
            try {
                const data = await getTransactions(filters)
                setTransactionsData(data)
            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchTransactions()
    }, [filters])

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
                const data = await getTransactions(filters)
                setTransactionsData(data)
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
                const data = await getTransactions(filters)
                setTransactionsData(data)
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
                const data = await getTransactions(filters)
                setTransactionsData(data)
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
            const data = await getTransactions(filters)
            setTransactionsData(data)
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
        if (selectedIds.length === transactionsData.transactions.length) {
            setSelectedIds([])
        } else {
            setSelectedIds(transactionsData.transactions.map(t => t.id))
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

        return (
            <form action={onSubmit} className="space-y-4">
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
                    <Label htmlFor="accountId">Account</Label>
                    <Select name="accountId" defaultValue={defaultValues?.accountId?.toString()}>
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
                    <Label htmlFor="date">Date</Label>
                    <Input
                        type="date"
                        name="date"
                        defaultValue={defaultValues ? formatDateForInput(defaultValues.date) : formatDateForInput(new Date())}
                    />
                </div>

                {type === 'TRANSFER' ? (
                    <div className="space-y-2">
                        <Label htmlFor="transferToAccountId">To Account</Label>
                        <Select name="transferToAccountId" defaultValue={defaultValues?.transferToAccountId?.toString()}>
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

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between flex-wrap gap-4">
                <CardTitle>Manage Transactions</CardTitle>
                <div className="flex gap-2">
                    {selectedIds.length > 0 && (
                        <Button variant="destructive" onClick={handleBulkDelete}>
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete ({selectedIds.length})
                        </Button>
                    )}
                    <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                        <DialogTrigger asChild>
                            <Button>
                                <Plus className="mr-2 h-4 w-4" /> Add Transaction
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                                <DialogTitle>Add New Transaction</DialogTitle>
                            </DialogHeader>
                            <TransactionForm onSubmit={handleCreate} submitLabel="Create Transaction" />
                        </DialogContent>
                    </Dialog>
                </div>
            </CardHeader>
            <CardContent>
                {transactionsData.transactions.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                        <p className="mb-4">No transactions yet. Add your first transaction to get started.</p>
                        <Button onClick={() => setIsAddOpen(true)}>
                            <Plus className="mr-2 h-4 w-4" /> Add Transaction
                        </Button>
                    </div>
                ) : (
                    <>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[50px]">
                                            <Checkbox
                                                checked={selectedIds.length === transactionsData.transactions.length}
                                                onCheckedChange={toggleSelectAll}
                                            />
                                        </TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Account</TableHead>
                                        <TableHead>Type</TableHead>
                                        <TableHead>Category</TableHead>
                                        <TableHead className="text-right">Amount</TableHead>
                                        <TableHead>Note</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {transactionsData.transactions.map((transaction) => (
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
                                            <TableCell>
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
                                            <TableCell className="max-w-[200px] truncate">
                                                {transaction.note || '-'}
                                            </TableCell>
                                            <TableCell className="text-right">
                                                <div className="flex justify-end gap-2">
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
                            <p className="text-sm text-muted-foreground">
                                Showing {((transactionsData.page - 1) * transactionsData.limit) + 1} to{' '}
                                {Math.min(transactionsData.page * transactionsData.limit, transactionsData.total)} of{' '}
                                {transactionsData.total} transactions
                            </p>
                            <div className="flex gap-2">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    disabled={transactionsData.page <= 1}
                                    onClick={() => setFilters(prev => ({ ...prev, page: prev.page! - 1 }))}
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    disabled={transactionsData.page >= transactionsData.totalPages}
                                    onClick={() => setFilters(prev => ({ ...prev, page: prev.page! + 1 }))}
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
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
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
