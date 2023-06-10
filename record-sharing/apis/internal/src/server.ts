// Libs imports
import express from 'express';
import http from 'http';
import cors from 'cors';

//////////////////////
// Init Application //
//////////////////////

const app = express();

app.options('*', cors() as any);
app.use(cors());

// Support parsing of application/json type post data
app.use(express.json({ limit: '50mb' }));
// Support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({
	extended: false,
	limit: '50mb'
}));

import * as init from './init';
init.initVars();

//////////////////
// Start Server //
//////////////////

import * as router from './routes/acsRouter';
router.setup('/', app);

const server = http.createServer(app).listen(4001, '0.0.0.0');




server.timeout = 240000;