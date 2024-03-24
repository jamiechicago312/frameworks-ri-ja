import { Metadata, ResolvingMetadata } from 'next'
import { fetchMetadata } from 'frames.js/next'
import { getXmtpFrameMessage, isXmtpFrameActionPayload } from 'frames.js/xmtp'
import {
  FrameButton,
  FrameContainer,
  FrameImage,
  NextServerPageProps,
  getFrameMessage,
  getPreviousFrame,
} from 'frames.js/next/server'
import { vercelURL } from '@/utils/url'
import { ClientProtocolId } from 'frames.js'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const acceptedProtocols: ClientProtocolId[] = [
  {
    id: 'xmtp',
    version: 'vNext',
  },
  {
    id: 'farcaster',
    version: 'vNext',
  },
]

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const metaData = await fetchMetadata(
    new URL(
      `/:tokenId/frames?imgUrl=${searchParams.img}`,
      vercelURL() || 'http://localhost:3000'
    )
  )
  let ofMetaData: { [key: string]: string } = {}
  for (let key in metaData) {
    if (key.startsWith('fc:frame')) {
      let newKey = key.replace('fc:frame', 'of')
      ofMetaData[newKey] = metaData[key] as string
    }
  }
  return {
    title: 'Minting Frameworks',
    description: 'Frame for minting NFT',
    other: {
      // ...metaData,
      'fc:frame:image': metaData['fc:frame:image'],
      'og:image': metaData['fc:frame:image'],
      ...ofMetaData,
      'fc:frame': 'vNext',
    },
  }
}

export default async function TokenIdPage({
  searchParams,
}: NextServerPageProps) {
  // const previousFrame = getPreviousFrame(searchParams)
  return (
    <div>
      mint
      {/* <FrameContainer
        pathname="/:tokenId"
        state={{}}
        previousFrame={previousFrame}
        postUrl="/frames"
        accepts={acceptedProtocols}
      >
        <FrameImage aspectRatio="1.91:1">
          <div tw="w-4/5 h-4/5 flex justify-center items-center">
            <img
              src={
                (searchParams?.imgUrl as string) ??
                'https://client.warpcast.com/v2/cast-image?castHash=0xfefde144b989ce58e3865cc8ab6db5887d6fbf47'
              }
            />
          </div>
        </FrameImage>
        <FrameButton
          action="tx"
          target="/:tokenId/txdata"
          post_url="/:tokenId/frames"
        >
          Mint
        </FrameButton>
      </FrameContainer> */}
    </div>
  )
}
