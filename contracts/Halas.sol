// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Halas is ERC20, Ownable {
    constructor() ERC20("Halas", "HAL") Ownable(msg.sender) {
        _mint(msg.sender, 1000000 * 1000000);
    }


    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
