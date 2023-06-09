// contracts/aclService.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;

contract AccessControlService {
    uint8 max_user_id;

    constructor () {
        max_user_id = 255;
    }

    // Users
    struct User {
        uint8   createdBy;
        bytes32 login;
        bytes32 password;
        bytes32 pke2;
        uint8   user_id;
    }
    mapping(address => User) private usersList;

    function createUser(address account,
                        uint8   createdBy,
                        bytes32 login,
                        bytes32 password,
                        bytes32 pke2,
                        uint8   user_id) external {
        User memory _user = User({createdBy: createdBy,
                                  login:     login,
                                  password:  password,
                                  pke2:      pke2,
                                  user_id:   user_id});
        usersList[account] = _user;
    }

    function auth(address account) external view returns (bytes32 login, bytes32 password, bytes32 pke2) {
        return(usersList[account].login,
               usersList[account].password,
               usersList[account].pke2);
    }

    function getUser(address account) external view returns (uint8 createdBy, bytes32 login, bytes32 password, bytes32 pke2, uint8 user_id) {
        return(usersList[account].createdBy,
               usersList[account].login,
               usersList[account].password,
               usersList[account].pke2,
               usersList[account].user_id);
    }

    function getUserStruct(address account) external view returns (User memory) {
        return(usersList[account]);
    }

    function removeUser(address account) external {
        delete usersList[account];
    }

    // AccessControl
    struct AccessControl {
        bytes32 accessType;
        address account;
        bytes32 crypted_AES;
        uint8   document_id;
        bytes32 document_signature;
    }
    mapping(uint8 => AccessControl) private accessControlList;

    function addAccessControl(uint8   ac_id,
                              bytes32 accessType,
                              address account,
                              bytes32 crypted_AES,
                              uint8   document_id,
                              bytes32 document_signature) external {
        AccessControl memory _ac = AccessControl({accessType:         accessType,
                                                  account:            account,
                                                  crypted_AES:        crypted_AES,
                                                  document_id:        document_id,
                                                  document_signature: document_signature});
        accessControlList[ac_id] = _ac;
    }

    function getAccessControl(uint8 ac_id) external view returns (bytes32 accessType,
                                                                  address account,
                                                                  bytes32 crypted_AES,
                                                                  uint8   document_id,
                                                                  bytes32 document_signature){
        return (accessControlList[ac_id].accessType,
                accessControlList[ac_id].account,
                accessControlList[ac_id].crypted_AES,
                accessControlList[ac_id].document_id,
                accessControlList[ac_id].document_signature);
    }

    function getAccessControlStruct(uint8 ac_id) external view returns (AccessControl memory){
        return (accessControlList[ac_id]);
    }

    function getAccessType(uint8 ac_id) external view returns (bytes32 accessType) {
        return (accessControlList[ac_id].accessType);
    }

    function updateAccessControl(uint8   ac_id,
                              bytes32 accessType,
                              address account,
                              bytes32 crypted_AES,
                              uint8   document_id,
                              bytes32 document_signature) external {
        AccessControl memory _ac = AccessControl({accessType:         accessType,
                                                  account:            account,
                                                  crypted_AES:        crypted_AES,
                                                  document_id:        document_id,
                                                  document_signature: document_signature});
        accessControlList[ac_id] = _ac;
    }

    function deleteAccessControl(uint8 ac_id) external {
        delete accessControlList[ac_id];
    }

    // Document
    struct Document {
        address owner;
        uint8   document_id;
        bytes32 signature;
    }
    mapping(uint8 => Document) private sharedDocumentsList;

    function createDocument(address owner, uint8 document_id, bytes32 signature) external {
        Document memory _document = Document({owner:       owner, 
                                              document_id: document_id, 
                                              signature:   signature});
        sharedDocumentsList[document_id] = _document;
    }

    function getDocumentStruct(uint8 document_id) external view returns (Document memory){
        return (sharedDocumentsList[document_id]);
    }
}