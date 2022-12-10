// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./imports/ERC721A.sol";

contract ERC721AToken is ERC721A {
    constructor() ERC721A("ERC721AToken", "ERC721A") {}

    function userMintOne() public {
        _mint(msg.sender, 1);
    }
    
    function userMintTwo() public {
        _mint(msg.sender, 2);
    }

    function userMintThree() public {
        _mint(msg.sender, 3);
    }

    function userMintFour() public {
        _mint(msg.sender, 4);
    }

    function userMintFive() public {
        _mint(msg.sender, 5);
    }

    function userMintTen() public {
        _mint(msg.sender, 10);
    }

    function userMintTwenty() public {
        _mint(msg.sender, 20);
    }
}