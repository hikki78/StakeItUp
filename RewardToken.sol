// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RewardToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("RewardToken", "RWT") {
        _mint(msg.sender, initialSupply*10**18);
    }
    
}

//Example reward token used: 0xcff8f716947e44edc948d56c0db0e689bb4b83c1