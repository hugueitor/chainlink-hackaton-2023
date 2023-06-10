/**
 * @author Hugo A. Bustamante
 * @description Expressjs API router
 */

// Libs imports
import { Express, Request, Response, NextFunction, Router } from 'express';
import * as sampleController from '../controllers/acsController';

export const setup = (root: string, app: Express) => {

	const asyncMiddleware = (fn: Function) =>
		(req: Request, res: Response, next: NextFunction) => {
			console.log("----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
			console.log('asyncMiddleware> body  : ', req.body);
			console.log('asyncMiddleware> params: ', req.params);
			console.log('asyncMiddleware> query : ', req.query);
			Promise.resolve(fn(req, res, next))
				.catch(err => next(err));
		};

	const router = Router();

	router.get('/', (req, res, next) => {
		res.send('Access Control Service API');
	});

	router.get('/ping', (req, res, next) => {
		res.send('pong');
	});

	router.post('/echo',                      asyncMiddleware(sampleController.echo));

	/* Readers */
	router.get('/api/auth',                   asyncMiddleware(sampleController.auth));
	router.get('/api/getUser',                asyncMiddleware(sampleController.getUser));
	router.get('/api/getUserStruct',          asyncMiddleware(sampleController.getUserStruct));
	router.get('/api/getAccessControl',       asyncMiddleware(sampleController.getAccessControl));
	router.get('/api/getAccessControlStruct', asyncMiddleware(sampleController.getAccessControlStruct));
	router.get('/api/getAccessType',          asyncMiddleware(sampleController.getAccessType));
	router.get('/api/getDocumentStruct',      asyncMiddleware(sampleController.getDocumentStruct));

	/* Writers */
	router.post('/api/createUser',            asyncMiddleware(sampleController.createUser));
	router.post('/api/removeUser',            asyncMiddleware(sampleController.removeUser));
	router.post('/api/addAccessControl',      asyncMiddleware(sampleController.addAccessControl));
	router.post('/api/updateAccessControl',   asyncMiddleware(sampleController.updateAccessControl));
	router.post('/api/deleteAccessControl',   asyncMiddleware(sampleController.deleteAccessControl));
	router.post('/api/createDocument',        asyncMiddleware(sampleController.createDocument));

	router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
		console.error(err);
		res.status(500).json(err.message);
	});

	app.use(root, router);
}