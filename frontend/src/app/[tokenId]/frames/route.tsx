/* eslint-disable react/jsx-key */
import { Button, createFrames } from 'frames.js/next'
import { shortenAddress } from '@/utils/address'

const frames = createFrames({
  basePath: '/:tokenId',
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
        <img src={imgUrl} />
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
