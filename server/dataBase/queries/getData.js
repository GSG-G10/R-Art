const connection = require('../config/connection');

const getData = () => {
  const sql = 'SElECT * FROM ARTIST INNER JOIN PAINTING ON (ARTIST.name=PAINTING.artist_name);';
  return connection.query(sql)
    .then((data) => data.rows)
    .catch((error) => error);
};
module.exports = getData;
