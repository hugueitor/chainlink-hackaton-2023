const PrivateKeyProvider = require("@truffle/hdwallet-provider");
//const PrivateKeyProvider = require("/usr/local/lib/node_modules/@truffle/hdwallet-provider");
//const PrivateKeyProvider = require("/home/hugo/.nvm/versions/node/v18.16.0/lib/node_modules/@truffle/hdwallet-provider/");

// Ganache
const privateKey = "dd021861c3d7fa2c42d65f00ecb02ed7784359d9768b55b3eb09b7a394b5e3a7"

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
            version: "^0.7.0"
        }
    }    
};
