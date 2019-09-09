var Portfolio = artifacts.require("./Portfolio.sol");

module.exports = function(deployer) {
  deployer.deploy(Portfolio);
};