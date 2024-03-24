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
      <meta name="of:version" content="vNext" />
      <meta name="of:accepts:xmtp" content="vNext" />
      <meta name="of:accepts:farcaster" content="vNext" />
      <meta property="of:accepts:lens" content="1.1" />
      <meta
        name="og:image"
        content="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAI0lEQVR42mM8B8AAg8ClV1ZPAAAAABJRU5ErkJggg=="
      />
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
