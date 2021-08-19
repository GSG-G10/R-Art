const { Pool } = require('pg');
require('env2')('./config.env');
// DATABASE_URL
let dbUrl = '';
const {
  DB_URL, DATABASE_URL, NODE_ENV, TEST_DB_URL,
} = process.env;
switch (NODE_ENV) {
  case 'production':
    dbUrl = DATABASE_URL;
    break;
  case 'development':
    dbUrl = DB_URL;
    break;
  case 'test':
    dbUrl = TEST_DB_URL;
    break;
  default:
    throw new Error('No Database is found !');
}
const options = {
  connectionString: dbUrl,
  ssl: {
    rejectUnauthorized: false,
  },

};
module.exports = new Pool(options);
