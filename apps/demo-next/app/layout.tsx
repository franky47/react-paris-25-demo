import '@root/ui/globals.css'
import { ThemeProvider } from '@root/ui/lib/theme-provider'
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
