// Libs imports
import express from 'express';
import http from 'http';
import cors from 'cors';
import * as commons from './models/commons';

//////////////////////
// Init Application //
//////////////////////
commons.setup();
//const logger = utils.getLogger('sample-internal-api');

//logger.info('Initializing Sample Internal API');

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
//router.setup(commons.config.root, app);
router.setup('/', app);

//const server = http.createServer(app).listen(commons.config.port, commons.config.host);
const server = http.createServer(app).listen(4001, '0.0.0.0');

//logger.info('BCS SL API Server started');
//logger.info('Listening at: [http://%s:%s%s]', commons.config.host, commons.config.port, commons.config.root);
//server.timeout = commons.config.timeout;
server.timeout = 240000;