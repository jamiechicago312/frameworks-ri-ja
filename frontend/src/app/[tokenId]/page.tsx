import Link from 'next/link'
import type { Metadata } from 'next'
import { fetchMetadata } from 'frames.js/next'
import { getTokenUrl } from 'frames.js'
import { sepolia } from 'viem/chains'
import {
  FrameButton,
  FrameContainer,
  FrameImage,
  FrameInput,
  FrameReducer,
  PreviousFrame,
  NextServerPageProps,
  getFrameMessage,
  getPreviousFrame,
  useFramesReducer,
} from 'frames.js/next/server'
import { currentURL, vercelURL } from '@/utils/url'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Minting Frameworks',
    description: 'Frame for minting NFT',
    other: {
      ...(await fetchMetadata(
        new URL('/:tokenId/frames', vercelURL() || 'http://localhost:3001')
      )),
    },
  }
}

export default async function Home({ searchParams }: NextServerPageProps) {
  return <div>mint</div>
}
