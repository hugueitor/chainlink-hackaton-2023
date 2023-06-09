/**
 * @author Hugo A. Bustamante
 * @description Common functionality
 */

// Libs imports
//import { utils } from '@bcs/baas-common';
//import { auna } from '@bcs/baas-protos';
import path from 'path';

// Config Interface
export interface Config {
	host: string,
	port: number,
	timeout: number,
	root: string
}

// Global app config
export let config: Config;

/**
 * Set-up the common module
 * @param configPath 
 */
export const setup = (configPath?: string): Config => {
	if (!configPath) {
		configPath = path.join(__dirname, '../../config/config.yaml');
	}

	//const conf = utils.getConfig();
	//conf.file(configPath);
	//config = conf.get();

	return config;
}