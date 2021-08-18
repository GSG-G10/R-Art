const connection = require('../config/connection');

const checkArtist = (name) => {
  const sql = {
    text: 'SElECT name FROM ARTIST WHERE name=$1;',
    values: [name],
  };
  return connection.query(sql);
};

module.exports = checkArtist;
