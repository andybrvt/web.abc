// always put the pragma here
// SPDX-License-Identifier: MIT

pragma solidity 0.8.11;


// Get familar with all the different functions in ERC721 and VRFConsumerBase

// if you are gonna work with the erc721, gonna need to inherent it from
// openzepeelin or somewhere

// make sure to put it in brownie.yaml for dependencies
// the VRFConsumerBase is used to get random numbers that are blockchain safe
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

// similarly to a class
// remember when getting any contract, you are gonna need abi and address
// the "is" is for inhereting


// Remember when doing anything, you have to run brownie compile <----
contract AdvancedCollectible is ERC721URIStorage, VRFConsumerBase {
  // remember for the constructor, you are gonna need one for each library you
  // inhereted

  // internal is well use only in the contract, where as public is seen by anyone
  // you can declar global variables
  bytes32 internal keyHash;
  uint256 public fee;
  uint256 public tokenCounter;

  // like a dict
  // this jsut tells the type


  // this is the main one and what happnes in the contract
  /* sender --> itemId(tokenId) --> tokenURI */

  // requestId --> sneder
  // requestId --> tokenURI
  // tokenId --> breed
  // requestId --> tokenId

  mapping(bytes32 => address) public requestIdToSender;
  mapping(bytes32 => string) public requestIdToTokenURI;
  mapping(uint256 => Breed) public tokenIdToBreed;
  mapping(bytes32 => uint256) public requestIdToTokenId;


  //enum, user define data types that can only have specific predefined values
  // enum doesnt need a ;
  enum Breed{PUG, SHIBA_INU, ST_BERNARD} // you can now make objets of this type now

  // indexed help syou filter the logs to find the wanted data.
  event requestedCollectible(bytes32 indexed requestId);

  // the _VRFCoordinator is what is getting the random number
  // You are gonna need some LINK tokens to do anything with chainlink
  // for parameter inclue the _
  // Now you are gonna make it a public function
  constructor(address _VRFCoordinator, address _LinkToken, bytes32 _keyhash) public
  VRFConsumerBase(_VRFCoordinator, _LinkToken)
  ERC721("Doggies", "DOG")
  {
    // Initialized evyerthing in here
    // since you inherted

    keyHash = _keyhash;
    fee = 0.1 *10**18; // 0.1 LINK
    tokenCounter = 0;

  }

  // You can call this function whatever you want, it is just use to get called
  // userProvidedSeed --> number we input that the vrf gives us if its truely random

  // Storage vs Memory key word --> Memory --> temporary place to story data
  // Storage holds data between calls
  // memeory gets wipped out after trnasaction is done
  // memory is more liek temp tha will be changed later

  // Token URI


  function createCollectible(uint256 userProvidedSeed, string memory tokenURI)
  public returns (bytes32)
  {

    // remember the call randomness is async --> so it is gonna run 2 different request
    // the requestRandomness is a function call in VRFConsumerBase function that we inherted from
    // keyhash used to verify if number is truely random, fee is how much you pay in LINK
    bytes32 requestId = requestRandomness(keyHash, fee);
    // --> need to know its the same random number associated with the request
    // make sure when you check the random number of a request, it has to be the same
    // one each time for the request

    // so you will make a mapping at the top to make sure its right

    requestIdToSender[requestId] = msg.sender; // this is to make sure that random number
    // is associated with the right sneder of the request

    // now you will set the tokenId to sender
    requestIdToTokenURI[requestId] = tokenURI;

    // emit is an event
    // emit is the closest thing to console.log to check
    emit requestedCollectible(requestId); // for testing
  }



  // After the requestRandomness is run it will run this fulfillRandomness function. You will have
  // to override this each time you make a new contract because you are suppose to

  // run when you are done getting the random number, its different from the requestId
  function fulfillRandomness(bytes32 requestId, uint256 randomNumber) internal override {
    address dogOwner = requestIdToSender[requestId];
    string memory tokenURI = requestIdToTokenURI[requestId];

    // everytime you mint a new nft, you need to give a new a tokenid
    uint256 newItemId = tokenCounter;

    // This is an erc721 function
    _safeMint(dogOwner,newItemId); // --> this is where you mint the nft directly
    _setTokenURI(newItemId, tokenURI); // this is found even deeper in the smart contract

    // The way you can look at this is address --> itemId(tokenId) --> tokenURI

    // 0 = Pug --> this is idnexed
    Breed breed = Breed(randomNumber % 3); // this can be used to get different traits

    // address ==> itemId(tokenId) --> tokenURI
    // itemId --> breed
    // requestId --> itemId

    // the newitemid is saved in the erc721 contract
    tokenIdToBreed[newItemId] = breed;

    // for testing, be able to map tokenId to requestId

    requestIdToTokenId[requestId] = newItemId;
    tokenCounter = tokenCounter + 1;
  }


  // same deal but just calling it on its own now
  // So you wont know the breed until you minted
  // set that token id to the correct tokenuri
  function setTokenURI(uint256 tokenId, string memory _tokenURI) public {

    // this is like a if statement

    // _isApprovedOrOwner check if a sender is allow to manager that tokenid
    // is msgsender the owner of the tokenid
    require(
      _isApprovedOrOwner(_msgSender(), tokenId),
      "ERC721: transfer caller is not owner nor approved"
    );
    _setTokenURI(tokenId, _tokenURI);


  }

}
