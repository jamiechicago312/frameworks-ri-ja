# Mint-A-Cast: A Farcaster Frame
An ETHGlobalFramework Hackathon Project by Ricy [@ricy](https://warpcast.com/ricy) and Jamie [@chicago](https://warpcast.com/chicago).

## Introduction
We created the Mint-A-Cast frame to empower creators and users. We wanted to solve 2 problems: 
- How do we have on-chain attribution for users who save casts?
- How do we reward creators for quality, popular casts?

Our Mint-A-Cast frame solves these two problems. First, the frame allows users to mint banger casts and allows them to have an on-chain record of casts they like. Second, creators (cast authors) can set a fee when their casts are minted; this gives creators another avenue of revenue. Creators also have a way to track users who are rewarding them for their content; this gives another directory to content creators to possibly reward their followers. With the Mint-A-Cast frame, users directly reward creators for quality content thus increases the reward for casting quality content.

## MVP Summary
Through the use of this frame, user can input a cast link and complete a transaction to mint the cast as an NFT. This NFT get attributed to the cast creator. Currently, the cast creator can set a minting fee by interacting with the contract directly. 

**User Flow**
1. Find a cast they like; copy the cast link (format: https://warpcast.com/[castAuthorName]/[castShortHash])
2. Navigate to the Mint-A-Cast frame; we recommend pinning this frame to the top of channels for greatest visibility
3. Past URL into input box, click button to next step
4. Follow Transaction pop-up
5. Wait for Mint to Complete
6. Check notifications for newly minting NFT

**Creator Flow**
1. Have Mint-A-Cast Frame pinned in a cast to top of channel for easy access
2. Interact with the 1155 ERC contract directly to update cost per mint

Currently, the Mint-A-Cast Frame is not individialized per cast author, so there is no need to add a customized frame per channel. This single frame can work for any cast across the Farcaster platform.

## Technical Summary

## Future Roadmap

**General Improvements**
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
