pragma solidity 0.8.11;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";


contract BasicERC721 is ERC721URIStorage, VRFConsumerBase {


  uint256 public tokenCounter;

  constructor(string memory name_, string memory symbol_ , address _VRFCoordinator, address _LinkToken, bytes32 _keyhash) public
  VRFConsumerBase(_VRFCoordinator, _LinkToken)
  ERC721(name_, symbol_)
  {
    // Initialized evyerthing in here
    // since you inherted

    tokenCounter = 0;

  }

  function viewTokenId() public view returns(uint256){
    return tokenCounter;
  }

  function createCollectible(string memory tokenURI)
  public returns (bytes32)
  {


  }

  function fulfillRandomness(bytes32 requestId, uint256 randomNumber) internal override {
    
  }





}
