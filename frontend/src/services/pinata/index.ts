//source of this API info https://docs.pinata.cloud/api-reference/endpoint/pin-json-to-ipfs
//guide for IPFS https://docs.pinata.cloud/ipfs-101/how-does-ipfs-work-with-nfts
//Installed Pinata SDK
import { imgUrl } from ../farcaster/index.ts //check if I made this correctly please
import { fetchCast } from ../farcaster.inex.ts 

// Use the JWT key
const pinataJWT = process.env.PINATA_API_JWT //assign JWT in vercel
const pinataSDK = require('@pinata/sdk');
const pinata = new pinataSDK({ pinataJWTKey: 'yourPinataJWTKey'});

//Second we need to take the CID from the previous function, add it to for our image, and pinJSONtoIPFS it to pinata
//Used this doc for reference https://docs.pinata.cloud/sdks/pinata-sdk#pinjsontoipfs
export default async function pinJSONtoPinata () {const body = {
    name: `Cast by ${imgUrl.saveAuthor}`,
    description: `${imgUrl.saveText}`,
    image: `ipfs://${imgUrl.saveImage}`
};
const options = {
    pinataMetadata: {
        name: `${fetchCast.}`,
    },
    pinataOptions: {
        cidVersion: 0
    }
};
const res = await pinata.pinJSONToIPFS(body, options)
//return
console.log(res)

}

/* //this is to upload image to ipfs -- skip this
//First we need to upload the image and get the CID
// Use this doc for reference https://docs.pinata.cloud/sdks/pinata-sdk#pinfiletoipfs
export dafault async function pinImageToPinata () {
    const fs = require('fs');
    const readableStreamForFile = fs.createReadStream(imgUrl.saveImage); //the file from from ../farcaster/index.js
    const options = {
        pinataMetadata: { //this is not the json but just for pinata directory
            name: ${imgUrl.saveImage},
    },
    pinataOptions: {
        cidVersion: 0
    }
};
const res = await pinata.pinFileToIPFS(readableStreamForFile, options)
console.log(res.imageCID)
return res.imageCID; // Return the imageCID
}
*/