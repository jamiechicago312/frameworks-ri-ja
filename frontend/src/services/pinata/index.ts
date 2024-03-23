//source of this API info https://docs.pinata.cloud/api-reference/endpoint/pin-json-to-ipfs
//guide for IPFS https://docs.pinata.cloud/ipfs-101/how-does-ipfs-work-with-nfts

import { imgUrl } from "../farcaster";

const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
const pinataJwt = process.env.PINATA_API_JWT // In Vercel

const pinFileToIPFS = async () => {
    const formData = new FormData();
    const src = imgUrl.saveImage; //i'm trying to pull the saveImage that is returns from ../farcaster/index.ts
    
    const file = fs.createReadStream(src)
    formData.append('file', file)
    
    const pinataMetadata = JSON.stringify({
      name: 'File name',
    });
    formData.append('pinataMetadata', pinataMetadata);

    try{
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: pinataJwt
        }
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
}

pinFileToIPFS()




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