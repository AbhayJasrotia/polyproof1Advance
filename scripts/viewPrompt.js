// This script fetches the prompt for generating AbhayCrypto images

const { ethers } = require("hardhat");
const ABI = require("../artifacts/contracts/AbhayCrypto.sol/AbhayCrypto.json");

async function main() {
  const contractAddress = "0x52FC28F8F7005A4899B928C4115aAF99aACc635A";
  const contractABI = ABI.abi;
  const networkName = "https://ethereum-goerli.publicnode.com";

  const provider = ethers.getDefaultProvider(networkName);

  // Get an instance of the contract using the contract address and ABI
  const contract = new ethers.Contract(contractAddress, contractABI, provider);

  // Get the prompt description from the contract
  const promptDescription = await contract.promptDescription();

  console.log(`Prompt Description :\n${promptDescription}`);
}

// Call the main function and handle errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
