// SPDX-License-Identifier: MIT


pragma solidity 0.8.11;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import '../CreatableContracts/BasicERC721.sol';
import '../CreatableContracts/BasicERC721a.sol';

contract CoreCreationContract {

  mapping(address => address[]) public collectionDict;



  function createBasicERC721(string memory name_,
    string memory symbol_,
    address _VRFCoordinator,
    address _LinkToken,
    bytes32 _keyhash
    ) public {

    BasicERC721 new_nft_collection = new BasicERC721(name_,
      symbol_,
      _VRFCoordinator,
      _LinkToken,
      _keyhash
    );
    collectionDict[msg.sender].push(address(new_nft_collection));


  }

  function createBasicERC721A(
    string memory name_,
    string memory symbol_,
    uint256 maxMint_,
    uint256 maxSupply_,
    uint256 mintRate_,
    string memory baseURI_
  ) public {
    BasicERC721a new_nft_collection = new BasicERC721a(
      name_,
      symbol_,
      maxMint_,
      maxSupply_,
      mintRate_,
      baseURI_
      );
    collectionDict[msg.sender].push(address(new_nft_collection));

  }

  function getERC721Contracts(address _senderAddress) view public returns(address[] memory){
    return collectionDict[_senderAddress];
  }

}
