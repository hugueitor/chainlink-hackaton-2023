const PrivateKeyProvider = require("@truffle/hdwallet-provider");

// Ganache
const env_url    = process.env.AURIUM_NODE_URL
const env_pk     = process.env.AURIUM_PRIVATE_KEY
const url        = env_url
const privateKey = env_pk.substr(2)

console.log("truffle-config.js> Connecting to: ", url)
console.log("truffle-config.js> private key  : ", privateKey)

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
