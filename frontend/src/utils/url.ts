import { headers } from 'next/headers'

export function currentURL(pathname: string): URL {
  const headersList = headers()
  const host = headersList.get('x-forwarded-host') || headersList.get('host')
  const protocol = headersList.get('x-forwarded-proto') || 'http'

  try {
    return new URL(pathname, `${protocol}://${host}`)
  } catch (error) {
    return new URL('http://localhost:3000')
  }
}

export function vercelURL() {
  return process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : undefined
}

export function getParams(url: string) {
  const queryStringIndex = url.indexOf('?')
  const baseUrl =
    queryStringIndex === -1 ? url : url.substring(0, queryStringIndex)
  const queryString = url.substring(queryStringIndex + 1)

  // Parsing query parameters
  const searchParams = new URLSearchParams(queryString)
  const tokenId = url.substring(baseUrl.lastIndexOf('/') + 1, queryStringIndex)
  const img = searchParams.get('img')
  return { tokenId, img }
}
