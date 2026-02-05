import { Suspense } from 'react'
import { LoginForm } from '@/components/auth/LoginForm'
import { Loader2 } from 'lucide-react'

export const metadata = {
  title: 'Sign In | Finance App',
  description: 'Sign in to your account',
}

function LoginSkeleton() {
  return (
    <div className="flex items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginSkeleton />}>
      <LoginForm />
    </Suspense>
  )
}
