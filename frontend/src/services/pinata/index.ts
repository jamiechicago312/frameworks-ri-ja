//source of this API info https://docs.pinata.cloud/api-reference/endpoint/pin-json-to-ipfs

const KEY = Deno.env.get("YOUR_PINATA_KEY_ENV"); 
//^ Need to figure out where we can keep the pinata key safe

const options = {
    method: 'POST',
    headers: {Authorization: 'Bearer: KEY', // I'm not sure how to put the API key with bearer here
        'Content-Type': 'application/json'},
    body: 
    '{"pinataContent":
        {"somekey":"somevalue"},
    "pinataMetadata": //metadata resource https://docs.opensea.io/docs/metadata-standards
        {"name":"pinnie.json"},
    "pinataOptions":
        {"cidVersion":1}}'
  };
  
  fetch('https://api.pinata.cloud/pinning/pinJSONToIPFS', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));