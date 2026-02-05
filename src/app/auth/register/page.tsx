import { Suspense } from 'react'
import { RegisterForm } from '@/components/auth/RegisterForm'
import { Loader2 } from 'lucide-react'

export const metadata = {
  title: 'Sign Up | Finance App',
  description: 'Create your account',
}

function RegisterSkeleton() {
  return (
    <div className="flex items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
    </div>
  )
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<RegisterSkeleton />}>
      <RegisterForm />
    </Suspense>
  )
}
