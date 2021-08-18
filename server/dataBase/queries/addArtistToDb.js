const connection = require('../config/connection');

const addAristToDb = (name) => {
  const sql = {
    text: 'Insert Into Artist (name) VALUES ($1) RETURNING *;',
    values: [name],
  };
  return connection.query(sql);
};
module.exports = addAristToDb;
