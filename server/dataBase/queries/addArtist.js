const checkArtist = require('./check');
const addAristToDb = require('./addArtistToDb');

const addArtist = (name) => {
  checkArtist(name)
    .then((data) => data.rows.length)
    .then((result) => {
      if (result === 0) addAristToDb(name);
    })
    .catch((error) => error);
};
module.exports = addArtist;
