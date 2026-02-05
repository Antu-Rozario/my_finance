import { Metadata } from 'next'
import { requireAdmin } from '@/lib/auth'
import { RegisterForm } from '@/components/auth/RegisterForm'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Create User',
}

export default async function NewUserPage() {
  await requireAdmin()

  return (
    <>
      <Header title="Create User" />
      <div className="p-4 md:p-6 flex justify-center">
        <div className="w-full max-w-2xl">
          <RegisterForm />
        </div>
      </div>
    </>
  )
}
