import { PrismaClient, UserRole, CategoryType, PayeePayerType, TransactionType } from '../generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { hash } from 'bcryptjs'

const connectionString = process.env.DATABASE_URL!
const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🌱 Starting database seed...')

  // Create Admin User
  console.log('Creating admin user...')
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin User',
      password: await hash('admin123', 10),
      role: UserRole.ADMIN,
    },
  })
  console.log('✅ Admin user created:', adminUser.email)

  // Create Demo User
  console.log('Creating demo user...')
  const demoUser = await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      email: 'user@example.com',
      name: 'Demo User',
      password: await hash('user123', 10),
      role: UserRole.USER,
    },
  })
  console.log('✅ Demo user created:', demoUser.email)

  // ================================
  // Create sample data for demo user
  // ================================
  console.log('Creating sample data for demo user...')

  // Seed Payment Methods
  const paymentMethods = ['Cash', 'Check', 'Credit Card', 'Debit Card', 'PayPal', 'Bank Transfer']

  for (const name of paymentMethods) {
    await prisma.paymentMethod.upsert({
      where: { userId_name: { userId: demoUser.id, name } },
      update: {},
      create: { userId: demoUser.id, name },
    })
  }
  console.log('✅ Payment methods seeded')

  // Seed Income Categories
  const incomeCategories = [
    'Salary',
    'Bank Interest',
    'Freelance',
    'Investment Returns',
    'Rental Income',
    'Other Income',
  ]

  for (const name of incomeCategories) {
    await prisma.category.upsert({
      where: { userId_name_type: { userId: demoUser.id, name, type: CategoryType.INCOME } },
      update: {},
      create: { userId: demoUser.id, name, type: CategoryType.INCOME },
    })
  }
  console.log('✅ Income categories seeded')

  // Seed Expense Categories
  const expenseCategories = [
    'Phone Bill',
    'Tax',
    'House Rent',
    'Medical',
    'Food',
    'Transportation',
    'Utilities',
    'Insurance',
    'Entertainment',
    'Education',
    'Shopping',
    'Other',
  ]

  for (const name of expenseCategories) {
    await prisma.category.upsert({
      where: { userId_name_type: { userId: demoUser.id, name, type: CategoryType.EXPENSE } },
      update: {},
      create: { userId: demoUser.id, name, type: CategoryType.EXPENSE },
    })
  }
  console.log('✅ Expense categories seeded')

  // Seed Payers
  const payers = ['ABC Company', 'Freelance Client', 'Bank', 'System']

  for (const name of payers) {
    await prisma.payeePayer.upsert({
      where: { userId_name_type: { userId: demoUser.id, name, type: PayeePayerType.PAYER } },
      update: {},
      create: { userId: demoUser.id, name, type: PayeePayerType.PAYER },
    })
  }
  console.log('✅ Payers seeded')

  // Seed Payees
  const payees = [
    'Landlord',
    'Grocery Store',
    'Electric Company',
    'Internet Provider',
    'Gas Station',
    'Restaurant',
  ]

  for (const name of payees) {
    await prisma.payeePayer.upsert({
      where: { userId_name_type: { userId: demoUser.id, name, type: PayeePayerType.PAYEE } },
      update: {},
      create: { userId: demoUser.id, name, type: PayeePayerType.PAYEE },
    })
  }
  console.log('✅ Payees seeded')

  // Seed Settings
  await prisma.settings.upsert({
    where: { userId_key: { userId: demoUser.id, key: 'currency' } },
    update: {},
    create: { userId: demoUser.id, key: 'currency', value: '$' },
  })

  await prisma.settings.upsert({
    where: { userId_key: { userId: demoUser.id, key: 'timezone' } },
    update: {},
    create: { userId: demoUser.id, key: 'timezone', value: 'UTC' },
  })

  await prisma.settings.upsert({
    where: { userId_key: { userId: demoUser.id, key: 'companyName' } },
    update: {},
    create: { userId: demoUser.id, key: 'companyName', value: 'My Finance App' },
  })
  console.log('✅ Settings seeded')

  // Seed Accounts
  const accounts = [
    { name: 'Checking Account', openingBalance: 5000, note: 'Primary checking account' },
    { name: 'Savings Account', openingBalance: 10000, note: 'Emergency fund' },
    { name: 'Cash Wallet', openingBalance: 500, note: 'Physical cash on hand' },
  ]

  const systemPayer = await prisma.payeePayer.findFirst({
    where: { userId: demoUser.id, name: 'System', type: PayeePayerType.PAYER },
  })

  const cashMethod = await prisma.paymentMethod.findFirst({
    where: { userId: demoUser.id, name: 'Cash' },
  })

  for (const accountData of accounts) {
    const account = await prisma.financeAccount.upsert({
      where: {
        id: 0 // Dummy to force creation, since we can't use name as unique key
      },
      update: {},
      create: {
        userId: demoUser.id,
        name: accountData.name,
        openingBalance: accountData.openingBalance,
        note: accountData.note,
      },
    })

    // Create opening balance transaction if opening balance > 0
    if (accountData.openingBalance > 0 && systemPayer && cashMethod) {
      const existingOpeningTx = await prisma.transaction.findFirst({
        where: {
          userId: demoUser.id,
          accountId: account.id,
          note: 'Opening Balance',
        },
      })

      if (!existingOpeningTx) {
        await prisma.transaction.create({
          data: {
            userId: demoUser.id,
            accountId: account.id,
            date: new Date('2024-01-01'),
            type: TransactionType.INCOME,
            amount: accountData.openingBalance,
            payerId: systemPayer.id,
            paymentMethodId: cashMethod.id,
            note: 'Opening Balance',
            debit: 0,
            credit: accountData.openingBalance,
            balance: accountData.openingBalance,
          },
        })
      }
    }
  }
  console.log('✅ Accounts seeded with opening balances')

  // Seed sample transactions
  const checkingAccount = await prisma.financeAccount.findFirst({
    where: { userId: demoUser.id, name: 'Checking Account' },
  })
  const salaryIncome = await prisma.category.findFirst({
    where: { userId: demoUser.id, name: 'Salary', type: CategoryType.INCOME },
  })
  const foodExpense = await prisma.category.findFirst({
    where: { userId: demoUser.id, name: 'Food', type: CategoryType.EXPENSE },
  })
  const employerPayer = await prisma.payeePayer.findFirst({
    where: { userId: demoUser.id, name: 'ABC Company', type: PayeePayerType.PAYER },
  })
  const groceryPayee = await prisma.payeePayer.findFirst({
    where: { userId: demoUser.id, name: 'Grocery Store', type: PayeePayerType.PAYEE },
  })
  const creditCard = await prisma.paymentMethod.findFirst({
    where: { userId: demoUser.id, name: 'Credit Card' },
  })

  if (checkingAccount && salaryIncome && employerPayer && cashMethod) {
    const existingTransactions = await prisma.transaction.count({
      where: { userId: demoUser.id, accountId: checkingAccount.id, note: { not: 'Opening Balance' } },
    })

    if (existingTransactions === 0) {
      // Sample salary income
      await prisma.transaction.create({
        data: {
          userId: demoUser.id,
          accountId: checkingAccount.id,
          date: new Date('2024-01-15'),
          type: TransactionType.INCOME,
          categoryId: salaryIncome.id,
          amount: 3000,
          payerId: employerPayer.id,
          paymentMethodId: cashMethod.id,
          reference: 'January Salary',
          note: 'Monthly salary payment',
          debit: 0,
          credit: 3000,
          balance: 5000 + 3000,
        },
      })

      // Sample grocery expense
      if (foodExpense && groceryPayee && creditCard) {
        await prisma.transaction.create({
          data: {
            userId: demoUser.id,
            accountId: checkingAccount.id,
            date: new Date('2024-01-20'),
            type: TransactionType.EXPENSE,
            categoryId: foodExpense.id,
            amount: 150,
            payeeId: groceryPayee.id,
            paymentMethodId: creditCard.id,
            reference: 'GRO-001',
            note: 'Weekly groceries',
            debit: 150,
            credit: 0,
            balance: 5000 + 3000 - 150,
          },
        })
      }

      console.log('✅ Sample transactions seeded')
    }
  }

  console.log('\n✨ Database seeding completed successfully!')
  console.log('\n📝 Login Credentials:')
  console.log('Admin:')
  console.log('  Email: admin@example.com')
  console.log('  Password: admin123')
  console.log('\nDemo User:')
  console.log('  Email: user@example.com')
  console.log('  Password: user123')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
