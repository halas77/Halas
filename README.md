# Halas - ERC-20 Token Development

## Introduction

This project is a hands-on exercise focused on creating an ERC-20 token, named `Halas`, using the Hardhat development environment along with OpenZeppelin’s robust contract libraries. The purpose of this project is to provide a comprehensive learning experience in blockchain development, from setting up the development environment to deploying and interacting with a real-world token on the Ethereum network.

## Running the Project

### 1. Compile the Contract

To compile the smart contract, run the following command:

```bash
npx hardhat compile
```

This will compile your Solidity contracts and generate the necessary artifacts.

### 2. Deploy the Contract

Deploy the contract to a local Hardhat network using the following command:

```bash
npx hardhat node
```

```bash
npm run local

```

These commands will deploy the `Halas` contract and provide you with the contract address.

### 3. Run Interaction Scripts

To interact with the deployed contract, execute the interaction script:

```bash
npm run script
```

This script demonstrates how to:

- **Approve a spender:** Allows a specific address to spend tokens on behalf of the token owner.
- **Check allowances:** Verifies how many tokens a spender is allowed to use.
- **Transfer tokens:** Moves tokens from one address to another, either directly or through an approved spender.
- **Check balances:** Displays the token balance of a specific address.

## Testing

To ensure that the smart contract works as expected, you can run the provided tests. These tests cover various ERC-20 functionalities such as minting tokens, approving spenders, transferring tokens, and more.

### Running Tests

Execute the following command to run the tests:

```bash
npx hardhat test

```

This will run all the test scripts located in the test/ directory
