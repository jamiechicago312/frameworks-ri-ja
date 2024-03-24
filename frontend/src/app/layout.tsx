import type { Metadata } from 'next'
import { ToastRender } from '@/components/Toast'
import Providers from '@/modules/Providers'
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
      <body className="flex justify-center items-center">
        <Providers>
          <>
            <ToastRender />
            {children}
          </>
        </Providers>
      </body>
    </html>
  )
}
