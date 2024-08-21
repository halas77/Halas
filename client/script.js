const { ethers } = require("hardhat");

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

async function getContractInstance() {
  const halas = await ethers.getContractFactory("Halas");
  return halas.attach(contractAddress);
}

async function approveSpender(contract, spender, amount) {
  const approvalTx = await contract.approve(spender.address, amount);
  await approvalTx.wait();
  console.log(`Approved ${amount} tokens for ${spender.address}`);
}

async function checkAllowance(contract, owner, spender) {
  const allowance = await contract.allowance(owner.address, spender.address);
  console.log(`Allowance for ${spender.address}: ${allowance.toString()}`);
  return allowance;
}

async function transferTokens(contract, spender, from, to, amount) {
  const transferTx = await contract
    .connect(spender)
    .transferFrom(from.address, to.address, amount);
  await transferTx.wait();
  console.log(
    `Transferred ${amount} tokens from ${from.address} to ${to.address}`
  );
}

async function checkBalance(contract, address) {
  const balance = await contract.balanceOf(address.address);
  console.log(`${address.address} balance: ${balance.toString()}`);
  return balance;
}

async function main() {
  const [owner, address1, address2] = await ethers.getSigners();
  
  const myDeployedContract = await getContractInstance();

  await approveSpender(myDeployedContract, address1, 100000);

  await checkAllowance(myDeployedContract, owner, address1);

  await transferTokens(myDeployedContract, address1, owner, address2, 100);

  await checkBalance(myDeployedContract, address2);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
