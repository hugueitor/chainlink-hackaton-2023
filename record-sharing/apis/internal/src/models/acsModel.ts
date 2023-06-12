import * as init from '../init';

/* Readers */
export async function getFromContract(method: string, param1: string, param2: string) {
    console.log("getFromContract> START");

    const web3 = init.web3
    const contractAbi        = init.vars.contractAbi;
    const contractAccount    = init.vars.account_from.publicKey;
    const contractAddress    = init.vars.contractAddress;

    console.log("getFromContract> method         : ", method);
    console.log("getFromContract> param1         : ", param1);
    console.log("getFromContract> param2         : ", param2);
    console.log("getFromContract> web3.version   : ", web3.version);
    //console.log("getFromContract> contractAbi    : ", contractAbi);
    console.log("getFromContract> contractAccount: ", contractAccount);
    console.log("getFromContract> contractAddress: ", contractAddress);

    // Contract Call
    const contract = new web3.eth.Contract(contractAbi, contractAddress);

    const get = async () => {
        var data = null;
        console.log(`getFromContract> Making a call to contract at address '${contractAddress}'`);

        try {
            if (method === "auth") {
                let _account = param1;
                data = await contract.methods
                    .auth(_account)
                    .call({ from: contractAccount }
                );
            } else if (method === "getUser") {
                let _account = param1;
                data = await contract.methods
                    .getUser(_account)
                    .call({ from: contractAccount }
                );
            } else if (method === "getUserStruct") {
                let _account = param1;
                data = await contract.methods
                    .getUserStruct(_account)
                    .call({ from: contractAccount }
                );
            } else if (method === "getAccessControl") {
                let _ac_id = param1;
                data = await contract.methods
                    .getAccessControl(_ac_id)
                    .call({ from: contractAccount }
                );
            } else if (method === "getAccessControlStruct") {
                let _ac_id = param1;
                data = await contract.methods
                    .getAccessControlStruct(_ac_id)
                    .call({ from: contractAccount }
                );
            } else if (method === "getAccessType") {
                let _ac_id = param1;
                data = await contract.methods
                    .getAccessType(_ac_id)
                    .call({ from: contractAccount }
                );
            } else if (method === "getDocumentStruct") {
                let _document_id = param1;
                data = await contract.methods
                    .getDocumentStruct(_document_id)
                    .call({ from: contractAccount }
                );
            }
            console.log(`getFromContract> The current '${method}' stored is: '${data}'`);
            return data;
        } catch (err) {
            console.error("getFromContract> ERROR:\n", err);
            console.log("getFromContract> returning NULL");
            return null;
        }
    };
    return get();
}

/* Writers */
export async function putToContract(method: string, 
                                    param1: string, 
                                    param2: string, 
                                    param3: string, 
                                    param4: string, 
                                    param5: string, 
                                    param6: string) {
    console.log("putToContract> START");
    
    const web3 = init.web3
    const contractAbi        = init.vars.contractAbi;
    const contractAccount    = init.vars.account_from.publicKey;
    const contractPrivateKey = init.vars.account_from.privateKey;
    const contractAddress    = init.vars.contractAddress;

    console.log("putToContract> web3.version      : ", web3.version);
    //console.log("putToContract> contractAbi       : ", contractAbi);
    console.log("putToContract> contractAccount   : ", contractAccount);
    console.log("putToContract> contractprivateKey: ", contractPrivateKey);
    console.log("putToContract> contractAddress   : ", contractAddress);

    // Contract Tx
    const contract = new web3.eth.Contract(contractAbi);

    var encoded = "";

    console.log(`putToContract> Calling '${method}' ('${param1}', '${param2}', '${param3}', '${param4}', '${param5}', '${param6}') function in contract at address '${contractAddress}'`);

    if (method === "createUser") {
        let _account   = param1;
        let _createdBy = param2;
        let _login     = param3;
        let _password  = param4;
        let _pke2      = param5;
        let _user_id   = param6;
        encoded = contract.methods.createUser(_account, _createdBy, _login, _password, _pke2, _user_id).encodeABI();
    } else if (method === "removeUser") {
        let _account = param1;
        encoded = contract.methods.removeUser(_account).encodeABI();
    } else if (method === "addAccessControl") {
        let _ac_id              = param1;
        let _accessType         = param2;
        let _account            = param3;
        let _crypted_AES        = param4;
        let _document_id        = param5;
        let _document_signature = param6;
        encoded = contract.methods.addAccessControl(_ac_id, _accessType, _account, _crypted_AES, _document_id, _document_signature).encodeABI();
    } else if (method === "updateAccessControl") {
        let _ac_id              = param1;
        let _accessType         = param2;
        let _account            = param3;
        let _crypted_AES        = param4;
        let _document_id        = param5;
        let _document_signature = param6;
        encoded = contract.methods.updateAccessControl(_ac_id, _accessType, _account, _crypted_AES, _document_id, _document_signature).encodeABI();
    } else if (method === "deleteAccessControl") {
        let _ac_id = param1;
        encoded = contract.methods.deleteAccessControl(_ac_id).encodeABI();
    } else if (method === "createDocument") {
        let _owner       = param1;
        let _document_id = param2;
        let _signature   = param3;
        encoded = contract.methods.createDocument(_owner, _document_id, _signature).encodeABI();
    }

    console.log("encoded: ", encoded)        

    const transaction = async () => {
        try {
            const createTransaction = await web3.eth.accounts.signTransaction(
                {
                    from: contractAccount,
                    to: contractAddress,
                    data: encoded,
                    gas: '4700000'
                },
                contractPrivateKey
            );
            console.log("putToContract> createTransaction:\n", createTransaction);
    
            const createReceipt = await web3.eth.sendSignedTransaction(
                createTransaction.rawTransaction
            );
            console.log(`putToContract> Tx successfull with hash: '${createReceipt.transactionHash}'`);
            return createReceipt.transactionHash;
        } catch (err) {
            console.error("putToContract> ERROR:\n", err);
            console.log("putToContract> returning NULL");
            return null;
        }
    };
    return transaction();  
}