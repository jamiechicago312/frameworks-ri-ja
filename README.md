# Mint-A-Cast: A Farcaster Frame
An ETHGlobalFramework Hackathon Project by Ricy [@ricy](https://warpcast.com/ricy) and Jamie [@chicago](https://warpcast.com/chicago).

## Introduction
We created the Mint-A-Cast frame to empower creators and users. We wanted to solve 2 problems: 
- How do we have on-chain attribution for users who save casts?
- How do we reward creators for quality, popular casts?

Our Mint-A-Cast frame solves these two problems. First, the frame allows users to mint banger casts and allows them to have an on-chain record of casts they like. Second, creators (cast authors) can set a fee when their casts are minted; this gives creators another avenue of revenue. Creators also have a way to track users who are rewarding them for their content; this gives another directory to content creators to possibly reward their followers. With the Mint-A-Cast frame, users directly reward creators for quality content thus increases the reward for casting quality content.

## MVP Summary
Through the use of this frame, the user can mint a cast as an NFT. Currently, the user will need to visit the site – https://frameworks-ri-ja-seven.vercel.app – to paste the URL to upload the metadata. Afterward, they use the link provided to cast that will spin up a frame. This single-frame will allow users to mint casts directly from the Warpcast platform. Currently, the cast creator can set a minting fee by interacting with the contract directly as well as withdraw funds. 

**User Flow**
1. Find a cast they like; copy the cast link (format: `https://warpcast.com/[castAuthorName]/[castShortHash]`)
2. Navigate to the website https://frameworks-ri-ja-seven.vercel.app
3. Past URL into input box, click button to next step
4. Follow Transaction pop-up in order to use the Pinata SDK to upload the IPFS
5. Copy the link to the frame generated.
6. Either cast this link to spin up the frame or use a debugger like frames.js to see the frame.
7. Click mint & sign the wallet pop up
8. Wait for the transaction to complete

Currently, the Mint-A-Cast website and frame is usable to mint any cast; so no customization is required beyond providing the cast link.

## Technical Summary
The [contract](https://sepolia.etherscan.io/tx/0x4b50fa82925f3417af973bddf057a074345efe818a6491e898f057f898141f23) is a erc1155 smart contract. The contract is deployed on Sepolia and developed with Hardhat. It also provides interface for authors to adjust price and withdraw profits.

The frontend is a NextJS project. Using [Framejs](https://github.com/jamiechicago312/frameworks-ri-ja/blob/main/frontend/src/app/%5BtokenId%5D/frames/route.tsx) to achieve single page minting frame. This Mint-A-Cast frame is to present users with the cast image of the nft they can mint with a the mint button. The mint button would allow users to send transactions to Sepolia chain and the transaction would also send some ETH as the fees to buy/mint the nft. After users have submitted the transaction, the frame returns a transaction submitted frame with transaction hash. To convert a cast into NFT, the project is using APIs by Wield to retrieve related data and using the Pinata SDK to upload metadata to IPFS.

## Future Roadmap

**General Improvements**
- Create multipage frame
   - First Page
      - Allow users to input cast link into first frame
      - Submit button & transaction to upload metadata IPFS
   - Second Page
      - Show picture preview of cast
      - Mint button & transaction to mint NFT
   - Third Page
      - Show success image
      - Link out button to blockchain explorer
- Deploy an 1155 contract per creator from first mint
- When the same cast is minted, it will have the same token id; hence, using ERC 1155.
- Each NFT will have attributes to show:
   - Date
   - Author Name
   - Channel cast was made in
- Make sure contract follows standards to be minting with Warps
- Small ~$0.10 fee for each mint to go to us (Ricy & Jamie) to help cover cost to maintain the Frame

**User Improvements**
- The frame's input with be able to accept the cast URL or a full cast hash inputed
- After the first mint, when the user shares their minted cast other users can mint the same cast with Warps through Warpcast.
- User will have a Mint-A-Cast web client to browse Farcaster
   - Minting cast is an embedded function
   - Users can use any currency (cross chain execute; full chain abstraction)
   - User can create their own custom Mint-A-Cast frame for specific casts of theirs

**Creator Improvements**
- Creation of a web client front end for creator tools including but not limited to
  - Set mint pricing (e.g. 0.001 ETH)
  - Set mint limit amount (e.g. 10 total)
  - Set mint time limit (e.g. 1 day)
  - Unmintable Cast (disabled minting on some casts)
  - Airdrop minted casts to previous supporters
  - Allowlist minting
  - Subscription to cast minting (through Hypersub)
  - Specify currency received (e.g. Base ETH, DEGEN)
      - Users will be able to use whatever
      - The currency will be instant bridged under the hood
  - Specify Chain for Depolyed Contract
     - Default to a chain if none selected
