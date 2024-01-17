// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract SettingNumbers {
    uint256 private s_number;

    constructor(uint _number) {
       s_number = _number;
    }

    function setNumber(uint256 _number) public {
        s_number = _number;
    }

    function getNumber() external view returns(uint256){
        return s_number;
    }
}
