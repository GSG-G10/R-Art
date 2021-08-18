const connection = require('../config/connection');
const addArtist = require('./addArtist');
// eslint-disable-next-line no-unused-vars
const postData = (artistName, paintingName, imageUrl) => {
  addArtist(artistName);
  const sql = {
    text: `INSERT INTO Painting (artist_name,painting_name,image_url)
    VALUES ($1, $2, $3) RETURNING *`,
    values: [artistName, paintingName, imageUrl],
  };
  return connection.query(sql)
    .then((data) => data.rows)
    .catch((error) => error);
};

module.exports = postData;
