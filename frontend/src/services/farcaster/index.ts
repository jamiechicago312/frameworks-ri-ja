const weildKey = process.env.WEILD_API_KEY; // Add this to Vercel


//API code to look up cast
export default async function fetchCast(shortHash: string, username: string) {
  try {
    const res = await fetch(
      `https://protocol.wield.co/farcaster/v2/cast-short?shortHash=${shortHash}&username=${username}`, // Fixed URL syntax
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "API-KEY": weildKey!,
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
      const saveImage = new URL(`https://client.warpcast.com/v2/cast-image?castHash=${hashLong}`); 
      const saveAuthor = username
      const saveText = resJson.result.cast.text

      //Return response object
      return {
        status: 200,
        body: saveImage.toString(), // Convert URL to string before returning
        saveAuthor.toString(), //Save Authors Name
        saveText.toString(), //Save Cast Text
      };
    } catch (error) {
      console.error(error);
      return {
        status: 500,
        body: "Internal Server Error"
      };
    }
    }