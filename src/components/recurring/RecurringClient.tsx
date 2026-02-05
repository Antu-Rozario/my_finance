"use client"

import { useState } from "react"
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
import { formatCurrency, formatDate, formatDateForInput } from "@/lib/utils"
import { Plus, Pencil, Trash2, Loader2, Play } from "lucide-react"
import {
    createRecurringTransaction,
    updateRecurringTransaction,
    deleteRecurringTransaction,
    generateTransactionFromRecurring,
    updateRecurringStatus
} from "@/actions/recurring"
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

interface RecurringTransaction {
    id: number
    accountId: number
    type: 'INCOME' | 'EXPENSE' | 'TRANSFER'
    categoryId: number
    amount: number
    payerId: number | null
    payeeId: number | null
    paymentMethodId: number | null
    reference: string | null
    description: string | null
    startDate: Date
    nextDate: Date | null
    frequency: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY'
    status: 'PAID' | 'UNPAID' | 'PENDING' | 'RECEIVE'
    account: { name: string }
    category: { name: string }
}

interface RecurringClientProps {
    recurringTransactions: RecurringTransaction[]
    accounts: Account[]
    categories: Category[]
    payeesPayers: PayeePayer[]
    paymentMethods: PaymentMethod[]
    currencySymbol: string
}

const frequencyLabels = {
    DAILY: 'Daily',
    WEEKLY: 'Weekly',
    MONTHLY: 'Monthly',
    YEARLY: 'Yearly',
}

const statusColors = {
    PAID: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    UNPAID: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    PENDING: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    RECEIVE: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
}

