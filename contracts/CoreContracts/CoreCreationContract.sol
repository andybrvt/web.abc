// SPDX-License-Identifier: MIT


pragma solidity 0.8.11;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import '../CreatableContracts/BasicERC721.sol';

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


}
