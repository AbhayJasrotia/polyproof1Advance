// This script batch mints DogePound ERC721A tokens.

const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  // Get private key from env
  const privateKey = process.env.PRIVATE_KEY;

  // The URL of the network provider
  const networkAddress = "https://ethereum-goerli.publicnode.com";

  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress = "0x52FC28F8F7005A4899B928C4115aAF99aACc635A";

  // Get the contract factory and attach it to the signer
  const MyNFT = await ethers.getContractFactory("AbhayCrypto", signer);
  const contract = await MyNFT.attach(contractAddress);

  // Call the mint function on the contract to mint 5 tokens
  await contract.mint(5);

  console.log("Minted 5 NFT's of Abhay Crypto Canvas.");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });