const { Pool } = require('pg');
require('env2')('./config.env');
// DATABASE_URL
let dbUrl = '';
const { NODE_ENV, DB_URL, DATABASE_URL } = process.env;
// switch (NODE_ENV) {
//   case 'production':
//     dbUrl = DATABASE_URL;
//     break;
//   case 'development':
//     dbUrl = DB_URL;
//     break;
//   default:
//     throw new Error('No Database is found !');
// }
const options = {
  connectionString: DB_URL,
  ssl: false,

};
module.exports = new Pool(options);