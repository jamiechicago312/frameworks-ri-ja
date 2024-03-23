//source of this API info https://docs.pinata.cloud/api-reference/endpoint/pin-json-to-ipfs
//guide for IPFS https://docs.pinata.cloud/ipfs-101/how-does-ipfs-work-with-nfts
//Installed Pinata SDK
import { imgUrl } from ../farcaster/index.ts //check if I made this correctly please


// Use the JWT key
const pinataJWT = process.env.PINATA_API_JWT //assign JWT in vercel
const pinataSDK = require('@pinata/sdk');
const pinata = new pinataSDK({ pinataJWTKey: 'yourPinataJWTKey'});


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

//Second we need to take the CID from the previous function, add it to for our image, and pinJSONtoIPFS it to pinata
//Used this doc for reference https://docs.pinata.cloud/sdks/pinata-sdk#pinjsontoipfs
export default async function pinJSONtoPinata () {const body = {
    message: 'Pinatas are awesome'
};
const options = {
    pinataMetadata: {
        name: MyCustomName,
        keyvalues: {
            customKey: 'customValue',
            customKey2: 'customValue2'
        }
    },
    pinataOptions: {
        cidVersion: 0
    }
};
const res = await pinata.pinJSONToIPFS(body, options)
console.log(res)

}



/*

const options = {
    method: 'POST',
    headers: {Authorization: `Bearer: ${pinataKey}`, // I think this need ` instead of '
        'Content-Type': 'application/json'},
    body: //I want to call the returned consts from the imgURL, I think this needs to be adjusted
        '{"pinataContent":{"name:":"Cast by ${imgUrl.saveAuthor}","description":"${saveText}","image":"${saveImage}"}}'
  };
  
  fetch('https://api.pinata.cloud/pinning/pinJSONToIPFS', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
*/