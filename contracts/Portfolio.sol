pragma solidity 0.5.10;

contract Portfolio {
    // Model an Asset
    struct Asset {
        uint id;
        string name;
        uint numUnits;
    }

    // Store Assets
    // Fetch Asset
    mapping(uint => Asset) public candidates;
    // Store Assets Count
    uint public assetsCount;



}