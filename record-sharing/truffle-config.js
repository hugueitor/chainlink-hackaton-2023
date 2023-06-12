const PrivateKeyProvider = require("@truffle/hdwallet-provider");

// Ganache
const privateKey = process.env.AURIUM_PRIVATE_KEY
const url  = process.env.AURIUM_NODE_URL

console.log("truffle-config.js> Connecting to:", url)

module.exports = {
    networks: {
        rs: {
            provider: () => new PrivateKeyProvider(privateKey, url),
            network_id: "*"        }
    },
    compilers: {
        solc: {
            version: "^0.7.0"
        }
    }    
};