pragma solidity 0.5.10;

contract Portfolio {
    //portfolio variables
    address ownerAddress; //Ethereum address
    bytes32 ownerName;

    // Model an Asset
    struct Asset {
        uint id;
        string name;
        uint numUnits;
    }

    // Store Assets

    // Fetch list of Assets
    mapping(uint => Asset) public assets; //this is an key-value pair array that maps the id to the Asset structs

    // Store Assets Count
    //Need to store the asset/transaction count as there is no way to find the length of the mapping array or iterate through it
    uint public assetsCount;

    //constructors are optional in this version of Solidity
    //constructor function is not deployed to the blockchain
    constructor (address _ownerAddress, bytes32 _ownerName) public {
        ownerAddress = _ownerAddress;
        ownerName = _ownerName;
    }

    //Add Assets. underscore to indicate local variable
    //storage saves the name string to contract storage and it can persist between functions
    //memory is cheaper
    function addAsset (string memory _name, uint _numUnits) private {
        assetsCount++;
        assets[assetsCount] = Asset(assetsCount, _name, _numUnits);
    }
}