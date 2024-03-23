import Link from 'next/link'
import { Metadata, ResolvingMetadata } from 'next'
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

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title: 'Minting Frameworks',
    description: 'Frame for minting NFT',
    other: {
      ...(await fetchMetadata(
        new URL(
          `/:tokenId/frames?imgUrl=${searchParams.img}`,
          vercelURL() || 'http://localhost:3000'
        )
      )),
    },
  }
}

export default async function TokenIdPage({
  searchParams,
}: NextServerPageProps) {
  return <div>mint</div>
}

// export async function getServerSideProps(context: { req: any }) {
//   const req = context.req
//   const fullUrl = req.url

//   // Return the full URL as a prop
//   return {
//     props: {
//       fullUrl,
//     },
//   }
// }
