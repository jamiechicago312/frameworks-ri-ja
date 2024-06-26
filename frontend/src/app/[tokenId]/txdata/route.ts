import FrameABI from '@/utils/contracts/Frame.json'
import { TransactionTargetResponse } from 'frames.js'
import { getFrameMessage } from 'frames.js/next/server'
import { NextRequest, NextResponse } from 'next/server'
import {
  Abi,
  createPublicClient,
  encodeFunctionData,
  getContract,
  http,
} from 'viem'
import { sepolia } from 'viem/chains'
import { CONTRACT_ADDRESS, CHAIN_ID } from '@/utils/constants'
import { getParams } from '@/utils/url'

export async function POST(
  req: NextRequest
): Promise<NextResponse<TransactionTargetResponse>> {
  const json = await req.json()
  const { tokenId } = getParams(json.untrustedData.url)

  const frameMessage = await getFrameMessage(json)

  if (!frameMessage) {
    throw new Error('No frame message')
  }
  const callData = encodeFunctionData({
    abi: FrameABI as Abi,
    functionName: 'mint',
    args: [tokenId, '0x'],
  })

  const publicClient = createPublicClient({
    chain: sepolia,
    transport: http(),
  })

  const frameContract = getContract({
    address: CONTRACT_ADDRESS,
    abi: FrameABI as Abi,
    client: publicClient,
  })

  const tokenPrice: BigInt = (await frameContract.read.fees([
    tokenId,
  ])) as BigInt

  return NextResponse.json({
    chainId: 'eip155:' + CHAIN_ID,
    method: 'eth_sendTransaction',
    params: {
      abi: FrameABI as Abi,
      to: CONTRACT_ADDRESS,
      value: tokenPrice.toString(),
      data: callData,
    },
  })
}
