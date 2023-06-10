# Aurium - authorization scheme

# About this project

## Participants

- Hugo Bustamante
- Gabriel Bustamante

## Description

**This project** is intended to create an authorization scheme for users and their multiple files that they want to keep stored on an off-chain server, while encrypted and made sure that key information is stored in the blockchain. 

### The architecture of the scheme
![architecture](https://github.com/hugueitor/chainlink-hackaton-2023/assets/48810531/5722eb7e-9a6d-427a-b4e9-bad7ab80aab9)


## Overall scheme

### Owners of files can grant/revoke access to their files for users under different roles

**This project** portrays a form of granting or revoking access to certain files that a user (Owner) may have in their power. The Owner of certain files would have the following properties for their files:

- Privacy and security.
- Access control.
- Data sharing.
- Data integrity and Availability.

The following languages have been used for this project:

- Bash.
- Solidity.
- JavaScript (for Node.js).
- Json.

The environments used for guidance and testing the smart contract deployment:

- Truffle.
- Ganache.

### Procedure

A user will pass through the following steps in order to ensure a correct use of the application:
1. Users must be registered in the application to generate and store keys (both public and private). The user will need to determine which role they will have (be it an Owner, a writer or a reader of files).
2. The user identifies which file (or files) will be managed soon for sharing.
3. The user uploads the data to the off-chain storage.
4. The application encrypts the data sent to the off-chain storage.
5. The data is stored in the off-chain; successively, an address (location) is generated, as well as a key (record ID).
6. The application generates a ***hash*** value of the registered data.
7. The application stores the hash of the data and its location.
8. The data may be downloaded for use by an allowed user (may them be a writer or reader). For this, the data must be decrypted using the Owner's public key.



