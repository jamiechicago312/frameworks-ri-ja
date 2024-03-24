import { ethers, BrowserProvider } from 'ethers'
import FrameABI from '@/utils/contracts/Frame.json'
import { CONTRACT_ADDRESS } from '@/utils/constants'
import { getCastInfo } from '@/services/farcaster'
import { pinJSONtoPinata } from '@/services/pinata'

export const castToCID = async (castUrl: string) => {
  const castInfo = await getCastInfo(castUrl)
  const CID = await pinJSONtoPinata(castInfo)
  return { CID, castInfo }
}

export const fetchLastTokenId = async () => {
  if (typeof window === 'undefined') return null
  if (!window.ethereum) {
    throw new Error('Please install metamask')
  }
  const provider = new BrowserProvider(window.ethereum)
  const frameContract = new ethers.Contract(
    CONTRACT_ADDRESS,
    FrameABI,
    provider
  )
  const tokenId = await frameContract._tokenIds()
  return Number(tokenId) 
}

export const setToken = async (author: string, metaCID: string) => {
  if (typeof window === 'undefined') return
  if (!window.ethereum) {
    throw new Error('Please install metamask')
  }
  const signer = await new BrowserProvider(window.ethereum).getSigner()
  const frameContract = new ethers.Contract(CONTRACT_ADDRESS, FrameABI, signer)
  const tx = await frameContract.setToken(author, `ipfs://${metaCID}`)
  await tx.wait()
}

export const creatToken = async (castUrl: string) => {
  if (typeof window === 'undefined') return null
  const newTokenId = await fetchLastTokenId()
  if (!newTokenId) throw new Error('Failed to fetch last token id')
  const { CID, castInfo } = await castToCID(castUrl)
  await setToken(castInfo.authorAdd, CID)
  return { newTokenId, imgUrl: castInfo.imgUrl }
}
