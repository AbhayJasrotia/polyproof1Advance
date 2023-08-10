##AbhayCryptoCanvas ERC721A Contract
AbhayCryptoCanvas is an ERC721A contract that allows you to create a collection of NFTs on the Ethereum blockchain. It provides the capability to mint new NFTs with certain limitations and a defined base URL for metadata. This contract is designed for specific use cases outlined below.

Functions
Constructor
solidity
Copy code
constructor()
The constructor initializes the contract with a predefined name and symbol for the NFTs. It also sets the contract deployer as the owner.

Modifier
solidity
Copy code
modifier onlyOwner()
The onlyOwner modifier restricts certain functions to be callable only by the owner of the contract. It ensures that only the owner can perform specific actions.

Minting
solidity
Copy code
function mint(uint256 quantity) external payable onlyOwner
The mint function allows the contract owner to mint new ERC721A tokens. It takes the following argument:

quantity: The number of tokens to mint.
The function ensures that the total supply of tokens doesn't exceed the defined maximum quantity. Tokens are minted and sent to the contract owner.

Base URI
solidity
Copy code
function _baseURI() internal view override returns (string memory)
This internal function is overridden to define the base URL for the metadata of the NFTs. It returns the predefined base URL.

Prompt Description
solidity
Copy code
function promptDescription() public pure returns (string memory)
The promptDescription function provides a description of the NFT collection. It returns a string describing the purpose of the collection.

Contract Details
Contract Name: AbhayCryptoCanvas
Symbol: ACC
Owner
This contract is owned by Abhay Jasrotia.

License
This contract is open-source and distributed under the MIT License. See the LICENSE file for more information.

Usage
Deploy the AbhayCryptoCanvas contract.
As the contract owner, you can mint new tokens using the mint function. Provide the desired quantity of tokens to mint.
The metadata for each NFT is located at the base URL defined in the contract.
The promptDescription function provides information about the purpose of the NFT collection.
