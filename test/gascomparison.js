const { ethers, waffle } = require("hardhat");
const { expect } = require("chai");


beforeEach(async function () {
     [owner, user1] = await ethers.getSigners();

  ERC721AToken = await (
    await ethers.getContractFactory("ERC721AToken")
  ).deploy();
  ERC721VToken = await (
    await ethers.getContractFactory("ERC721VToken")
  ).deploy();
});

describe("Gas Comparison Tests", async function () {
  it("Tests gas usage", async function () {
    await ERC721AToken.userMintOne();
    await ERC721VToken.userMintOne();

    /*
    await ERC721AToken.userMintTwo();
    await ERC721VToken.userMintTwo();

    await ERC721AToken.userMintThree();
    await ERC721VToken.userMintThree();

    await ERC721AToken.userMintFour();
    await ERC721VToken.userMintFour();

    await ERC721AToken.userMintFive();
    await ERC721VToken.userMintFive();

    await ERC721AToken.userMintTen();
    await ERC721VToken.userMintTen();

    await ERC721AToken.userMintTwenty();
    await ERC721VToken.userMintTwenty();
    */

    await ERC721AToken.transferFrom(owner.address, user1.address, 0);
    await ERC721VToken.transferFrom(owner.address, user1.address, 0);
  });
});
