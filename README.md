# Polygon Proof of Stake NFT Project Module 1

Hello, I am Abhay, and this is my Polygon Proof of Stake NFT project. In this project, I have built an NFT collection on the Ethereum blockchain and mapped it to the Polygon network using the Polygon Bridge to increase demand and save on gas fees.

## Project Overview

### Challenge

The challenge was to build an NFT collection and use an image generation tool (like DALLE 2 or Midjourney) to generate images for the NFTs. Additionally, I needed to deploy the NFT collection on the Ethereum Goerli testnet and then use the Polygon Bridge to transfer the assets to the Polygon Mumbai network.

### Tools Used

- Hardhat: A development environment for Ethereum smart contracts.
- Polygon Bridge: To transfer assets between Ethereum and Polygon networks.
- DALLE 2 or Midjourney: Image generation tool for NFTs.
- IPFS via pinata.cloud: For storing the NFT images.

## Functionality and Files

### Smart Contract: AbhayCrypto.sol

The main smart contract, `AbhayCrypto.sol`, is an ERC721 contract that represents the NFT collection. It has the following functions:

- `mint(uint256 quantity)`: Allows the me to mint a specified quantity of NFTs. Only the owner can perform this action.
- `promptDescription()`: Returns the prompt description used to generate the NFT images.

### Deployment Script: deploy.js

The `deploy.js` script is used to deploy the `AbhayCrypto` contract on the Ethereum Goerli testnet. After deploying, it logs the contract address for future reference.

### Minting Script: batchmint.js

The `batchmint.js` script is used to batch mint 5 NFTs at once after the contract is deployed. It's called automatically after deployment.

### Transfer Script: approve.js

The `approve.js` script is used to approve the NFTs for transfer to the Polygon Mumbai network using the FxPortal Bridge. It's called after minting the NFTs.

### Transfer Script: viewprompt.js

The `viewprompt.js` script fetches the prompt description for generating the NFT images and logs it to the console.

### Balance Script: getbalance.js

The `getbalance.js` script fetches the NFT balance of my account on the Polygon Mumbai network and displays it in the console.

## Getting Started

1. Clone this repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Configure your `.env` file with your private key and other required variables.
4. Deploy the contract using `npx hardhat run scripts/deploy.js --network goerli`.
5. Mint the NFTs using `npx hardhat run scripts/batchmint.js --network goerli`.
6. Approve and transfer the NFTs to Polygon Mumbai using `npx hardhat run scripts/approve.js --network goerli`.
7. View the prompt description using `npx hardhat run scripts/viewprompt.js`.
8. Get the NFT balance using `npx hardhat run scripts/getbalance.js--network mumbai`.

---

**Summer Training:** Chandigarh University (Punjab)
**License:** MIT
**Owner:** [Abhay Jasrotia](https://www.linkedin.com/in/abhay-jasrotia-907487236/)
