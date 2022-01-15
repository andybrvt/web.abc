/*
  File use to mint an nft to the web, this will be the basic
  one use to add the code and such
  Functions that we are gonna need

 */

// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract BasicNFT is ERC721 {

  /*

  This will be a collection, instead of an nft on its own. It will
  hold multiple nft collects.

  For example: if a website owner puts their website down, we would create
  one of this for them. And they can safemint a number of different nfts of their
  "website" parts on here

   */

  uint256 public tokenCounter; // id for each nft in the collection
  uint256 public fee;



  constructor(string memory name_, string memory symbol_, uint256 _fee) public
  ERC721(name_, symbol_)
  {
    tokenCounter = 0;
    fee = _fee;
  }

  /*
    Minting a token, all you have to do is craete a tokenId and then
    safe mint it with the sender of the createCollectible function
    --> the mapping will be inhertied from the ERC721 file. It will map
    tokenId to sender
   */
  function createCollectible() public {
    // this function will create the nft of part of the website
    uint256 newTokenId = tokenCounter;
    _safeMint(msg.sender, newTokenId);
    newTokenId += 1;

  }


  /*
    This fuction will set the uri of the tokenId
    It will check if you are the owner of the tokenId
   */
  // Note: remember that the memory variable lets you create a set chunk of space in
  // in the memory that you can use
  function setTokenURI(uint256 tokenId, string memory _tokenURI) public {
      require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: caller is not owner no approved");
      setTokenURI(tokenId, _tokenURI);
  }


}
