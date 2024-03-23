import Link from 'next/link'
import type { Metadata } from 'next'
import { fetchMetadata } from 'frames.js/next'
import { currentURL, vercelURL } from '@/utils/url'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Can you see me',
    description: 'This is a new api example',
    other: {
      ...(await fetchMetadata(
        new URL('/:tokenId', vercelURL() || 'http://localhost:3001')
      )),
    },
  }
}

export default async function Home() {
  const url = currentURL('/:tokenId')

  return <div>mint</div>
}
