// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

contract Transaction {
    mapping(address => uint256) balances;

    event Transfer(address buyer, address seller,uint value);



    function transfer(address payable _to) external payable returns (bool) {
        /* _to.transfer( msg.value); */
        _to.transfer(msg.value)
        /* _to.transfer(0.1 ether); */
        return true;
    }

}
