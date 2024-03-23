import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Framework',
  description: 'Framework by Jamie and Ricy',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="flex justify-center items-center">{children}</body>
    </html>
  )
}
