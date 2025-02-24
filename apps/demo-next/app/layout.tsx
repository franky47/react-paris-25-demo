import '@workspace/ui/globals.css'
import { ThemeProvider } from '@workspace/ui/lib/theme-provider'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <NuqsAdapter>
          <ThemeProvider>{children}</ThemeProvider>
        </NuqsAdapter>
      </body>
    </html>
  )
}