export function RecurringClient({
    recurringTransactions,
    accounts,
    categories,
    payeesPayers,
    paymentMethods,
    currencySymbol,
}: RecurringClientProps) {
    const [isAddOpen, setIsAddOpen] = useState(false)
    const [editItem, setEditItem] = useState<RecurringTransaction | null>(null)
    const [deleteId, setDeleteId] = useState<number | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [transactionType, setTransactionType] = useState<'INCOME' | 'EXPENSE'>('EXPENSE')

    const incomeCategories = categories.filter(c => c.type === 'INCOME')
    const expenseCategories = categories.filter(c => c.type === 'EXPENSE')
    const payers = payeesPayers.filter(p => p.type === 'PAYER')
    const payees = payeesPayers.filter(p => p.type === 'PAYEE')

    async function handleCreate(formData: FormData) {
        setIsLoading(true)
        try {
            const result = await createRecurringTransaction({
                accountId: parseInt(formData.get('accountId') as string),
                type: formData.get('type') as 'INCOME' | 'EXPENSE',
                categoryId: parseInt(formData.get('categoryId') as string),
                amount: parseFloat(formData.get('amount') as string),
                payerId: formData.get('payerId') ? parseInt(formData.get('payerId') as string) : null,
                payeeId: formData.get('payeeId') ? parseInt(formData.get('payeeId') as string) : null,
                paymentMethodId: formData.get('paymentMethodId') ? parseInt(formData.get('paymentMethodId') as string) : null,
                reference: formData.get('reference') as string || null,
                description: formData.get('description') as string || null,
                startDate: new Date(formData.get('startDate') as string),
                frequency: formData.get('frequency') as 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY',
                status: 'PENDING',
            })

            if (result.success) {
                toast.success('Recurring transaction created')
                setIsAddOpen(false)
                setTransactionType('EXPENSE')
            } else {
                toast.error('Failed to create')
            }
        } catch (error) {
            toast.error('An error occurred')
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    async function handleUpdate(formData: FormData) {
        if (!editItem) return
        setIsLoading(true)
        try {
            const type = formData.get('type') as 'INCOME' | 'EXPENSE'
            const result = await updateRecurringTransaction(editItem.id, {
                accountId: parseInt(formData.get('accountId') as string),
                type,
                categoryId: parseInt(formData.get('categoryId') as string),
                amount: parseFloat(formData.get('amount') as string),
                payerId: formData.get('payerId') ? parseInt(formData.get('payerId') as string) : null,
                payeeId: formData.get('payeeId') ? parseInt(formData.get('payeeId') as string) : null,
                paymentMethodId: formData.get('paymentMethodId') ? parseInt(formData.get('paymentMethodId') as string) : null,
                reference: formData.get('reference') as string || null,
                description: formData.get('description') as string || null,
                startDate: new Date(formData.get('startDate') as string),
                frequency: formData.get('frequency') as 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY',
                status: formData.get('status') as 'PAID' | 'UNPAID' | 'PENDING' | 'RECEIVE',
            })

            if (result.success) {
                toast.success('Updated successfully')
                setEditItem(null)
            } else {
                toast.error('Failed to update')
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
            await deleteRecurringTransaction(deleteId)
            toast.success('Deleted successfully')
        } catch (error) {
            toast.error('An error occurred')
            console.error(error)
        } finally {
            setIsLoading(false)
            setDeleteId(null)
        }
    }

    async function handleGenerate(id: number) {
        setIsLoading(true)
        try {
            const result = await generateTransactionFromRecurring(id)
            if (result.success) {
                toast.success('Transaction generated from recurring template')
            } else {
                toast.error(result.error || 'Failed to generate')
            }
        } catch (error) {
            toast.error('An error occurred')
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    const RecurringForm = ({
        onSubmit,
        defaultValues,
        submitLabel,
    }: {
        onSubmit: (formData: FormData) => void
        defaultValues?: RecurringTransaction
        submitLabel: string
    }) => {
        const [type, setType] = useState<'INCOME' | 'EXPENSE'>(() => {
            const defaultType = defaultValues?.type
            // Filter out TRANSFER as it's not supported for recurring transactions
            return defaultType === 'INCOME' || defaultType === 'EXPENSE' ? defaultType : transactionType
        })

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
                            <RadioGroupItem value="INCOME" id="r-income" />
                            <Label htmlFor="r-income" className="text-green-600 dark:text-green-400 cursor-pointer">Income</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="EXPENSE" id="r-expense" />
                            <Label htmlFor="r-expense" className="text-red-600 dark:text-red-400 cursor-pointer">Expense</Label>
                        </div>
                    </RadioGroup>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label>Account</Label>
                        <Select name="accountId" defaultValue={defaultValues?.accountId?.toString()}>
                            <SelectTrigger>
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
                        <Label>Category</Label>
                        <Select name="categoryId" defaultValue={defaultValues?.categoryId?.toString()}>
                            <SelectTrigger>
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
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label>Amount</Label>
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
                        <Label>Frequency</Label>
                        <Select name="frequency" defaultValue={defaultValues?.frequency || 'MONTHLY'}>
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="DAILY">Daily</SelectItem>
                                <SelectItem value="WEEKLY">Weekly</SelectItem>
                                <SelectItem value="MONTHLY">Monthly</SelectItem>
                                <SelectItem value="YEARLY">Yearly</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label>Start Date</Label>
                        <Input
                            type="date"
                            name="startDate"
                            defaultValue={defaultValues ? formatDateForInput(defaultValues.startDate) : formatDateForInput(new Date())}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>{type === 'INCOME' ? 'Payer' : 'Payee'}</Label>
                        <Select
                            name={type === 'INCOME' ? 'payerId' : 'payeeId'}
                            defaultValue={type === 'INCOME' ? defaultValues?.payerId?.toString() : defaultValues?.payeeId?.toString()}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select" />
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
                </div>

                {defaultValues && (
                    <div className="space-y-2">
                        <Label>Status</Label>
                        <Select name="status" defaultValue={defaultValues.status}>
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="PENDING">Pending</SelectItem>
                                <SelectItem value="PAID">Paid</SelectItem>
                                <SelectItem value="UNPAID">Unpaid</SelectItem>
                                <SelectItem value="RECEIVE">Receive</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                )}

                <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea
                        name="description"
                        defaultValue={defaultValues?.description || ''}
                        placeholder="Optional description"
                    />
                </div>

                <div className="flex justify-end gap-2">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => defaultValues ? setEditItem(null) : setIsAddOpen(false)}
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
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Manage Recurring Transactions</CardTitle>
                <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                    <DialogTrigger asChild>
                        <Button>
                            <Plus className="mr-2 h-4 w-4" /> Add Recurring
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                        <DialogHeader>
                            <DialogTitle>Add Recurring Transaction</DialogTitle>
                        </DialogHeader>
                        <RecurringForm onSubmit={handleCreate} submitLabel="Create" />
                    </DialogContent>
                </Dialog>
            </CardHeader>
            <CardContent>
                {recurringTransactions.length === 0 ? (
                    <div className="text-center py-12 text-muted-foreground">
                        <p className="mb-4">No recurring transactions yet.</p>
                        <Button onClick={() => setIsAddOpen(true)}>
                            <Plus className="mr-2 h-4 w-4" /> Add Recurring
                        </Button>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Account</TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Category</TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                    <TableHead>Frequency</TableHead>
                                    <TableHead>Next Date</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {recurringTransactions.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>{item.account.name}</TableCell>
                                        <TableCell>
                                            <Badge className={item.type === 'INCOME' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} variant="secondary">
                                                {item.type}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>{item.category.name}</TableCell>
                                        <TableCell className={`text-right font-medium ${item.type === 'INCOME' ? 'text-green-600' : 'text-red-600'}`}>
                                            {formatCurrency(item.amount, currencySymbol)}
                                        </TableCell>
                                        <TableCell>{frequencyLabels[item.frequency]}</TableCell>
                                        <TableCell>{item.nextDate ? formatDate(item.nextDate) : '-'}</TableCell>
                                        <TableCell>
                                            <Badge className={statusColors[item.status]} variant="secondary">
                                                {item.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => handleGenerate(item.id)}
                                                    title="Generate Transaction"
                                                >
                                                    <Play className="h-4 w-4 text-green-600" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => {
                                                        // Filter out TRANSFER as it's not supported for recurring transactions
                                                        const itemType = item.type === 'INCOME' || item.type === 'EXPENSE' ? item.type : 'EXPENSE'
                                                        setTransactionType(itemType)
                                                        setEditItem(item)
                                                    }}
                                                >
                                                    <Pencil className="h-4 w-4" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => setDeleteId(item.id)}
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
                )}
            </CardContent>

            {/* Edit Dialog */}
            <Dialog open={!!editItem} onOpenChange={(open) => !open && setEditItem(null)}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>Edit Recurring Transaction</DialogTitle>
                    </DialogHeader>
                    {editItem && (
                        <RecurringForm
                            onSubmit={handleUpdate}
                            defaultValues={editItem}
                            submitLabel="Update"
                        />
                    )}
                </DialogContent>
            </Dialog>

            {/* Delete Confirmation */}
            <AlertDialog open={!!deleteId} onOpenChange={(open: boolean) => !open && setDeleteId(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Delete Recurring Transaction?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This will delete the recurring template only. Existing transactions will not be affected.
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
