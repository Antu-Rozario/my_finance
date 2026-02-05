import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ShieldAlert, ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Unauthorized | Finance App',
  description: 'You do not have permission to access this page',
}

export default function UnauthorizedPage() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
          <ShieldAlert className="h-8 w-8 text-destructive" />
        </div>
        <CardTitle className="text-2xl">Access Denied</CardTitle>
        <CardDescription>
          You do not have permission to access this page
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p className="text-center text-sm text-muted-foreground">
          This page requires administrator privileges. If you believe this is an error, please contact your system administrator.
        </p>
        <Button asChild className="w-full">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Dashboard
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
