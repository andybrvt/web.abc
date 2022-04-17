// SPDX-License-Identifier: MIT


pragma solidity 0.8.11;


import "@chiru-labs/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BasicERC721a is ERC721A, Ownable {

  uint256 MAX_MINT;
  uint256 MAX_SUPPLY;
  uint256 MINT_RATE;
  string public BASE_URI;


  constructor(
    string memory name_,
    string memory symbol_,
    uint256 maxMint_,
    uint256 maxSupply_,
    uint256 mintRate_,
    string memory baseURI_
    ) public
  ERC721A(name_, symbol_)
  {
    MAX_MINT = maxMint_;
    MAX_SUPPLY = maxSupply_;
    MINT_RATE = mintRate_;
    BASE_URI = baseURI_;

  }


  // Need to property test these value in the scripts
  function mint(uint256 quantity) external payable {
    // _safeMint's second argument now takes in a quantity, not a tokenId.
    if(MAX_MINT > 0){
      require(quantity + _numberMinted(msg.sender) <= MAX_MINT, "Exceeded the limit");
    }
    require(totalSupply() + quantity <= MAX_SUPPLY, "Not enough tokens left");
    require(msg.value >= (MINT_RATE * quantity), "Not enough ether sent");

    _safeMint(msg.sender, quantity);
  }

  // To withdraw money from the contract
  function withdraw() external payable onlyOwner{
    payable(owner()).transfer(address(this).balance);
  }

  // to set the base URI when ever you mint, mint combines base uri with tokenId
  function _baseURI() internal view override returns (string memory){
    return BASE_URI;
  }


  function setMintRate(uint256 _mintRate) public onlyOwner {
       MINT_RATE = _mintRate;
   }



}
