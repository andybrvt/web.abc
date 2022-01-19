pragma solidity 0.8.11;

import "./DaughterContract.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


// hex924821jd1=> child solidity class


contract ParentContract is  ERC721URIStorage {
  BasicNFT public childContract;
  mapping (String => uint256) private parentDict;



  constructor(string memory name_, string memory symbol_) public
  ERC721(name_, symbol_)
  {

  }



  function getAddressFromChildContract() public returns(uint256)public {
    childContract.grabAddress()
  }

}
