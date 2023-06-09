var AccessControlService = artifacts.require("AccessControlService");

module.exports = function(deployer) {
    deployer.deploy(AccessControlService);
}