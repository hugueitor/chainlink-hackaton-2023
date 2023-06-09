var Migrations = artifacts.require("Migrations");
//var Migrations = artifacts.require("./Migrations.sol");
//var Migrations = artifacts.require("/home/hbustamante/dev/truffle/record-sharing/contracts/Migrations.sol");

module.exports = function(deployer) {
    deployer.deploy(Migrations);
};
