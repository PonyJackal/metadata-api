import knex from 'knex';
import config from './config/knex.config';
console.log("config",config[process.env.NODE_ENV! || 'dev'])
const db = knex(config[process.env.NODE_ENV! || 'dev']);

export default db;
