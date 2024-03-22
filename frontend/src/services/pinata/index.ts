const KEY = Deno.env.get("YOUR_PINATA_KEY_ENV"); 
//^ Need to figure out where we can keep the pinata key safe

const options = {
    method: 'POST',
    headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
    body: '{"pinataContent":{"somekey":"somevalue"},"pinataMetadata":{"name":"pinnie.json"},"pinataOptions":{"cidVersion":1}}'
  };
  
  fetch('https://api.pinata.cloud/pinning/pinJSONToIPFS', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));