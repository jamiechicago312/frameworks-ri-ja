//source of this API info https://docs.pinata.cloud/api-reference/endpoint/pin-json-to-ipfs
//guide for IPFS https://docs.pinata.cloud/ipfs-101/how-does-ipfs-work-with-nfts
//Installed Pinata SDK

// Use the JWT key
const pinataJWT = process.env.PINATA_API_JWT //assign JWT in vercel
const pinataSDK = require('@pinata/sdk');
const pinata = new pinataSDK({ pinataJWTKey: 'yourPinataJWTKey'});


//First we need to upload the image and get the CID
export dafault async function pinImageToIpfs () {

    
}


/*
const pinataKey = ; //Add this Env Var to Vercel

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