// SPDX-License-Identifier: MIT
// structure: {
// 'user address': [ address of smart contract, address of smartcontract ...]
// 'user address': [ address of smart contract, address of smartcontract ...]
// }

pragma solidity 0.8.11;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import './BasicNFT.sol';

// hex924821jd1=> child solidity class


contract CreateCollectionContract {

  // create collection
  // get all collection adddresses
  //

  // This will map the user to the list of addresses of basicNFT
  mapping (address => address[]) public collectionDict;


  function createCollection(string memory name_, string memory symbol_) public  {
    BasicNFT single_collection = new BasicNFT(name_, symbol_);
    collectionDict[msg.sender].push(address(single_collection));
  }

  function getAllCollectionAddresses() view public returns(address[] memory) {
    return collectionDict[msg.sender];
  }


}
