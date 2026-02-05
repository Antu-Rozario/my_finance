import { Metadata } from 'next'
import { requireAdmin } from '@/lib/auth'
import { getUsers } from '@/actions/users'
import { UsersClient } from '@/components/admin/UsersClient'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Manage Users',
}

export default async function UsersPage() {
  await requireAdmin()
  const users = await getUsers()

  return (
    <>
      <Header title="Manage Users" />
      <div className="p-4 md:p-6">
        <UsersClient users={users} />
      </div>
    </>
  )
}
