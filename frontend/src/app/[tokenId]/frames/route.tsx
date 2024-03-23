/* eslint-disable react/jsx-key */
import { Button, createFrames } from 'frames.js/next'

const frames = createFrames({
  basePath: '/:tokenId',
})

const handleRequest = frames(async (ctx) => {
  console.log('ctx', ctx)
  if (ctx.message?.transactionId) {
    return {
      image: (
        <div tw="bg-purple-800 text-white w-full h-full justify-center items-center flex">
          Transaction submitted! {ctx.message.transactionId}
        </div>
      ),
      imageOptions: {
        aspectRatio: '1:1',
      },
    }
  }

  return {
    image: (
      <div tw="bg-purple-800 text-white w-full h-full justify-center items-center">
        Mint the cast
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
