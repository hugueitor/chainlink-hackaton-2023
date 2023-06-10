// contracts/aclService.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;

contract AccessControlService {
    uint8 max_user_id;

    constructor () {
        max_user_id = 255;
    }

    function string2bytes32(string memory s) private pure returns (bytes32 b) {
        assembly {
        b := mload(add(s, 32))
        }
    }

    function string2uint8(string memory s) private pure returns (uint8 u) {
        bytes memory b = bytes(s);
        u = 0;
        for (uint i = 0; i < b.length; i++) {
            uint8 c = uint8(b[i]);
            if (c >= 48 && c <= 57) {
                u = u * 10 + (c - 48);
            }
        }
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

    function createUser(string memory account,
                        string memory createdBy,
                        string memory login,
                        string memory password,
                        string memory pke2,
                        string memory user_id) external {
        address _account   = address(uint160(bytes20(keccak256(abi.encodePacked(account))))); 
        uint8   _createdBy = string2uint8(createdBy);
        bytes32 _login     = string2bytes32(login);
        bytes32 _password  = string2bytes32(password);
        bytes32 _pke2      = string2bytes32(pke2);
        uint8   _user_id   = string2uint8(user_id);
        User memory _user = User({createdBy: _createdBy,
                                  login:     _login,
                                  password:  _password,
                                  pke2:      _pke2,
                                  user_id:   _user_id});
        usersList[_account] = _user;
    }

    function auth(string memory account) external view returns (bytes32 login, bytes32 password, bytes32 pke2) {
        address _account = address(uint160(bytes20(keccak256(abi.encodePacked(account))))); 
        return(usersList[_account].login,
               usersList[_account].password,
               usersList[_account].pke2);
    }

    function getUser(string memory account) external view returns (uint8 createdBy, bytes32 login, bytes32 password, bytes32 pke2, uint8 user_id) {
        address _account = address(uint160(bytes20(keccak256(abi.encodePacked(account)))));
        return(usersList[_account].createdBy,
               usersList[_account].login,
               usersList[_account].password,
               usersList[_account].pke2,
               usersList[_account].user_id);
    }

    function getUserStruct(string memory account) external view returns (User memory) {
        address _account = address(uint160(bytes20(keccak256(abi.encodePacked(account))))); 
        return(usersList[_account]);
    }

    function removeUser(string memory account) external {
        address _account = address(uint160(bytes20(keccak256(abi.encodePacked(account))))); 
        delete usersList[_account];
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

    function addAccessControl(string memory ac_id,
                              string memory accessType,
                              string memory account,
                              string memory crypted_AES,
                              string memory document_id,
                              string memory document_signature) external {
        uint8   _ac_id              = string2uint8(ac_id);
        bytes32 _accessType         = string2bytes32(accessType);
        address _account            = address(uint160(bytes20(keccak256(abi.encodePacked(account)))));   
        bytes32 _crypted_AES        = string2bytes32(crypted_AES);
        uint8   _document_id        = string2uint8(document_id);
        bytes32 _document_signature = string2bytes32(document_signature);                                    
        AccessControl memory _ac = AccessControl({accessType:         _accessType,
                                                  account:            _account,
                                                  crypted_AES:        _crypted_AES,
                                                  document_id:        _document_id,
                                                  document_signature: _document_signature});
        accessControlList[_ac_id] = _ac;
    }

    function getAccessControl(string memory ac_id) external view returns (bytes32 accessType,
                                                                  address account,
                                                                  bytes32 crypted_AES,
                                                                  uint8   document_id,
                                                                  bytes32 document_signature){
        uint8 _ac_id = string2uint8(ac_id);
        return (accessControlList[_ac_id].accessType,
                accessControlList[_ac_id].account,
                accessControlList[_ac_id].crypted_AES,
                accessControlList[_ac_id].document_id,
                accessControlList[_ac_id].document_signature);
    }

    function getAccessControlStruct(string memory ac_id) external view returns (AccessControl memory){
        uint8 _ac_id = string2uint8(ac_id);
        return (accessControlList[_ac_id]);
    }

    function getAccessType(string memory ac_id) external view returns (bytes32 accessType) {
        uint8 _ac_id = string2uint8(ac_id);
        return (accessControlList[_ac_id].accessType);
    }

    function updateAccessControl(string memory ac_id,
                                 string memory accessType,
                                 string memory account,
                                 string memory crypted_AES,
                                 string memory document_id,
                                 string memory document_signature) external {
        uint8   _ac_id              = string2uint8(ac_id);
        bytes32 _accessType         = string2bytes32(accessType);
        address _account            = address(uint160(bytes20(keccak256(abi.encodePacked(account)))));   
        bytes32 _crypted_AES        = string2bytes32(crypted_AES);
        uint8   _document_id        = string2uint8(document_id);
        bytes32 _document_signature = string2bytes32(document_signature);                                    
        AccessControl memory _ac = AccessControl({accessType:         _accessType,
                                                  account:            _account,
                                                  crypted_AES:        _crypted_AES,
                                                  document_id:        _document_id,
                                                  document_signature: _document_signature});
        accessControlList[_ac_id] = _ac;
    }

    function deleteAccessControl(string memory ac_id) external {
        uint8 _ac_id = string2uint8(ac_id);
        delete accessControlList[_ac_id];
    }

    // Document
    struct Document {
        address owner;
        uint8   document_id;
        bytes32 signature;
    }
    mapping(uint8 => Document) private sharedDocumentsList;

    function createDocument(string memory owner, string memory document_id, string memory signature) external {
        address _owner       = address(uint160(bytes20(keccak256(abi.encodePacked(owner)))));   
        uint8   _document_id = string2uint8(document_id);
        bytes32 _signature   = string2bytes32(signature);
        Document memory _document = Document({owner:       _owner, 
                                              document_id: _document_id, 
                                              signature:   _signature});
        sharedDocumentsList[_document_id] = _document;
    }

    function getDocumentStruct(string memory document_id) external view returns (Document memory){
        uint8 _document_id = string2uint8(document_id);
        return (sharedDocumentsList[_document_id]);
    }
}