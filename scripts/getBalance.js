const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/AbhayCrypto.sol/AbhayCrypto.json");

const contractAddress = "0x52FC28F8F7005A4899B928C4115aAF99aACc635A"; // place your contract address here
const contractABI = contractJSON.abi;
const walletAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de"; // place your public address for your wallet here

async function main() {
    const contract = await hre.ethers.getContractAt(contractABI, contractAddress);

    // Get the balance of your wallet's NFTs
    const balance = await contract.balanceOf(walletAddress);

    console.log("You now have: " + balance.toString() + " NFTs");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
