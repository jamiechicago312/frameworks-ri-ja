import { getCastInfo } from '@/services/farcaster'
import { pinJSONtoPinata } from '@/services/pinata'

export const castToCID = async (castUrl: string) => {
  const castInfo = await getCastInfo(castUrl)
  const CID = await pinJSONtoPinata(castInfo)
  return { CID, castInfo }
}
