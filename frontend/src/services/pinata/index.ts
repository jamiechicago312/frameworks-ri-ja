import { CastInfo } from '@/services/farcaster'

// Use the JWT key
const pinataJWT = process.env.NEXT_PUBLIC_PINATA_API_JWT

//TODO:wrap all fetch
export async function pinJSONtoPinata(castInf: CastInfo) {
  const pinataContent = {
    name: `Cast by ${castInf.autherName}`,
    description: `${castInf.text}`,
    image: `${castInf.imgUrl}`,
  }
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${pinataJWT}`,
    },
    body: JSON.stringify(pinataContent),
  }
  const resp = await fetch(
    'https://api.pinata.cloud/pinning/pinJSONToIPFS',
    options
  )
  const res = await resp.json()
  //return response
  return res.IpfsHash
}
