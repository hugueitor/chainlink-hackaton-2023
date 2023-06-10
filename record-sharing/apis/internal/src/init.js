import { readFileSync } from 'fs'
var Web3 = require('web3')

export var web3

var contractData
export var vars = {
    account_from : {
        publicKey  : "0x64748A0805Fe8A231a224bF206ad2726c6542A26",
        privateKey : "0xdd021861c3d7fa2c42d65f00ecb02ed7784359d9768b55b3eb09b7a394b5e3a7",
    },
    besu_node : {
        url        : "http://192.168.8.133:7545"
    },
    contractAbi    : "",
    contractAccount: "0x64748A0805Fe8A231a224bF206ad2726c6542A26",
    contractAddress: "0xabD841b2ac331C19b68C6a9b02a22F5b297a7744",
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
