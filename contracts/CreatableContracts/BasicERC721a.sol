// SPDX-License-Identifier: MIT


pragma solidity 0.8.11;


import "@chiru-labs/contracts/ERC721A.sol";

contract BasicERC721a is ERC721A {

  uint256 MAX_MINT;
  uint256 MAX_SUPPLY;
  uint256 mintRate;

  constructor(string memory name_, string memory symbol_) public
  ERC721A(name_, symbol_)
  {

  }


  function mint(uint256 quantity) external payable {
    // _safeMint's second argument now takes in a quantity, not a tokenId.
    _safeMint(msg.sender, quantity);
  }


}
