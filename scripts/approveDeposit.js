const { ethers } = require("hardhat");
const { FXRootContractAbi } = require('../artifacts/FXRootContractAbi.js');
const ABI = require('../artifacts/contracts/AbhayCrypto.sol/AbhayCrypto.json');
require('dotenv').config();

//Transfer ERC721A tokens to the Ethereum FxChain network
async function main() {

  // Set up connections to network and wallet
  const networkAddress = 'https://ethereum-goerli.publicnode.com';
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  // Create a wallet instance
  const wallet = new ethers.Wallet(privateKey, provider);

  // Get the signer instance
  const [signer] = await ethers.getSigners();

  // Get ERC721A contract instance
  const NFT = await ethers.getContractFactory("AbhayCrypto");
  const nft = await NFT.attach('0x52FC28F8F7005A4899B928C4115aAF99aACc635A');

  // Get FXRoot contract instance
  const fxRootAddress = '0xF9bc4a80464E48369303196645e876c8C7D972de';
  const fxRoot = await ethers.getContractAt(FXRootContractAbi, fxRootAddress);

  // TokenIds to transfer
  const tokenIds = [0, 1, 2, 3, 4]; 

  // Approve the nfts for transfer
  const approveTx = await nft.connect(signer).setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log('Approval Confirmed.');

  // Deposit the nfts to the FXRoot contracts
  for (const tokenId of tokenIds) {
    const depositTx = await fxRoot.connect(signer).deposit(
      nft.address,
      wallet.address, 
      tokenId,
      '0x6566'
    );

    // Wait for the deposit to be confirmed
    await depositTx.wait();
  }
  console.log("Abhay's Crypto Canvas are Approved and Deposited.");
}


// Call the main function and handle any errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
