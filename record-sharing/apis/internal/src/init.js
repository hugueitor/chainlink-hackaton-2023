import { readFileSync } from 'fs'
var Web3 = require('web3')

export var web3

var contractData
export var vars = {
    account_from : {
        publicKey  : "0xC78c3BeA1e4fBBdAfBe5178A09EDD72ff2814a9d",
        privateKey : "0x03d1ac8de34cfc4688bb6dcf3d5c1346e6e3c386dbb581303c323338006a34c8",
    },
    besu_node : {
        url        : "http://192.168.8.133:7545"
    },
    contractAbi    : "",
    contractAccount: "0xC78c3BeA1e4fBBdAfBe5178A09EDD72ff2814a9d",
    contractAddress: "0xD6BA555Add4f6E809ff3B558a4F2c6eF55e20a1E",
    contractName   : "AclService",
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
