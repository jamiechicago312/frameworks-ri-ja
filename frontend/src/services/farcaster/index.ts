export interface CastInfo {
  autherName: string
  text: string
  authorAdd: string
  castHash: string
  imgUrl: string
}

//API code to look up cast
export default async function fetchCast(shortHash: string, username: string) {
  try {
    const API_KEY = process.env.NEXT_PUBLIC_WEILD_API_KEY ?? ''
    const res = await fetch(
      `https://protocol.wield.co/farcaster/v2/cast-short?shortHash=${shortHash}&username=${username}`, // Fixed URL syntax
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'API-KEY': API_KEY,
        },
      }
    )
    const resJson = await res.json()
    // console.log(resJson.result.cast)
    return resJson.result.cast
  } catch (error) {
    // console.log(error)
    throw error
  }
}

//Use API response to get author, cast text, & create image
export const getCastInfo = async (castUrl: string): Promise<CastInfo> => {
  if (!castUrl?.startsWith('https://warpcast.com')) {
    throw new Error('Invalid URL')
  }
  //const address = searchParams.get("address") // Do we need it?
  const parts = castUrl.split('/')
  const username = parts[3] // takes username out
  const hashShort = parts[4] //takes short hash out
  const resJson = await fetchCast(hashShort, username) //use wield API
  const castHash: string = resJson.hash //pulls out the full hash
  const imgUrl = `https://client.warpcast.com/v2/cast-image?castHash=${castHash}`
  const autherName = username
  const text = resJson.text
  const authorAdd = resJson.author.connectedAddress //I am just pulling the custody address that is first and is an ETH address; not ENS
  //Return response object
  return {
    imgUrl,
    autherName, //Save Authors Name
    text, //Save Cast Text
    authorAdd, // Save Author's custody address
    castHash, //Save full cast hash
  }
}
