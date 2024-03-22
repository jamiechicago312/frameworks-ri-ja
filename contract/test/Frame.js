const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");

describe("Frame", function () {
  async function deployFrame() {
    const [owner, addr2] = await ethers.getSigners();
    const Frame = await ethers.getContractFactory("Frame");
    const frame = await Frame.deploy();
    //  await frame.deployed();
    return { frame, owner, addr2 };
  }

  //   async function setToken() {
  //     const { frame, addr2 } = await loadFixture(deployFrame);
  //     const tokenId = 1;
  //     const uri = "https://example.com";
  //     const authors = addr2.address;
  //     const DEFAULT_FEES = await frame.DEFAULT_FEES();
  //     await frame.setToken(tokenId, authors, uri);
  //     return { frame, tokenId, uri, authors, DEFAULT_FEES };
  //   }

  it("able to set uri, authors and default fees to a specific tokenId", async function () {
    const { frame, addr2 } = await loadFixture(deployFrame);
    const tokenId = 1;
    const uri = "https://example.com";
    const authors = addr2.address;
    const DEFAULT_FEES = await frame.DEFAULT_FEES();
    await frame.setToken(tokenId, authors, uri);
    const tokenUri = await frame.uri(tokenId);
    const tokenAuthors = await frame.authors(tokenId);
    const tokenFees = await frame.fees(tokenId);
    expect(tokenUri).to.equal(uri);
    expect(tokenAuthors).to.equal(authors);
    expect(tokenFees).to.equal(DEFAULT_FEES);
  });

  it("able to set fees to a specific tokenId", async function () {
    const { frame, addr2 } = await loadFixture(deployFrame);
    const tokenId = 1;
    const uri = "https://example.com";
    const authors = addr2.address;
    await frame.setToken(tokenId, authors, uri);
    const fees = 101;
    await frame.connect(addr2).setFees(tokenId, fees);
    const tokenFees = await frame.fees(tokenId);
    expect(tokenFees).to.equal(BigInt(fees));
  });

  //   it("only the author of the token can set fees", async function () {
  //     const { frame, addr2 } = await loadFixture(deployFrame);
  //     const tokenId = 1;
  //     const uri = "https://example.com";
  //     const authors = addr2.address;
  //     await frame.setToken(tokenId, authors, uri);
  //     const fees = 101;
  //     await expect(frame.setFees(tokenId, fees)).to.be.revertedWith(
  //       "Frame: Only author can call this function",
  //     );
  //   });
});
