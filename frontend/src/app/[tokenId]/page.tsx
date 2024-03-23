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

// const nfts: {
//   src: string
//   tokenUrl: string
// }[] = [
//   {
//     src: 'https://ipfs.decentralized-content.com/ipfs/bafybeifs7vasy5zbmnpixt7tb6efi35kcrmpoz53d3vg5pwjz52q7fl6pq/cook.png',
//     tokenUrl: getTokenUrl({
//       address: '0xEf93f8c1c995a7CB5770b07Af4ADDe081e2Db44d',
//       chain: sepolia,
//       tokenId: '2',
//     }),
//   },
//   {
//     src: 'https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fipfs.decentralized-content.com%2Fipfs%2Fbafybeiegrnialwu66u3nwzkn4gik4i2x2h4ip7y3w2dlymzlpxb5lrqbom&w=1920&q=75',
//     tokenUrl: getTokenUrl({
//       address: '0xEf93f8c1c995a7CB5770b07Af4ADDe081e2Db44d',
//       chain: sepolia,
//       tokenId: '1',
//     }),
//   },
//   {
//     src: 'https://remote-image.decentralized-content.com/image?url=https%3A%2F%2Fipfs.decentralized-content.com%2Fipfs%2Fbafybeidc6e5t3qmyckqh4fr2ewrov5asmeuv4djycopvo3ro366nd3bfpu&w=1920&q=75',
//     tokenUrl: getTokenUrl({
//       address: '0xEf93f8c1c995a7CB5770b07Af4ADDe081e2Db44d',
//       chain: sepolia,
//       tokenId: '3',
//     }),
//   },
// ]

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'New api example',
    description: 'This is a new api example',
    other: {
      ...(await fetchMetadata(
        new URL('/:tokenId/frames', vercelURL() || 'http://localhost:3001')
      )),
    },
  }
}

export default async function Home({ searchParams }: NextServerPageProps) {
  const url = currentURL('/:tokenId')
  const previousFrame = getPreviousFrame<null>(searchParams)

  return (
    <div>
      mint
      {/* <FrameContainer
        postUrl="/frames"
        pathname="/:tokenId"
        state={null}
        previousFrame={previousFrame}
      >
        <FrameImage aspectRatio="1.91:1">Mint</FrameImage>
        <FrameButton action="mint" target={nfts[0]!.tokenUrl}>
          Mint
        </FrameButton>
      </FrameContainer> */}
    </div>
  )
}
