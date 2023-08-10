// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "node_modules/erc721a/contracts/ERC721A.sol";

contract AbhayCrypto is ERC721A {
    address public owner;

    // max amount
    uint256 public maxQuantity = 5;

    // nfts url
    string baseUrl =
        "https://gateway.pinata.cloud/ipfs/QmTnsfBCssmepLpak9x2NcDFofht1955gWEq6UjKMMxfS2";

    constructor() ERC721A("AbhayCryptoCanvas", "ACC") {
        owner = msg.sender;
    }

    // only owner function
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action!");
        _;
    }

    // mint NFT
    function mint(uint256 quantity) external payable onlyOwner {
        require(
            totalSupply() + quantity <= maxQuantity,
            "You can not mint more than 5"
        );
        _mint(msg.sender, quantity);
    }

    // Base URL for NFTs
    function _baseURI() internal view override returns (string memory) {
        return baseUrl;
    }

    // Prompt
    function promptDescription() public pure returns (string memory) {
        return "Abhay's Crypto Canvas for POLY PROOF Module 1";
    }
}
