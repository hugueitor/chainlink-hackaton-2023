//const PrivateKeyProvider = require("@truffle/hdwallet-provider");
//const PrivateKeyProvider = require("/usr/local/lib/node_modules/@truffle/hdwallet-provider");
const PrivateKeyProvider = require("/home/hugo/.nvm/versions/node/v18.16.0/lib/node_modules/@truffle/hdwallet-provider/");

// Ganache
const privateKey = "cf6cf5f293452e3231e4fb683ba0f5003c8c5767e924ff9c8440e723923dcdf4"

const host = "192.168.8.133"
const port = "7545"

const url = "http://" + host + ":" + port

console.log("truffle-config.js> Connecting to:", url)

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // for more about customizing your Truffle configuration!
    networks: {
        rs: {
            provider: () => new PrivateKeyProvider(privateKey, url),
            network_id: "*",
            //gas: "0x1ffffffffffffe",        // Gas sent with each transaction (default: ~6700000)
            //gas: "0x0",
            //gas: 0,
            //gasPrice: "0x0"                 // 20 gwei (in wei) (default: 100 gwei)
        }
    },
    compilers: {
        solc: {
//            version: "0.5.1"
//            version: "^0.8.0"
            version: "^0.7.0"
        }
    }    
};
