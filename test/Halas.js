const { expect } = require("chai");
const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { ethers } = require("hardhat");

describe("Halas contract", () => {
  const deployedContract = async () => {
    const [owner, address1, address2] = await ethers.getSigners();

    const halas = await ethers.deployContract("Halas");

    return { halas, owner, address1, address2 };
  };

  it("Should assign the total supply of tokens to the owner", async () => {
    const { halas, owner } = await loadFixture(deployedContract);

    const ownerBalance = await halas.balanceOf(owner.address);

    expect(await halas.totalSupply()).to.equal(ownerBalance);
  });
});
