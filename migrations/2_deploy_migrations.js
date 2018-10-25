var Addition = artifacts.require("./Addition.sol");

module.exports = function(deployer) {
    deployer.deploy(Addition);
};

