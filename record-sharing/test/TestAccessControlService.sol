// test/aclService.sol
// SPDX-License-Identifier: MIT
//pragma solidity >=0.4.22 <0.9.0;
pragma solidity ^0.7.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/AccessControlService.sol";

contract TestAccessControlService {
/*
  // The id of the pet that will be used for testing
  uint expectedPetId = 8;

  // The expected owner of adopted pet is this contract
  address expectedAdopter = address(this);


  // Testing the adopt() function
  function testUserCanAdoptPet() public {
    uint returnedId = adoption.adopt(expectedPetId);

    Assert.equal(returnedId, expectedPetId, "Adoption of the expected pet should match what is returned.");
  }

  // Testing retrieval of a single pet's owner
  function testGetAdopterAddressByPetId() public {
    address adopter = adoption.adopters(expectedPetId);

    Assert.equal(adopter, expectedAdopter, "Owner of the expected pet should be this contract");
  }

  // Testing retrieval of all pet owners
  function testGetAdopterAddressByPetIdInArray() public {
    // Store adopters in memory rather than contract's storage
    address[16] memory adopters = adoption.getAdopters();

    Assert.equal(adopters[expectedPetId], expectedAdopter, "Owner of the expected pet should be this contract");
  }
*/
  // The address of the AclService contract to be tested
  AccessControlService acs = AccessControlService(DeployedAddresses.AccessControlService());

  address owner = address(this);

  uint value = 0;
  uint expectedValue = 1;

  address account   = owner;
  uint8   createdBy = 13;
  bytes32 login     = 'hbustamante';
  bytes32 password  = 'password';
  bytes32 pke2      = '0x1234567890';
  uint8   user_id   = 255;


  function testCreateUser() public {
    bytes32 _login;
    bytes32 _password;
    bytes32 _pke2;

    acs.createUser(account, createdBy, login, password, pke2, user_id);

    (_login, _password, _pke2) = acs.auth(account);
    Assert.equal(_login,    login,    "login    different");
    Assert.equal(_password, password, "password different");
    Assert.equal(_pke2,     pke2,     "pke2     different");
  }

/*
  function testAddAccessControl() public {
    Assert.equal(value, expectedValue, "message 2");
  }

  function testGetAccessControl() public {
    Assert.equal(value, expectedValue, "message 3");
  }

  function testAuth() public {
    Assert.equal(value, expectedValue, "message 4");
  }

  function testGetAccessType() public {
    Assert.equal(value, expectedValue, "message 5");
  }

  function testUpdateAccessControl() public {
    Assert.equal(value, expectedValue, "message 6");
  }

  function testRemoveUser() public {
    Assert.equal(value, expectedValue, "message 7");
  }

  function testDeleteAccessControl() public {
    Assert.equal(value, expectedValue, "message 8");
  }

  function testCreateDocument() public {
    Assert.equal(value, expectedValue, "message 9");
  }
*/
}
