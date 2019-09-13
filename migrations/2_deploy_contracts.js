var Portfolio = artifacts.require("./Portfolio.sol");

module.exports = function(deployer) {
  deployer.deploy(Portfolio, '0x2096D0967bDD7A940D5B676bFC272a84C2AE1c9E', "Leonard Lin");
};