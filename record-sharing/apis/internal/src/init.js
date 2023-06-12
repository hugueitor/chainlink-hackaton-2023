import { readFileSync } from 'fs'
var Web3 = require('web3')

export var web3

var contractData
export var vars = {
    account_from : {
        publicKey  : process.env.AURIUM_PUBLIC_KEY,
        privateKey : process.env.AURIUM_PRIVATE_KEY,
    },
    besu_node : {
        url        : process.env.AURIUM_NODE_URL
    },
    contractAbi    : "",
    contractAccount: process.env.AURIUM_PUBLIC_KEY,
    contractAddress: process.env.AURIUM_CONTRACT_ADDRESS,
    contractName   : "AccessControlService",
};

export const initVars = async () => {
    let contract_data = ""

    try {
        contract_data = readFileSync('../../build/contracts/AccessControlService.json')
    } catch (err) {
        console.error(err)
        console.log('ERROR:', 'File "AccessControlService.json" not found.')
        process.exit(2)
    }

    let contract_json = JSON.parse(contract_data)

    vars.contractAbi = contract_json.abi

    console.log('')

    console.log('public    : ', vars.account_from.publicKey)
    console.log('private   : ', vars.account_from.privateKey)
    console.log('node-url  : ', vars.besu_node.url)
    console.log('account   : ', vars.contractAccount)
    console.log('address   : ', vars.contractAddress)
    console.log('name      : ', vars.contractName)
 
    console.log('')

    web3 = new Web3(vars.besu_node.url);
}
