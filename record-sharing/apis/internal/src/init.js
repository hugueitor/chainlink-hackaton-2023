import { readFileSync } from 'fs'
var Web3 = require('web3')

export var web3

var contractData
export var vars = {
    account_from : {
        publicKey  : "0x735042aECCE49AE6FD556B82F8006Ce42C5eb3ac",
        privateKey : "0xcf6cf5f293452e3231e4fb683ba0f5003c8c5767e924ff9c8440e723923dcdf4",
    },
    besu_node : {
        url        : "http://192.168.8.133:7545"
    },
    contractAbi    : "",
    contractAccount: "0x735042aECCE49AE6FD556B82F8006Ce42C5eb3ac",
    contractAddress: "0xc7830Bc01A4A646D96554B02B3f50aC943350dFd",
    contractName   : "AclService",
};

export const initVars = async () => {
    let contract_data = ""

    try {
        contract_data = readFileSync('/home/hugo/dev/truffle/record-sharing/build/contracts/AccessControlService.json')
    } catch (err) {
        console.error(err)
        console.log('ERROR:', 'Archivo "AccessControlService.json" inexistente.')
        process.exit(2)
    }

    let contract_json = JSON.parse(contract_data)

    vars.contractAbi = contract_json.abi

    console.log('')

    console.log('public    : ', vars.account_from.publicKey)
    console.log('private   : ', vars.account_from.privateKey)
    console.log('besu-node : ', vars.besu_node.url)
    console.log('account   : ', vars.contractAccount)
    console.log('address   : ', vars.contractAddress)
    console.log('name      : ', vars.contractName)
 
    console.log('')

    web3 = new Web3(vars.besu_node.url);
}
