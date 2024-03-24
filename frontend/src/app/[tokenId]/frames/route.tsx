/* eslint-disable react/jsx-key */
import { openframes } from 'frames.js/middleware'
import { getXmtpFrameMessage, isXmtpFrameActionPayload } from 'frames.js/xmtp'
import { Button, createFrames } from 'frames.js/next'
import { shortenAddress } from '@/utils/address'

const frames = createFrames({
  basePath: '/:tokenId',
  middleware: [
    openframes({
      clientProtocol: {
        id: 'farcaster',
        version: 'vNext',
      },
      handler: {
        isValidPayload: (body: JSON) => isXmtpFrameActionPayload(body),
        getFrameMessage: async (body: JSON) => {
          if (!isXmtpFrameActionPayload(body)) {
            return undefined
          }
          const result = await getXmtpFrameMessage(body)

          return { ...result }
        },
      },
    }),
  ],
})

const handleRequest = frames(async (ctx) => {
  const imgUrl = ctx.searchParams?.imgUrl ?? ''

  if (ctx.message?.transactionId) {
    return {
      image: (
        <div tw="w-4/5 h-full flex justify-center items-center">
          tx submitted: {ctx.message.transactionId}
        </div>
      ),
      imageOptions: {
        aspectRatio: '1:1',
      },
    }
  }

  return {
    image: (
      <div tw="w-4/5 h-4/5 flex justify-center items-center">
        <img
          src={
            imgUrl ??
            'https://client.warpcast.com/v2/cast-image?castHash=0xfefde144b989ce58e3865cc8ab6db5887d6fbf47'
          }
        />
      </div>
    ),
    version: 'vNext',
    imageOptions: {
      aspectRatio: '1:1',
    },
    buttons: [
      <Button action="tx" target="/txdata" post_url="/frames">
        Mint
      </Button>,
    ],
  }
})

export const GET = handleRequest
export const POST = handleRequest
