import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Authentication | My Finance",
  description: "Sign in to your account",
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      {children}
    </div>
  )
}
