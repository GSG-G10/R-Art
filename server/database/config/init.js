const { join } = require('path');
const { readFileSync } = require('fs');
const connection = require('./connection');

const sql = readFileSync(join(__dirname, 'init.sql')).toString();
connection
  .query(sql)
  // eslint-disable-next-line no-console
  .then(() => console.log('db bulid sucess'))
  // eslint-disable-next-line no-console
  .catch(() => console.log('db bulid fails'));
