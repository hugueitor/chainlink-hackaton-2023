# Aurium: an authorization scheme for users willing to share sensible data securely

# Participants

- Hugo Bustamante
- Gabriel Bustamante

# Description

This project is intended to create an authorization scheme for users and their multiple files (or data) that they would want to keep stored on an off-chain server, while encrypting it, and made sure that key information associated with that data is stored in the Ethereum blockchain. Thus, this project portrays a form of granting or revoking access to certain files that a user (Owner) may have in their power. The Owner of certain files would have the following properties for their files:

- Privacy and security.
- Access control.
- Data sharing.
- Data integrity and Availability.

# The architecture and interactions of the scheme
![architecture](https://github.com/hugueitor/chainlink-hackaton-2023/assets/48810531/5722eb7e-9a6d-427a-b4e9-bad7ab80aab9)

# What this project was built with

The following languages have been used for this project:

- Solidity.
- JavaScript (for Node.js).
- Json.

The environments used for guidance and testing the smart contract deployment:

- Truffle.
- Ganache.

# Overall scheme

A user will pass through the following steps in order to ensure a correct use of the application:
1. Users must be registered in the application to generate and store keys (both public and private). The user will need to determine which role they will have (be it an Owner, a writer or a reader of files).
2. The user identifies which file (or files) will be managed soon for sharing.
3. The user uploads the data to the off-chain storage.
4. The application encrypts the data sent to the off-chain storage.
5. The data is stored in the off-chain; successively, an address (location) is generated, as well as a key (record ID).
6. The application generates a ***hash*** value of the registered data.
7. The application stores the hash of the data and its location.
8. The data may be downloaded for use by an allowed user (may them be a writer or reader). For this, the data must be decrypted using the Owner's public key.

# The technical process 

1. Clone Github repository.

```bash

git clone https://github.com/hugueitor/chainlink-hackaton-2023

```

2. Start Ganache application.

3. Change to record-sharing directory.

```bash

cd record-sharing

```

4. Update variables 1-env.sh file with Ganache parameters.

- Edit file 1-env.sh and change the following environment variables.

```sh

AURIUM_PUBLIC_KEY=    <Public Key (1st Account)>
AURIUM_PRIVATE_KEY=   <Private Key (1st Account)>
AURIUM_NODE_URL=      <Node-RPC URL>

```

- Then, apply changes.

```bash

. ./1-env.sh

```

4. Install main Smart Contract in blockchain network.

```bash

./2-run-install-smart-contract.sh

```

5. From migration output get "Contract address" for "AccessControlService.sol" contract and 
update 1-env.sh with that value.

```sh

AURIUM_CONTRACT_ADDRESS=   <Contract address result of migration>

```

- Then, apply changes.

```bash

. ./1-env.sh

```

6. Run API for contract interaction.


```bash

./3-run-nodejs-api.sh

```

7. Start Postman for testing transactions.

8. Import collection file in Postman.

- FILE: record-sharing/postman/Chainlink-Hackaton-2023.postman_collection.json

9. Enjoy our API.
