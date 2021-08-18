const express = require('express');
// eslint-disable-next-line import/extensions
const { getData, postData } = require('../dataBase/queries/index.js');

const router = express.Router();
router.get('/show', (req, res) => {
  getData()
    .then((result) => res.json(result))
    .catch((err) => err);
});
router.post('/addPost', (req, res) => {
  postData(req.body.artist_name, req.body.painting_name, req.body.image_url)
    .then(() => res.redirect('/'))
    .catch(() => res.status(500).json({ msg: 'Internal Server Error' }));
});
module.exports = router;
