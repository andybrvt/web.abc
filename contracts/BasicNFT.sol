/*
  File use to mint an nft to the web, this will be the basic
  one use to add the code and such
  Functions that we are gonna need

 */

// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract BasicNFT is  ERC721URIStorage {


  uint256 public tokenCounter;


  using Strings for uint256;

  // Optional mapping for token URIs
  mapping (uint256 => string) private _tokenURIs;

  // Base URI
  string private _baseURIextended;
  /*

  This will be a collection, instead of an nft on its own. It will
  hold multiple nft collects.

  For example: if a website owner puts their website down, we would create
  one of this for them. And they can safemint a number of different nfts of their
  "website" parts on here

   */



  constructor(string memory name_, string memory symbol_) public
  ERC721(name_, symbol_)
  {

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
    tokenCounter += 1;

  }

  /* function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {
      require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
      _tokenURIs[tokenId] = _tokenURI;
  } */

  /*
    This fuction will set the uri of the tokenId
    It will check if you are the owner of the tokenId
   */
  // Note: remember that the memory variable lets you create a set chunk of space in
  // in the memory that you can use
  function setTokenURI(uint256 tokenId, string memory _tokenURI) public {
      require(_isApprovedOrOwner(_msgSender(), tokenId), "ERC721: caller is not owner no approved");
      _setTokenURI(tokenId, _tokenURI);
  }

  function simpleCreateCollectible(string memory tokenURI) public returns(uint256){
    uint256 newTokenId = tokenCounter;
    _safeMint(msg.sender, newTokenId); // inherited from OpenZeppelin, param: to, tokenid
    _setTokenURI(newTokenId, tokenURI); // allow our nft to have a token associated with it
    tokenCounter += 1;
    return newTokenId;
  }


}
