const KEY = Deno.env.get("YOUR_WEILD_KEY_ENV"); 
// ^ where can we keep this save in this repo



export default async function fetchCast(shortHash: string, username: string) {
  try {
    const res = await fetch(
      `https://protocol.wield.co/farcaster/v2/cast-short?shortHash=${shortHash}&username=${username}`, // Fixed URL syntax
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "API-KEY": KEY!,
        },
      },
    );
    const resJson = await res.json();
    console.log(resJson.result.cast);
    return resJson.result.cast;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

//code to look up cast in API
export const imgUrl = async (request) => {

  app.post("/mint", async () => { //don't know if it should say /mint
    try {
      const searchParams = new URL(request.url).searchParams;
      const castUrl = searchParams.get("cast") //castUrl will be user input
      if (!castUrl.startsWith("https://warpcast.com")) {
        return {
          status: 400,
          body: "Invalid cast URL. URL must start with 'https://warpcast.com'."
        };
      }
      const address = searchParams.get("address")
      const parts = castUrl.split('/');
      const username = parts[3]; // takes username out
      const hashShort = parts[4]; //takes short hash out
      const rawCast = await fetchCast(hashShort, username) //use wield API
      const hashLong: string = resJson.result.cast.hash; //pulls out the full hash
      const saveImage = new URL(`https://client.warpcast.com/v2/cast-image?castHash=${hashLong}`) 
 }