/**
 * @author Hugo A. Bustamante
 * @description Sample Router controller
 */

import { Request, Response } from 'express';
import * as sm from '../models/acsModel';

export const echo = (req: Request, res: Response) => {
	const msg = req.body.message;
	return res.json({ message: msg });
}

/* Readers */

// replace any for string
export const auth = async (req: Request, res: Response) => {
	console.log(req.body);
	const _account: any = req.query.account;
	const result = await sm.getFromContract("auth", _account, "");
	return res.json(result);
}

export const getUser = async (req: Request, res: Response) => {
	console.log(req.body);
	const _account: any = req.query.account;
	const result = await sm.getFromContract("getUser", _account, "");
	return res.json(result);
}

export const getUserStruct = async (req: Request, res: Response) => {
	console.log(req.body);
	const _account: any = req.query.account;
	const result = await sm.getFromContract("getUserStruct", _account, "");
	return res.json(result);
}

export const getAccessControl = async (req: Request, res: Response) => {
	console.log(req.body);
	const _ac_id: any = req.query.ac_id
	const result = await sm.getFromContract("getAccessControl", _ac_id, "");
	return res.json(result);
}
	
export const getAccessControlStruct = async (req: Request, res: Response) => {
	console.log(req.body);
	const _ac_id: any = req.query.ac_id
	const result = await sm.getFromContract("getAccessControlStruct", _ac_id, "");
	return res.json(result);
}

export const getAccessType = async (req: Request, res: Response) => {
	console.log(req.body);
	const _ac_id: any = req.query.ac_id	
	const result = await sm.getFromContract("getAccessType", _ac_id, "");
	return res.json(result);
}

export const getDocumentStruct = async (req: Request, res: Response) => {
	console.log(req.body);
	const _document_id: any = req.query.document_id	
	const result = await sm.getFromContract("getDocumentStruct", _document_id, "");
	return res.json(result);
}

/* Writers */
export const createUser = async (req: Request, res: Response) => {
	console.log(req.body);
	const _account:   string = req.body.account;	
	const _createdBy: string = req.body.createdBy;	
	const _login:     string = req.body.login;	
	const _password:  string = req.body.password;	
	const _pke2:      string = req.body.pke2;	
	const _user_id:   string = req.body.user_id;	
	const result = await sm.putToContract("createUser", _account, _createdBy, _login, _password, _pke2, _user_id);
	return res.json(result);
}

export const removeUser = async (req: Request, res: Response) => {
	console.log(req.body);
	const _account: string = req.body.account;	
	const result = await sm.putToContract("removeUser", _account, "", "", "", "", "");
	return res.json(result);
}
	
export const addAccessControl = async (req: Request, res: Response) => {
	console.log(req.body);
	const _ac_id:              string = req.body.ac_id;
	const _accessType:         string = req.body.accessType;
	const _account:            string = req.body.account;
	const _crypted_AES:        string = req.body.crypted_AES;
	const _document_id:        string = req.body.document_id;
	const _document_signature: string = req.body.document_signature;
	const result = await sm.putToContract("addAccessControl", _ac_id, _accessType, _account, _crypted_AES, _document_id, _document_signature);
	return res.json(result);
}

export const updateAccessControl = async (req: Request, res: Response) => {
	console.log(req.body);
	const _ac_id:              string = req.body.ac_id;
	const _accessType:         string = req.body.accessType;
	const _account:            string = req.body.account;
	const _crypted_AES:        string = req.body.crypted_AES;
	const _document_id:        string = req.body.document_id;
	const _document_signature: string = req.body.document_signature;	
	const result = await sm.putToContract("updateAccessControl",  _ac_id, _accessType, _account, _crypted_AES, _document_id, _document_signature);
	return res.json(result);
}

export const deleteAccessControl = async (req: Request, res: Response) => {
	console.log(req.body);
	const _ac_id: string = req.body.ac_id;
	const result = await sm.putToContract("deleteAccessControl", _ac_id, "", "", "", "", "");
	return res.json(result);
}

export const createDocument = async (req: Request, res: Response) => {
	console.log(req.body);
	const _owner:       string = req.body.owner;
	const _document_id: string = req.body.document_id;
	const _signature:   string = req.body.signature;
	const result = await sm.putToContract("createDocument", _owner, _document_id, _signature, "", "", "");
	return res.json(result);
}