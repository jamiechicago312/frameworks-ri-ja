import { imgUrl } from "../farcaster";

//source of this API info https://docs.pinata.cloud/api-reference/endpoint/pin-json-to-ipfs

const KEY = Deno.env.get("YOUR_PINATA_KEY_ENV"); 
//^ Need to figure out where we can keep the pinata key safe

const options = {
    method: 'POST',
    headers: {Authorization: 'Bearer: KEY', // I'm not sure how to put the API key with bearer here
        'Content-Type': 'application/json'},
    body: //I want to call the returned consts from the imgURL, I think this needs to be adjusted
        '{"pinataContent":{"name:":"Cast by ${imgUrl.saveAuthor}","description":"${saveText}","image":"${saveImage}"}}'
  };
  
  fetch('https://api.pinata.cloud/pinning/pinJSONToIPFS', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));