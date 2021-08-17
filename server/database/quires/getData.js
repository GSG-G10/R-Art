const connection = require('../connection');

const getData = () => {
  const sql = 'SElECT * FROM ARTIST INNER JOIN PAINTING ON (ARTIST.ID=PAINTING.artist_id);';
  return connection.query(sql)
    .then((data) => data.rows)
    .catch((error) => error);
};

module.exports = getData;
