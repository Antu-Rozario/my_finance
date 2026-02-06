import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClientProviders } from "@/components/providers/ClientProviders";
import { Sidebar } from "@/components/layout/Sidebar";
import { Toaster } from "@/components/ui/sonner";
import { auth } from "@/auth";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Finance - Personal Finance Manager",
  description: "Track your income, expenses, and transfers across multiple accounts",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  const user = session?.user || null

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <ClientProviders>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {user ? (
              <div className="flex min-h-screen">
                {/* Desktop Sidebar - Only show when authenticated */}
                <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 border-r bg-background">
                  <Sidebar user={user} />
                </aside>

                {/* Main Content */}
                <main className="flex-1 md:pl-64">
                  <div className="min-h-screen">
                    {children}
                  </div>
                </main>
              </div>
            ) : (
              // No sidebar for unauthenticated users
              <div className="min-h-screen">
                {children}
              </div>
            )}
            <Toaster position="top-right" richColors />
          </ThemeProvider>
        </ClientProviders>
      </body>
    </html>
  );
}
